import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <div>
              <WeatherIcon code={props.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature
                celsius={props.data.temperature}
                windSpeedKm={props.data.wind}
                feelsLikeCelsius={props.data.feelsLike}
                icon={props.data.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
