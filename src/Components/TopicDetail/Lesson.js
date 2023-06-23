import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../../../constants'
const Lesson = ({ title, level, backgroundColor }) => {
    const style = {
        icon: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={style.icon}>
                <FontAwesome name="list-alt" color="white" size={32} />
            </View>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt1}>{level}</Text>
            <FontAwesome style={styles.icon1} name="long-arrow-right" size={32} color="#176B87" />
        </TouchableOpacity>
    );
};
const LearningTrick = ({ title, level, backgroundColor }) => {
    const style = {
        icon: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }
    return (
        <TouchableOpacity style={styles.container}>
            <View style={style.icon}>
                <MaterialCommunityIcons name="lightbulb-on" color="white" size={32} />
            </View>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.txt1}>{level}</Text>
            <Image style={styles.icon1} source={image.trick_icon} />
        </TouchableOpacity>
    );
};

const StoryLesson = ({icon, title, backgroundColor}) => {
    const style = {
        icon: {
            backgroundColor: backgroundColor,
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 80,
            margin: 15,
        },
    }
    return (
        
        <View>
            <TouchableOpacity style={styles.container}>
                <View style={style.icon}>
                    <Ionicons name={icon} color="white" size={32} />
                </View>
                <Text style={styles.txtStoryContainer}>{title}</Text>
                <FontAwesome style={styles.icon1} name="long-arrow-right" size={32} color="#1F8A70" />
            </TouchableOpacity>
        </View>
    );
}

const TitleLesson = ({backgroundColor, title}) => {
    const style={
        txt:{
            height: 30,
            width: 200,
            backgroundColor: backgroundColor,
            color: '#ffffff',
            fontFamily: 'Dosis',
            fontSize: 20,
            paddingLeft: 10,
            marginBottom: 10,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15
          },
    }
    return (
        <Text style={[style.txt, { backgroundColor: backgroundColor }]}>{title}</Text>
        )
}


export { Lesson, LearningTrick, StoryLesson, TitleLesson };

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#001C30',
        shadowOffset: {
            height: 3,
            width: 3,
        },
        shadowOpacity: 80.0,
        shadowRadius: 80.0,
        elevation: 3,
        alignItems: 'center',
    },
    
    txt: {
        position: 'absolute',
        left: 80,
        top: 20,
        fontSize: 20,
        color: 'black',
        fontFamily: 'Dosis',
        fontWeight: 'bold',
    },
    txt1: {
        position: 'absolute',
        top: 45,
        left: 80,
        fontSize: 15,
        color: 'black',
        fontFamily: 'Dosis',
        fontStyle: 'italic',
    },
    icon1: {
        top: 5,
        right: 30,
        height: 50,
        width: 50
    },
    txtStoryContainer:{
        position: 'absolute',
        left: 80,
        top: 30,
        fontSize: 20,
        color: 'black',
        fontFamily: 'Dosis',
        fontWeight: 'bold',
    }
});
