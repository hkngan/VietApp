import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Vocab = () => {
  return (
      <TouchableOpacity style={styles.container}>
          <View style={styles.icon}>
              <MaterialCommunityIcons name="alpha-a-box" size={40} color="black" />
          </View>
          <Text style={styles.txt}>Vocabulary</Text>
      </TouchableOpacity>
  );
}

export default Vocab

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