import { Platform, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    logo:{
        marginTop: 40,
        marginBottom: 20,
        height: 80,
        width: 250,
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#a5bcbc',
        marginLeft: -25,
        marginBottom: 30,
    },
    bonecoText:{
        flexDirection: 'row',
        fontWeight: 'bold',
        marginLeft: -310
    },
    text:{
        fontSize: 20,
        color: '#a5bcbc',
    },
    input: {
        borderBottomColor: '#F29200',
        borderBottomWidth: 2, 
        height: 40,
        width: 370,
        color: 'black',
        marginBottom: 20
    },
    button:{
        backgroundColor: '#f29200',
        width: 370,
        height: 40,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonText:{
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    novo:{
        color: 'blue',
        fontSize: 17,
        fontWeight: 'bold',
    },
    footer:{
        color: 'blue',
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
})