import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastHour from "./WeatherForecastHour";

import "./WeatherForecastHourly.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.hourly);
    setLoaded(true);
  }

  function load() {
    let apiKey = "fab4debfd3c1e84b570ae548b866f1b0";
    let lon = props.coords.lon;
    let lat = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherHourlyForecast">
        <div className="row">
          {forecast.map(function (hourlyForecast, index) {
            if (index < 6) {
              return (
                <div className="col hourly-weather-forecast" key={index}>
                  <WeatherForecastHour data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
