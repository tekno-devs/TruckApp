
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Messeges from './Messeges'
import Notifications from './Notifications'
import ProfileCard from './ProfileCard'



const Tab = createBottomTabNavigator()


const Tabs =() => {
  return (
    <Tab.Navigator 
   // screenOptions={{ headerStyle: { backgroundColor: 'teal' }}}
    //tabBarOptions={{backgroundColor:'red'}}
      tabBarStyle={{
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRaduis: 15,
          height: 90,
        
      }}
      >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Notifications' component={Notifications} />
      <Tab.Screen name='Messeges' component={Messeges} />
      <Tab.Screen name='Profile' component={ProfileCard} />
      {/* <Tab.Screen name='Home' component={Home} /> */}

    </Tab.Navigator>
  )
}

export default Tabs