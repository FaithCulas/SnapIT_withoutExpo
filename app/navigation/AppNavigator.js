import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from '../Screens/AccountScreen';
import GraphScreen from '../Screens/GraphScreen';
import InfoScreen from '../Screens/InfoScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MyIcon from '../components/MyIcon';
import Screen from '../components/Screen';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
function AppNavigator(){
    return (
      <Screen>
        <Tab.Navigator>
        <Tab.Screen name="profile" component={ProfileScreen}options={{tabBarIcon:({size,color})=> <MyIcon name="person-sharp"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>
        <Tab.Screen name="graph" component={GraphScreen}options={{tabBarIcon:({size,color})=> <MyIcon name="bar-chart"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>
        <Tab.Screen name="account" component={AccountNavigator}options={{tabBarIcon:({size,color})=> <MyIcon name="settings-sharp"size={size} iconColor={color} backColor="#f4f4f2"/> }}/>   
        </Tab.Navigator>
    </Screen>
    
    )
}
export default AppNavigator;
