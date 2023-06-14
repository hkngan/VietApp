import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { image } from '../../../constants'

const Input = ({placeholder, labeltext}) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder={placeholder} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    margin: 5,
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
    shadowOpacity: 40.00,
    shadowRadius: 20.00,
    elevation: 2.00
  },
  
})