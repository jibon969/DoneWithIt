import React from 'react';
import { View } from 'react-native';

const Shadows = () => {
    return (
        <View style={{
            borderBottomColor:"#FFF",
            flex:1,
            justifyContent:"center",
            alignItems:"center"
            }}
        >
            <View 
            style={{
                backgroundColor:"red",
                width:100,
                height:100,
                elevation:10
            }}
            />
            
        </View>
    );
};

export default Shadows;