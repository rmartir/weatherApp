import {
  FETCH_Weather_REQUEST,
  FETCH_Weather_FAILURE,
  FETCH_Weather_SUCCESS,
  FetchWeatherRequest,
  FetchWeatherSuccess,
  FetchWeatherSuccessPayload,
  FetchWeatherFailure,
  FetchWeatherFailurePayload,
} from '../../types';

export const fetchWeatherRequest = (): FetchWeatherRequest => ({
  type: FETCH_Weather_REQUEST,
});

export const fetchWeatherSuccess = (
  payload: FetchWeatherSuccessPayload,
): FetchWeatherSuccess => ({
  type: FETCH_Weather_SUCCESS,
  payload,
});

export const fetchWeatherFailure = (
  payload: FetchWeatherFailurePayload,
): FetchWeatherFailure => ({
  type: FETCH_Weather_FAILURE,
  payload,
});
