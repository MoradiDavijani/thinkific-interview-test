import React from 'react'
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

const WeatherContext = React.createContext<WeatherContextState>(
  initialContextValue
)

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialContextValue)

  React.useEffect(() => {
    fetch('/api/weather')
      .then(response => response.json())
      .then((result: WeatherResponse) =>
        dispatch({ type: 'success', payload: result })
      )
      .catch(() => dispatch({ type: 'fail' }))
  }, [])

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  )
}

function useWeather() {
  return React.useContext(WeatherContext)
}

export default useWeather
