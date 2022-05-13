import React from 'react';
import { View } from 'react-native';

const FlexBoxJustifyContentAlignItems = () => {
    return (
        <View style={{
            backgroundColor:"#FFF",
            flex:1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"baseline"
        }}>
            <View style={{
                backgroundColor:"dodgerblue",
                height:300,
                width:100
                }}
            >
            </View>
            <View  style={{
                backgroundColor:"yellow",
                height:200,
                width:100
                }}>
            </View>

            <View  style={{
                backgroundColor:"orange",
                height:100,
                width:100
                }}>
            </View>
        </View>
    );
};

export default FlexBoxJustifyContentAlignItems;