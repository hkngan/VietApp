import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Heading from '../Components/TrendingPage/Heading'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchBar from '../Components/LearningLesson/SearchBar'
const TrendingPage = () => {
    const data=[
        {
            id: 1,
            word: 'kiwi kiwi',
            means: 'Ngon/Delicious'
        },
        {
            id: 2,
            word: 'keo',
            means: 'Đẹp/Beautiful'
        },
        {
            id: 3,
            word: 'Mắc cở quá hai ơi',
            means: 'Ngại ngùng/Shy'
        },
        {
            id: 4,
            word: 'Kem',
            means: 'Tươi tắn/Fresh'
        },
        {
            id: 5,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        }
        
    ]

    const renderItem= ({item}) => (
        <View>
            <View style={styles.textBox}>
                <Text style={styles.headertxt}>{item.word}</Text>
                <Text style={styles.meanstxt}>{item.means}</Text>
                <AntDesign style={styles.icon} name='sound' size={25} />
            </View>
        </View>
    )
  return (
    <View style={styles.container}>
      <Heading title={'Trending Words'} />
      <SearchBar/>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item => item.id)}/>
    </View>
  )
}

export default TrendingPage

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0EEED',
        flex: 1,
        alignItems: 'center',

    },
    textBox:{
        width: 400,
        padding: 15,
        margin: 3,
        shadowColor: '#000',
        textShadowOffset: {height: 1, width: 1},
        shadowRadius: 1.00,
        opacity: 1,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 10
        
    },
    headertxt:{
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: 'black',
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 20,
        color: '#002B5B'
    },
    meanstxt: {
        fontSize: 15
    },
    
})