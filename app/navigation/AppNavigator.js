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
        <Tab.Screen name="profile" component={ProfileScreen}/>
        <Tab.Screen name="graph" component={GraphScreen}/>
        <Tab.Screen name="account" component={AccountNavigator}/>   
        </Tab.Navigator>
    </Screen>
    
    )
}
export default AppNavigator;
