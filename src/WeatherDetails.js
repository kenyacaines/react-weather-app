import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props){
    return (
      <div className="WeatherDetails">
        <div className="row mt-5">
          <div className="col windSpeed text-center">
            <div>Wind Speed</div>
            <div>{props.wind} km/h</div>
          </div>
          <div className="col humidity text-center">
            <div>Humidity</div>
            <div>{props.humidity}%</div>
          </div>
          <div className="col feelsLike text-center">
            <div>Feels Like</div>
            <div>{props.feelsLike}°F</div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col tempMax text-center">
            <div>Max | Min</div>
            <span className="temperature-max">
              {props.tempMax}
            </span>
            <span className="temperature-min">
              {props.tempMin}
            </span>
          </div>
          <div className="col tempMin text-center">
            <div>Min Temp</div>
            <div></div>
          </div>
        </div>
      </div>
    );
}