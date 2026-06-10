import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces/route.interface';

export default function DetailScreen() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 900, fontStyle: 'italic' }} >Trang Chi Tiết Vui Vẻ</Text>
                <Button title='Quay Về Trang Chủ' onPress={() => navigation.navigate('home')} />
            </View>
        </>
    );
}
