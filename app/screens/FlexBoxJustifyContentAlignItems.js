import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FlexBoxJustifyContentAlignItems = () => {
    return (
        <View style={{
            backgroundColor:"#FFF",
            flex:1,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"  "
        }}>
            <View style={{
                backgroundColor:"dodgerblue",
                height:300,
                width:100
                }}
            >
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
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