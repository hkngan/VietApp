import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'

const Lesson = ({backgroundColor}) => {
    const data = [
        {
            id: 1,
            title: 'Country',
            amount: '3',
            image: require('../../../assets/image/countries.png')
        },
        {
            id: 2,
            title: 'Job',
            amount: '3',
            image: require('../../../assets/image/job.png')
        },
        {
            id:3,
            title: 'Grocery',
            amount: '3',
            image: require('../../../assets/image/grocery.png')
        },
        {
            id: 4,
            title: 'Books',
            amount: '3',
            image: require('../../../assets/image/book.png')
        },
        {
            id: 1,
            title: 'Gender',
            amount: '3',
            image: require('../../../assets/image/gender.png')
        },
       
        
    ]
  return (
      <ScrollView horizontal style={styles.box}>
          {data.map((lesson, index) => (
              <TouchableOpacity key={index} style={[styles.item, styles.shadow_Prop]}>
                  <Text style={styles.title}>{lesson.title}</Text>
                  <Text style={styles.amount}>0/{lesson.amount}</Text>
                  <Image source={lesson.image} style={styles.img} />

              </TouchableOpacity>
          ))}
      </ScrollView >
  );
}

export default Lesson

const styles = StyleSheet.create({
    box:{
    },
    shadow_Prop:{
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.18,
        shadowRadius: 11.00,
        elevation: 1,
    },
    item:{
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 19,
        margin: 5 ,
        flexWrap: 'wrap',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img:{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 60
    },
   
    title:{
        position: 'absolute',
        fontFamily: 'Dosis-Bold',
        fontSize: 20,
        color: 'black',
        left: 20,
        top: 15
        
    },
    amount:{
        position: 'absolute',
        left: 20,
        top: 40,
        fontFamily: 'Dosis-Bold',
        fontStyle: 'italic'
    }
})