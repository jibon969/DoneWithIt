import React from "react";
import AppText from "./app/components/AppText";
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>Hello There</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#3399ff"
    
  }
})

