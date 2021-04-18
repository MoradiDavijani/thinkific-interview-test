import type { NextApiRequest, NextApiResponse } from 'next'
import {
  getTimezoneTime,
  getTimezoneWeekDay,
  getTimezoneMonthDate
} from 'src/helpers/dates'
import OpenWeatherMap from 'src/types/open-weather-map'
import type { City, WeatherInfo } from 'src/types/weather'

const CITY_ID = '6173331' // Vancouver's city id
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [forecastResponse, weatherResponse]: [
    OpenWeatherMap.ForecastResponse,
    OpenWeatherMap.WeatherResponse
  ] = await Promise.all([
    // Get 5 day forecast
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json()),
    // Get current weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    ).then(response => response.json())
  ])

  res.status(200).json({
    city: normalizeCityInfo(forecastResponse.city),
    current: normalizeWeatherInfo(weatherResponse),
    forecastItems: forecastResponse.list.map(normalizeWeatherInfo)
  })
}

const normalizeWeatherInfo = ({
  pop,
  dt,
  main,
  weather
}: OpenWeatherMap.WeatherInfo): WeatherInfo => ({
  pop,
  time: dt,
  content: weather[0],
  feelsLike: Math.round(main.feels_like),
  temp: Math.round(main.temp)
})

const normalizeCityInfo = (city: OpenWeatherMap.City): City => ({
  id: city.id,
  name: city.name,
  country: city.country,
  sunriseTime: getTimezoneTime(city.sunrise, city.timezone),
  sunsetTime: getTimezoneTime(city.sunset, city.timezone),
  isNightTime: city.sunrise > city.sunset && Date.now() / 1000 < city.sunrise,
  currentWeekDay: getTimezoneWeekDay(Date.now() / 1000, city.timezone),
  currentMonthDate: getTimezoneMonthDate(Date.now() / 1000, city.timezone)
})

export default handler
