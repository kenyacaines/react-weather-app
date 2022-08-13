import React, { useState } from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props) {
  const [temp, setTemp] = useState("celsius");
  const [windSpeed, setWindSpeed] = useState("windSpeedkm");
  const [feelsLike, setFeelsLike] = useState("feelsLikeCelsius");

  function showImperial(event) {
    event.preventDefault();
    setTemp("fahrenheit");
    setWindSpeed("windSpeedMph");
    setFeelsLike("feelsLikeFahrenheit");
  }

  function showMetric(event) {
    event.preventDefault();
    setTemp("celsius");
    setWindSpeed("windSpeedKm");
    setFeelsLike("feelsLikeCelsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function windSpeedMph() {
    return props.windSpeedKm / 1.609;
  }

  function feelsLikeFahrenheit() {
    return (props.feelsLikeCelsius * 9) / 5 + 32;
  }

  if (temp === "celsius" && windSpeed==="windSpeedkm" && feelsLike==="feelsLikeCelsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
        <div className="weather-details-container">
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <div className="detail-title text-center">
                <i className="fa-solid fa-wind" />
                <span> Wind Speed</span>
              </div>
              <div className="detail-value text-center">
                {props.windSpeedKm} km/h
              </div>
            </div>
            <div className="col-3">
              <div className="detail-title text-center">
                <i className="fa-solid fa-temperature-high" />
                <span> Feels Like</span>
              </div>
              <div className="detail-value text-center">
                {Math.round(props.feelsLikeCelsius)}°C
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 with-border">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-droplet" />
                  <span> Humidity</span>
                </div>
                <div className="detail-value text-center">
                  {props.humidity}%
                </div>
              </div>
              <div className="col-3">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-sun" />
                  <span> UV Index</span>
                </div>
                <div className="detail-value text-center">{props.uvIndex}</div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="weather-details-container">
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <div className="detail-title text-center">
                <i className="fa-solid fa-wind" />
                <span> Wind Speed</span>
              </div>
              <div className="detail-value text-center">
                {Math.round(windSpeedMph())} mph
              </div>
            </div>
            <div className="col-3">
              <div className="detail-title text-center">
                <i className="fa-solid fa-temperature-high" />
                <span> Feels Like</span>
              </div>
              <div className="detail-value text-center">
                {Math.round(feelsLikeFahrenheit())}°F
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 with-border">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-droplet" />
                  <span> Humidity</span>
                </div>
                <div className="detail-value text-center">
                  {props.humidity}%
                </div>
              </div>
              <div className="col-3">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-sun" />
                  <span> UV Index</span>
                </div>
                <div className="detail-value text-center">
                  {props.uvIndex}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
