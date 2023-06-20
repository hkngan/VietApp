import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';
const Skills = () => {
  const skills = [
    {
      id: 1,
      image: require('../../../assets/image/reading.png'),
      title: 'Reading',
      content: 'Begining | 30%',
    },
    {
      id: 2,
      image: require('../../../assets/image/speaking.png'),
      title: 'Speaking',
      content: 'Begining | 30%',
    },
    {
      id: 3,
      image: require('../../../assets/image/writing.png'),
      title: 'Writing',
      content: 'Begining | 30%',
    },
    {
      id: 4,
      image: require('../../../assets/image/listening.png'),
      title: 'Listening',
      content: 'Begining | 30%',
    },
  ];


  return (
      <View style={styles.view5}>
          {skills.map((skill, index) => (
              <TouchableOpacity style={[styles.view7, styles.shadowProp]} key={index}>
                  <View style={styles.borderImg}>
                      <Image style={styles.skill_img} source={skill.image} />
                  </View>
                  <Text style={styles.title_skill}>{skill.title}</Text>
                  <Text style={styles.content_skill}>{skill.content}</Text>
                  <ProgressBar style={styles.progress_skill} progress={0.3} color={'#FF8C8C'} />
              </TouchableOpacity>
          ))}
      </View>
  );

};

export default Skills;

const styles = StyleSheet.create({
    view5: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    view7: {
        width: 390,
        height: 110,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        margin: 5,
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 0.7,
    },
    skill_img: {
        width: 60,
        height: 60,
    },
    title_skill: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'Dosis-Bold',
        fontSize: 22,
        left: 100,
        top: 30,
    },
    content_skill: {
        position: 'absolute',
        left: 100,
        fontSize: 15,
        fontFamily: 'Dosis-Regular',
        color: 'black',
        top: 60,
    },
    progress_skill: {
       position:'absolute',
        width: '60%',
        left: 100,
        top: -10
    },
    borderImg:{
      height: 80,
      width: 80,
      left: 10,
      borderRadius: 15,
      backgroundColor: '#FAF0E4',
      alignItems: 'center',
      justifyContent: 'center'
    }
});