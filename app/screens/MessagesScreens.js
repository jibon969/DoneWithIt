import React from 'react';
import { 
    View, 
    StyleSheet, 
    FlatList, 
    SafeAreaView, 
    Platform, 
    StatusBar 
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparators from '../components/ListItemSeparators';
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
        <SafeAreaView style={styles.screen}>
            <FlatList
            data={message}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) =>
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            />}
            ItemSeparatorComponent={ListItemSeparators}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})

export default MessagesScreens;