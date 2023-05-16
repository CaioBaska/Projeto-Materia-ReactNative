import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    switchContainer:{
        flexDirection:'row',
        marginTop:10, 
    },
    txtLocal:{
        color:'#800000',
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
        marginLeft:70

    },
    image: {
        height: 150,
        width: 380,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 8,
        resizeMode:'contain',
    },
    header: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',   
    },
    title: {
        marginRight: 100,
        fontSize: 30,
        fontWeight: 'bold'
    },
    separator: {
        borderWidth: 0.5,
        width: '92%',
    },
})