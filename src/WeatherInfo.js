import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
          </h2>
        </div>
        <div className="col">
          <div className="temperature-container text-center">
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="weather-icon-descripton">
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <div className="weather-description text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
