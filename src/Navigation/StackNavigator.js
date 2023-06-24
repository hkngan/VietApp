import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AllTopic, AnnoucePage, EditProfile, Login, Registration, SkillLesson, TopicDetail, QuizPage, StudyView} from '../Page';
import BottomTab from './TabNavigator';
const Stack = createStackNavigator();
const StackNavigator = () => {
    return(

    <Stack.Navigator>
        <Stack.Screen name='Tab' component={BottomTab} options={{headerShown: false}}/>
        <Stack.Screen name='AllTopicStack' component={AllTopic} options={{headerShown: false}}/>
        <Stack.Screen name='AnnoucePageStack' component={AnnoucePage} options={{headerShown: false}}/>
        <Stack.Screen name='EditProfileStack' component={EditProfile} options={{headerShown: false}}/>
        <Stack.Screen name='LoginStack' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='RegistrationStack' component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name='SkillLessonStack' component={SkillLesson} options={{headerShown: false}}/>
        <Stack.Screen name='TopicDetailStack' component={TopicDetail} options={{headerShown: false}}/>
        <Stack.Screen name='QuizPageStack' component={QuizPage} options={{headerShown: false}}/>
        <Stack.Screen name='StudyViewStack' component={StudyView} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
}

export default StackNavigator;
const styles = StyleSheet.create({});
