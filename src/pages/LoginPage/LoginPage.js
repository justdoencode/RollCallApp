
import { Image, View } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import styles from "./LoginPage.style"
import { Text } from "react-native-paper";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";

import { useDispatch } from "react-redux";




const LoginPage = ({ navigation }) => {
    const initialValues = {
        email: "",
        password: ""
    }

    const dispatch=useDispatch();
    
    async function handleFormSubmit(formValues){
        
        try {
           await auth().signInWithEmailAndPassword(formValues.email,formValues.password);
           
           dispatch({type:"SET_USER",payload:{formValues}})
           navigation.navigate("Home")
           
        } catch (error) {
            showMessage({
                message:"Giriş Yapılamadı",
                type:"danger"
            })
        }
    }
    return (
        <View style={styles.conteiner}>
            <Image style={styles.image} source={require("../../asstes/nevsu.png")} />
            <Text style={styles.header}>GİRİŞ</Text>
            <View style={styles.line}></View>
            <View style={styles.input_conteiner}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <>
                            <Input
                                placeholder={"email.."}
                                onChange={handleChange("email")}
                                value={values.email}
                            />

                            <Input
                                placeholder={"şifre.."}
                                onChange={handleChange("password")}
                                value={values.password}
                                isSecure
                            />

                            <Button title="Giriş" onPress={handleSubmit} />
                        </>

                    )}

                </Formik>

            </View>
        </View>
    )
}

export default LoginPage;