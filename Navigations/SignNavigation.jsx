import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Signin from '../Screens/SigninScreen/Signin';
import Singnup from '../Screens/SignupScreen/Singnup';
import ForgotPass from '../Screens/ForgotPassScreen/ForgotPass'

const Stack = createStackNavigator();

export default function SignNavigation() {
  return (
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
          }}>
          <Stack.Screen name="SignIn" component={Signin}/>
          <Stack.Screen name="SignUp" component={Singnup}/>
          <Stack.Screen name="ForgotPass" component={ForgotPass}/>
        </Stack.Navigator>
  );
}