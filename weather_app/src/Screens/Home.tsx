import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {StackParamsNavigationProps} from '../Routes/StackParams';
import {useTypedSelector} from '../customHook/useTypedSelector';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IList} from '../types';
import RBsheet from 'react-native-raw-bottom-sheet';
import moment from 'moment';

const claud = require('../Assets/claud.jpeg');

export const Home: FC<StackParamsNavigationProps<'Home'>> = ({navigation}) => {
  const ref = useRef<RBsheet>(null);
  const list = useTypedSelector(state => state.weatherReducer.weathers?.list);
  const pending = useTypedSelector(state => state.weatherReducer.pending);
  const [sectionList, setSectionList] = useState<IList[] | null>(null);
  const [calendarData, setCalendarData] = useState<Record<
    string,
    IList
  > | null>(null);
  const [minDate, setMinDate] = useState<string>('');
  const [maxDate, setMaxDate] = useState<string>('');
  const changeDateFormat = () => {
    const map = new Map();
    list?.map(item => {
      map.set(item.dt_txt.split(' ')[0], {
        ...item,
        title: item.dt_txt.split(' ')[0],
        marked: true,
        data: item.main,
      });
    });
    setCalendarData(Object.fromEntries(map));
    setMinDate(Object.keys(Object.fromEntries(map))[0]);
    setMaxDate(Object.keys(Object.fromEntries(map))[5]);
    setSectionList(Object.values(Object.fromEntries(map)));
    console.log(Object.values(Object.fromEntries(map)));
  };

  useEffect(() => {
    if (!pending) {
      changeDateFormat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending]);
  const WeatherItem = ({item}: {item: IList}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.day}>
          {moment(item?.dt_txt.split(' ')[0]).format('MMM DD, YYYY,dddd')}
        </Text>
        <Text style={styles.day}>{(item.main.temp - 273).toFixed(1)} °C</Text>
      </View>
    );
  };
  return (
    <ImageBackground source={claud} style={styles.safe}>
      <SafeAreaView style={styles.main}>
        <Calendar
          onDayPress={day => {
            if (calendarData) {
              console.log(calendarData[day.dateString]);
              console.log(day);

              navigation.navigate('WeatherInfo', {
                weather: calendarData[day.dateString],
              });
            }
          }}
          items={calendarData}
          markedDates={calendarData}
          maxDate={maxDate}
          minDate={minDate}
          style={styles.bgColorGray}
          theme={{
            backgroundColor: 'rgba(132, 137, 153,.75)',
            calendarBackground: 'rgba(132, 137, 153,.75)',
          }}
        />
        <View style={styles.buttonPosition}>
          <TouchableOpacity
            onPress={() => ref?.current?.open()}
            // onPress={() => console.log(sectionList)}
            style={styles.button}>
            <Text style={styles.buttonText}>Open 5 days forecast</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <RBsheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={450}
        height={700}>
        <FlatList
          data={sectionList}
          renderItem={({item}: ListRenderItemInfo<IList>) =>
            WeatherItem({item})
          }
          keyExtractor={item => item.dt_txt}
        />
      </RBsheet>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'rgba(132, 137, 153,1)',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    height: 70,
  },
  bgColorGray: {backgroundColor: 'rgba(132, 137, 153,.75)'},
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
  main: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: '100%',
  },
  day: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
