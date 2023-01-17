import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../components/home/Profile';
import Walkthrough from '../components/home/Walkthrough';
import Splash from '../containers/SplashScreen';
import colors from '../themes/colors';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Walkthrought" component={Walkthrough} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
