import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "Austin" />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://incandescent-khapse-1a9ad1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="www.kenyacaines.com"
        >
          Kenya Caines
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/kenyacaines/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
