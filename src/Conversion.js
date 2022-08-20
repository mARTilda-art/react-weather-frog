import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  const [fahrenheit, setFahrenheit] = useState("");

  function handleDegreeChange(event) {
    let fahrenheit = (event.target.value * 9) / 5 + 32;
    setFahrenheit(fahrenheit);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="conversion">
      <form onSubmit={handleSubmit}>
        <div className="col-12">
          <table className="conversionalert table">
            <thead>
              <tr>
                <th scope="col" colSpan="7">
                  What the <i className="fa-solid fa-frog"></i> are
                </th>
                <th scope="col" colSpan="1">
                  <input
                    type="text"
                    placeholder="degrees"
                    className="form-control"
                    id="degree-input"
                    autoComplete="off"
                    value={props.fahrenheit}
                    onChange={handleDegreeChange}
                  />
                </th>
                <th scope="col" colSpan="4">
                  °C in °F?
                </th>
                <th scope="col" colSpan="2">
                  <div className="col-2 fahrenheit">
                    {Math.round(fahrenheit)} °F
                  </div>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
