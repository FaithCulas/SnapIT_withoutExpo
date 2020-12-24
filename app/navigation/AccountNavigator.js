import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen';
import InfoScreen from '../Screens/InfoScreen';

const Stack =createStackNavigator();

function AccountNavigator(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="account" component={AccountScreen}/>
        <Stack.Screen name="info" component={InfoScreen}/>
    </Stack.Navigator>
    )
}
    

export default AccountNavigator;