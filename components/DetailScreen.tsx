import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces/route.interface';
import { useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    reviewDetail: {
        fontSize: 25,
        padding: 15
    }
})

export default function DetailScreen() {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    const route = useRoute<RouteProp<RootStackParamList, 'review-detail'>>();


    const { id, title, star } = route.params;
    // route.params.id
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 900, fontStyle: 'italic' }} >Trang Chi Tiết Vui Vẻ</Text>

                <View>
                    <Text style={styles.reviewDetail} >ID: {id}</Text>
                    <Text style={styles.reviewDetail} >Tiêu Đề: {title}</Text>
                    <Text style={styles.reviewDetail} >Đánh giá: {star}</Text>
                </View>


                <Button title='Quay Về Trang Chủ' onPress={() => navigation.navigate('home')} />
            </View>
        </>
    );
}
