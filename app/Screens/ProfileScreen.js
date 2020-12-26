import React, { useState, useEffect } from 'react';
import { View , StyleSheet,Image} from 'react-native';
import {create} from "apisauce";

import Profile from "../components/Profile"

function ProfileScreen(props) {
    const endpoint = "/1";
    const [result, setResult] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);
          
    const apiClient = create({
        baseURL: 'https://snapit-api.herokuapp.com/api/getuser'
    });
    const getListing = () => apiClient.get(endpoint);

    const loadUser = async() => {
        const response = await getListing();
        setResult(response.data);
        console.log();
    }

    return (
        <View>
            <Profile name={result[0].name} address="as" phone="0775868915" indicator="positive"></Profile>  
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