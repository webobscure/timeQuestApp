import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import IntroScreen from '../screens/IntroScreen'
import { LogBox } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import NavigationScreen from '../screens/NavigationScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventScreen from '../screens/EventScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import Navbar from '../components/Navbar';

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
                <Stack.Screen name="Navigation page" options={{headerShown: false}} component={NavigationScreen} />
                <Stack.Screen name="Home page" options={{headerShown: false}} component={HomeScreen} />
                <Stack.Screen name="Profile page" options={{headerShown: false}} component={ProfileScreen} />
                <Stack.Screen name="Event page" options={{headerShown: false}} component={EventScreen} />
                <Stack.Screen name="Favorite page" options={{headerShown: false}} component={FavoriteScreen} />
                <Stack.Screen name="Navbar" options={{headerShown: false}} component={Navbar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}