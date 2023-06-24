import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Heading } from '../Components/TopicDetail';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { Choices } from '../Components/StudyView';
import { UIButton } from '../Components/LoginPage';
const StudyView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Heading />
                <ProgressBar style={styles.progress} progress={0.1} color={'#F2BE22'} />
                <TouchableOpacity>
                    <Feather name="volume-2" color="#444" size={32} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Text style={styles.txt}>Choose "Japanese"</Text>
                <Choices />
            </View>
            <View style={styles.bottomView}>
                <UIButton title='CHECK' backgroundColor='#F9D949'/>
            </View>
        </View>
    );
};

export default StudyView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15,
    },
    progress: {
        width: 250,
        height: 10,
        borderRadius: 20,
    },
    content:{
        flex: 6,
        alignItems: 'center',
    },
    txt:{
        fontSize: 25,
        color: 'black',
        fontFamily: 'Quicksand-Medium',
        marginBottom: 50
    },
    bottomView:{
        flex: 1
    }
});
