import React from 'react'
import CityForm from 'src/components/city-form'
import CurrentWeather from 'src/components/current-weather'
import WeatherForecast from 'src/components/weather-forecast'
import useWeather from 'src/stores/weather'
import OpenWeatherMap from 'src/types/open-weather-map'

function Home() {
  const [showCityForm, setShowCityForm] = React.useState(false)
  const { data, recentCities, onSelectCity } = useWeather()

  const handleSelectCity = (city: OpenWeatherMap.CityGeo) => {
    onSelectCity(city)
    setShowCityForm(false)
  }

  return (
    <>
      {data && !showCityForm ? (
        <>
          <CurrentWeather
            city={data.city}
            weather={data.current}
            onEditCity={() => setShowCityForm(true)}
          />
          <WeatherForecast
            forecastDays={data.forecastDays}
            isNightTime={data.city.isNightTime}
          />
        </>
      ) : null}
      {!recentCities.length || showCityForm ? (
        <CityForm onSelect={handleSelectCity} recentCities={recentCities} />
      ) : null}
    </>
  )
}

export default Home
