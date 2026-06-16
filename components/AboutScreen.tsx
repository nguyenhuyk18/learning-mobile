import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../routers/AppHeader';

export default function AboutScreen() {
    return (
        <>
            <AppHeader />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 900, fontStyle: 'italic', textAlign: 'center' }} >Về Thông Tin Của Chúng Tôi</Text>


            </View>
        </>
    );
}
