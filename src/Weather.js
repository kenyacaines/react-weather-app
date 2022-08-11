import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Wednesday, August 11",
      imgUrl: `http://openweathermap.og/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      feelsLike: Math.round(response.data.main.feels_like),
      uvIndex: 10,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row justify-content-center">
            <div className="col-4">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Enter a city..."
                autoFocus={false}
                autoComplete="off"
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
        <div className="weather-overview">
          <div className="location">
            <h1>{weatherData.city}</h1>
            <h3>{weatherData.date}</h3>
          </div>
          <div>
            <img
              className="text-capitalize"
              src={weatherData.imgUrl}
              alt={weatherData.description}
            />
          </div>
          <div>
            <h2 className="text-capitalize">{weatherData.description}</h2>
          </div>
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">°F</span>
          <div className="weather-details">
            <div className="row justify-content-center">
              <div className="col-3 with-border">
                <i className="fa-solid fa-wind" />
                <span className="full-description"> Wind Speed</span>
                <div>{weatherData.wind} mph</div>
              </div>
              <div className="col-3">
                <i className="fa-solid fa-temperature-high" />
                <span className="full-description"> Feels Like</span>
                <div>{weatherData.feelsLike}°F</div>
              </div>
              <div className="row justify-content-center">
                <div className="col-3 with-border">
                  <i className="fa-solid fa-droplet" />
                  <span className="full-description"> Humidity</span>
                  <div>{weatherData.humidity}%</div>
                </div>
                <div className="col-3">
                  <i className="fa-solid fa-sun" />
                  <span className="full-description"> UV Index</span>
                  <div>{weatherData.uvIndex}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fab4debfd3c1e84b570ae548b866f1b0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
