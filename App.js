import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'

// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import TabNav from './components/TabNav'
import Tabs from "./components/TabNav";

//test commit
//const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  


  return (
    <NavigationContainer>
     <Tabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b2b2b2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
