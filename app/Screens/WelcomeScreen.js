import React, {useState} from 'react';
import { Image, ImageBackground,StyleSheet, View, Text,Button,Platform, Alert} from 'react-native';
import Auth0 from 'react-native-auth0';

import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton'
import AuthNavigator from '../navigation/AuthNavigator';
import AppNavigator from '../navigation/AppNavigator';
import Login from '../Screens/LoginScreen'
import LoginScreen from '../Screens/LoginScreen';

const auth0 = new Auth0(
    { domain: 'dev-wxf2dldy.us.auth0.com', 
    clientId: 'enKTnDziZOeOZomNcSHXwehfxymZl0aY' });

//const accessToken=null;


// function  logout() {
//     auth0.webAuth
//     .clearSession({})
//     .then(success => {
//         Alert.alert(
//             'Logged out!'
//         );
//         this.setState({ accessToken: null });
//     })
//     .catch(error => {
//         console.log('Log out cancelled');
//     });
// }

function WelcomeScreen({navigation,route}) {

    
    return (
       <ImageBackground
       style={styles.background}
       source={require('../assets/background.jpg')}>
           <View style={styles.logoContainer}>
           <Text style={styles.tagline}>SnapIT</Text>
           </View>
           {/* <LoginButton title="Login" onPress={}></LoginButton> */}
           <LoginScreen />
           <RegisterButton title="Register" onPress={()=>navigation.navigate("register")}></RegisterButton>
       </ImageBackground>
    )
}

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

export default WelcomeScreen;