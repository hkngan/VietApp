import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import AnnouceBox from '../Components/AnnoucePage/AnnouceBox'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
const AnnoucePage = () => {
  const navigation = useNavigation()
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
              <Ionicons name="arrow-back-outline" color="black" size={32} />
          </TouchableOpacity>
          <AnnouceBox />
      </View>
  );
}

export default AnnoucePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D2E9E9',
  },
  icon:{
    height:30,
    width: 30,
    marginLeft: 10,
    marginTop: 10,
  }
})