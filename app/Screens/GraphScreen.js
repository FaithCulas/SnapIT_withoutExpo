import { FlatList, View ,Image,StyleSheet} from "react-native";
import React from 'react';


const messages =[
    {
        id:1,
        name:'faith',
        title:'t1',
        image:require("../assets/graph.jpg")
    },
    {
        id:2,
        name:'rozan',
        title:'t2',
        image:require("../assets/graph.jpg")
    }
]

function GraphScreen(props) {
    return (
        <View>
            <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
            <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    graph:{
        width: 300,
        height:300,
        margin:10,
        alignSelf:"center",
    },
})
export default GraphScreen;