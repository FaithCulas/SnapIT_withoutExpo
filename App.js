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
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './app/Screens/ProfileScreen';
import GraphScreen from './app/Screens/GraphScreen';
import AccountScreen from './app/Screens/AccountScreen';
import Screen from './app/components/Screen';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={navigationTheme}>
          <AppNavigator/>
      </NavigationContainer>
       
    </>
  );
};

export default App;
