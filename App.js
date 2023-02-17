import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './src/components/Home';
import Login from './src/components/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Router>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </nav>
        
        <StatusBar style="auto" />
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={ <Login />} />

        </Routes>


      </Router>
    </View>
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
