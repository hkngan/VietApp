import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Heading from '../Components/HomePage/Heading';
import SeachComponent from '../Components/LearningLesson/SeachComponent';
import Categories from '../Components/LearningLesson/Categories';
import Lesson from '../Components/LearningLesson/Lesson';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
const LearningLesson = () => {
    const navigation = useNavigation()
    const navigateToAllTopic = () => {
        navigation.navigate('AllTopicStack')
    }
    const navigateToTopicDetail = () => {
        navigation.navigate('TopicDetailStack')
    }
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={styles.box}>
                    <SeachComponent />
                    <Text style={styles.txt}>Categories</Text>
                    <Categories />
                    <View style={styles.txtView}>
                        <Text style={styles.txt1}>Popular Topic</Text>
                        <TouchableOpacity onPress={navigateToAllTopic}>
                            <Text style={styles.txt2}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal>
                        <Lesson navigateToTopicDetail={navigateToTopicDetail} />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default LearningLesson;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E9E9',
        flexDirection: 'column',
    },
    box: {
        flex: 1,
        padding: 20,
        marginTop: 10
    },
    txt: {
        fontFamily: 'Dosis-Bold',
        fontSize: 20,
        color: 'black',
        marginTop: 20,
        marginBottom: 10
    },
    txt1: {
        fontFamily: 'Dosis-Bold',
        fontSize: 20,
        color: 'black',
        marginBottom: 10

    },
    txt2:{
        fontFamily: 'Dosis-Bold',
        fontSize: 18,
        color: 'blue',
    },
    txtView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    }
});
