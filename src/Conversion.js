import React from "react";
import "./Conversion.css";

export default function Conversion() {
  return (
    <div class="col-12">
      <table class="conversionalert table">
        <thead>
          <tr>
            <th scope="col" colspan="7">
              What the <i class="fa-solid fa-frog"></i> are
            </th>
            <th scope="col" colspan="1">
              <input
                type="text"
                placeholder="degrees"
                class="form-control"
                id="degree-input"
                autocomplete="off"
              />
            </th>
            <th scope="col" colspan="4">
              °C in °F?
            </th>
            <th scope="col" colspan="2">
              <div class="col-2">
                <input
                  type="submit"
                  value="Go"
                  class="btn btn-primary small"
                  id="buttonConvert"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
