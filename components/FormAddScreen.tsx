import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, StyleSheet, Text, TextInput, View, Modal, TouchableOpacity } from 'react-native';
import { ReviewInterface } from '../interfaces/review.interface';
// import { Modal } from 'react-native';

type ActionAddWorks = {
    setReview: React.Dispatch<
        React.SetStateAction<ReviewInterface[]>
    >;
    visible: boolean;
    setVisible: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};


const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    container: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.2,
        shadowRadius: 12,

        elevation: 10,
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    },

    label: {
        fontSize: 15,
        marginBottom: 8,
        fontWeight: '500',
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 14,
        backgroundColor: '#f7f7f7',
    },

    errorText: {
        color: 'red',
        marginTop: -8,
        marginBottom: 12,
        fontSize: 13,
    },

    buttonPrimary: {
        backgroundColor: '#7B2CBF',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },

    buttonDanger: {
        backgroundColor: '#E63946',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});

export default function FormAddScreen(props: ActionAddWorks) {

    const { setReview, visible, setVisible } = props

    const formik = useFormik({
        // Khởi động giá trị cho thẻ nhập liệu
        initialValues: {
            id: 1,
            title: '',
            star: 0
        },
        // Kiểm tra dữ liệu hợp lệ không
        validationSchema: Yup.object({
            id: Yup.number().typeError("Lớp phải là số !!")
                .integer("Lớp phải là số nguyên !!")
                .required("Vui lòng nhập mã !!"),
            title: Yup.string().required('Vui lòng nhập tiêu đề khóa học!!'),
            star: Yup.number()
                .typeError("Lớp phải là số !!!")
                .integer("Lớp phải là số nguyên !!!")
                .min(1, "Số sao tối thiểu là 1 !!!")
                .max(5, "Số sao tối đa là 5 !!!")
                .required("Vui lòng nhập số sao !!!")
        }),

        onSubmit: async (values: ReviewInterface, { resetForm }) => {
            setVisible(false);
            setReview((prev) => {
                return [...prev, values]
            })
            resetForm()
        },
    });

    return (

        <>
            {/* </View> */}
            <Modal
                visible={visible}
                transparent
                animationType="fade"
            >
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Thêm Review
                        </Text>

                        <Text style={styles.label}>
                            Nhập Mã
                        </Text>

                        <TextInput
                            style={styles.textInput}
                            value={formik.values.id + ''}
                            onChangeText={formik.handleChange('id')}
                            onBlur={formik.handleBlur('id')}
                        />

                        {formik.touched.id &&
                            formik.errors.id && (
                                <Text style={styles.errorText}>
                                    {formik.errors.id}
                                </Text>
                            )}

                        <Text style={styles.label}>
                            Nhập Tiêu Đề
                        </Text>

                        <TextInput
                            style={styles.textInput}
                            value={formik.values.title}
                            onChangeText={formik.handleChange(
                                'title'
                            )}
                            onBlur={formik.handleBlur('title')}
                        />


                        {formik.touched.title &&
                            formik.errors.title && (
                                <Text style={styles.errorText}>
                                    {formik.errors.title}
                                </Text>
                            )}

                        <Text style={styles.label}>
                            Nhập Số Sao
                        </Text>

                        <TextInput
                            style={styles.textInput}
                            value={formik.values.star + ''}
                            onChangeText={formik.handleChange(
                                'star'
                            )}
                            onBlur={formik.handleBlur('star')}
                            keyboardType="numeric"
                        />


                        {formik.touched.star &&
                            formik.errors.star && (
                                <Text style={styles.errorText}>
                                    {formik.errors.star}
                                </Text>
                            )}

                        <TouchableOpacity
                            style={styles.buttonPrimary}
                            onPress={formik.submitForm}
                        >
                            <Text style={styles.buttonText}>
                                XÁC NHẬN
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonDanger}
                            onPress={() =>
                                setVisible(false)
                            }
                        >
                            <Text style={styles.buttonText}>
                                ĐÓNG
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}
