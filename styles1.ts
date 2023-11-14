import { StyleSheet } from 'react-native';

export const styles1 = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    
    image:{
        width: 280,
        height:150,
        marginTop: 120
    },
    button:{
        backgroundColor: '#f29200',
        width: 370,
        height: 40,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 200
    },
    buttonText:{
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    ajuda:{
        color: 'white',
        marginTop: 40,
        fontSize: 17
    },

    mostrar:{
        color: 'white',
        marginTop: 50,
        fontSize: 17
    },

    versao:{
        color: 'white',
        marginTop: 25,
        fontSize: 17
    }
})