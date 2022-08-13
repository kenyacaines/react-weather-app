import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
  const [temp, setTemp] = useState("celsius");

  function showImperial(event) {
    event.preventDefault();
    setTemp("fahrenheit");
  }

  function showMetric(event) {
    event.preventDefault();
    setTemp("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (temp === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
        </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showMetric}>
            °C
          </a>{" "}
          | °F
        </span>
        </div>
    );
  }
}
