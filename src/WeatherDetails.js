import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails(props){
    return(
        <div className="WeatherDetails">
          <div className="windSpeed">
                <i className="fa-solid fa-wind" />
                <span> Wind Speed:{" "}</span>
              <span className="detail-value text-center">
                {props.wind} km/h
              </span>
            </div>
                <div className="humidity">
                  <i className="fa-solid fa-droplet" />
                  <span> Humidity: {" "}</span>
                <span className="detail-value text-center">
                  {props.humidity}%
                </span>
              </div>
            </div>
    );
}