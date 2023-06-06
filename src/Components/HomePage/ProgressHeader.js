import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'

const ProgressHeader = () => {
  return (
    <View style={styles.view4}>
      <ProgressCircle
        percent={30}
        radius={50}
        borderWidth={8}
        color="#FF8C8C"
        shadowColor="#EDEDED"
        bgColor="#fff"
        outerCircleStyle={{left: 15}}>
        <Text style={styles.txt_progress}>{'30%'}</Text>
      </ProgressCircle>
      <Text style={styles.txt2}>Good result!</Text>
      <Text style={styles.txt3}>Your Vietnamese has been improved.</Text>
    </View>
  );
};

export default ProgressHeader

const styles = StyleSheet.create({
    view4:{
        flex:2,
        backgroundColor: '#FFEBEB',
        margin: 20,
        borderRadius: 15,
        justifyContent: 'center'
    },
    txt_progress:{
        fontSize: 25,
        color: '#FF8787',
        fontFamily: 'Dosis-Bold'
    },
    txt2:{
        position: 'absolute',
        fontSize: 35,
        fontFamily: 'Dosis-Bold',
        left: 135,
        top: 50,
    },
    txt3:{
        fontFamily: 'Dosis-SemiBold',
        left: 135,
        top: 90,
        fontSize: 17,
        width: 180,
        position: 'absolute'
    },

})