import { StyleSheet } from "react-native";


export default StyleSheet.create({
    conteiner:{
        flexDirection:"row",
        marginTop:10,
        padding:15,
        borderWidth:1,
        borderColor:"#80C4E9",
        borderRadius:20,
        justifyContent:"space-between"

    },
    name_conteiner:{
        flexDirection:"row"
    },
    name:{
        fontWeight:"bold",
        fontSize:15,
    },
    surname:{
        fontWeight:"bold",
        fontSize:15,
    },
    year:{
        fontSize:15,
        fontStyle:"italic"
    },
})