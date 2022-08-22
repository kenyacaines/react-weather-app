import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°`;
  }

  function hour() {
    let hour = props.date.getHour();
    if (hour < 10) {
      hour = `0${hour}`;
    }
  }

  return (
    <div>
      <div className="WeatherForecast-day">{hour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherHourlyForecast-temperature">
          {temperature()}
        </span>
      </div>
    </div>
  );
}
