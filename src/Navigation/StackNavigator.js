import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Homepage from '../Page/Homepage';
import LearningLesson from '../Page/LearningLesson';
import TrendingPage from '../Page/TrendingPage';
import AnnoucePage from '../Page/AnnoucePage';
import ProfilePage from '../Page/ProfilePage';
import EditProfile from '../Page/EditProfile';
import Login from '../Page/Login';
import Registration from '../Page/Registration';
import SkillLesson from '../Page/SkillLesson';
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
            </Stack.Navigator>
    );
};

const TrendingStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="TrendingPageStack" component={TrendingPage} options={{ headerShown: false }} />
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


export { HomeStack, LearningPageStack, ProfileStack, TrendingStack };
const styles = StyleSheet.create({});
