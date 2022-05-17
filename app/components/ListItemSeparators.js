import React from 'react';
import { View, StyleSheet } from 'react-native';

function ListItemSeparators(props) {
    return (
        <View style={styles.separator} />
    );
}
const styles = StyleSheet.create({
    separator:{
        backgroundColor: "gray", 
        height: 1, 
        width:"100%"
    }
})

export default ListItemSeparators;