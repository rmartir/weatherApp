import {
  WeatherActions,
  WeatherState,
  FETCH_Weather_REQUEST,
  FETCH_Weather_SUCCESS,
  FETCH_Weather_FAILURE,
} from '../../types/';

const initialState: WeatherState = {
  pending: false,
  weathers: null,
  error: null,
};

export default (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case FETCH_Weather_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_Weather_SUCCESS:
      return {
        ...state,
        pending: false,
        weathers: action.payload.weathers,
        error: null,
      };
    case FETCH_Weather_FAILURE:
      return {
        ...state,
        pending: false,
        weathers: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
