import { FlatList, View ,Image,StyleSheet, Text,Button} from "react-native";
import React, { useState, useEffect } from 'react';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {create} from "apisauce";

import AppText from '../components/AppText'




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
            "temp": 20
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

    const endpointC = "getusercough/1";
    const endpointT = "getusertemp/1";
    const [coughResult, setCoughResult] = useState(cough);
    const [tempResult, setTempResult] = useState(temp);
    const [show, setShow] = useState(false);
    useEffect(() => {
        loadCough();
    }, []);
    useEffect(() => {
        loadTemp();
    }, []);
            
    const apiClient = create({
        baseURL: 'https://snapit-api.herokuapp.com/api/'
    });
    const getCoughList = () => apiClient.get(endpointC);
    const getTempList = () => apiClient.get(endpointT);

    const loadCough = async() => {
        const response = await getCoughList();
        setCoughResult(response.data);
        console.log(coughResult.length);
        setShow(true);
    };
    const loadTemp = async() => {
        const response = await getTempList();
        setTempResult(response.data);
        setShow(true);
    };

    function loadFull(){
        loadTemp();
        loadCough();
    };


    
    // const coughResult = cough;
    // const tempResult = temp;
    
    // const data = {
        
    //     labels: ["May", "June","s", "s" , "May", "June"],
    //     datasets: [
    //         {
    //         data: [10, 20, 30, 40, 50, 60],
    //         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    //         strokeWidth: 2 // optional
    //         }
    //     ],
    //     legend: ["Cough Data"] // optional
    // };
    var i;
    var coughDate = [];
    var coughTimes = [];
    for (i = 0; i < coughResult.length; i++) {
    coughDate[i] = coughResult[i].date;
    coughTimes[i] = coughResult[i].coughCount;
    };
    var j;
    var tempDate = [];
    var tempTimes = [];
    for (j = 0; j < tempResult.length; j++) {
        tempDate[j] = tempResult[j].date;
        tempTimes[j] = tempResult[j].temp;
        };
    console.log (tempDate);
    console.log(tempTimes);
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
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            //color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };

    return (
        show ?
        (<><View>
            <Text style={{alignSelf:"center",fontWeight:"bold"}}>Cough Chart</Text>
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
            <Text style={{alignSelf:"center",fontWeight:"bold"}}>Temperature Chart</Text>
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
            <Button style={{padding:20}}title="refresh" onPress={loadFull}/>
            </View></>):
        // <View>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        //     <Image style={styles.graph} source={require("../assets/graph.jpg")}></Image>
        // </View>
        <>
        <View> 
            <Text> Loading.....</Text>
        </View>
        </>
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