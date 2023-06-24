import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { image } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
function Heading({ navigateToEditProfile }) {
    return (
        <View>
            <Image style={styles.avatar} source={image.avatar} />
            <View style={styles.box}>
                <View style={styles.box1}>
                    <Text style={styles.nametxt}>Kim Ngân</Text>
                    <TouchableOpacity onPress={navigateToEditProfile}>
                        <FontAwesome style={styles.editIcon} name="edit" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.typetxt}>Beginner</Text>
            </View>
        </View>
    );
}

export default Heading;

const styles = StyleSheet.create({
    avatar: {
        top: -50,
        width: 150,
        height: 150,
        alignSelf: 'center',
        
        
    },
    box:{
        justifyContent: 'center',
        alignItems:'center'
    },
    box1:{
        flexDirection: 'row',
        width: 150,
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
     
    },
    nametxt: {
        fontFamily: 'Dosis-SemiBold',
        fontSize: 26,
        color: 'black',
    },
    typetxt: {
        fontFamily: 'Dosis',
        color: '#333',
        fontSize: 16,
        fontStyle: 'italic',
        top: -30
    },
    editIcon: {
        marginLeft: 10,
        top: 2
    },

});
