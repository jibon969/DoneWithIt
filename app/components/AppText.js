import React from 'react';
import { Text, Platform } from 'react-native';
function AppText({children}) {
    return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir"
    },
})

export default AppText;