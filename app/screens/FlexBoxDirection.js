import React from 'react';
import { View } from 'react-native';

const FlexBoxDirection = () => {
    return (
        <View style={{
            backgroundColor:"red",
            flex:1
        }}>
            <View  style={{
                backgroundColor:"blue",
                flex:1
                }}
            >
            </View>
            <View  style={{
                backgroundColor:"red",
                flex:1
                }}>
            </View>

            <View  style={{
                backgroundColor:"orange",
                flex:1
                }}>
            </View>
        </View>
    );
};

export default FlexBoxDirection;