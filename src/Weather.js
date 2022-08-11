import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "Austin",
      date: "Thursday, July 28",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: "Partly Cloudy",
      temp: 100,
      wind: 6,
      feelsLike: 108,
      humidity: 38,
      uvIndex: 7,
    };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row justify-content-center">
          <div className="col-4">
            <input
              type="search"
              className="form-control shadow-sm"
              placeholder="Enter a city"
              autoFocus={false}
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <button className="btn btn shadow-sm w-4" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <span className="location-buton">
              <button className="btn btn shadow-sm w-2" type="submit">
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
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>
        <div>
          <h2>{weatherData.description}</h2>
        </div>
        <span className="temperature">{weatherData.temp}</span>
        <span className="units">°F</span>
        <div className="container weather-details">
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <i className="fa-solid fa-wind" />
              <span className="full-description"> Wind</span>
              <br />
              <span>{weatherData.wind}</span> mph
            </div>
            <div className="col-3">
              <i className="fa-solid fa-temperature-high" />
              <span className="full-description"> Feels Like</span>
              <br />
              <span>{weatherData.feelsLike}</span>°F
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <i className="fa-solid fa-droplet" />
              <span className="full-description"> Humidity</span>
              <br />
              <span>{weatherData.humidity}</span>%
            </div>
            <div className="col-3">
              <i className="fa-solid fa-sun"></i>
              <span className="full-description"> UV Index</span>
              <br />
              <span>{weatherData.uvIndex}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
