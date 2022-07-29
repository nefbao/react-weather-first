import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p className="link"><a href="https://github.com/nefbao/react-weather-first">Open-source code</a>, by <a href="https://github.com/nefbao">Nahid Norouzi</a></p>
    </div>
  );
}
