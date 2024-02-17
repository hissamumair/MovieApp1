import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';
import 'react-native-gesture-handler';

import { enableScreens } from 'react-native-screens';
import SplashScreen from './screens/SplashScreen';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}  />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
