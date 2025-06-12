import React, { Suspense, lazy } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import { Text } from 'react-native';

const ProfileScreen = lazy(() => import('../screens/profile/ProfileScreen'));
const DashboardScreen = lazy(() => import('../screens/dashboard/DashboardScreen'));
const CreatePostScreen = lazy(() => import('../screens/dashboard/CreatePostScreen'));

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Suspense fallback={<Text>Loading...</Text>}>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Dashboard" component={DashboardScreen} />
                    <Stack.Screen name="CreatePost" component={CreatePostScreen} />
                </Stack.Navigator>
            </Suspense>
        </NavigationContainer>
    );
};

export default AppNavigator;
