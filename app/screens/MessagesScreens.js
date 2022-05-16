import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
const message = [
    {
        id:1,
        title:"Jibon Ahmed",
        description:"Hello there",
        image:require('../assets/jibon.jpg')
    },
    {
        id:2,
        title:"Jayed Hossain",
        description:"Hello there",
        image:require('../assets/jacket.jpg')
    },
    {
        id:3,
        title:"Sakib Al Hasan",
        description:"Hello there",
        image:require('../assets/couch.jpg')
    }
]
function MessagesScreens() {
    return (
        <View>
            <FlatList
            data={message}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) =>
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreens;