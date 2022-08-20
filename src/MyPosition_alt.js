import React, { useState } from "react";
import axios from "axios";

export default function MyPosition() {
  axios.get(apiUrl).then(displayTemperature);
  const [location, setLocation] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    findmyposition();
  }

  function findmyposition() {
    const apiKey = "54fc91d14fe02d75665772e36d182ac8";
    let units = "metric";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiUrlStart}lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    navigator.geolocation.getCurrentPosition(handleResponse);
    axios.get(apiUrl).then(handleResponse);
  }

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
      sunrise: response.data.sys.sunrise,
    });
  }

  return "1";
}
