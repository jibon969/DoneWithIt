import React from 'react';
import AppText from '../components/AppText';

import { View, Image, StyleSheet } from 'react-native';

function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/couch.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jackets</AppText>
                <AppText style={styles.price}>$ 200</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding:20, 
    },
    image:{
        width:"100%",
        height:200
    },
    price:{
        color:"green",
        fontWeight:"bold"
    },
    title:{
         marginBottom:7
    }
})

export default ListingDetailsScreen;