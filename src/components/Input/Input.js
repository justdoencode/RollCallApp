
import React from "react";
import { TextInput, View } from "react-native";

import styles from "./Input.style"


export default function({placeholder,onChange,value,isSecure}){
    return(
        <View style={styles.conteiner}>
            <TextInput 
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={isSecure}
            />
        </View>
    )
}
