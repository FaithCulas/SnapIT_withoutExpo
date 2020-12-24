import React from 'react';
import { View , StyleSheet,Image} from 'react-native';

import Profile from "../components/Profile"

function ProfileScreen(props) {



    return (
        <View>
            <Profile name="Emma Watson" address="RodrigoPlace" phone="0775868915"></Profile>  
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