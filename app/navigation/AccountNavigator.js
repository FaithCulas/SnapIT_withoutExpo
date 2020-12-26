import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen';
import InfoScreen from '../Screens/InfoScreen';

const Stack =createStackNavigator();

function AccountNavigator(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen}/>
        <Stack.Screen name="info" component={InfoScreen} options={{tabBarVisible:false}}/>
    </Stack.Navigator>
    )
}
    

export default AccountNavigator;