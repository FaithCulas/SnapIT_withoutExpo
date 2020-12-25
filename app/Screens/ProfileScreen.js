import React from 'react';
import { View , StyleSheet,Image} from 'react-native';

import Profile from "../components/Profile"

function ProfileScreen(props) {
          
    // const getDataUsingGET = () => {
    //     return fetch('https://snapit-api.herokuapp.com/api/setlog')
    //         .then((response) => response.json())
    //         .then((json) => {
    //         return json.movies;
    //         })
    //         .catch((error) => {
    //         console.error(error);
    //         });
    //     };


    return (
        <View>
            <Profile name="Emma Watson" address="RodrigoPlace" phone="0775868915" indicator="positive"></Profile>  
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:"10%",
    },
    
})

export default ProfileScreen;