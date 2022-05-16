import React from 'react';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import { View, Image, StyleSheet } from 'react-native';

function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/couch.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jackets</AppText>
                <AppText style={styles.price}>$ 200</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                    image={require('../assets/jacket.jpg')}
                    title="Jibon Ahmed"
                    subTitle = "5 Listing"
                    />
                </View>
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
    },
    userContainer:{
        marginTop:20,
        marginHorizontal:10
    }
})

export default ListingDetailsScreen;