export const FETCH_Weather_REQUEST = 'FETCH_Weather_REQUEST';
export const FETCH_Weather_SUCCESS = 'FETCH_Weather_SUCCESS';
export const FETCH_Weather_FAILURE = 'FETCH_Weather_FAILURE';

export interface IWeather {
  list: IList[];
  city: any[];
  cnt: number;
  cod: string;
  message: number;
}
export interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
export interface IList {
  clouds: any;
  dt: number;
  dt_txt: string;
  main: IMain;
  marked: boolean;
  pop: number;
  sys: any;
  visibility: number;
  weather: any;
  wind: any;
}
export interface WeatherState {
  pending: boolean;
  weathers: IWeather | null;
  error: string | null;
}

export interface FetchWeatherSuccessPayload {
  weathers: IWeather;
}

export interface FetchWeatherFailurePayload {
  error: string;
}

export interface FetchWeatherRequest {
  type: typeof FETCH_Weather_REQUEST;
}

export type FetchWeatherSuccess = {
  type: typeof FETCH_Weather_SUCCESS;
  payload: FetchWeatherSuccessPayload;
};

export type FetchWeatherFailure = {
  type: typeof FETCH_Weather_FAILURE;
  payload: FetchWeatherFailurePayload;
};

export type WeatherActions =
  | FetchWeatherRequest
  | FetchWeatherSuccess
  | FetchWeatherFailure;
