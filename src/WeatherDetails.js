import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props){
    return(
        <div className="WeatherDetails">
          <div className="row justify-content-center">
            <div className="col-3 with-border">
              <div className="detail-title text-center">
                <i className="fa-solid fa-wind" />
                <span> Wind Speed</span>
              </div>
              <div className="detail-value text-center">
                {props.wind} km/h
              </div>
            </div>
            <div className="col-3">
              <div className="detail-title text-center">
                <i className="fa-solid fa-temperature-high" />
                <span> Feels Like</span>
              </div>
              <div className="detail-value text-center">
                {Math.round(props.feelsLike)}°C
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 with-border">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-droplet" />
                  <span> Humidity</span>
                </div>
                <div className="detail-value text-center">
                  {props.humidity}%
                </div>
              </div>
              <div className="col-3">
                <div className="detail-title text-center">
                  <i className="fa-solid fa-sun" />
                  <span> UV Index</span>
                </div>
                <div className="detail-value text-center">{props.uvIndex}</div>
              </div>
            </div>
          </div>
        </div>
    );
}