import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const UIButton = ({title, icon, backgroundColor, event}) => {
    const styles = {
        buttonLogin:{
            backgroundColor: backgroundColor,
            width: 350,
            height: 45,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5
    
        },
        textBtn: {
            fontSize: 22,
            fontFamily: 'Montserrat-Bold',
            color: '#ffffff',
            fontSize: 18,
            textTransform: 'uppercase'
        },
        
        
    }
    return (
        <TouchableOpacity style={styles.buttonLogin} onPress={event}>
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    );
};

export default UIButton

