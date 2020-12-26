/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Alert
} from 'react-native';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Auth0 from 'react-native-auth0';
import base64 from 'react-native-base64'

import ProfileScreen from './app/Screens/ProfileScreen';
import GraphScreen from './app/Screens/GraphScreen';
import AccountScreen from './app/Screens/AccountScreen';
import Screen from './app/components/Screen';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import LoginScreen from './app/Screens/LoginScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import LoginButton from './app/components/LoginButton'
import RegisterScreen from './app/Screens/RegisterScreen';


const App: () => React$Node = () => {
const[access,setAccess]=useState(false);

const auth0 = new Auth0(
  { domain: 'dev-wxf2dldy.us.auth0.com', 
  clientId: 'enKTnDziZOeOZomNcSHXwehfxymZl0aY' });

const Stack=createStackNavigator();

function Login({navigation}){
  auth0
        .webAuth
        .authorize({scope: 'openid profile email'})
        .then(credentials =>{
            Alert.alert(
                'Logged in!'
            );
            setAccess(true);
            console.log("logged in");

        })
        .catch(error => console.log(error));
        //console.log("hello")

}
  return (
    access ? 
    (<>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
      </NavigationContainer>
       
    </>):
    <>
    <Screen>
      <ImageBackground
        style={styles.background}
        source={require('./app/assets/background.jpg')}>
      <View style={styles.logoContainer}>
      <Text style={styles.tagline}>SnapIT</Text>
      </View>
      {/* <LoginButton title="Login" onPress={}></LoginButton> */}
        <LoginButton title="Login" onPress={Login} />
      </ImageBackground>
    </Screen>   
  </>
  );
};
const styles = StyleSheet.create({
  background:{
      flex:1,
      justifyContent:"flex-end",
      alignItems:"center",
      padding:"10%"
  },
  logo:{
      width:100,
      height:100,
  },
  logoContainer:{
      position:'absolute',
      top:70,
      alignItems:"center"
  },
  tagline:{
      fontFamily:Platform.OS==="android"?"Roboto":"Avenir",
      fontSize:30,
      fontWeight:"bold",
      fontStyle:"italic",
      color:"white",
  }
})
export default App;
