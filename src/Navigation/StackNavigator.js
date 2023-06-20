import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Homepage, LearningLesson, Practice, AllTopic, AnnoucePage, ProfilePage,EditProfile, Login, Registration,SkillLesson,TopicDetail} from '../Page';
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="HomepageStack" component={Homepage} options={{ headerShown: false }} />
                <Stack.Screen name='LessonStack' component={SkillLesson} options={{headerShown: false}} />
                <Stack.Screen name="AnnouncePageStack" component={AnnoucePage} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
};

const LearningPageStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="LearningLessonStack" component={LearningLesson} options={{ headerShown: false }} />
                <Stack.Screen name="AllTopicStack" component={AllTopic} options={{ headerShown: false }} />
                <Stack.Screen name="TopicDetailStack" component={TopicDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
};

const PracticeStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="PracticePageStack" component={Practice} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
};

const ProfileStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="ProfilePageStack" component={ProfilePage} options={{ headerShown: false }} />
                <Stack.Screen name="EditProfilePageStack" component={EditProfile} options={{ headerShown: false }} />
            </Stack.Navigator>
    );
};

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginStack' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
const RegistrationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='RegistrationStack' component={Registration} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
const WelcomeStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='WelcomeStack' component={WelcomeStack}/>
        </Stack.Navigator>
    )
}


export { HomeStack, LearningPageStack, ProfileStack, PracticeStack };
const styles = StyleSheet.create({});
