import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './StackParams';
import {Home} from '../Screens/Home';
import {WeatherInfo} from '../Screens/WeatherInfo';
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WeatherInfo" component={WeatherInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
