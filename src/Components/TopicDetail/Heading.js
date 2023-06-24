import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const Heading = ({title}) => {
    const navigation = useNavigation()
    return (
        <View style={style.container}>
           <TouchableOpacity onPress={() => navigation.goBack()} style={style.icon}>
              <Ionicons name="arrow-back-outline" color="black" size={32} />
          </TouchableOpacity>
            <Text style={style.txt}>{title}</Text>
        </View>
    );
}

export default Heading

const style = StyleSheet.create({
    container:{
        padding: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignContent: 'center',
        top: 10
    },
    icon:{
        left: 5,

    },
    txt: {
        color: 'black',
        fontSize: 25,
        left: 15,
        fontFamily: 'Dosis',
        fontWeight: 'bold'
    },
   
})