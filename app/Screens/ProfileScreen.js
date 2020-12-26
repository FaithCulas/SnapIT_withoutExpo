import React, { useState, useEffect } from 'react';
import { View , StyleSheet,Image} from 'react-native';
import {create} from "apisauce";

import Profile from "../components/Profile"

function ProfileScreen(props) {
    const API = [
        {
            "id": 1,
            "name": "Faith",
            "mobile": 770825463,
            "address": "70,madelgamuwa,gampaha",
            "test": "negative"
        }
    ];
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
        console.log(result);
    };
    //<Profile name={result[0].name} address={result[0].address} phone={result[0].mobile} indicator={result[0].test}></Profile>  
    return (
        <View>
            <Profile name="nam" address="add" phone="pj" indicator="in"></Profile>  
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