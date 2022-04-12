import React from "react";
import {StyleSheet,Text,ScrollView, View} from 'react-native';
import { time } from "./util";

function Result ({results}){
    return(
        <ScrollView>
            <View style={Style.item}/>
                {results.map((item,index)=>(
                    <View key ={index} style={Style.item}>
                        <Text style={Style.text}>
                            Lap {results.length-index}: 
                        </Text>

                        <Text style={Style.text}>
                            {time(item)}
                        </Text>
                    </View>
                ))}
        </ScrollView>
    );
};

const Style = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        borderBottomWidth:1,
        borderColor:'#313131',
        height:50,
        paddingHorizontal:15,
    },
    text:{
        color:'#fff',
    },
});

export default React.memo(Result);