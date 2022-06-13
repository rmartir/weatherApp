import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IList} from '../types';

export type RootStackParamList = {
  Home: object | undefined;
  WeatherInfo: {weather: IList} | undefined;
};

export type StackParamsNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
