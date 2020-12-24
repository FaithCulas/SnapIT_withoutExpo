import React from 'react';
import {Text,StyleSheet,View, TouchableOpacit,Image,TouchableOpacity} from 'react-native';

import AppText from '../components/AppText'

function ListItem({title,image,onPress,icon}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.content}>
            {icon}
            {image &&<Image style={styles.pic} source={image}></Image>}
                <View style={styles.content2}>
                    <AppText style={styles.text1}>{title}</AppText>
                </View>
        </View>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    content:{
        flexDirection:"row",
        marginVertical:20,
        backgroundColor:"white",
        padding:10
    },
    content2:{
        marginLeft:10,
        justifyContent:"center"
    },
    text1:{
        justifyContent:"center",
        fontSize:20,
        alignItems:"center",
        color:"grey",
        marginLeft:10
    },
    pic:{
        width: 100,
        height:100,
        borderRadius:70,
        alignSelf:"center",
    },
})
export default ListItem;