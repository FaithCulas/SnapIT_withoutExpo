import React ,{useState,useEffect}from 'react';
import { View , StyleSheet,Text, Alert,Image} from 'react-native';
import {PulseIndicator} from 'react-native-indicators';

import MyIcon from './MyIcon'
import AppText from './AppText';
import Nfc from './Nfc'


function Profile({name,address,phone,image,indicator,id}) {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(year + '/' + month + '/' + date);
        setCurrentTime(hours + ':' + min + ':' + sec);
    }, []);

    return (
        <View style={styles.container}>
            {/* <View style={styles.graphbutton}>
                <Octicons name="graph" size={20} onPress={()=>Alert.alert("graphs")} style={{paddingRight:20}}></Octicons>
                <AntDesign name="user" size={20} onPress={()=>Alert.alert("graphs")}></AntDesign>
            </View> */}
            <View style={styles.indicator}>
                <PulseIndicator color={indicator} />
            </View>
            <View>
                {<Image style={styles.pic} source={require("../assets/profile.png")}></Image>}
            </View>
            <View style={styles.username}>
                <AppText style={styles.title}>{name}</AppText>
                <AppText style={styles.title}>{id}</AppText>
            </View>
            <View style={styles.content1}>
            <View style={styles.userdetails}>
                <MyIcon name="home" size={30} iconColor="dodgerblue" backColor="white"/>
                <AppText style={styles.subtitle}>{address}</AppText>
            </View>
            <View style={styles.userdetails}>
                <MyIcon name="call-outline" size={30} iconColor="dodgerblue" backColor="white"/>
                <AppText style={styles.subtitle}>{phone}</AppText>
            </View>
            </View>
            
            <View style={styles.scanbutton}>
                <Nfc id={[name,currentDate,currentTime]}/>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
    },
    indicator:{
       justifyContent:"flex-end",
       flexDirection:"row-reverse",
       marginRight:"80%",
       marginTop:"2%"
       
    },
    content1:{
        margin:20,
        alignItems:"flex-start",
        borderColor:"grey",
        borderWidth:2
    },
    pic:{
        width: 100,
        height:100,
        borderRadius:70,
        margin:10,
        alignSelf:"center"
    },
    graphbutton:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        paddingRight:20,
        paddingTop:20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
    },
    scanbutton:{
        marginVertical:40,
        alignSelf:"center"
    },
    subtitle:{
        paddingLeft:10,
        paddingTop:5,
        justifyContent:"center",
        alignItems:"center",
        fontSize:15
    },
    username:{
        alignItems:"center"
    },
    userdetails:{
        flexDirection:"row",
        margin:10,
    }
})
export default Profile;