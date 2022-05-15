import React from "react";
import AppButton from "./app/components/Button/AppButton";

import { StyleSheet, TouchableOpacity } from 'react-native'

export default function App() {
  return (
    <TouchableOpacity style={styles.container}>
      <AppButton title="login"/>
    </TouchableOpacity>
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

