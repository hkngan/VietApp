import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Heading from '../Components/HomePage/Heading'
import SeachComponent from '../Components/LearningLesson/SeachComponent'
import Categories from '../Components/LearningLesson/Categories'
import Lesson from '../Components/LearningLesson/Lesson'

const LearningLesson = () => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.view2}>
              <Heading />
              <SeachComponent />
          </View>
          <View style={styles.view3}>
              <Text style={styles.txt}>Categories</Text>
              <Categories/>
              <Text style={styles.txt}>Popular Lesson</Text>
              <Lesson/>
          </View>
      </ScrollView>
  );
}

export default LearningLesson

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EDEDED',
        flexDirection: 'column'
    },
    view2:{
        width: '100%',
        height: 300,
        backgroundColor: '#ffffff',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
       
    },
    view3: {
      margin: 10
    },
    txt:{
      fontFamily: 'Dosis-Bold',
      fontSize: 18,
      color: 'black',
      margin: 5
    }
})