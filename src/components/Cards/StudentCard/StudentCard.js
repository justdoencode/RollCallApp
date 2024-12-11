
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import styles from "./StudentCard.style"

export default function ({ student,onPress }) {
    return (
        <View style={styles.conteiner}>

            <View style={styles.name_conteiner}>
                <Text style={styles.name}>{`${student.name} `}</Text>
                <Text style={styles.surname}>{`${student.surname}`}</Text>
            </View>

            <View style={styles.year_conteiner}>
                <Text style={styles.year}>{`${student.year}`}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.image} source={require("../../../asstes/deleteicon.png")} />
            </TouchableOpacity>
        </View>
    )
}