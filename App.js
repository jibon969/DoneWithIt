import React from "react";
import { View, StyleSheet } from 'react-native'
import MessagesScreens from "./app/screens/MessagesScreens";
export default function App() {
  return (
    <View style={styles.container}>
      <MessagesScreens/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FFF",
    padding: 20,
    paddingTop: 80
  }
})

