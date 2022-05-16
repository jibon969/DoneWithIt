import React from "react";
import { View, StyleSheet } from 'react-native'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ListingDetailsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    paddingTop: 80
  }
})

