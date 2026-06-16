import React, { useState } from 'react';
import { Button, Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ReviewInterface } from '../interfaces/review.interface';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../interfaces/route.interface';
import AppHeader from '../routers/AppHeader';
import FormAddScreen from './FormAddScreen';

const style = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        marginBottom: 15
    }
})

export default function HomeScreen() {
    // const { navigation } = props;
    const navigation: NavigationProp<RootStackParamList> = useNavigation()

    const [review, setReview] = useState<ReviewInterface[]>([
        {
            id: 1,
            title: 'React Native',
            star: 5
        },
        {
            id: 2,
            title: 'React JS',
            star: 4
        },
        {
            id: 3,
            title: 'Node JS',
            star: 3
        },
    ]);

    const [visible, setVisible] = useState<boolean>(false);



    return (
        <>
            <AppHeader />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 40, fontWeight: 900, fontStyle: 'italic', marginVertical: 20 }} >Nguyễn Đức Huy</Text>


                <Button title='Mở Form' onPress={() => {
                    setVisible(true)
                }} ></Button>

                <FormAddScreen setReview={setReview} visible={visible} setVisible={setVisible} />

                <View style={{ height: 120, width: '80%', marginTop: 20 }}>
                    <FlatList
                        data={review}

                        keyExtractor={(item) => item.id + ''}

                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("review-detail", { id: item.id, star: item.star, title: item.title })}>
                                    <View style={style.reviewItem}>
                                        <Text>{item.title}</Text>
                                        {/* <Text>{item.star}</Text>
                                    <Text>{item.id}</Text> */}
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/* <Button title='Xem Chi Tiết'  /> */}
            </View >
        </>
    );
}
