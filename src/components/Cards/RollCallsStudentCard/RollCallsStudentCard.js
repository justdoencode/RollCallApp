
import React from "react"
import { Text, View } from "react-native"

import styles from "./RollCallsStudentCard.style"

export default function ({ student }) {
    return (
        <View style={styles.conteiner}>

            <View style={styles.name_conteiner}>
                <Text style={styles.name}>{`${student.name} `}</Text>
                <Text style={styles.surname}>{`${student.surname}`}</Text>
            </View>

            <View style={styles.year_conteiner}>
                <Text style={styles.year}>{`${student.year}`}</Text>
            </View>
        </View>
    )
}