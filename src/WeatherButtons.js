import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherDailyForecast from "./WeatherDailyForecast";
import WeatherHourlyForecast from "./WeatherHourlyForecast";

import "./WeatherButtons.css";

export default function WeatherButtons(props) {
  const [info, setInfo] = useState("hourly");

  function showHourly(event) {
    event.preventDefault();
    setInfo("hourly");
  }
  function hourlyForecast() {
    return <WeatherHourlyForecast coords={props.data.coords} />;
  }

  function showDaily(event) {
    event.preventDefault();
    setInfo("daily");
  }
  function dailyForecast() {
    return <WeatherDailyForecast coords={props.data.coords} />;
  }

  function showDetails(event) {
    event.preventDefault();
    setInfo("details");
  }

  function weatherDetails() {
    return (
      <WeatherDetails
        wind={props.data.wind}
        humidity={props.data.humidity}
        feelsLike={props.data.feelsLike}
        tempMax={props.data.tempMax}
        tempMin={props.data.tempMin}
      />
    );
  }

  if (info === "hourly") {
    return (
      <div className="WeatherButtons">
        <div className="buttons">
          <span className="hourly">
            <a className="button-link-active" href="/"> Hourly</a>
          </span>
          <span className="daily">
            <a href="/" onClick={showDaily}>
              Daily
            </a>
          </span>
          <span className="details">
            <a href="/" onClick={showDetails}>
              Details
            </a>
          </span>
        </div>
        <hr />
        <div className="info">{hourlyForecast()}</div>
      </div>
    );
  }
  if (info === "daily") {
    return (
      <div className="WeatherButtons">
        <div className="buttons">
          <span className="hourly">
            <a href="/" onClick={showHourly}>
              Hourly
            </a>
          </span>
          <span className="daily">
            <a className="button-link-active" href="/">Daily</a>
          </span>
          <span className="Details">
            <a href="/" onClick={showDetails}>Details
            </a>
          </span>
        </div>
        <hr />
        <div className="info">{dailyForecast()}</div>
      </div>
    );
  }
  if (info === "details") {
    return (
      <div className="WeatherButtons">
        <div className="buttons">
          <span className="hourly">
            <a href="/" onClick={showHourly}>
              Hourly
            </a>
          </span>
          <span className="daily">
            <a href="/" onClick={showDaily}>
              Daily
            </a>
          </span>
          <span className="Details">
            <a className="button-link-active" href="/">Details</a>
          </span>
        </div>
        <hr />
        <div className="info">{weatherDetails()}</div>
      </div>
    );
  } else {
    return null;
  }
}

