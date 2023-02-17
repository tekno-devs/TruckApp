import React from 'react'
import { StyleSheet, Text, View , Button} from 'react-native';



export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={textStyles.titleText}>Login Screen</Text>
    {/* <Button title="Go to Home" onPress={()=> navigation.navigate('Home')}/> */}
    <Button title="Dont Have an Account? Sign up.." onPress={()=> navigation.navigate('signup')}/>
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

const textStyles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });