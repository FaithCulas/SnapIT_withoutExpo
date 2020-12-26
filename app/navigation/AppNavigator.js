import React from 'react';
import {createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AccountScreen from '../Screens/AccountScreen';
import GraphScreen from '../Screens/GraphScreen';
import InfoScreen from '../Screens/InfoScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MyIcon from '../components/MyIcon';
import Screen from '../components/Screen';
import AccountNavigator from './AccountNavigator';
import RegisterScreen from '../Screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppNavigator(){
  return(
  <Screen>
      <Tab.Navigator>
        <Tab.Screen name="profile" component={ProfileScreen}options={{tabBarIcon:({size,color})=> <MyIcon name="person-sharp"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>
        <Tab.Screen name="graph" component={GraphScreen}options={{tabBarIcon:({size,color})=> <MyIcon name="bar-chart"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>
        <Tab.Screen name="account" component={AccountNavigator}options={{tabBarIcon:({size,color})=> <MyIcon name="settings-sharp"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>
        </Tab.Navigator>
  </Screen>)
}
export default AppNavigator;
