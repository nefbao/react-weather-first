import React from "react";

export default function Current({ data }) {
  console.log(data);
  // Set Icon --------------------------------------------
  let src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  // Set Current Day -------------------------------------
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[now.getDay()];
  // Set Current Time -----------------------------------
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let currentTime = "";
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    currentTime = `0${hour}:${minutes}`;
  } else {
    currentTime = `${hour}:${minutes}`;
  }

  return (
    <div className="Current">
      <h2>
        <img src={src} alt="Weather Icon" />
      </h2>
      <div className="currentData">
        {Math.round(data.main.temp)} <span className="degree">℃|℉</span>
        <div className="currentDay">{currentDay}</div>
        <div className="currentTime">{currentTime}</div>
      </div>
      <div className="CurrentDetails">
        <div className="currentDescription">{data.weather[0].description}</div>
        <div className="currentWind">Wind Speed: {data.wind.speed} km/h</div>
        <div className="currentHumidity">Humidity: {data.main.humidity}%</div>
      </div>
    </div>
  );
}
