import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      imgUrl: `http://openweathermap.og/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      feelsLike: Math.round(response.data.main.feels_like),
      uvIndex: 10,
    });
  }
  function search(){
  const apiKey = "fab4debfd3c1e84b570ae548b866f1b0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-4">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Enter a city..."
                autoFocus={false}
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <button className="btn btn shadow-sm" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <span className="location-buton">
                <button className="btn btn shadow-sm" type="submit">
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </span>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  return "Loading...";
  }
}
