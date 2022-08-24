import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°F`;
  }

  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();

     if (hour > 11) {
       return (
         <div>
           {hour} PM
         </div>
       );
     } else {
       return (
         <div>
          {hour} AM
         </div>
       );
     }
  }

  return (
    <div>
      <div className="WeatherForecast-hour mb-2">{hour()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={48} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherHourlyForecast-temperature">
          {temperature()}
        </span>
      </div>
    </div>
  );
}
