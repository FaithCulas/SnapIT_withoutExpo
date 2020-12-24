import React from 'react';
import {Text,StyleSheet,Platform} from 'react-native';


function AppText({children,style}) {
    return (
        <Text style={[styles.text],[style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text:{
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        // ...Platform.select({
        //     ios:{
        //         fontSize:20,
        //         fontFamily:"Avenir"
        //     },
        //     android:{
        //         fontSize:28,
        //         fontFamily:"Roboto"
        //     }
        
        // })

    }
})
export default AppText;