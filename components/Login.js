import React, {useState} from 'react'
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';


// const [ formData, setFormData] = useState({
//   username: '',
//   password: ''
// })

// function handleChange(e){
//   setFormData({...formData, [e.target.name]: e.target.value})
// }

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.inputStyle}
          placeholder='Email'
          //name= "email" 
          // onChangeText={handleChange}
          // value={formData.username}
        />



        <TextInput style={styles.inputStyle}
          secureTextEntry={true}
          placeholder='Password' 
          //name= "password"
          // onChangeText={handleChange}
          // value={formData.password}
          />
      </View>
      {/* <Text style={textStyles.titleText}>Login Screen</Text> */}
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
    inputStyle: {
      marginTop: 20,
      width: 300,
      height:40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: "#DCDCDC"
    }
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