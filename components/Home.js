import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView,
  FlatList, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../assets/styles';
import LotCard from './LotCard';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item 1',
    image: '../assets/image1.jpeg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: '../assets/image1.jpeg'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: '../assets/image1.jpeg'

  },
];

// const Item = ({title}) => (
//   <View style={styles1.item}>
//     <Text style={styles1.title}>{title}</Text>
//   </View>
// );


// this is retarded

export default function Home({ navigation } ) {


  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}> WELCOME TO SEMI SLEEPER </Text>
    <FlatList
      data={DATA}
      renderItem={({item}) => <LotCard title={item.title} image={item.image} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}

