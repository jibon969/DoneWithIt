import React from 'react';
import { View } from 'react-native';

const FlexBoxScreen = () => {
    return (
        <View style={{
            backgroundColor:"#FFF",
            flex:1,
            flexDirection:"row-reverse"
        }}>
            <View style={{
                backgroundColor:"blue",
                height:100,
                width:100
                }}
            >
            </View>
            <View  style={{
                backgroundColor:"red",
                height:100,
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

export default FlexBoxScreen;