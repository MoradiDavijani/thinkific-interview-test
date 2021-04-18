import React from 'react'
import classnames from 'classnames'
import type {
  ForecastDay,
  ForecastDayItem,
  WeatherResponse
} from 'src/types/weather'
import DayHours from './components/day-hours'
import DaysList from './components/days-list'
import RainChanceGraph from './components/rain-chance-graph'
import styles from './weather-forecast.module.css'

type WeatherForecastProps = {
  isNightTime: boolean
  forecastDays: WeatherResponse['forecastDays']
}

function WeatherForecast({ isNightTime, forecastDays }: WeatherForecastProps) {
  const [selectedDay, setSelectedDay] = React.useState<ForecastDay>(
    forecastDays[0]
  )
  const [selectedDayItem, setSelectedDayItem] = React.useState<ForecastDayItem>(
    selectedDay.items[0]
  )

  React.useEffect(() => {
    setSelectedDayItem(selectedDay.items[0])
  }, [selectedDay])

  return (
    <section className={styles.weatherForecast}>
      <DaysList
        selectedDay={selectedDay}
        forecastDays={forecastDays}
        onSelect={setSelectedDay}
      />
      <ul className={styles.weatherForecast__daysList}>
        {forecastDays.map(forecastDay => (
          <li
            key={forecastDay.title}
            className={classnames(styles.weatherForecast__dayItem, {
              [styles.weatherForecast__dayItem_selected]:
                forecastDay === selectedDay
            })}
          >
            <h2 className={styles.weatherForecast__dayItemTitle}>
              {forecastDay.title}
            </h2>
            <DayHours
              isNightTime={isNightTime}
              selectedDayItem={selectedDayItem}
              forecastDayItems={forecastDay.items}
              onSelect={setSelectedDayItem}
            />
            <RainChanceGraph
              isNightTime={isNightTime}
              forecastDayItems={forecastDay.items}
              selectedDayItem={selectedDayItem}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WeatherForecast
