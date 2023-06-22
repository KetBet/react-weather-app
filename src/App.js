import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" class="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autoFocus="on"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    Last updated: <span>{weatherData.date}</span>
                  </li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex weather-temperature">
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                    />
                    <div>
                      <strong id="temperature">
                        {Math.round(weatherData.temperature)}
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
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{weatherData.wind}</span> km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <small>
              <a
                href="https://github.com/KetBet/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              {} by Kateryna Betina
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.DefaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
