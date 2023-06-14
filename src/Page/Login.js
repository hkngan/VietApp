import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5_Brands from 'react-native-vector-icons/FontAwesome5';
import UIButton from '../Components/LoginPage/UIButton';
import Input from '../Components/EditProfile/Input';
import LottieView from 'lottie-react-native'

const Login = () => {
    return (
        <ScrollView style={styles.container}>
            <View
                style={styles.box}>
                <LottieView style={{
                        width: 250,
                        height: 250
                }} source={require('../../assets/logo/Graduation.json')} autoPlay loop/>
            </View>
            <View style={styles.box}>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <UIButton title="Sign in" />
            </View>

            <TouchableOpacity style={{ alignSelf: 'flex-end', right: 30 }}>
                <Text style={styles.txt2}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5_Brands name="google" color="#F4B400" size={40} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <FontAwesome5_Brands name="facebook" color="#4285F4" size={40} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 16,
                        color: 'black',
                    }}
                >
                    Not a member?
                </Text>
                <Text
                    style={{
                        fontFamily: 'Montserrat-Regular',
                        fontSize: 16,
                        color: 'blue',
                    }}
                >
                    {' '}
                    Register now
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EEED',
        paddingTop: 100
    },
    box:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1: {
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        fontSize: 35,
    },
    txt2: {
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn: {
        margin: 10,
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#333',
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 18.0,
        shadowRadius: 19.0,
        elevation: 1,
    },
});
