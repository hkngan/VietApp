import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native'
import { Heading } from '../Components/TopicDetail'
import { TopicItem } from '../Components/AllTopic'
const AllTopic = () => {
  const navigation = useNavigation()
  const navigateToTopicDetail = () => {
    navigation.navigate('TopicDetailStack')
  }
  return (
      <ScrollView style={styles.container}>
          <Heading/>
          <View style={styles.box}>
            <TopicItem navigateToTopicDetail={navigateToTopicDetail}/>
          </View>
      </ScrollView>
  );
}

export default AllTopic

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D2E9E9',
  },
  box:{
    height:'100%',
    backgroundColor: '#FFFDF6',
    paddingTop: 20,
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
        height:3,
        width:3
    },
    shadowOpacity: 30.00,
    shadowRadius: 30.00,
    elevation: 5
},
})