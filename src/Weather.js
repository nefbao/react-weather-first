import React, { useState, useEffect } from "react";
import axios from "axios";
import Current from "./Current";

export default function ReadAPI() {
  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=mashhad&appid=6d9a58b41020207ced9d1a03a3fe8817&units=metric`;
    axios.get(url).then(setDetails);
  }, []);

  let [city, setCity] = useState("Mashhad");
  let [dispalyedCity, setDisplayedCity] = useState("");
  let [dataset, setData] = useState({});

  function showTemp(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d9a58b41020207ced9d1a03a3fe8817&units=metric`;
    axios.get(url).then(setDetails);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function setDetails(response) {
    setDisplayedCity("");
    setDisplayedCity(response.data.name);
    setData(response.data);
  }
  if (dispalyedCity !== "") {
    return (
      <div className="Weather">
        <form onSubmit={showTemp}>
          <input type="search" className="textBox" onChange={changeCity} />
          <input type="submit" className="button" value="Search" />
        </form>
        <h1>{dispalyedCity}</h1>
        <div className="firstRow">
          <Current data={dataset} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={showTemp}>
          <input type="search" className="textBox" onChange={changeCity} />
          <input type="submit" className="button" value="Search" />
        </form>
      </div>
    );
  }
}
