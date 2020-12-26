import React from 'react';
import { View , StyleSheet,Image} from 'react-native';

import Profile from "../components/Profile";
import Screen from '../components/Screen'

function ProfileScreen(props) {



    return (
        <Screen>
        <View>
            <Profile name="Emma Watson" address="RodrigoPlace" phone="0775868915"></Profile>  
        </View>
        </Screen>
        
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:"10%",
    },
    
})

export default ProfileScreen;