import OpenWeatherMap from 'src/types/open-weather-map'

type ReducerAction =
  | {
      type: 'init'
    }
  | {
      type: 'success'
      payload: Array<OpenWeatherMap.CityGeo>
    }
  | {
      type: 'fail'
    }

export type CitiesState = {
  data: Array<OpenWeatherMap.CityGeo>
  isLoading: boolean
  isFailed: boolean
}

function reducer(state: CitiesState, action: ReducerAction): CitiesState {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        isLoading: true,
        isFailed: false
      }
    case 'success':
      return {
        data: action.payload,
        isLoading: false,
        isFailed: false
      }
    case 'fail':
      return {
        ...state,
        isLoading: false,
        isFailed: true
      }
  }
}

export default reducer
