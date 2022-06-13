import React, {useEffect} from 'react';
import AppNavigator from './src/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider, useDispatch} from 'react-redux';
import {store} from './src/Redux/Store';
import {fetchWeatherRequest} from './src/Redux/Action/getWeather';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

const AppProvider = () => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};
export default AppProvider;
