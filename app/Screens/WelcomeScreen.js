import React from 'react';
import { Image, ImageBackground,StyleSheet, View, Text,Button,Platform, Alert} from 'react-native';


import LoginButton from '../components/LoginButton';
import RegisterButton from '../components/RegisterButton'
function WelcomeScreen({navigation}) {
    return (
       <ImageBackground
       style={styles.background}
       source={require('../assets/background.jpg')}>
           <View style={styles.logoContainer}>
           <Text style={styles.tagline}>SnapIT</Text>
           </View>
           <LoginButton title="Login" onPress={()=>navigation.navigate("login")}></LoginButton>
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