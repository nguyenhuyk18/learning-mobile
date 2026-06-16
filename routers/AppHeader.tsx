import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../interfaces/route.interface';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingHorizontal: 5,
        paddingBottom: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'space-around',
        paddingTop: 50
        // marginTop: 50
    },
    // headerText: {
    //     marginLeft: 10
    // }



})

export default function AppHeader() {

    const navigation: any = useNavigation()
    return (
        <>
            <View style={styles.container}>
                <AntDesign name="bars" size={24} color="black" onPress={() => {
                    navigation.openDrawer();
                }} />
                <Text>Nguyễn Đức Huy - Ứng Dụng Mobile Ahehe</Text>
            </View>
        </>
    );
}
