import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { PraceticeType } from '../Components/PracticePage'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Practice = () => {
    const navigation = useNavigation()
    const navigateToQuizScreen = () => {
        navigation.navigate('QuizStack')
    }
    return(
        <SafeAreaView style={styles.container}>
            <LottieView style={styles.animation} source={require('../../assets/logo/logo.json')} autoPlay loop/>
           <View style={styles.box}>
               <PraceticeType title='Quiz' name='list-ul'/>
               <PraceticeType title='Vocabulary' name='ad'/>
               <PraceticeType title='Grammar' name='bars'/>
           </View>
        </SafeAreaView>
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