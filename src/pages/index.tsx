import CurrentWeather from 'src/components/current-weather'
import useWeather from 'src/stores/weather'

function Home() {
  const { data } = useWeather()

  if (!data) {
    return null
  }

  return <CurrentWeather city={data.city} weather={data.current} />
}

export default Home
