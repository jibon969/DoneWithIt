import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  SafeAreaView, 
  Image, 
  Button, 
  TouchableOpacity,
  Dimensions
} 
from 'react-native';

export default function App() {
  const dimension = Dimensions.get('screen')
  console.log(dimension)
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello React</Text>
      <StatusBar style="auto" />

      <TouchableOpacity>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}
        />
      </TouchableOpacity>
      <Button title='Click Me' onPress={() => Alert.alert("My Title", "Your Message", [
        { text: "Yes" },
        { text: "No" },
      ])} />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
