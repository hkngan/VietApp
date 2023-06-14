import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { image } from '../../../constants'

const Input = ({placeholder, labeltext}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>{labeltext}</Text>
        <TextInput style={styles.textinput} placeholder={placeholder} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    margin: 5
  },
  textinput:{
    width: 350,
    height: 45,
    borderColor: '#999',
    borderBottomWidth: 1,
    padding: 10, 
    fontSize: 17,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    fontFamily: 'Montserrat-Bold',


    
  },
  txt:{
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    margin: 5,
    bottom: 10
  }
})