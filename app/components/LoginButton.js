import React from 'react';
import { StyleSheet,Button,Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
function LoginButton({title,onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>      
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        
       
    );
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:50,
        borderRadius:20,
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        margin:20,
        padding:10
    },
    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})

export default LoginButton;