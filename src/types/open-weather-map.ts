namespace OpenWeatherMap {
  type Main = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
  }

  export type Weather = {
    id: number
    icon: string
    main: string
    description: string
  }

  export type Wind = {
    deg: number
    gust: number
    speed: number
  }

  export type WeatherInfo = {
    dt: number
    main: Main
    weather: [Weather]
    wind: Wind
  }

  export type WeatherResponse = WeatherInfo

  export type City = {
    id: number
    name: string
    country: string
    sunrise: number
    sunset: number
    timezone: number
  }

  export type ForecastResponse = {
    cod: number
    city: City
    list: Array<WeatherInfo>
  }
}

export default OpenWeatherMap
