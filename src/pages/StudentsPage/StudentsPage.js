
import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Alert } from "react-native";

import styles from "./StudentsPage.style"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import database from '@react-native-firebase/database';
import parseData from "../../utils/parseData";
import StudentCard from "../../components/Cards/StudentCard/StudentCard";

import { SelectList } from "react-native-dropdown-select-list";

import { useDispatch } from "react-redux";






const StudentsPage = ({ navigation }) => {

    const [category, setCategory] = React.useState("");

    const initialValues = {
        name: "",
        surname: "",
        year: "",
    }

    const dispatch = useDispatch()
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {

        database().ref("students/").on("value", snapshot => {
            if (snapshot.val()) {
                const parsedData = parseData(snapshot.val())
                setStudentList(parsedData)
            }
        })



    }, [])

    function handleFormSubmit(formvalues) {
        const detail = {
            status: "false",
            category
        }
        const newValues = {
            ...formvalues,
            ...detail
        }
        try {
            database().ref(`students/`).push(newValues);
            showMessage({
                message: "Öğrenci Eklendi",
                type: "success"
            })

        } catch (error) {
            showMessage({
                message: "Öğrenci Eklenirken Bir Hata Oluştu!",
                type: "danger"
            })
        }
    }

    function handleDelete(item) {
        Alert.alert('ÖĞRENCİ SİL', 'Öğrenci Silinsin Mi ?', [
            {
                text: 'Kapat',
                style: 'cancel',
            },
            { text: 'Sil', onPress: () => deleteStudent(item) },
        ]);
    }

    async function deleteStudent(item) {
        try {
            await database().ref(`/students/${item.id}`).remove();
            showMessage({
                message: "Öğrenci Silindi",
                type: "success"
            })
        } catch (error) {
            showMessage({
                message: "Öğrenci Silinirken Bir Problem Oluştu!",
                type: "danger"
            })
        }

    }



    const categoryData = [
        { key: '1', value: 'Küçükler' },
        { key: '2', value: 'Büyükler' },
    ]

    const renderStudent = ({ item }) => <StudentCard student={item} onPress={() => handleDelete(item)} />
    return (

        <View style={styles.conteiner}>
            <View style={styles.input_conteiner}>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}>

                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input
                                placeholder={"İsim.."}
                                onChange={handleChange("name")}
                                value={values.name}
                            />

                            <Input
                                placeholder={"Soyisim.."}
                                onChange={handleChange("surname")}
                                value={values.surname}
                            />

                            <Input
                                placeholder={"Doğum Yılı.."}
                                onChange={handleChange("year")}
                                value={values.year}
                            />

                            <SelectList
                                placeholder="Kategori Seçin"
                                setSelected={(val) => setCategory(val)}
                                data={categoryData}
                                save="value"
                                boxStyles={{ marginBottom: 10, borderColor: "#80C4E9" }}
                            />


                            <Button title={"KAYDET"} onPress={handleSubmit} />
                        </>

                    )}

                </Formik>

            </View>
            <View style={styles.list_conteiner}>
                <FlatList data={studentList} renderItem={renderStudent} />
            </View>

        </View>
    )
}

export default StudentsPage;