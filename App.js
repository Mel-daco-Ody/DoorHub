import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';
import Signin from './Screens/SigninScreen/Signin';
import Singnup from './Screens/SignupScreen/Singnup';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import SignNavigation from './Navigations/SignNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <SignNavigation/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
