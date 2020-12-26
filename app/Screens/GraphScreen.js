import { FlatList, View ,Image,StyleSheet, Text} from "react-native";
import React, { useState, useEffect } from 'react';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import create from "apisauce";




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
    const temp = [
        {
            "date": "2020-12-12",
            "temp": 31.83
        },
        {
            "date": "2020-12-24",
            "temp": 20
        },
        {
            "date": "2020-12-25",
            "temp": 31.55
        },
        {
            "date": "2020-12-26",
            "temp": 33.79
        }
    ];

    const cough = [
        {
            "date": "2020-12-14",
            "coughCount": 5
        },
        {
            "date": "2020-12-18",
            "coughCount": 1
        },
        {
            "date": "2020-12-21",
            "coughCount": 7
        },
        {
            "date": "2020-12-22",
            "coughCount": 3
        }
    ];

    const endpointC = "/1";
    const endpointT = "/1";
    const [coughResult, setCoughResult] = useState([]);
    const [tempResult, setTempResult] = useState([]);
    useEffect(() => {
        loadCough();
    }, []);
    useEffect(() => {
        loadTemp();
    }, []);
            
    const apiClient1 = create({
        baseURL: 'https://snapit-api.herokuapp.com/api/getusercough'
    });
    const apiClient2 = create({
        baseURL: 'https://snapit-api.herokuapp.com/api/getusertemp'
    });
    const getCoughList = () => apiClient1.get(endpointC);
    const getTempList = () => apiClient2.get(endpointT);

    const loadCough = async() => {
        const response = await getCoughList();
        setCoughResult(response.data);
        console.log(coughResult.length);
    };
    const loadTemp = async() => {
        const response = await getTempList();
        setTempResult(response.data);
    };

    if (coughResult==[] | tempResult==[]){
        coughResult = cough;
        tempResult = temp;
    };

    var i;
    var coughDate = [];
    var coughTimes = [];
    for (i = 0; i < coughResult.length; i++) {
    coughDate[i] = coughResult[i].date;
    coughTimes[i] = coughResult[i].coughCount;
    };

    var tempDate = [];
    var tempTimes = [];
    for (i = 0; i < tempResult.length; i++) {
        tempDate[i] = tempResult[i].date;
        tempTimes[i] = tempResult[i].temp;
        };
    const dataC = {
       
        labels: coughDate,
        datasets: [
            {
            data: coughTimes,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
            }
        ],
        legend: ["Cough Data"] // optional
    };
    const dataT = {
       
        labels: tempDate,
        datasets: [
            {
            data: tempTimes,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
            }
        ],
        legend: ["Temperature Data"] // optional
    };

    const chartConfig = {
        backgroundColor: "#white",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
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
    };
    return (
        // <View>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        // </View>
        <View>
        <Text>Cough Chart</Text>
        <BarChart
            data={dataC}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            // yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        <Text>Temperature Chart</Text>
        <LineChart
            data={dataT}
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