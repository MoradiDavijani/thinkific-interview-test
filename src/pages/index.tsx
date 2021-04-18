import CurrentWeather from 'src/components/current-weather'
import WeatherForecast from 'src/components/weather-forecast'
import useWeather from 'src/stores/weather'

function Home() {
  const { data } = useWeather()

  if (!data) {
    return null
  }

  return (
    <>
      <CurrentWeather city={data.city} weather={data.current} />
      <WeatherForecast
        forecastDays={data.forecastDays}
        isNightTime={data.city.isNightTime}
      />
    </>
  )
}

export default Home
