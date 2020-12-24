import React, { useState } from 'react';
import { TextInput, View,StyleSheet, TouchableWithoutFeedback,Modal, Button, FlatList} from 'react-native';

import MyIcon from './MyIcon';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem'

function AppPicker({icon,items,placeholder,onSelectItem,selectedItem}) {
    const[modalVisible,setmodalVisible]=useState(false);
    return (
        <>
            <TouchableWithoutFeedback
        onPress={()=>setmodalVisible(true)}
        >
            <View style={styles.container}>
            {icon&&<MyIcon name={icon} sixe={20} iconColor={colors.grey} style={styles.icon} backColor={colors.lightgrey}/>}
            <AppText style={styles.text}>{selectedItem?selectedItem.label:placeholder}</AppText>
            {icon&&<MyIcon name="chevron-down" sixe={20} iconColor={colors.grey} backColor={colors.lightgrey}/>}
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="close" onPress={()=>setmodalVisible(false)}></Button>
                <FlatList
                    data={items}
                    keyExtractor={item=>item.value.toString()}
                    renderItem={({item})=>
                        <PickerItem label={item.label} 
                        onPress={()=>{setmodalVisible(false); onSelectItem(item)}}/>}
                />

            </Screen>
            
        </Modal>
        
        </>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.lightgrey,
        borderRadius:25,
        flexDirection:"row",
        width:"100%",
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    text:{
        fontSize:18,
        alignSelf:"center",
        flex:1
    }
})
export default AppPicker;