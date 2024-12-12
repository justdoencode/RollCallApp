import { Dimensions, StyleSheet } from "react-native";
const windowDimensions=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        flex:1,
        padding:10,
    },
    calendar: {
        borderWidth: 1,
        borderRadius:20,
        padding:5,
        marginTop:10,
    },
    list_conteiner:{
        flex:1,
        marginTop:10,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        marginBottom:10,
    },
    rollcalls_button_conteiner:{
        width:200,
        alignSelf:"center",
    }
})