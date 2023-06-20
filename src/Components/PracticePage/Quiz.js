import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Quiz = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}><FontAwesome5 name="list-alt" size={40} color="black" /></View>
            <Text style={styles.txt}>Quiz</Text>
        </TouchableOpacity>
    );
};

export default Quiz;

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
        marginRight: 10
    },
    txt:{
        color: 'black',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    }

});
