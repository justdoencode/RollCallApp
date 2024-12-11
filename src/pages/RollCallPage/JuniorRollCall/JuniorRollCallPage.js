
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';

import database from "@react-native-firebase/database"

import styles from "./JuniorRollCallPage.style"
import parseData from "../../../utils/parseData";
import CalendarStudentCard from "../../../components/Cards/CalendarStudentCard/CalendarStudentCard";
import Button from "../../../components/Button/Button";
import { showMessage } from "react-native-flash-message";





const JuniorRollCallPage = () => {
    const [selected, setSelected] = useState(" ");
    const [studentList, setStudentList] = useState([]);
    const [rollCallList, setRollCallList] = useState([])
    const [trigger, setTrigger] = useState(false)


    function FetchData() {
        database().ref("students/").orderByChild("category").equalTo("Küçükler").on("value", snapshot => {
            if (snapshot.val()) {
                const parsedData = parseData(snapshot.val())
                setStudentList(parsedData)
            }

        })
    }

    //İlk Render da Çalışır
    useEffect(() => {
        FetchData();
    }, [])

    //Her Tarih Seçildiğinde studentList in ilk halini getirmek için çalışır
    useEffect(() => {
        FetchData();
    }, [trigger])




    //Öğrencinin status değeri değiştiğinde
    function handleCheckedChange(checked, student) {
        rollCallList.forEach((item) => {
            if (item === student) {
                student.status = checked
            }
        })
    }


    //Takvimden tarih seçildiğinde o tarihte veri var ise verileri getirir.
    const handleGetStudentWithDate = (day) => {
        setTrigger(prev => !prev)
        database().ref(`/rollcall/${day.dateString}`).
            on("value", snapshot => {
                const data = snapshot.val();
                if (!!data) {
                    setRollCallList(data);
                }
                else {
                    setRollCallList(studentList)
                }
            })
    }

    //Kaydet Butonu Tetikler. Verileri kaydeder
    function handleSave() {
        database().ref(`/rollcall/${selected}/`).set(rollCallList);
        showMessage({
            message: "Yoklama Kaydedildi",
            type: "success"
        })
    }

    const renderStudents = ({ item }) => <CalendarStudentCard
        student={item}
        onCheckedChange={handleCheckedChange} />


    const today = new Date().toISOString().split('T')[0];
    const memoizedData = useMemo(() => !!rollCallList ? rollCallList : studentList, [rollCallList, studentList]);

    LocaleConfig.locales['tr'] = {
        monthNames: [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
            'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
        ],
        monthNamesShort: [
            'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
            'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara',
        ],
        dayNames: [
            'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi',
        ],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        today: "Bugün"
    };

    LocaleConfig.defaultLocale = 'tr';
    return (
        <View style={styles.conteiner}>
            <View>
                <Calendar
                    style={styles.calendar}
                    firstDay={1}
                    current={today}
                    onDayPress={day => {
                        setSelected(day.dateString);

                        handleGetStudentWithDate(day)
                    }}

                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}

                />
            </View>


            <View style={styles.list_conteiner}>
                <FlatList
                    data={memoizedData}
                    renderItem={renderStudents}
                    keyExtractor={(item, index) => item.id?.toString() || index.toString()}
                />

            </View>
            <Button title="KAYDET" onPress={handleSave} />

        </View>

    )
}


export default JuniorRollCallPage;