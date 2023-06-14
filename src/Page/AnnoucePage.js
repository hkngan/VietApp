import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../Components/TrendingPage/Heading'
import AnnouceBox from '../Components/AnnoucePage/AnnouceBox'
const AnnoucePage = () => {
  return (
    <View style={styles.container}>
      <Heading title='Notifications'/>
      <AnnouceBox/>
    </View>
  )
}

export default AnnoucePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0EEED',
  }
})