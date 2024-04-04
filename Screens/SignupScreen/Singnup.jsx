import React, {useRef, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, PanResponder, Animated} from 'react-native';
import { ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export default function App() {
    const navigation = useNavigation();
    
    const pan = useRef(new Animated.ValueXY()).current;
    
        const panResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event(
            [
              null,
              { dy: pan.y }
            ],
            { useNativeDriver: false }
          ),
          onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dy > 1) {
              navigation.navigate('SignIn');
              console.log('To Signin');
            }
            // Khôi phục vị trí ban đầu của pan
            Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
          }
        });

  return (
    <ScrollView style={styles.Scroll} {...panResponder.panHandlers}>
    <View style={styles.container}>
    <Image source={require('../../assets/images/Logo.png')} style={styles.avatar} resizeMode ='contain' />
    <Text style={styles.loginText}>Sign Up</Text>
    <View style={styles.inputContainer}>
    <Text style={styles.Conttext1}>ID Name</Text>
    <TouchableOpacity style={styles.inputButton}>
        <TextInput style={styles.inputText} placeholder="What is your ID name" />
    </TouchableOpacity>
    <Text style={styles.Conttext2}>Password</Text>
    <TouchableOpacity style={styles.inputButton}>
        <TextInput style={styles.input} placeholder="What is your password" secureTextEntry={true} />
    </TouchableOpacity>
    <Text style={styles.Conttext3}>Repeat Password</Text>
    <TouchableOpacity style={styles.inputButton}>
        <TextInput style={styles.input} placeholder="Reenter your password" secureTextEntry={true} />
        </TouchableOpacity>
    <TouchableOpacity style={styles.loginButton} onPress={()=>console.log('Login')}>
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.footer}>
        <Text style={styles.footerText}>Or sign up with</Text>
        <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>console.log('Head to Gmail')}>
            <Image source={require('../../assets/images/gmail.png')} style={styles.logo} resizeMode ='contain'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>console.log('Head to Facebook')}>
            <Image source={require('../../assets/images/facebook.png')} style={styles.logo} resizeMode ='contain'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>console.log('Head to Instagram')}>
            <Image source={require('../../assets/images/instagram.png')} style={styles.logo} resizeMode ='contain'/>
        </TouchableOpacity>
    </View>
    <Text style={styles.footerText}>Already have an account?<Text style={{color:'#fff'}} > Swipe left</Text></Text>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Scroll: {
    position: 'relative',
    backgroundColor: '#A563D9'
  },
  container: {
    flex: 1,
    backgroundColor: '#A563D9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 900
  },
  avatar: {
    height: '11%',
    marginTop: '-20%',
    marginBottom: '5%'
  },
  loginText: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: -30,
    marginLeft: '23%',
    textShadowColor: '#A563D9', 
    textShadowOffset: { width: 10, height: 15 }, // Độ dịch chuyển của shadow theo trục x và y
    textShadowRadius: 10,
    padding: 18,
    zIndex: 1
  },
  inputContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    paddingTop: 15,
  },
  inputButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  inputText: {
    color: '#9435DF'
  },
  loginButton: {
    backgroundColor: '#9435DF',
    padding: 8,
    borderRadius: 5,
    marginTop: 20,
    height: 43,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderColor:'grey',
    borderWidth: 2,
  },
  Conttext1: {
    width: '19%',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#9435DF',
    marginTop: 25,
    marginBottom: -15,
    marginLeft: 10,
    zIndex:1,
    textShadowColor: '#fff', // Màu của shadow (đen với độ mờ là 0.5)
    textShadowOffset: { width: 1, height: 2 }, // Độ dịch chuyển của shadow theo trục x và y
    textShadowRadius: 5,
  },
  Conttext2: {
    width: '22%',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#9435DF',
    marginTop: 20,
    marginBottom: -15,
    marginLeft: 10,
    zIndex:1,
    textShadowColor: '#fff', // Màu của shadow (đen với độ mờ là 0.5)
    textShadowOffset: { width: 1, height: 2 }, // Độ dịch chuyển của shadow theo trục x và y
    textShadowRadius: 5,
  },
  Conttext3: {
    width: '39%',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#9435DF',
    marginTop: 20,
    marginBottom: -15,
    marginLeft: 10,
    zIndex:1,
    textShadowColor: '#fff', // Màu của shadow (đen với độ mờ là 0.5)
    textShadowOffset: { width: 1, height: 2 }, // Độ dịch chuyển của shadow theo trục x và y
    textShadowRadius: 5,
  },
  footer: {
    position: 'relative',
    height:'5%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-30%',
    marginTop: '20%'
  },
  footerText: {
    fontSize: 15,
    margin: 0,
    color: '#fff',
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Các component sẽ được căn giữa theo chiều dọc
    paddingHorizontal: 20, // Khoảng cách giữa các component
  },
  button: {
    height: '60%',
    width: '11%',
    backgroundColor: '#A563D9',
    margin: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  logo: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});