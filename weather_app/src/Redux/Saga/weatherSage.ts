import axios from 'axios';
import {all, call, put, takeLatest, fork} from '@redux-saga/core/effects';

import {fetchWeatherFailure, fetchWeatherSuccess} from '../Action/getWeather';
import {IWeather, FETCH_Weather_REQUEST} from '../../types';
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
const getWeathers = () =>
  axios.get<IWeather[]>(
    'https://community-open-weather-map.p.rapidapi.com/forecast',
    {
      params: {q: 'San Francisco'},

      headers: {
        'X-RapidAPI-Key': '68b38b30f1msh1f80c16a13088f5p137984jsn69d61c5aef95',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      },
    },
  );

/*
  Worker Saga: Fired on FETCH_Weather_REQUEST action
*/
function* fetchWeatherSaga() {
  try {
    const response: ResponseGenerator = yield call(getWeathers);
    console.log('res', response);

    yield put(
      fetchWeatherSuccess({
        weathers: response.data,
      }),
    );
  } catch (e: any) {
    console.log('e', e);

    yield put(
      fetchWeatherFailure({
        error: e,
      }),
    );
  }
}

function* WeatherSaga() {
  yield all([takeLatest(FETCH_Weather_REQUEST, fetchWeatherSaga)]);
}
export default function* rootSaga() {
  yield all([fork(WeatherSaga)]);
}
