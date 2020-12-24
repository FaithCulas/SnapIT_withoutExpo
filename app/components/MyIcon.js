import React from 'react';
import { View ,StyleSheet,Image,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function MyIcon({name,size=40,backColor="black",iconColor="white"}) {
    return (
       <View style={{
           width:size,
           height:size,
           borderRadius:size/2,
           backgroundColor:backColor,
           justifyContent:"center",
           alignItems:"center",
       }}>
           <Icon name={name} size={size*0.5} color={iconColor}/>
       </View>
    );
}

export default MyIcon;