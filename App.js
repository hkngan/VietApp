import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Homepage from './src/Page/Homepage';
import TrendingPage from './src/Page/TrendingPage';
import ProfilePage from './src/Page/ProfilePage';
import LearningLesson from './src/Page/LearningLesson';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AnnoucePage from './src/Page/AnnoucePage';
import EditProfile from './src/Page/EditProfile';
import Login from './src/Page/Login';
import Registration from './src/Page/Registration';

// import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function ProfileStack() {
    return(
            <Stack.Navigator>
                <Stack.Screen name="ProfiePage" component={ProfilePage} options={{headerShown: false}}/>
                <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}}/>
            </Stack.Navigator>
    )

}

const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator screenOptions={{ activeTintColor: 'blue' }}>
              <Tab.Screen
                  name="1st"
                  component={Homepage}
                  options={{
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => <Entypo name="home" color="#262A56" size={32} />,
                      tabBarShowLabel: false,
                  }}
              />
              <Tab.Screen
                  name="2nd"
                  component={LearningLesson}
                  options={{
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => <FontAwesome name="book" color="#6DA9E4" size={32} />,
                      tabBarShowLabel: false,
                  }}
              />
              <Tab.Screen
                  name="3rd"
                  component={TrendingPage}
                  options={{
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => <Feather name="trending-up" color="#F6BA6F" size={32} />,
                      tabBarShowLabel: false,
                  }}
              />
              <Tab.Screen
                  name="4th"
                  component={AnnoucePage}
                  options={{
                      headerShown: false,
                      tabBarIcon: ({ size, color }) => <FontAwesome name="bell" size={32} color="#22A699" />,
                      tabBarShowLabel: false,
                  }}
              />
              <Tab.Screen
                  name="5th"
                  component={ProfileStack}
                  options={{
                      headerShown: false,
                      tabBarIcon: ({ color, size }) => <FontAwesome name="user" color="#FF78C4" size={32} />,
                      tabBarShowLabel: false,
                  }}
              />
             
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})
