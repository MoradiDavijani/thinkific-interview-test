import Button from 'src/components/button'
import Circle from 'src/components/circle'
import type { ForecastDay, WeatherResponse } from 'src/types/weather'
import styles from './days-list.module.css'

type DaysListProps = {
  selectedDay: ForecastDay
  forecastDays: WeatherResponse['forecastDays']
  onSelect: (forecastDay: ForecastDay) => void
}

function DaysList({ selectedDay, forecastDays, onSelect }: DaysListProps) {
  return (
    <ul className={styles.daysList}>
      {forecastDays.map(forecastDay => (
        <li key={forecastDay.title} className={styles.daysList__dayItem}>
          <Button variant="link" onClick={() => onSelect(forecastDay)}>
            {forecastDay.title}
          </Button>
          {forecastDay === selectedDay ? <Circle size="0.5rem" /> : null}
        </li>
      ))}
    </ul>
  )
}

export default DaysList
