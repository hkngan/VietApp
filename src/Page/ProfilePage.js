import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Sumary from '../Components/ProfilePage/Sumary';
import ApplicationOption from '../Components/ProfilePage/ApplicationOption';
import { image } from '../../constants';
import Heading from '../Components/ProfilePage/Heading';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
function ProfilePage() {
    const navigation = useNavigation();
    const navigateToEditProfile = () => {
        navigation.navigate('EditProfileStack');
    };

    return (
        <ScrollView style={styles.container}>
               <SafeAreaView style={styles.box}>
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
               </SafeAreaView>
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
            height:1,
            width:1
        },
        shadowOpacity: 0.12,
        shadowRadius: 1.00,
        elevation:1
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
