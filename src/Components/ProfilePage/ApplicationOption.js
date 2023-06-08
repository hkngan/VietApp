import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ApplicationOption = ({ title, icon }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <View style={styles.box1}>
                <Text style={styles.txt}>{title}</Text>
                <View style={styles.boxicon}>{icon && <Image style={styles.icon} source={icon} />}</View>
            </View>
        </TouchableOpacity>
    );
};

export default ApplicationOption

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 80,
        justifyContent: 'center'
    },
    box1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    txt:{
        fontFamily: 'Dosis-SemiBold',
        fontSize: 20,
        color: 'black'
    },
    boxicon:{
        height: 60,
        width: 60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 70,
        marginRight:20
    },
    icon:{
        height: 40,
        width: 40,        
    }
})