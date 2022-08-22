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
    return <WeatherDetails wind={props.wind} humidity={props.humidity} />;
  }

  if (info === "hourly") {
    return (
      <div className="WeatherButtons">
        <div className="buttons">
          <span className="hourly">
            <a href="/"> Hourly</a>
          </span>
          <span className="daily">
            <a href="/" onClick={showDaily}>
              {" "}
              Daily
            </a>
          </span>
          <span className="Details">
            <a href="/" onClick={showDetails}>
              {" "}
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
              {" "}
              Hourly
            </a>
          </span>
          <span className="daily">
            <a href="/"> Daily</a>
          </span>
          <span className="Details">
            <a href="/" onClick={showDetails}>
              {" "}
              Details
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
              {" "}
              Hourly
            </a>
          </span>
          <span className="daily">
            <a href="/" onClick={showDaily}>
              {" "}
              Daily
            </a>
          </span>
          <span className="Details">
            <a href="/"> Details</a>
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

//make default hourly forecast
// on click for each return the information or the component
//on click set one of the buttons to active which will return the information from the component
// return the information underneath the hr so you will need to have a use state and set that use state to what you are returning.
