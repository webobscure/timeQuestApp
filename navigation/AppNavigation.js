import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import IntroScreen from '../screens/IntroScreen'
import { LogBox } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro page" options={{headerShown: false}} component={IntroScreen} />
                <Stack.Screen name="Login page" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="Sign up page" options={{headerShown: false}} component={SignupScreen} />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}