import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        flex:1,
        padding:10,
    },
    header_conteiner:{
        marginBottom:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    header:{
        fontWeight:"bold",
        fontSize:20,
    },
    button_conteiner:{
        width:100,
    },
    input_conteiner:{
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#074799"
    },
    list_conteiner:{
        flex:1,
        marginTop:10,
        borderWidth:1,
        borderRadius:20,
        padding:10,
        borderColor:"#074799"
    }
})