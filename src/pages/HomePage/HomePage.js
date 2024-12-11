
import React from "react";
import { TouchableOpacity, View } from "react-native";

import styles from "./HomePage.style"
import { Text } from "react-native-paper";
import { Image } from "react-native";

import { useDispatch } from "react-redux";



const HomePage = ({ navigation }) => {

    function handleLogOut() {
        dispatch({ type: "REMOVE_USER" })
        navigation.navigate("Login")
    }

    const dispatch=useDispatch();
    return (
        <View style={styles.conteiner}>

            <Image source={require("../../asstes/nevsu.png")}
                style={styles.header_image} />

            <TouchableOpacity style={styles.exit_button}
                onPress={handleLogOut}>
                <Text style={styles.exit_button_title}>ÇIKIŞ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.students_button}
                onPress={() => navigation.navigate("StudentsPage")}>

                <Image source={require("../../asstes/students_icon.png")}
                    style={styles.students_button_image} />

                <Text style={styles.button_title}>ÖĞRENCİLER</Text>
            </TouchableOpacity>

            <View style={styles.inner_conteiner}>

                <TouchableOpacity style={styles.junior_button}
                    onPress={() => navigation.navigate("JuniorRollCallPage")}>

                    <Image source={require("../../asstes/rollcallicon.png")}
                        style={styles.rollcall_button_image} />

                    <Text style={styles.button_title}>KÜÇÜKLER YOKLAMA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.senior_button}
                    onPress={() => navigation.navigate("SeniorRollCallPage")}>
                    <Image source={require("../../asstes/rollcallicon.png")}
                        style={styles.rollcall_button_image} />
                    <Text style={styles.button_title}>BÜYÜKLER YOKLAMA</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomePage;