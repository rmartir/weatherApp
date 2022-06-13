import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackParamsNavigationProps} from '../Routes/StackParams';
import moment from 'moment';

const claud = require('../Assets/claud.jpeg');

export const WeatherInfo: FC<StackParamsNavigationProps<'WeatherInfo'>> = ({
  route,
  navigation,
}) => {
  const weather = route.params?.weather;
  console.log(weather);

  return (
    <ImageBackground source={claud} style={styles.root}>
      <SafeAreaView style={styles.main}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.day}>
                {moment(weather?.dt_txt.split(' ')[0]).format('MMM DD, YYYY')}
              </Text>
              <Text style={styles.week}>
                {moment(weather?.dt_txt.split(' ')[0]).format('dddd')}
              </Text>
            </View>
            <Text style={styles.temperature}>
              {weather && (weather?.main.temp - 273).toFixed(1)} °C
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.additionalInfo}>
              <Text style={styles.optionType}>Feels Like </Text>
              <Text style={styles.optionValue}>
                {weather && (weather?.main.feels_like - 273).toFixed(1)} °C
              </Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.optionType}>Maximum temp</Text>
              <Text style={styles.optionValue}>
                {weather && (weather?.main.temp_max - 273).toFixed(1)} °C
              </Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.optionType}>Minimum temp</Text>
              <Text style={styles.optionValue}>
                {weather && (weather?.main.temp_min - 273).toFixed(1)} °C
              </Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.optionType}>Sea Level </Text>
              <Text style={styles.optionValue}>
                {weather?.main?.sea_level} m
              </Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.optionType}>Humidity </Text>
              <Text style={styles.optionValue}>{weather?.main.humidity} %</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonPosition}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}>
            <Text style={styles.buttonText}>Back to Calendar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  main: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  day: {
    fontSize: 25,
    fontWeight: '700',
  },
  week: {
    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
  },
  temperature: {
    fontSize: 40,
    fontWeight: '300',
    color: 'gray',
  },
  container: {
    marginTop: 50,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(132, 137, 153,.5)',
    width: '90%',
    height: '50%',
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  optionType: {
    color: 'rgba(255, 255, 255,.5)',
    fontSize: 16,
    fontWeight: '500',
  },
  optionValue: {
    color: 'rgba(255, 255, 255,.75)',
    fontSize: 16,
    fontWeight: '500',
    width: 70,
  },
  button: {
    height: 60,
    width: 250,
    backgroundColor: 'rgba(29, 167, 209,.6)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgba(255, 255, 255,.85)',
    fontWeight: '700',
    fontSize: 20,
  },
});
