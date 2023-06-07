import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';
const Skills = () => {
  const skills = [
    {
      id: 1,
      image: require('../../../../assets/image/reading.png'),
      title: 'Reading',
      content: 'Begining | 30%',
    },
    {
      id: 2,
      image: require('../../../../assets/image/speaking.png'),
      title: 'Speaking',
      content: 'Begining | 30%',
    },
    {
      id: 3,
      image: require('../../../../assets/image/writing.png'),
      title: 'Writing',
      content: 'Begining | 30%',
    },
    {
      id: 4,
      image: require('../../../../assets/image/listening.png'),
      title: 'Listening',
      content: 'Begining | 30%',
    },
  ];


  return (
    <View style={styles.view5}>
      {skills.map((skill, index) => (
        <TouchableOpacity style={[styles.view7, styles.shadowProp]} key={index}>
          <Image style={styles.skill_img} source={skill.image} />
          <Text style={styles.title_skill}>{skill.title}</Text>
          <Text style={styles.content_skill}>{skill.content}</Text>
          <ProgressBar
            style={styles.progress_skill}
            progress={0.3}
            color={'#FF8C8C'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

};

export default Skills;

const styles = StyleSheet.create({
    view5:{
        flexDirection: 'row',
        flexWrap: 'wrap',
       justifyContent: 'center'
    },
    view7:{
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 10,
    },
    shadowProp:{
        shadowColor: "#000",
        shadowOffset: {width: 1,height: 1,},
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 0.7,
    },
    skill_img:{
        width: 60,
        height: 60,
        left: 10,
        top: 5
    },
    title_skill:{
        color: 'black',
        fontFamily: 'Dosis-Bold',
        fontSize: 22,
        left: 10
    },
    content_skill:{
        left: 10,
        fontSize: 15,
        fontFamily: 'Dosis-Regular',
        color: 'black'
    },
    progress_skill:{
        width: 120,
        left: 10,
        top: 5
    },
})