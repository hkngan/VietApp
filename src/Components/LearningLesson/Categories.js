import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { categoriesData } from '../Data'
const Categories = () => {
   
  return (
    <View style={styles.box}>
        {categoriesData.map((skill, index) => (
            <TouchableOpacity key={index} style={[styles.categories, styles.shadow_Prop]}>
                <Image style={styles.img} source={skill.image}/>
                <Text style={styles.txt}>{skill.title}</Text>
            </TouchableOpacity>
        ))} 
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    box:{
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: 5,
        width: '100%'
    },
    categories:{
        width: 180,
        height: 100,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    img:{
        width: 70,
        height: 70,
    },
    txt: {
        fontSize: 18,
        fontFamily: 'Dosis-Bold',
        color: 'black'

    },
    shadow_Prop:{
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.18,
        shadowRadius: 11.00,
        elevation: 1,
    },
})