import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity,   } from 'react-native'
import {image} from '../../../constants'
import Feather from 'react-native-vector-icons/Feather'
const Heading = ({navigaToAnnouceScreen}) => {    
  return (
    <TouchableOpacity style={styles.view3}>
      <Image style={styles.image_usr} source={image.avatar} />
      <Text style={styles.txt}>Hello, user!</Text>
      <TouchableOpacity style={styles.icon}>
        <Feather name="bell" onPress={navigaToAnnouceScreen} color='black' size={32}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Heading

const styles = StyleSheet.create({
    view3:{
        flex: 0.7,
        flexDirection:'row',

     },
    image_usr:{
        width: 40,
        height: 40,
        top: 15,
        left: 10,
    },
    txt:{
        position: 'absolute',
        top: 20,
        left: 60,
        fontFamily: 'Dosis-SemiBold',
        fontSize: 20,
        color: 'black'
    },
    icon:{
        position: 'absolute',
        top: 20,
        right: 10,
        fontFamily: 'Dosis-SemiBold',
        fontSize: 18,
        color: 'black'
    }
    
})