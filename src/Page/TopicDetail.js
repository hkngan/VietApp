import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import {
    Heading,
    Lesson,
    LearningTrick,
    StoryLesson,
    TitleLesson,
} from '../Components/TopicDetail';
import { data, trickData, storyLessonData  } from '../Components/Data';
import {useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
const TopicDetail = () => {
    const navigation = useNavigation()
    
    return (
        <SafeAreaView style={style.container}>
            <Heading title="Country" />
            <View style={style.box}>
                <TitleLesson backgroundColor="#176B87" title="Learning by practice" />
                {data.map((lesson) => (
                    <Lesson key={lesson.id} title={lesson.title} level={lesson.level} backgroundColor="#176B87" navigateToStudyView={() => navigation.navigate('StudyViewStack')} />
                ))}

                {trickData.map((trick) => (
                    <LearningTrick key={trick.id} title={trick.title} level={trick.level} backgroundColor="#176B87" />
                ))}

                <View style={style.box2}>
                    <TitleLesson backgroundColor="#1F8A70" title="Practice with a story" />

                    {storyLessonData.map((story) => (
                        <StoryLesson
                            key={story.id}
                            icon={story.iconName}
                            title={story.title}
                            backgroundColor="#1F8A70"
                        />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TopicDetail;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E9E9',
    },
    box: {
        backgroundColor: '#EEEEEE',
        flex: 1,
        padding: 20,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            height:1,
            width:1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.00,
        elevation: 1
    },
    box2:{
      top: 15
    }
});
