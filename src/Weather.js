import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
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
      /*sunrise: FormatedDate(response.data.sys.sunrise * 1000).slice(-5),
      sunset: FormatedDate(response.data.sys.sunset * 1000).slice(-5), */
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

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "54fc91d14fe02d75665772e36d182ac8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-5">
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
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                id="buttonSearch"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="my position"
                className="btn btn-success w-100"
                id="buttonCurrent"
              />
            </div>
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
