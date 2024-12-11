
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Button.style"



export default function({title,onPress}){
    return(
        <TouchableOpacity style={styles.conteiner} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}