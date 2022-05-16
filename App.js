import React from "react";
import { View, StyleSheet } from 'react-native'
import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title="Red Jacket"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
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

