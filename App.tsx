// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';



export default function App() {

  const [works, setWorks] = useState<{ ten: String, lop: number }[]>([]);



  const Stack = createNativeStackNavigator()

  const handleAddWork = (work: { ten: String, lop: number }) => {
    setWorks([...works, work])
  }

  const handleDeleteAll = () => {
    setWorks([]);
  }

  const handleAlert = () => Alert.alert('Đây là thông báo vui vẻ', 'A HÉ HÉ', [
    {
      text: 'Hủy Giao Tác',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'Xác Nhận', onPress: () => console.log('OK Pressed') },
  ]);

  const formik = useFormik({
    // Khởi động giá trị cho thẻ nhập liệu
    initialValues: {
      ten: '',
      lop: ''
    },
    // Kiểm tra dữ liệu hợp lệ không
    validationSchema: Yup.object({
      ten: Yup.string().required('Vui lòng nhập tên của bạn !!'),
      lop: Yup.number()
        .typeError("Lớp phải là số !!")
        .integer("Lớp phải là số nguyên !!")
        .required("Vui lòng nhập lớp !!")
    }),

    onSubmit: async (values, { resetForm }) => {
      // console.log(values)
      const tmp: any = values
      handleAddWork(tmp)
      resetForm()
    },
  });


  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
    //   <View style={styles.container}  >
    //     <Text style={styles.header}>TODO-APP</Text>
    //     <View>
    //       <Text>Nhập Họ Và Tên</Text>
    //       <TextInput style={styles.textInput}

    //         value={formik.values.ten}

    //         onChangeText={formik.handleChange("ten")}
    //         onBlur={formik.handleBlur("ten")}

    //       />
    //       {formik.touched.ten && formik.errors.ten && (
    //         <Text style={{ color: "red" }} >{formik.errors.ten}</Text>
    //       )}
    //       {/* </TextInput> */}

    //       <Text>Nhập Lớp</Text>
    //       <TextInput style={styles.textInput} value={formik.values.lop}

    //         onChangeText={formik.handleChange("lop")}
    //         onBlur={formik.handleBlur("lop")}
    //       />
    //       {formik.touched.lop && formik.errors.lop && (
    //         <Text style={{ color: "red" }} >{formik.errors.lop}</Text>
    //       )}
    //       <Button title="Cảnh Báo" color="red" onPress={handleAlert} />
    //       <Button title="Xác Nhận" color="green" onPress={formik.submitForm} />
    //       <Button title="Xóa" color="blue" onPress={handleDeleteAll} />
    //     </View>

    //     <FlatList
    //       style={{ marginTop: 20 }}
    //       data={works}
    //       // keyExtractor={(item) => item.}
    //       renderItem={({ item }) => {
    //         return (
    //           <View style={styles.elementStyle}>
    //             <TouchableOpacity >
    //               <Text> Họ và tên: {item.ten} </Text>
    //               <Text> Lớp: {item.lop} </Text>
    //             </TouchableOpacity >
    //           </View>
    //         )
    //       }}
    //     />
    //   </View>
    // </TouchableWithoutFeedback>

    // <FlexBox />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen

          options={{ title: 'Trang Chủ', headerBackVisible: false }} name='home' component={HomeScreen} />
        <Stack.Screen
          options={{ title: 'Trang Chi Tiết', headerBackVisible: false }}
          name='review-detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    fontSize: 60,
    textAlign: 'center'
  },

  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  textInput: {
    borderColor: 'green',
    borderWidth: 2,
    padding: 10
  },

  elementStyle: {
    marginBottom: 20,
    borderColor: 'red',
    borderStyle: 'dotted',
    borderWidth: 2
  }
});
