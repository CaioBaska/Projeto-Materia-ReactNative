import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
        marginBottom:50,
    },
    inputContainer:{
        marginBottom:20,
    },
    buttonContainer:{
        marginTop: 20,
    },
    modalView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 18,
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 32,
        marginTop:10
        //top: -10
    },
    separator: {
        borderWidth: 0.5,
        width: '92%',
        top: -20
    },
    image: {
        width: 450,
        height: 450,
    },
    Info: {
        color: 'red'
    }
})