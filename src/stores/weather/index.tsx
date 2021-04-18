import React from 'react'
import usePersistedState from 'src/hooks/persisted-state'
import OpenWeatherMap from 'src/types/open-weather-map'
import { WeatherResponse } from 'src/types/weather'
import reducer, { WeatherContextState } from './reducer'

type WeatherProviderProps = {
  children: React.ReactNode
}

const initialContextValue = {
  data: null,
  isLoading: true,
  isFailed: false
}

type WeatherContextValue = WeatherContextState & {
  recentCities: Array<OpenWeatherMap.CityGeo>
  onSelectCity: (city: OpenWeatherMap.CityGeo) => void
}

const WeatherContext = React.createContext<WeatherContextValue>({
  data: null,
  isLoading: false,
  isFailed: false,
  recentCities: [],
  onSelectCity: () => {}
})

const SELECTED_CITY_ID_KEY = 'recentCities'

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialContextValue)

  const [recentCities, setRecentCities] = usePersistedState<
    Array<OpenWeatherMap.CityGeo>
  >(SELECTED_CITY_ID_KEY, [])

  React.useEffect(() => {
    if (!recentCities.length) {
      return
    }

    const city = recentCities[0]

    dispatch({ type: 'init' })
    fetch(
      `/api/weather?lat=${city.lat}&lon=${city.lon}&q=${city.name},${city.country}`
    )
      .then(response => response.json())
      .then((result: WeatherResponse) =>
        dispatch({ type: 'success', payload: result })
      )
      .catch(() => dispatch({ type: 'fail' }))
  }, [recentCities])

  const onSelectCity = (city: OpenWeatherMap.CityGeo) => {
    if (city === recentCities[0]) {
      return
    }

    dispatch({ type: 'init' })
    setRecentCities(prevState => [
      city,
      ...prevState.filter(
        recentCity => recentCity.lat !== city.lat || recentCity.lon !== city.lon
      )
    ])
  }

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        recentCities,
        onSelectCity
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

function useWeather() {
  return React.useContext(WeatherContext)
}

export default useWeather
