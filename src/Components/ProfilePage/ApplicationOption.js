import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ApplicationOption = ({ title, icon, style }) => {
    return (
        <TouchableOpacity style={styles.button}>
                <Text style={styles.txt}>{title}</Text>
                <View style={styles.boxicon}>{icon && <FontAwesome color='black' size={32} name={icon} />}</View>
        </TouchableOpacity>
    );
};

export default ApplicationOption

const styles = StyleSheet.create({
  
    button:{
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    txt:{
        fontFamily: 'Dosis-SemiBold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    boxicon:{
        height: 60,
        width: 60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 70,
    },
   
})