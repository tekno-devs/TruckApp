import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView,
  FlatList, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles';
import LotCard from './LotCard';
//import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Slavic Bethel Church',
    image: '../assets/image1.jpeg',
    address: '8715 Alkire Road',
    city: 'Grove City',
    state: 'OH',
    zip: 43123,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Mentel Memorial Golf Course',
    image: '../assets/image1.jpeg',
    address: '6005 Alkire Road',
    city: 'Galloway',
    state: 'OH',
    zip: 43119,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'National Road Golf Course',
    image: '../assets/image1.jpeg',
    address: '5135 US-40',
    city: 'West Jefferson',
    state: 'OH',
    zip: 43162,

  },
];

// const Item = ({title}) => (
//   <View style={styles1.item}>
//     <Text style={styles1.title}>{title}</Text>
//   </View>
// );


// this is retarded

export default function Home({ navigation } ) {

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=AIzaSyCSnX4HIRkl-hrvHYwdGYn2hDOjlX8Y1-A`;
      let response = await fetch(url);
      let json = await response.json();
      let city = json.results[0].address_components.find(component => component.types.includes('locality')).long_name;
      setCity(city);
    })();
  }, []);
  //console.log(city)

  return (
    <SafeAreaView style={styles.container}>
    <TextInput 
      placeholder='Search...(city, state, name) '
      style={styles.inputStyle}

    />
    <Text> YOUR LOCATION  </Text>
    {location && (
        <>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
          {city && <Text>City: {city}</Text>}
        </>
      )}
    <FlatList
      data={DATA}
      renderItem={({item}) => <LotCard item={item} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}

