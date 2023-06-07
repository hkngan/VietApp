import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Lesson = () => {
    const data = [
        {
            id: 1,
            title: '24 Alphabets',
            time: '45mins',
            image: require('../../../assets/image/alphabet.png')
        },
        {
            id: 2,
            title: 'Make you Listening skill better',
            time: '1h:2mins',
            image: require('../../../assets/image/audio.png')
        },
        {
            id: 3,
            title: 'Advanced Reading',
            time: 'not require',
            image: require('../../../assets/image/ebook.png')
        },
        {
            id: 4,
            title: 'Q&A',
            time: '45mins',
            image: require('../../../assets/image/question.png')
        },
        
    ]
  return (
      <View style={styles.box}>
          {data.map((lesson, index) => (
              <TouchableOpacity key={index} style={[styles.item, styles.shadow_Prop]}>
                  <Image source={lesson.image} style={styles.img} />
                  <Text style={styles.title}>{lesson.title}</Text>
                  <Text style={styles.time}>{lesson.time}</Text>
              </TouchableOpacity>
          ))}
      </View>
  );
}

export default Lesson

const styles = StyleSheet.create({
    box:{
       flexDirection: 'column',
       alignItems: 'center'
    },
    item:{
        width: 350,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 19,
        margin: 5 ,
        flexWrap: 'wrap',
        padding: 5
    },
    img:{
        width: 70,
        height: 70
    },
    shadow_Prop:{
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.18,
        shadowRadius: 11.00,
        elevation: 1,
    },
    title:{
        fontFamily: 'Dosis-ExtraBold',
        fontSize: 17,
        margin: 10,
        color: 'black',
        
    },
    time:{
      marginLeft: 10
    }
})