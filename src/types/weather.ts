import type OpenWeatherMap from './open-weather-map'

export type WeatherInfo = {
  time: number
  wind: OpenWeatherMap.Wind
  content: OpenWeatherMap.Weather
  feelsLike: number
  humidity: number
  pressure: number
  temp: number
}

export type WeatherResponse = {
  city: OpenWeatherMap.City
  current: WeatherInfo
  forecastItems: Array<WeatherInfo>
}
