import type { NextApiRequest, NextApiResponse } from 'next'
import OpenWeatherMap from 'src/types/open-weather-map'

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const citiesResponse: Array<OpenWeatherMap.CityGeo> = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${req.query.q}&limit=10&appid=${OPEN_WEATHER_API_KEY}`
  ).then(response => response.json())

  res.status(200).json({
    items: citiesResponse.map(
      ({ lat, lon, name, country }): OpenWeatherMap.CityGeo => ({
        lat,
        lon,
        name,
        country
      })
    )
  })
}

export default handler
