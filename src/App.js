import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project is created by{" "}
          <a
            href="https://www.martilda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mARTilda
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/mARTilda-art/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://symphonious-pegasus-adb3f8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
