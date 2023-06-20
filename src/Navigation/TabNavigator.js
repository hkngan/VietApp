import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { HomeStack, LearningPageStack, ProfileStack, PracticeStack } from './StackNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
    <Tab.Navigator>
            <Tab.Screen
                name="HomepageTab"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="home" color="#262A56" size={32} />,
                    tabBarShowLabel: false,                   
                    }}
            />
            <Tab.Screen
                name="LearningTab"
                component={LearningPageStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Ionicons name="book" color="#6DA9E4" size={32} />,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="PracticeTab"
                component={PracticeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons name="trending-up" color="#F6BA6F" size={32} />,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="user" color="#FF78C4" size={32} />,
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
