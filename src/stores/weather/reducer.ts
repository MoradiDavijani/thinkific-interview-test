import { WeatherResponse } from 'src/types/weather'

type ReducerAction =
  | {
      type: 'init'
    }
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
    case 'init':
      return {
        data: null,
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
        data: null,
        isLoading: false,
        isFailed: true
      }
  }
}

export default reducer
