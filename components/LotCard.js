import { View, Text, StyleSheet, Image, StatusBar, Number } from 'react-native'
import React from 'react'
//import { StatusBar } from 'expo-status-bar';

 export default function LotCard({item}) {

  const {title, image, address, city, state, zip} = item


  return (
    <View style={styles1.item}>
        <Text style={styles1.title}>{title}</Text>
        <Image 
            source={image}  
        />
        <Text> {address}</Text>
        <Text>{city}, {state} {zip}</Text>
    </View>
  )
}




const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  //export default  Item