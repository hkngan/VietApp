import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const WelcomeScreen = () => {
   
  return (
      <View style={styles.container}>
        <View style={styles.view2}>
        <LottieView style={styles.LottieView} source={require('../assets/logo/Graduation.json')} autoPlay loop/>
          <Text style={styles.text1}>VLEARNING</Text>
          <Text style={styles.text2}>Learning language for free</Text>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.text_btn1}>START NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.text_btn2}>I ALREADY HAVE A ACCOUNT</Text>
            </TouchableOpacity>
            </View>
      </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000000',
        
    },
    text1: {
        textAlign: 'center',
        color: '#6DA9E4',
        fontFamily: 'Dosis-Bold',
        fontSize: 50,
        top: -40
    },
    text2: {
        textAlign: 'center',
        color: '#93BFCF',
        fontFamily: 'Dosis-Medium',
        fontSize: 20,
        top: -40

    },
    view2:{
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 40
    },
    view3:{
        flex: 3,
        justifyContent: 'center',
        padding: 20,
        justifyContent: 'flex-end'
     },
    button1:{
        backgroundColor: '#93BFCF',
        height: 45,
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: 'center'
    },
    button2:{
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 15,
        height: 45,
        justifyContent: 'center'
    },
    text_btn1:{
        textAlign: 'center',
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
    },
    text_btn2:{
        textAlign: 'center',
        color: '#93BFCF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    LottieView:{
        width: 400,
        height: 400,
    }

})