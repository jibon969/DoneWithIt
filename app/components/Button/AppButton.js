import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const AppButton = ({title}) => {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:"orange",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        width:"100%"
    },
    text:{
        color:"#FFF",
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"bold"
    }
    
})
export default AppButton;