import React from 'react'
import type OpenWeatherMap from 'src/types/open-weather-map'
import useDebouncedCallback from 'src/hooks/debounced-callback'
import TextInput from 'src/components/text-input'
import reducer from './reducer'
import styles from './city-form.module.css'
import Button from '../button'

type CityFormProps = {
  recentCities: Array<OpenWeatherMap.CityGeo>
  onSelect: (city: OpenWeatherMap.CityGeo) => void
}

const initialState = {
  data: [],
  isLoading: false,
  isFailed: false
}

function CityForm({ recentCities, onSelect }: CityFormProps) {
  const [query, setQuery] = React.useState<string>('')
  const [{ data: cities, isLoading, isFailed }, dispatch] = React.useReducer(
    reducer,
    initialState
  )

  const onSearch = (cityQuery: string) => {
    if (!cityQuery) {
      return
    }

    dispatch({ type: 'init' })
    fetch(`/api/cities?q=${cityQuery}`)
      .then(response => response.json())
      .then((result: { items: Array<OpenWeatherMap.CityGeo> }) =>
        dispatch({ type: 'success', payload: result.items })
      )
      .catch(() => dispatch({ type: 'fail' }))
  }

  const debouncedSearch = useDebouncedCallback(onSearch, 500)

  React.useEffect(() => {
    debouncedSearch(query)
  }, [query])

  const citiesToShow = !query && cities.length === 0 ? recentCities : cities

  return (
    <div className={styles.cityForm}>
      <label htmlFor="city">Enter city name:</label>
      <TextInput
        id="city"
        value={query}
        onChange={event => setQuery(event.target.value)}
        className={styles.cityForm__input}
      />
      <ul className={styles.cityForm__itemsList}>
        {citiesToShow.map(city => (
          <li key={city.lat + city.lon} className={styles.cityForm__item}>
            <Button
              variant="link"
              onClick={() => onSelect(city)}
              className={styles.cityForm__itemButton}
            >
              {city.name}, {city.country}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CityForm
