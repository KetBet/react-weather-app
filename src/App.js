import "./App.css";

export default function App() {
  return (
    <div className="App">
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
                  autocomplete="off"
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
            <h1>Dnipro</h1>
            <ul>
              <li>
                Last updated: <span>Friday 12:34</span>
              </li>
              <li>Light rain</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                <div>
                  <strong id="temperature">20</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span>77</span>%
                </li>
                <li>
                  Wind: <span>10</span> km/h
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
  );
}
