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
const TopicDetail = () => {
    const navigation = useNavigation()
    
    return (
        <View style={style.container}>
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
        </View>
    );
};

export default TopicDetail;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E9E9',
    },
    box: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            height:3,
            width:3
        },
        shadowOpacity: 30.00,
        shadowRadius: 30.00,
        elevation: 5
    },
    box2:{
      top: 15
    }
});
