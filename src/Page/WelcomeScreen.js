import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native';
import UIButton from '../Components/LoginPage/UIButton';
import { useNavigation } from '@react-navigation/native';
import Registration from './Registration';
import Login from './Login';
const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view2}>
                <LottieView
                    style={styles.LottieView}
                    source={require('../../assets/logo/Graduation.json')}
                    autoPlay
                    loop
                />
                <Text style={styles.text1}>VLEARNING</Text>
                <Text style={styles.text2}>Learning language for free</Text>
            </View>
            <View style={styles.view3}>
                <UIButton title="register"  />
                <UIButton title="i already have an account" />
            </View>
        </View>
    );
};

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

    LottieView:{
        width: 400,
        height: 400,
    }

})