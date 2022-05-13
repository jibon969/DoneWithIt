import React from 'react';
import { View, Text } from 'react-native';

const flex = () => {
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

export default flex;