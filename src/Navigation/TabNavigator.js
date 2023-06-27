import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Homepage, LearningLesson, Practice, ProfilePage} from '../Page'
import { Entypo, FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
    <Tab.Navigator>
            <Tab.Screen
                name="HomepageTab"
                component={Homepage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="home" color="#7AA874" size={32} />,
                    tabBarShowLabel: false,                   
                    }}
            />
            <Tab.Screen
                name="LearningTab"
                component={LearningLesson}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <Entypo name="book" color="#6DA9E4" size={32} />,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="PracticeTab"
                component={Practice}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Entypo name="news" color="#F6BA6F" size={32} />,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfilePage}
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
