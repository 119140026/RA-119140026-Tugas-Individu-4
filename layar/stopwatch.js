import React,{useState,useRef,useCallback} from "react";
import {StyleSheet,SafeAreaView,Text,View,Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Result from "./result";
import Control from "./control";
import { time } from "./util";
import Header from "./header";


export default function stopwatch (){
    const [waktu,setTime] = useState(0);
    const [isRunning,setRunning]=useState(false);
    const [results,setResults]=useState([]);
    const timer = useRef(null);


const LeftButtonPress = useCallback (()=>{
    if (isRunning){
        setResults((pResults)=>[waktu, ...pResults]);
    }
    else {
        setResults([]);
        setTime(0);
    }
},[isRunning,waktu]);

const RightButtonPress = useCallback (()=>{
    if(!isRunning){
        const interval = setInterval(()=>{
            setTime((pTime)=>pTime+1);
        },10);
        timer.current=interval;
    }
    else {
        clearInterval(timer.current);
    }
    setRunning((pState)=>!pState);
},[isRunning]);

return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <StatusBar style="light"/>
        <View style={styles.display}>
            <Text style={styles.text}>
                {time(waktu)}
            </Text>
        </View>

        <View>
            <Control 
                isRunning={isRunning}
                LeftButtonPress={LeftButtonPress}
                RightButtonPress={RightButtonPress}
            />
        </View>

        <View style={styles.result}>
            <Result results={results}/>
        </View>

    </SafeAreaView>
);
};

const styles =StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : 'black',
        paddingTop: Constants.statusBarHeight,
    },
    display :{
        flex : 3/5,
        justifyContent:'center',
        alignItems:'center',
    },
    text :{
        color :'red',
        fontSize:75,
        fontWeight:'500',
        fontFamily:Platform.OS==='android'?'sans-serif':null,
    },
    control:{
        height:70,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    result:{flex:2/5},
});