import React, { useState } from "react";
import Current from "./Current";
import axios from "axios";

export default function Form() {
    let [city, setCity]=useState("Mashhad");
    let [temperature, setTemperature] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [description, setDescription] = useState("");
    let [wind, setWind] = useState(null);
    let [icon, setIcon] = useState("");
    
    function setDetails(response){
        
        setTemperature(response.data.main.temp);
        setHumidity(Math.round(response.data.main.humidity));
        setDescription(response.data.weather[0].description);
        setWind(response.data.wind.speed);
        setIcon(response.data.weather[0].icon);
        console.log(temperature);
        
    }
    function updateInfo(event){
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d9a58b41020207ced9d1a03a3fe8817&units=metric`;
        axios.get(url).then(setDetails);

    }
    function updateCity(event){
        setCity(event.target.value)
        
        setTemperature(null);
    }

    return (
        <div className="Form">
        <form className="searchForm" onSubmit={updateInfo}>
            <input
            className="searchInput"
            type="search"
            placeholder="Type a city name"
            aria-label="Search"
            onChange={updateCity}
            />
            <button>
            Search
            </button>
        </form>
        <Current city={city} temperature={temperature} humidity={humidity} description={description} wind={wind} icon={icon} />
        </div>
    );
    
}