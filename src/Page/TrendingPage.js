import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Heading from '../Components/TrendingPage/Heading'
import AntDesign from 'react-native-vector-icons/AntDesign'
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
        },
        {
            id: 6,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 7,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 8,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 9,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 10,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 11,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 12,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 13,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
        {
            id: 14,
            word: 'Chả chua',
            means: 'Gợi cảm/Sexy'
        },
    ]

    const renderItem= ({item}) => (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.headertxt}>{item.word}</Text>
                <Text style={styles.meanstxt}>{item.means}</Text>
                <AntDesign style={styles.icon} name='sound' size={25}/>
            </View>
        </View>
    )
  return (
    <View>
      <Heading title={'Trending Words'}/>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item => item.id)}/>
    </View>
  )
}

export default TrendingPage

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EDEDED',
        flex: 1
    },
    textBox:{
        margin: 5,
        padding: 15,
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
        color: 'black'
    },
    meanstxt: {
        fontSize: 15
    }
})