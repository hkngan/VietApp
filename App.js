import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomTab from './src/Navigation/TabNavigator';
import 'react-native-gesture-handler';
import { EditProfileStack } from './src/Navigation/StackNavigator';
const App = () => {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
        
    );
};

export default App;
