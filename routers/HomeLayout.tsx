import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../interfaces/route.interface';
import HomeScreen from '../components/HomeScreen';
import DetailScreen from '../components/DetailScreen';
import AppHeader from './AppHeader';

export default function HomeLayout() {
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}  >
                <Stack.Screen

                    options={{ title: 'Trang Chủ', headerBackVisible: false, header: () => <AppHeader /> }} name='home' component={HomeScreen}

                />
                <Stack.Screen
                    options={{ title: 'Trang Chi Tiết', headerBackVisible: false, header: () => <AppHeader /> }}
                    name='review-detail' component={DetailScreen} />
            </Stack.Navigator>
        </>
    );
}
