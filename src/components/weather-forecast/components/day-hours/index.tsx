import React from 'react'
import classnames from 'classnames'
import type { ForecastDayItem } from 'src/types/weather'
import useResetScroll from 'src/hooks/reset-scroll'
import styles from './day-hours.module.css'

type DayHoursProps = {
  isNightTime: boolean
  selectedDayItem: ForecastDayItem
  forecastDayItems: Array<ForecastDayItem>
  onSelect: (forecastDayItem: ForecastDayItem) => void
}

function DayHours({
  isNightTime,
  selectedDayItem,
  forecastDayItems,
  onSelect
}: DayHoursProps) {
  const listRef = React.useRef<HTMLUListElement | null>(null)
  useResetScroll(listRef, [forecastDayItems])

  return (
    <ul ref={listRef} className={styles.dayHours}>
      {forecastDayItems.map(forecastDayItem => (
        <li
          key={forecastDayItem.time}
          data-theme={
            forecastDayItem === selectedDayItem
              ? isNightTime
                ? 'light'
                : 'dark'
              : ''
          }
          className={classnames(styles.dayHours__item, {
            [styles.dayHours__item_selected]:
              forecastDayItem === selectedDayItem
          })}
          onClick={() => onSelect(forecastDayItem)}
        >
          <span>{forecastDayItem.time}</span>
          <img
            src={`https://openweathermap.org/img/wn/${forecastDayItem.content.icon}@2x.png`}
            alt={forecastDayItem.content.description}
            className={styles.dayHours__itemIcon}
          />
          <div className={styles.dayHours__itemValueSection}>
            <span>{forecastDayItem.temp}</span>{' '}
            <span className={styles.dayHours__itemUnit}>°C</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DayHours
