import React from 'react';
import { View } from 'react-native';
const Borders = () => {
    return (
        <View style={{
            borderBottomColor:"#FFF",
            flex:1,
            justifyContent:"center",
            alignItems:"center"
            }}>
            <View style={{
                backgroundColor:"red",
                width:100,
                height:100,
                borderWidth:10,
                borderColor: "green",
                borderRadius:10
                }}>

            </View>
        </View>
    );
};

export default Borders;