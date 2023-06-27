import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { image } from '../../../constants';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font'; 
const Heading = ({ navigaToAnnouceScreen }) => {
  const [fontsLoaded] = useFonts({
    'Quicksand-Medium': require('../../../assets/font/Quicksand-Medium.ttf')
  })
    return (
        <View style={styles.view3}>
            <Image style={styles.image_usr} source={image.avatar} />
            <Text style={styles.txt}>Hello, user!</Text>
            <TouchableOpacity style={styles.icon} onPress={navigaToAnnouceScreen}>
                {/* <Image source={image.announce} style={styles.icon}/> */}
                <Feather name="home" size={28} color="black"/>           
            </TouchableOpacity>
        </View>
    );
};

export default Heading;

const styles = StyleSheet.create({
    view3: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    image_usr: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 15,
        left: 10,
    },
    txt: {
        position: 'absolute',
        top: 20,
        left: 60,
        fontFamily: 'Quicksand-Medium',
        fontSize: 20,
        color: 'black',
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
