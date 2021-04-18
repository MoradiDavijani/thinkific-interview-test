namespace OpenWeatherMap {
  type Main = {
    feels_like: number
    temp: number
  }

  export type Weather = {
    id: number
    icon: string
    main: string
    description: string
  }

  export type WeatherInfo = {
    dt: number
    main: Main
    weather: [Weather]
    pop: number
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
