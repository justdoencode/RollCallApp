
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"

import styles from "./CalendarStudentCard.style"
import { RadioButton } from 'react-native-paper';


export default function ({ student, onCheckedChange }) {

    const [checked, setChecked] = React.useState(student.status);
    const [conteiner,setConteiner]=useState("private_conteiner")
    
    useEffect(()=>{
        setChecked(student.status);

        //conteiner view in seçili olup olmama durumuna göre stili belirleme
        if(student.status=="true"){
            setConteiner("second_conteiner")
        }else{
            setConteiner("private_conteiner")
        }
        
    },[student])

    
    
    return (

        <View style={styles[conteiner]}>

            <View style={styles.name_conteiner}>
                <Text style={styles.name}>{`${student.name} `}</Text>
                <Text style={styles.surname}>{`${student.surname}`}</Text>
            </View>
            <View style={styles.year_conteiner}>
                <Text style={styles.year}>{`${student.year}`}</Text>

            </View>

            <RadioButton
                value={checked}
                
                status={checked === 'true' ? 'checked' : 'unchecked'}
                onPress={() => {
                    onCheckedChange(checked === "true" ? "false" : "true",student)
                    setChecked(checked === "true" ? "false" : "true")
                }}

            />

        </View>
        
        
    )
    


}