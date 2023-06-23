import { StyleSheet, Text, View, ScrollView,} from 'react-native'
import React from 'react' 
import Skills from '../Components/HomePage/Skills';
import ProgressHeader from '../Components/HomePage/ProgressHeader';
import Heading from '../Components/HomePage/Heading'
import {useNavigation} from '@react-navigation/native'
import Lesson from '../Components/LearningLesson/Lesson';
const Homepage = () => {
    const navigation = useNavigation()
    const navigaToAnnouceScreen = () => {
        navigation.navigate('AnnoucePageStack')
    }
    const navigateToTopicDetail = () => {
        navigation.navigate('TopicDetailStack')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.view2}>
                <Heading navigaToAnnouceScreen={navigaToAnnouceScreen} />
                <ProgressHeader />
            </View>
            <View style={styles.view3}>
                <Text style={styles.lesson_txt}>Recent process</Text>
                <Skills />
                <Text style={styles.lesson_txt}>Recent topics</Text>
                <ScrollView horizontal>
                    <Lesson navigateToTopicDetail={navigateToTopicDetail} />
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default Homepage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D2E9E9',
    },
    view2:{
        flex: 3,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        width: '100%',
        height: 290,
        alignSelf: 'center',
    },  
    view3:{
        margin: 10,   
    },
    lesson_txt:{
        fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 5
    }
      
})