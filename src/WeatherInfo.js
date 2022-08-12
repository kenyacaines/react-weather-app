import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-overview">
        <div className="location">
          <h1>{props.data.city}</h1>
          <h3>
            <FormattedDate date={props.data.date} />
          </h3>
        </div>
        <WeatherIcon code={props.data.icon} />
        <div>
          <h2 className="text-capitalize">{props.data.description}</h2>
        </div>
        <WeatherTemperature fahrenheit={props.data.temperature} />
        <div className="weather-details">
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <i className="fa-solid fa-wind" />
              <span className="full-description"> Wind Speed</span>
              <div>{props.data.wind} mph</div>
            </div>
            <div className="col-3">
              <i className="fa-solid fa-temperature-high" />
              <span className="full-description"> Feels Like</span>
              <div>{props.data.feelsLike}°F</div>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 with-border">
                <i className="fa-solid fa-droplet" />
                <span className="full-description"> Humidity</span>
                <div>{props.data.humidity}%</div>
              </div>
              <div className="col-3">
                <i className="fa-solid fa-sun" />
                <span className="full-description"> UV Index</span>
                <div>{props.data.uvIndex}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
