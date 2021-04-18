import { WeatherResponse } from 'src/types/weather'

type ReducerAction =
  | {
      type: 'success'
      payload: WeatherResponse
    }
  | {
      type: 'fail'
    }

export type WeatherContextState =
  | {
      data: null
      isLoading: boolean
      isFailed: boolean
    }
  | {
      data: WeatherResponse
      isLoading: false
      isFailed: false
    }

function reducer(
  state: WeatherContextState,
  action: ReducerAction
): WeatherContextState {
  switch (action.type) {
    case 'success':
      return {
        data: action.payload,
        isLoading: false,
        isFailed: false
      }
    case 'fail':
      return {
        data: null,
        isLoading: false,
        isFailed: true
      }
  }
}

export default reducer
