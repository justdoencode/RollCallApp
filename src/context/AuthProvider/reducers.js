import AsyncStorage from "@react-native-async-storage/async-storage";


export default function reducers(state, action) {
    switch (action.type) {
        case "SET_USER":
            const { formValues } = action.payload;
            AsyncStorage.setItem("@USER",JSON.stringify(formValues))
            return { ...state, formValues }
        
        case "REMOVE_USER":
            AsyncStorage.removeItem("@USER");
            return {...state,user:null}
        default:
            return state
    }
}