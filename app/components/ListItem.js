import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:5
    },
    image:{
        width:60,
        height:60,
        borderRadius:35,
        marginRight:10,
        marginBottom:10
    },
    subTitle:{
        color:"red",
        
    },
    title:{
        fontWeight:"bold"
    }

})

export default ListItem;