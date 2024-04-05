import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PanResponder, Animated } from 'react-native';
import Signin from './Screens/SigninScreen/Signin';
import Singnup from './Screens/SignupScreen/Singnup';
import {useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import SignNavigation from './Navigations/SignNavigation'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Home from '../IHelper/Screens/HomeScreen/Home'

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey='pk_test_dW5iaWFzZWQtY29icmEtMTYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      <SignedIn>
        <Home/>
      </SignedIn>
      <SignedOut>
        <NavigationContainer>
        <SignNavigation/>
        </NavigationContainer>
      </SignedOut>

      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
