import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";

import "./DetailsButton.css"

export default function DetailsButton(props) {
  const [isShown, setIsShown] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setIsShown(current=>!current);
  }

  return (
    <div className="WeatherButton">
      <a href="/" className="border-none" onClick={handleClick}>WeatherDetails</a>
      {isShown && (
        <WeatherDetails
          wind={props.data.wind}
          feelsLike={props.data.feelsLike}
          humidity={props.data.humidity}
          uvIndex={props.data.uvIndex}
        />
      )}
    </div>
  );
}
