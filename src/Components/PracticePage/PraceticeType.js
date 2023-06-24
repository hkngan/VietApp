import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const PraceticeType = ({navigateToQuizScreen, title, name}) => {
    return (
        <TouchableOpacity onPress={navigateToQuizScreen} style={styles.container}>
            <View style={styles.icon}><FontAwesome5 name={name} size={25} color="#ffffff" /></View>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    );
};

export default PraceticeType;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#222',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 18.00,
        shadowRadius: 18.00,
        elevation: 1,
        marginBottom: 10
    },
    icon:{
        backgroundColor: '#1F8A70',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        marginRight: 15    },
    txt:{
        color: 'black',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    }

});
