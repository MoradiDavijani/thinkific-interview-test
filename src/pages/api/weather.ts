import type { NextApiRequest, NextApiResponse } from 'next'
import {
  normalizeCityInfo,
  normalizeForecastList,
  normalizeWeatherInfo
} from 'src/helpers/transformers'
import OpenWeatherMap from 'src/types/open-weather-map'

const CITY_ID = '6173331' // Vancouver's city id
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [forecastResponse, weatherResponse]: [
    OpenWeatherMap.ForecastResponse,
    OpenWeatherMap.WeatherResponse
  ] = await Promise.all([
    // Get 5 day forecast
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${req.query.q}&lat=${req.query.lat}&lon=${req.query.lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json()),
    // Get current weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&lat=${req.query.lat}&lon=${req.query.lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json())
  ])

  res.status(200).json({
    city: normalizeCityInfo(forecastResponse.city),
    current: normalizeWeatherInfo(weatherResponse),
    forecastDays: normalizeForecastList(
      forecastResponse.list,
      forecastResponse.city.timezone
    )
  })
}

export default handler
