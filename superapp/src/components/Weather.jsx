/* eslint-disable no-duplicate-case */
import { useEffect, useState } from "react";
import css from "../css/Weather.module.css";
import axios from "axios";
import pressureImg from "../assets/pressure.svg";
import windImg from "../assets/wind.svg";
import humidityImg from "../assets/humidity.svg";


const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "88c686317efa4c7bb53174951232611";
        const city = "Visakhapatnam";
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, []);

  if (loading) {
    return <p className={css.loading}>Loading...</p>;
  }
  if (!weatherData) {
    return <p className={css.error}>Error fetching weather data</p>;
  }

  const getWeatherIcon = (conditionCode) => {
    switch (conditionCode) {
      case 1000:
        return "wi-day-sunny";
      case 1003:
        return "wi-day-cloudy";
      case 1006:
        return "wi-cloudy";
      case 1189:
      case 1192:
      case 1195:
      case 1198:
        return "wi-rain";
      case 1183:
      case 1186:
      case 1180:
      case 1240:
      case 1243:
        return "wi-showers";
      case 1150:
      case 1153:
      case 1168:
      case 1171:
        return "wi-thunderstorm";
      case 1063:
      case 1183:
      case 1072:
      case 1087:
        return "wi-sleet";
      case 1080:
      case 1147:
      case 1180:
      case 1183:
        return "wi-snow";
      default:
        return "wi-day-sunny";
    }
  };

  const conditionCode = weatherData.current.condition.code;
  const weatherIconClass = getWeatherIcon(conditionCode);

  return (
    <div className={css.weatherContainer}>
      <div className={css.weatherInfo}>
        <i className={`wi ${weatherIconClass} ${css.weatherIcon}`}></i>
        <p className={css.weatherCondition}>
          {weatherData.current.condition.text}
        </p>
      </div>
      <hr className={css.horizontalLine} />
      <div className={css.temperatureInfo}>
        <p className={css.tempMeasurement}>
          {weatherData.current.temp_c} °C
        </p>

        <div className={css.pressureInfo}>
          <div className={css.pressureImg}>
            <img src={pressureImg} alt="pressureImg" />
          </div>
          <div>
            <p> {weatherData.current.pressure_mb} mbar</p>
            <p>Pressure</p>
          </div>
        </div>
      </div>
      <hr className={css.horizontalLine} />
      <div className={css.windHumidityInfo}>
        <div className={css.humidityInfo}>
          <div>
            <img src={windImg} alt="windImg" />
          </div>
          <div>
            <p> {weatherData.current.wind_kph} km/h</p>
            <p>Wind</p>
          </div>
        </div>

        <div className={css.windInfo}>
          <div>
            <img src={humidityImg} alt="humidityImg" />
          </div>

          <div>
            <p> {weatherData.current.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
