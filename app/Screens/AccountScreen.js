import React from 'react';
import { View ,StyleSheet,Image,Text, Alert} from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import MyIcon from '../components/MyIcon'

function AccountScreen({navigation}) {
    return (
        <>
        <View style={styles.container}>
            <ListItem title="Faith Culas"
            image={require("../assets/profile.png")}
            onPress={()=>navigation.navigate("profile")}/>

            <ListItem title="Settings"
            icon={<MyIcon name="settings-outline" backColor="#ff8e71"/>}
            onPress={()=>navigation.navigate("info")}/>

            <ListItem title="Log-out"
            icon={<MyIcon name="log-out-outline" backColor="#70af85"/>}
            onPress={()=>Alert.alert("logout")}/>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"#e4e4e4",
        flex:1
    },
})

export default AccountScreen;