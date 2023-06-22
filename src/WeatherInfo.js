import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            Last updated:{" "}
            <span>
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <div>
              <strong id="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
