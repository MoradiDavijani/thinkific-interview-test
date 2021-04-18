import React from 'react'
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
      <DayHours
        isNightTime={isNightTime}
        selectedDayItem={selectedDayItem}
        forecastDayItems={selectedDay.items}
        onSelect={setSelectedDayItem}
      />
      <RainChanceGraph
        isNightTime={isNightTime}
        forecastDayItems={selectedDay.items}
        selectedDayItem={selectedDayItem}
      />
    </section>
  )
}

export default WeatherForecast
