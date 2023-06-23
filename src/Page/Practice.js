import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Quiz, Vocab, Grammar } from '../Components/PracticePage'
import { useNavigation } from '@react-navigation/native'
const Practice = () => {
    const navigation = useNavigation()
    const navigateToQuizScreen = () => {
        navigation.navigate('QuizStack')
    }
    return(
        <View style={styles.container}>
            <LottieView style={styles.animation} source={require('../../assets/logo/logo.json')} autoPlay loop/>
           <View style={styles.box}>
                <Quiz navigateToQuizScreen={navigateToQuizScreen}/>
                <Vocab/>
                <Grammar/>
           </View>
        </View>
  )
}

export default Practice

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D2E9E9',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation:{
        height: 300,
        width: 300
    },
    box:{
        width: '100%',
        padding: 10,
    }
    
    
})