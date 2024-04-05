import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    <ScrollView>
      <Header/>

      <View>

        <Slider/>

        <Categories/>

        <BusinessList/>

        <Button title="Go back (Use in testing)" onPress={()=>navigation.replace('SignIn')}/>

      </View>
    
    </ScrollView>
  )
}
