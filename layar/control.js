import React from "react";
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

function Control ({isRunning, LeftButtonPress, RightButtonPress}){
    return(
        <>
            <TouchableOpacity
                style = {[
                    Styles.Border,
                    {backgroundColor:isRunning ? '#333333' : '#lclc1e'},
                ]}
                onPress={LeftButtonPress}
            >
                <View style={Styles.Button}>
                    <Text style={{color:isRunning ? '#fff' : '#9d9ca2'}}>
                        {isRunning ? "Lap" : "Reset"}
                    </Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style = {[
                    Styles.Border,
                    {backgroundColor:isRunning ? '#340e0d' : '#0a2a12'},
                ]}
                onPress={RightButtonPress}
            >
                <View style={Styles.Button}>
                    <Text style={{color:isRunning ? '#ea4c49' : '#37d05c'}}>
                        {isRunning ? "Stop" : "Start"}
                    </Text>
                </View>

            </TouchableOpacity>
        </>
    );
};

const center ={
    justifyContent : "center",
    alignItems : "center",
};

const Styles = StyleSheet.create({
    Border:{
        ...center,
        width:70,
        height:70,
        borderRadius:70,
    },
    Button:{
        ...center,
        width:65,
        height:65,
        borderRadius:65,
        borderColor:'#000',
        borderWidth:1,
    },
});

export default React.memo(Control);