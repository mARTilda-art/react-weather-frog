import React from "react";
import Weather from "./Weather";
import LightningBox from "./LightningBox";
import Conversion from "./Conversion";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            <i className="fa-solid fa-frog"></i> Weather Frog
          </h1>
        </header>
        <Weather defaultCity="Berlin" />
        <Conversion />
        <LightningBox />
        <footer>
          This project is created by{" "}
          <a
            href="https://www.martilda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mARTilda
          </a>{" "}
          , is open-sourced on{" "}
          <a
            href="https://github.com/mARTilda-art/react-weather-frog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and is hosted on{" "}
          <a
            href="https://earnest-belekoy-225853.netlify.app/"
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
