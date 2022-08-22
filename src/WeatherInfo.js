import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col text-start">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
          <div className="weather-icon-descripton">
            <div>
              <WeatherIcon code={props.data.icon} size={76} />
            </div>
            <div className="weather-description text-capitalize">
              {props.data.description}
            </div>
          </div>
        </div>
        <div className="col text-end">
          <div className="temperature-container">
            <div className="temperature">
              {props.data.temperature}
              <span className="unit">°</span>
            </div>
            <div className="feelsLike">
              <span>{" "}Feels Like:{" "}</span>
              <span>{props.data.feelsLike}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
