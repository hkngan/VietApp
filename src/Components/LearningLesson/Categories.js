import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Categories = () => {
    const data = [
        {
            id: 1,
            title: 'Reading',
            image: require('../../../assets/image/reading.png')
        },
        {
            id: 2,
            title: 'Speaking',
            image: require('../../../assets/image/speaking.png')
        },
        {
            id: 3,
            title: 'Listening',
            image: require('../../../assets/image/listening.png')
        },
        {
            id: 4,
            title: 'Writing',
            image: require('../../../assets/image/writing.png')
        },
    ]
  return (
    <View style={styles.box}>
        {data.map((skill, index) => (
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