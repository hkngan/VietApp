import { ImageBackground , StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {image} from '../../../constants'
import SearchBar from './SearchBar'
const SeachComponent = () => {
  return (
      <ImageBackground imageStyle={{ borderRadius: 40 }} style={styles.image_background} source={image.background}>
          <Text style={styles.txt}>Let’s learn together</Text>
          <SearchBar/>
      </ImageBackground>
  );
}

export default SeachComponent

const styles = StyleSheet.create({
    image_background: {
        height: 250,
        width: 350,
        margin: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontFamily: 'Dosis-ExtraBold',
        fontSize: 28,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
        marginBottom: 10,
        textShadowColor: 'black',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
});


