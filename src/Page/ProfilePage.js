import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Sumary from '../Components/ProfilePage/Sumary';
import ApplicationOption from '../Components/ProfilePage/ApplicationOption';
import { image } from '../../constants';
import Heading from '../Components/ProfilePage/Heading';
import { useNavigation } from '@react-navigation/native';
function ProfilePage() {
    const navigation = useNavigation();
    const navigateToEditProfile = () => {
        navigation.navigate('EditProfileStack');
    };

    return (
        <ScrollView style={styles.container}>
               <View style={styles.box}>
                    <View style={styles.header}>
                        <Heading navigateToEditProfile={navigateToEditProfile} />
                    </View>
                        <Sumary/>
                    <Text style={styles.txt}>Application dashboard</Text>
                    <View style={[styles.card1, styles.shadow_Prop]}>
                        <ApplicationOption title="Setting" icon={'angle-right'} />
                        <ApplicationOption title="Achivements" icon={'angle-right'} />
                        <ApplicationOption title="Privacy" icon={'angle-right'} />
                    </View>
                    <Text style={styles.txt}>My account</Text>
                    <View style={[styles.card1, styles.shadow_Prop]}>
                        <TouchableOpacity>
                            <ApplicationOption title="Switch to another account" />
                        </TouchableOpacity>
                        <ApplicationOption title="Logout Account" />
                    </View>
               </View>
          
        </ScrollView>
    );
}

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E9E9',
    },
    box:{
        backgroundColor: 'white',
        marginTop: 100,
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            height:3,
            width:3
        },
        shadowOpacity: 30.00,
        shadowRadius: 30.00,
        elevation:10
    },
    card1: {
        margin: 20,
        borderRadius: 20,
    },
    txt: {
        marginLeft: 20,
        fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 19,
    },
  
});
