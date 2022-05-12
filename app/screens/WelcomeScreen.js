import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, View, 
    Image, 
    Text, 
    TextInput,
    Button
} 
from 'react-native';

const WelcomeScreen = () => {
    return (
       <ImageBackground
        source={require('../assets/background.png')} 
        style={styles.background}
        >  
        <View>
            <Image 
            source={require('../assets/belasea-white.png')}
            style={styles.logo} 
            />
        </View>

        <View style={styles.container}>
            <TextInput
            placeholder='E-mail or Phone Number'
            style={styles.input}
            placeholderTextColor="#7C7C7C" 
            />
            <TextInput
            placeholder='Password'
            style={styles.input}
            placeholderTextColor="#7C7C7C"
            />
            <View style={styles.styleLoginBtn}>
                <Button title="Login" color="#1572A1" />
            </View> 
            <View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <Text style={styles.signup}>Signup</Text>
            </View>           
        </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    background:{
        flex:1, 
        justifyContent:"flex-end",
        alignItems:"center",
    },
    logo:{
        width: 150,
        height: 150,
        marginTop:150,
    },
    container:{
        flex:1,
        justifyContent:"center",
    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        textAlign:"center",
        backgroundColor:"#FFF",
        color:"#0C0C0C",
        width:260
      },
      styleLoginBtn: {
        marginTop: 10,
        borderRadius: 10,
        padding:10,
        overflow: "hidden",
      },
      forgotPassword:{
        marginTop:10,
        textAlign:"center",
        color:"#FFF",
        padding:10,
      },
      signup:{
        marginTop:2,
        textAlign:"center",
        color:"#FFF",
        padding:10,
      }
})

export default WelcomeScreen;