import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity,   } from 'react-native'
import {image} from '../../../constants'

const Heading = () => {
  return (
    <TouchableOpacity style={styles.view3}>
      <Image style={styles.image_usr} source={image.avatar} />
      <Text style={styles.txt}>Hello, user!</Text>
    </TouchableOpacity>
  );
};

export default Heading

const styles = StyleSheet.create({
    view3:{
        flex: 0.5,
        flexDirection:'row',
     },
    image_usr:{
        width: 40,
        height: 40,
        top: 10,
        left: 10,
    },
    txt:{
        position: 'absolute',
        top: 20,
        left: 60,
        fontFamily: 'Dosis-SemiBold',
        fontSize: 18,
        color: 'black'
    },
    
})