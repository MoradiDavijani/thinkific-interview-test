import React from 'react'
import type { ForecastDayItem } from 'src/types/weather'
import useResetScroll from 'src/hooks/reset-scroll'
import styles from './rain-chance-graph.module.css'

type RainChanceGraphProps = {
  isNightTime: boolean
  forecastDayItems: Array<ForecastDayItem>
  selectedDayItem: ForecastDayItem
}

function RainChanceGraph({
  isNightTime,
  forecastDayItems,
  selectedDayItem
}: RainChanceGraphProps) {
  const listRef = React.useRef<HTMLUListElement | null>(null)
  useResetScroll(listRef, [forecastDayItems])

  return (
    <div className={styles.rainChangeGraph}>
      <h2 className={styles.rainChangeGraph__title}>Chance of rain</h2>
      <ul className={styles.rainChangeGraph__yAxis}>
        <li>high</li>
        <li>low</li>
      </ul>
      <ul ref={listRef} className={styles.rainChangeGraph__graph}>
        {forecastDayItems.map(forecastDayItem => (
          <li
            key={forecastDayItem.time}
            className={styles.rainChangeGraph__graphColumn}
          >
            <div
              style={{ height: `${forecastDayItem.pop * 100}%` }}
              className={styles.rainChangeGraph__graphBar}
              data-theme={
                forecastDayItem === selectedDayItem && isNightTime
                  ? 'light'
                  : forecastDayItem === selectedDayItem
                  ? 'dark'
                  : ''
              }
            />
            <div className={styles.rainChangeGraph__graphBarGuide} />
            <span className={styles.rainChangeGraph__graphBarText}>
              {forecastDayItem.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RainChanceGraph
