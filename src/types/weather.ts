import type OpenWeatherMap from './open-weather-map'

export type WeatherInfo = {
  content: OpenWeatherMap.Weather
  feelsLike: number
  temp: number
}

export type City = {
  id: number
  name: string
  country: string
  sunriseTime: string
  sunsetTime: string
  isNightTime: boolean
  currentWeekDay: string
  currentMonthDate: string
}

export type ForecastDayItem = {
  time: string
  content: OpenWeatherMap.Weather
  temp: number
  pop: number
}

export type ForecastDay = {
  title: string
  items: Array<ForecastDayItem>
}

export type WeatherResponse = {
  city: City
  current: WeatherInfo
  forecastDays: Array<ForecastDay>
}
