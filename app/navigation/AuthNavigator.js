import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack=createStackNavigator();

function AuthNavigator(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="register" component={RegisterScreen}/>
    </Stack.Navigator>
)
    
}
    

export default AuthNavigator;