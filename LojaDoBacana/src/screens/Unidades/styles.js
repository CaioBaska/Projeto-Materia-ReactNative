import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',   
    },
    title: {
        marginRight: 150,
        fontSize: 30,
        fontWeight: 'bold'
    },
    separator: {
        borderWidth: 0.5,
        width: '92%',
    },
    post: {
        width: 391,
        height: 391,
        marginBottom: 50
    },  
    gif: {
        width: 390,
        height: 200
    },
    button: {
        fontSize: 20,
        backgroundColor: '#5271ff',
        color: 'white',
        width: 350,
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})