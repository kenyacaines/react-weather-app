import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherButtons from "./WeatherButtons";
import axios from "axios";
import "./Weather.css";



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      coords: response.data.coord,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      feelsLike: Math.round(response.data.main.feels_like),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      
    });
  }
  function search() {
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
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
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
           </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherButtons data={weatherData} />
      </div>
    );
  }
  if (weatherData.ready) {
     return (
       <div className="Weather">
         <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="col-6">
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
               <input
                 type="submit"
                 value="Search"
                 className="btn btn-primary w-100"
               />
             </div>
           </div>
         </form>
         <WeatherInfo data={weatherData} />
         <WeatherButtons data={weatherData} />
       </div>
     );
  }
  
  
  else {
    search();
    return "Loading...";
  }
}
