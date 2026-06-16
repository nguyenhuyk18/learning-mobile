import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
// import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';
import HomeLayout from './HomeLayout';



export default function RouterNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <>
            <Drawer.Navigator screenOptions={{ headerShown: false }}    >
                <Drawer.Screen options={{ title: 'Trang Chủ' }} name="home1" component={HomeLayout} />
                <Drawer.Screen options={{ title: 'Về Chúng Tôi' }} name="about" component={AboutScreen} />
            </Drawer.Navigator>
        </>
    );
}
