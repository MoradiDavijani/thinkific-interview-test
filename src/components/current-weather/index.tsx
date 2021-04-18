import React from 'react'
import type { WeatherResponse } from 'src/types/weather'
import styles from './current-weather.module.css'
import Circle from '../circle'

type CurrentWeatherProps = {
  city: WeatherResponse['city']
  weather: WeatherResponse['current']
}

function CurrentWeather({ city, weather }: CurrentWeatherProps) {
  return (
    <section className={styles.currentWeather}>
      <div className={styles.currentWeather__header}>
        <img
          src={`https://openweathermap.org/img/wn/${weather.content.icon}@2x.png`}
          alt={weather.content.description}
          className={styles.currentWeather__weatherIcon}
        />
        <span className={styles.currentWeather__today}>Today</span>
        <span className={styles.currentWeather__date}>
          {city.currentWeekDay}, {city.currentMonthDate}
        </span>
      </div>
      <div className={styles.currentWeather__valueSection}>
        <span className={styles.currentWeather__value}>{weather.temp}</span>
        <span className={styles.currentWeather__unit}>°C</span>
      </div>
      <div className={styles.currentWeather__city}>
        {city.name}, {city.country}
      </div>
      <div className={styles.currentWeather__moreInfo}>
        <span>Feels like {weather.feelsLike}</span>
        <Circle
          size="0.5rem"
          className={styles.currentWeather__infoSeparator}
        />
        <span>
          {city.isNightTime
            ? `Sunrise ${city.sunriseTime}`
            : `Sunset ${city.sunsetTime}`}
        </span>
      </div>
    </section>
  )
}

export default CurrentWeather
