import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Home({ navigation } ) {
  return (
    <View style={styles.container}>
        <h1> HOME PAGE </h1>
        <StatusBar style="auto" />
        <Button
        title="Go to Login"
        onPress={() => navigation.navigate('login')}
      />
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});