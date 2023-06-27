import { StyleSheet, Text, View, ScrollView,} from 'react-native'
import React from 'react' 
import Skills from '../Components/HomePage/Skills';
import ProgressHeader from '../Components/HomePage/ProgressHeader';
import Heading from '../Components/HomePage/Heading'
import Lesson from '../Components/LearningLesson/Lesson';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFonts} from 'expo-font'

const Homepage = () => {
    const navigation = useNavigation();
    const navigaToAnnouceScreen = () => {
        navigation.navigate('AnnoucePageStack');
    };
    const navigateToTopicDetail = () => {
        navigation.navigate('TopicDetailStack');
    };

    const [fontsLoaded] = useFonts({
        'Quicksand-Medium': require('../../assets/font/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../../assets/font/Quicksand-SemiBold.ttf')

    })
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.view1}>
                <View style={styles.header}>
                    <Heading navigaToAnnouceScreen={navigaToAnnouceScreen}/>
                </View>
                <ScrollView contentInset={{bottom: 50}} style={styles.content}>
                    <ProgressHeader/>
                    <Text style={styles.txt}>Recent process</Text>
                    <Skills />
                    <Text style={styles.txt}>Recent topics</Text>
                    <ScrollView horizontal>
                        <Lesson navigateToTopicDetail={navigateToTopicDetail} />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Homepage

const HEADER_HEIGHT = 70
const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 100,
        backgroundColor: '#D2E9E9',
    },
    header:{
        height: HEADER_HEIGHT,
    },
    content:{
        paddingTop: 5,
        position: 'relative',
    },
    txt: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'Quicksand-SemiBold'
    }
    
      
})