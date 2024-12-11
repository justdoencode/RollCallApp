import { Dimensions, StyleSheet } from "react-native";

const windowDimensions=Dimensions.get("window")
export default StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:"center",
        padding:10,
    },
    image:{
        height:200,
        width:200,
        alignSelf:"center",
        marginBottom:50,
    },
    header:{
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10,
    },
    line:{
        height:3,
        width:windowDimensions.width -100,
        backgroundColor:"#80C4E9",
        marginBottom:30,
        alignSelf:"center"
    },
    input_conteiner:{
        borderWidth:1,
        borderColor:"#80C4E9",
        borderRadius:20,
        padding:20,
        paddingTop:30,
        paddingBottom:30,
    }
})