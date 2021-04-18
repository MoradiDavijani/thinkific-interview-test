import OpenWeatherMap from 'src/types/open-weather-map'
import { City, ForecastDay, WeatherInfo } from 'src/types/weather'
import {
  getTimezoneHour,
  getTimezoneMonthDate,
  getTimezoneTime,
  getTimezoneWeekDay
} from './dates'

export function normalizeCityInfo(city: OpenWeatherMap.City): City {
  const currentUnixTime = Date.now() / 1000

  return {
    id: city.id,
    name: city.name,
    country: city.country,
    sunriseTime: getTimezoneTime(city.sunrise, city.timezone),
    sunsetTime: getTimezoneTime(city.sunset, city.timezone),
    isNightTime:
      currentUnixTime < city.sunrise || currentUnixTime > city.sunset,
    currentWeekDay: getTimezoneWeekDay(currentUnixTime, city.timezone),
    currentMonthDate: getTimezoneMonthDate(currentUnixTime, city.timezone)
  }
}

export function normalizeWeatherInfo({
  main,
  weather
}: OpenWeatherMap.WeatherInfo): WeatherInfo {
  return {
    content: weather[0],
    feelsLike: Math.round(main.feels_like),
    temp: Math.round(main.temp)
  }
}

export function normalizeForecastList(
  forecastList: Array<OpenWeatherMap.WeatherInfo>,
  cityOffsetInSeconds: number
): Array<ForecastDay> {
  const forecastDays = forecastList.reduce((days, forecastItem) => {
    const weekDay = getTimezoneWeekDay(forecastItem.dt, cityOffsetInSeconds)

    const newItem = {
      time: getTimezoneHour(forecastItem.dt, cityOffsetInSeconds),
      content: forecastItem.weather[0],
      temp: Math.round(forecastItem.main.temp),
      pop: forecastItem.pop
    }

    const lastDay = days[days.length - 1]

    if (lastDay?.title === weekDay) {
      lastDay.items.push(newItem)
    } else {
      days.push({
        title: weekDay,
        items: [newItem]
      })
    }
    return days
  }, [] as Array<ForecastDay>)

  const currentWeekDay = getTimezoneWeekDay(
    Date.now() / 1000,
    cityOffsetInSeconds
  )

  if (currentWeekDay === forecastDays[0].title) {
    forecastDays[0].title = 'Today'
    forecastDays[1].title = 'Tomorrow'
  } else {
    forecastDays[1].title = 'Tomorrow'
  }

  return forecastDays
}
