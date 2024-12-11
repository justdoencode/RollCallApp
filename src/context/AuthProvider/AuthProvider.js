
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";



const AuthProvider = ({ children }) => {
    const [formValues, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("Provider Use Effect")
        AsyncStorage.getItem("@USER").then(userSession => {
            userSession && setUser(JSON.parse(userSession))
            setIsLoading(false)
        })
    }, [])
    if (!isLoading) {
        console.log("Provider değer " + formValues)
        const store = createStore(reducers, { formValues, isLoading })
        return <Provider store={store}>{children}</Provider>
    }

    
}

export default AuthProvider;