import { StyleSheet, Text, View, ScrollView,} from 'react-native'
import React from 'react' 
import Skills from '../Components/HomePage/LessonProgress/Skills';
import ProgressHeader from '../Components/HomePage/ProgressHeader';
import Heading from '../Components/HomePage/Heading'
import Achievement from '../Components/HomePage/Achievement';
const Homepage = () => {
  return (
      <ScrollView style={styles.container}>
          <View style={styles.view2}>
              <Heading />
              <ProgressHeader />
          </View>
          <View style={styles.view3}>
              <View style={styles.view5}>
                  <Text style={styles.lesson_txt}>Your lesson</Text>
                  <Skills />
              </View>
              <View>
                  <Text style={styles.lesson_txt}>Your achievement</Text>
                  <Achievement />
              </View>
          </View>
      </ScrollView>
  );
}

export default Homepage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F0EEED',
    },
    view2:{
        flex: 3,
        backgroundColor: '#ffffff',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        width: '100%',
        height: 300,
        alignSelf: 'center',
    },  
    view3:{
        margin: 10
    },
    view5:{
        flex: 6,
       
    },
    lesson_txt:{
        fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 17
    }
      
})