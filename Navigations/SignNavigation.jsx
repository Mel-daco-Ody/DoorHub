import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Signin from '../Screens/SigninScreen/Signin';
import Singnup from '../Screens/SignupScreen/Singnup';
import ForgotPass from '../Screens/ForgotPassScreen/ForgotPass'
import Home from '../Screens/HomeScreen/Home'
import Starter from '../Screens/StarterScreen/Starter' 

const Stack = createStackNavigator();

export default function SignNavigation() {
  return (
        <Stack.Navigator initialRouteName='Starter' screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          }}>
          <Stack.Screen name="Start" component={Starter}/>
          <Stack.Screen name="SignIn" component={Signin}/>
          <Stack.Screen name="SignUp" component={Singnup}/>
          <Stack.Screen name="ForgotPass" component={ForgotPass}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
  );
}