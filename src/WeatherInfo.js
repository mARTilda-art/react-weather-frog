import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex row overview">
        <div className="col-7">
          <h2 id="city">{props.data.city}</h2>
          <ul>
            <li id="text-capitalize description">{props.data.description}</li>
          </ul>
        </div>

        <div className="col-5">
          <div className="d-flex weather-temperature">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div className="float-center">
              <strong id="temperature"></strong>
              <div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <table className="details table table-striped">
            <thead>
              <tr>
                <th scope="col" colSpan="1">
                  icon
                </th>
                <th scope="col" colSpan="3">
                  type
                </th>
                <th scope="col" colSpan="2">
                  value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" colSpan="1">
                  <i className="fa-solid fa-water"></i>
                </th>
                <td colSpan="3">humidity</td>
                <td colSpan="2">
                  <strong>
                    <span id="humidity">{props.data.humidity}</span> %
                  </strong>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="1">
                  <i className="fa-solid fa-wind"></i>
                </th>
                <td colSpan="3">wind</td>
                <td colSpan="2">
                  <strong>
                    <span id="wind">{Math.round(props.data.wind)}</span> km/h
                  </strong>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="1">
                  <i className="fa-solid fa-weight-hanging"></i>
                </th>
                <td colSpan="3">pressure</td>
                <td colSpan="2">
                  <strong>
                    <span id="pressure">{props.data.pressure}</span> mb
                  </strong>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="1">
                  <i className="fa-solid fa-sun"></i>
                </th>
                <td colSpan="3">sunrise</td>
                <td colSpan="2">
                  <strong>
                    <span id="sunrise">{props.data.sunrise}</span>
                  </strong>
                </td>
              </tr>
              <tr>
                <th scope="row" colSpan="1">
                  <i className="fa-solid fa-moon"></i>
                </th>
                <td colSpan="3">sunset</td>
                <td colSpan="2">
                  <strong>
                    <span id="sunset">{props.data.sunset}</span>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              <span id="date">
                Last updated: <FormatedDate date={props.data.date} />
              </span>
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="photo d-none d-md-block">
            <div className="photo center" id="photo">
              <img
                src="https://images.pexels.com/photos/2175952/pexels-photo-2175952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="weathermood"
                title="weathermood"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
