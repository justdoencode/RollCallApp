
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";

import StudentsPage from "./pages/StudentsPage/StudentsPage";
import SeniorRollCallPage from "./pages/RollCallPage/SeniorsRollCall/SeniorRollCallPage"
import SeniorAllRollCallPage from "./pages/RollCallPage/SeniorsRollCall/SeniorAllRollCall/SeniorAllRollCall";
import LoginPage from "./pages/LoginPage/LoginPage"
import JuniorRollCallPage from "./pages/RollCallPage/JuniorRollCall/JuniorRollCallPage";
import JuniorAllRollCallPage from "./pages/RollCallPage/JuniorRollCall/JuniorAllRollCallPage/JuniorAllRollCallPage";
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
                    title: "ÖĞRENCİLER",
                    headerStyle: { backgroundColor: "#F26B0F" },
                    headerTitleAlign: "center"
                }} />

                <Stack.Screen name="SeniorRollCallPage" component={SeniorRollCallPage}
                    options={{
                        title: "BÜYÜKLER",
                        headerStyle: { backgroundColor: "#F26B0F" },
                        headerTitleAlign: "center"
                    }} />

                <Stack.Screen name="SeniorAllRollCallPage" component={SeniorAllRollCallPage}
                    options={{
                        title: "YOKLAMALAR",
                        headerStyle: { backgroundColor: "#F26B0F" },
                        headerTitleAlign: "center"
                    }} />

                <Stack.Screen name="JuniorRollCallPage" component={JuniorRollCallPage}
                    options={{
                        title: "KÜÇÜKLER",
                        headerStyle: { backgroundColor: "#F26B0F" },
                        headerTitleAlign: "center"
                    }} />

                <Stack.Screen name="JuniorAllRollCallPage" component={JuniorAllRollCallPage}
                    options={{
                        title: "YOKLAMALAR",
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