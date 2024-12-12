
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import database from "@react-native-firebase/database"
import { Text } from "react-native-paper";

import styles from "./JuniorAllRollCallPage.style"
import RollCallsStudentCard from "../../../../components/Cards/RollCallsStudentCard/RollCallsStudentCard";

import { showMessage } from "react-native-flash-message";


const JuniorAllRollCallPage = () => {
    const [dates, setDates] = useState([]);
    const [rollCalls, setRollCalls] = useState([])
    const [date, setDate] = useState("");

    useEffect(() => {
        database()
            .ref('rollcall/junior')
            .once('value')
            .then(snapshot => {

                const datesData = Object.keys(snapshot.val());
                setDates(datesData)
            })
    }, [])

    function normalizeData(data) {

        if (Array.isArray(data)) {

            return data.filter((item) => item !== null)

        } else if (typeof data === "object") {
            return Object.values(data);
        }
        return [];
    }

    function handleGetRollCall(stateData) {
        let status = "";
        if (stateData == "Yoklamada Olanlar") {
            status = "true"
        } else if (stateData == "Yoklamada Olmayanlar") {
            status = "false"
        }

        database()
            .ref(`rollcall/junior/${date}`)
            .orderByChild("status")
            .equalTo(status)
            .once("value")
            .then(snapshot => {
                if (snapshot.exists()) {
                    const normalizedData = normalizeData(snapshot.val())
                    setRollCalls(normalizedData);
                } else {
                    showMessage({
                        message: "Seçilen tarihe ait veri bulunamadı",
                        type: "info"
                    })
                }

            })
    }

    

    const selectData = [
        { key: '1', value: 'Yoklamada Olanlar' },
        { key: '2', value: 'Yoklamada Olmayanlar' },
    ]
    const renderRollCall = ({ item }) => <RollCallsStudentCard student={item} />
    return (
        <View style={styles.conteiner}>
            <View style={styles.select_lists_conteiner}>
                <SelectList
                    placeholder="Tarih.."
                    setSelected={(val) => setDate(val)}
                    data={dates}
                    save="value"
                    boxStyles={{ marginBottom: 10, borderColor: "#80C4E9" }}
                />
                <SelectList
                    placeholder="Durum.."
                    setSelected={(val) => handleGetRollCall(val)}
                    data={selectData}
                    save="value"
                    boxStyles={{ marginBottom: 10, borderColor: "#80C4E9" }}
                />
            </View>


            <View style={styles.list_conteiner}>
                <FlatList data={rollCalls} renderItem={renderRollCall} />
            </View>



        </View>
    )
}

export default JuniorAllRollCallPage;
