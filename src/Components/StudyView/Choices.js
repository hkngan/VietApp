import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { choiceData } from '../Data'
const Choices = () => {
  return (
    <View style={styles.box}>
        {choiceData.map((choice) => (
            <TouchableOpacity key={choice.id} style={styles.container}>
                <Image source={choice.img} style={styles.img}/>
                <Text style={styles.txt}>{choice.txt}</Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

export default Choices

const styles = StyleSheet.create({
    box:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    container:{
        height: 220,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#333',
        shadowOffset: {
            height:1,
            width:1
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10
    },
    img:{
        height: 150,
        width: 150
    },
    txt:{
        fontSize: 18,
        color: 'black',
        fontFamily: 'Quicksand-Medium'
    }
})