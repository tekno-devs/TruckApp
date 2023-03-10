import React, {useState} from 'react'
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';
import styles from '../assets/styles';
// const [ formData, setFormData] = useState({
//   username: '',
//   password: ''
// })

// function handleChange(e){
//   setFormData({...formData, [e.target.name]: e.target.value})
// }

export default function Login({route,  navigation}) {
  // const  {onFaceId}  = route.params;
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');


  // !!!!!!!!!!! TRY TO GET THIS WAY TO WORK !!!!!!!!!!!

  //   const [ formData, setFormData] = useState({
  //     email: '',
  //     password: ''
  //   })

  // function handleChange(e){
  //   setFormData({...formData, [e.target.name]: e.target.value})
  // }

  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.inputStyle}
          placeholder='Email'
          //name= "email" 
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{text}</Text>

        <TextInput style={styles.inputStyle}
          secureTextEntry={true}
          placeholder='Password' 
          onChangeText={onChangePassword}
          //name= "password"
          // onChangeText={handleChange}
          // value={formData.password}
          />
          <Button title='Login' />
          {/* <Button title="Sign in with Face ID" onPress={onFaceId} /> */}
      </View>
      {/* <Text style={textStyles.titleText}>Login Screen</Text> */}
      {/* <Button title="Go to Home" onPress={()=> navigation.navigate('Home')}/> */}
      <Button title="Dont Have an Account? Sign up.." onPress={()=> navigation.navigate('signup')}/>
    </View>
  )
}



const styles1 = StyleSheet.create({
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
