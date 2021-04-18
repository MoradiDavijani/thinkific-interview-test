import type { NextApiRequest, NextApiResponse } from 'next'
import OpenWeatherMap from 'src/types/open-weather-map'
import type { WeatherInfo } from 'src/types/weather'

const CITY_ID = '6173331' // Vancouver's city id
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

const normalizeWeatherInfo = ({
  dt,
  main,
  weather,
  wind
}: OpenWeatherMap.WeatherInfo): WeatherInfo => ({
  wind,
  time: dt,
  content: weather[0],
  feelsLike: main.feels_like,
  humidity: main.humidity,
  pressure: main.pressure,
  temp: main.temp
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [forecastResponse, weatherResponse]: [
    OpenWeatherMap.ForecastResponse,
    OpenWeatherMap.WeatherResponse
  ] = await Promise.all([
    // Get 5 day forecast
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json()),
    // Get current weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json())
  ])

  res.status(200).json({
    city: forecastResponse.city,
    current: normalizeWeatherInfo(weatherResponse),
    forecastItems: forecastResponse.list.map(normalizeWeatherInfo)
  })
}

export default handler
