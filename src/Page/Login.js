import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5_Brands from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
const Login = () => {
  return (
      <View style={styles.container}>
        <Octicons style={styles.icon_arrow} name="arrow-left" size={30} color='#DDE6ED' />
          <View style={styles.view2}>
              <Text style={styles.text1}>Login</Text>
              <View>
                  <TextInput placeholderTextColor={'#DDE6ED'} style={styles.textInput} placeholder='Email/Username' ></TextInput>
              </View>
              <View style={styles.view3}>
                  <TouchableOpacity style={styles.icon}><Entypo name="eye" size={30} color='#DDE6ED' /></TouchableOpacity>
                  <TextInput style={styles.textInput} placeholderTextColor={'#DDE6ED'} placeholder='Password' secureTextEntry={true} ></TextInput>
              </View>
              <View>
                  <TouchableOpacity style={styles.buttonLogin}>
                      <Text style={styles.textBtn}>LOGIN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={styles.forgotpwTxt}>FORGOT PASSWORD</Text>
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.view4}>
              <TouchableOpacity style={styles.buttonView}>
                  <FontAwesome5_Brands name="google" size={30} color='rgb(221, 80, 54)' />
                  <Text style={styles.buttonTxt}>LOGIN WITH GOOGLE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonView}>
                  <Entypo name="facebook" size={30} color='rgb(27, 117, 214)' />
                  <Text style={styles.buttonTxt}>LOGIN WITH FACEBOOK</Text>
              </TouchableOpacity>
              <Text style={styles.text}>When register in VLearning, it means you agreed with our Policie and Security Policies</Text>

          </View>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 30,
        
    },
    view2:{
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 60

    },
    view3:{
        flexDirection: 'row',
        position: 'relative',
    },
    view4:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput:{
        borderColor: '#DDE6ED',
        color: '#DDE6ED',
        width: 350,
        fontSize: 17,
        margin: 5,
        paddingLeft: 10,
        borderBottomWidth: 2
          
    },
    text1:{
        fontSize: 35,
        fontFamily: 'Dosis-ExtraBold',
        marginBottom: 20,
        color: '#DDE6ED'
    },
    buttonLogin:{
        backgroundColor: '#93BFCF',
        width: 350,
        height: 45,
        borderRadius: 15,
        marginTop: 10
    },
    textBtn: {
        textAlign: 'center',
        fontSize: 22,
        color: '#000000',
        top: 7,
        fontFamily: 'Dosis-Bold'
    },
    icon:{
        position: 'absolute',
        right: 10,
        top: 20,
    },
    forgotpwTxt:{
        fontSize: 20,
        fontFamily: 'Dosis-Bold',
        textAlign: 'center',
        color: '#CCF3EE',
        top: 10
    },
    buttonView:{
        borderColor: '#DDE6ED',
        flexDirection: 'row',
        borderWidth: 2,
        width: 350,
        borderRadius: 15,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
        margin: 5
    },
   
    buttonTxt:{
        color: '#DDE6ED',
        left: 10,
        fontSize: 18,
        fontFamily: 'Dosis-Bold'
    },
   
    text:{
        fontSize: 15,
        color: '#DDE6ED',
        width: 350,
        textAlign: 'center',
        top: 8,
        fontFamily: 'Dosis-Medium'
    },
    icon_arrow:{
        left: 20,
        top: 15
    }

})