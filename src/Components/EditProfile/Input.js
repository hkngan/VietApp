import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { image } from '../../../constants'

const Input = ({placeholder, labeltext}) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder={placeholder} placeholderTextColor='black' />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    margin: 5,
    alignSelf: 'center'
  },
  textinput:{
    width: 350,
    height: 50,
    padding: 10, 
    margin: 5,
    fontSize: 17,
    backgroundColor: 'white',
    fontFamily: 'Montserrat-Bold',
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: {
    height:1, width:1
    },
    shadowOpacity: 0.18,
    shadowRadius: 2.00,
    elevation: 1,
  
  },
  
})