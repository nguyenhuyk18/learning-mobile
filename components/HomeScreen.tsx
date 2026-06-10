import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen(props: any) {
    const { navigation } = props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: 900, fontStyle: 'italic' }} >Nguyễn Đức Huy</Text>
            <Button title='Xem Chi Tiết' onPress={() => navigation.navigate("review-detail")} />
        </View>
    );
}
