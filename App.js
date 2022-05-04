import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello React</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          width: 200,
          height: 300,
          uri : "https://picsum.photos/200/300"}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});