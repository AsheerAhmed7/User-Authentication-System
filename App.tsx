import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import SignUp from './SignUp';
import SplashScreen from './SplashScreen';
import Home from './Home';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
         <Stack.Navigator screenOptions={{
          headerShown:false
         }}>
          <Stack.Screen name="Splash Screen" component={SplashScreen}></Stack.Screen>
         <Stack.Screen name="Login" component={Login}></Stack.Screen>
         <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
         <Stack.Screen name='Home' component={Home} ></Stack.Screen>

          </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
