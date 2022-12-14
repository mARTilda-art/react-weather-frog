import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
      sunrise: new Date(response.data.sys.sunrise * 1000)
        .toLocaleTimeString()
        .slice(0, -3),
      sunset: new Date(response.data.sys.sunset * 1000)
        .toLocaleTimeString()
        .slice(0, -3),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSubmitPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(myPosition);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "54fc91d14fe02d75665772e36d182ac8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function myPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "54fc91d14fe02d75665772e36d182ac8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
                id="city-input"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                id="buttonSearch"
              />
            </div>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success w-100"
              id="buttonCurrent"
              onClick={handleSubmitPosition}
            >
              my position{" "}
            </button>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
