import React from "react";
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
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <div className="weather-details-container">
        <div className="row justify-content-center">
          <div className="col-3 with-border">
            <div className="detail-title text-center">
              <i className="fa-solid fa-wind" />
              <span> Wind Speed</span>
            </div>
            <div className="detail-value text-center">{props.data.wind} mph</div>
          </div>
          <div className="col-3">
            <div className="detail-title text-center">
              <i className="fa-solid fa-temperature-high" />
              <span> Feels Like</span>
            </div>
            <div className="detail-value text-center">{props.data.feelsLike}°F</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <div className="detail-title text-center">
                <i className="fa-solid fa-droplet" />
                <span> Humidity</span>
              </div>
              <div className="detail-value text-center">{props.data.humidity}%</div>
            </div>
            <div className="col-3">
              <div className="detail-title text-center">
                <i className="fa-solid fa-sun" />
                <span> UV Index</span>
              </div>
              <div className="detail-value text-center">{props.data.uvIndex}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
