
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";

import StudentsPage from "./pages/StudentsPage/StudentsPage";
import SeniorRollCallPage from "./pages/RollCallPage/SeniorsRollCall/SeniorRollCallPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import JuniorRollCallPage from "./pages/RollCallPage/JuniorRollCall/JuniorRollCallPage";
import HomePage from "./pages/HomePage/HomePage";

import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
    const userSession = useSelector(s => s.formValues);
    const isLoading = useSelector(s => s.isLoading);

    function Login() {
        return (

            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        )
    }

    function Home() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} options={{
                    headerShown: false,
                }} />

                <Stack.Screen name="StudentsPage" component={StudentsPage} options={{
                    title: "Öğrenci Ekle",
                    headerStyle: { backgroundColor: "#F26B0F" },
                    headerTitleAlign: "center"
                }} />

                <Stack.Screen name="SeniorRollCallPage" component={SeniorRollCallPage}
                    options={{
                        title: "Büyükler",
                        headerStyle: { backgroundColor: "#F26B0F" },
                        headerTitleAlign: "center"
                    }} />

                <Stack.Screen name="JuniorRollCallPage" component={JuniorRollCallPage}
                    options={{
                        title: "Küçükler",
                        headerStyle: { backgroundColor: "#F26B0F" },
                        headerTitleAlign: "center"
                    }} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {
                userSession ? (
                    <Stack.Navigator>

                        <Stack.Screen name="Home" component={Home} options={{
                            headerShown: false
                        }} />

                        <Stack.Screen name="Login" component={Login} options={{
                            headerShown: false
                        }} />

                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator>

                        <Stack.Screen name="Login" component={Login} options={{
                            headerShown: false
                        }} />

                        <Stack.Screen name="Home" component={Home} options={{
                            headerShown: false
                        }} />

                    </Stack.Navigator>
                )
            }

            <FlashMessage position={"center"} />
        </NavigationContainer>

    )
}

export default Router;