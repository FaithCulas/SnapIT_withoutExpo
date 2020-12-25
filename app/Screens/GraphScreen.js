import { FlatList, View ,Image,StyleSheet, Text} from "react-native";
import React from 'react';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";

// const getDataUsingGET = () => {
    //     return fetch('https://snapit-api.herokuapp.com/api/setlog')
    //         .then((response) => response.json())
    //         .then((json) => {
    //         return json.movies;
    //         })
    //         .catch((error) => {
    //         console.error(error);
    //         });
    //     };

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
        data: [10, 20, 30, 40, 50, 60],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};

const chartConfig = {
    backgroundColor: "#white",
    // backgroundGradientFrom: "#fb8c00",
    // backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}


// const messages =[
//     {
//         id:1,
//         name:'faith',
//         title:'t1',
//         image:require("../assets/graph.jpg")
//     },
//     {
//         id:2,
//         name:'rozan',
//         title:'t2',
//         image:require("../assets/graph.jpg")
//     }
// ]

function GraphScreen(props) {
    return (
        // <View>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        // </View>
        <View>
        <Text>Line Chart</Text>
        <LineChart
            data={data}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
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