import type OpenWeatherMap from './open-weather-map'

export type WeatherInfo = {
  time: number
  content: OpenWeatherMap.Weather
  feelsLike: number
  temp: number
  pop: number
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

export type WeatherResponse = {
  city: City
  current: WeatherInfo
  forecastItems: Array<WeatherInfo>
}
