import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Sumary from '../Components/ProfilePage/Sumary';
import ApplicationOption from '../Components/ProfilePage/ApplicationOption';
import { image } from '../../constants';
import Heading from '../Components/ProfilePage/Heading';
import {useNavigation} from '@react-navigation/native'
function ProfilePage() {
    const navigation = useNavigation();
    const navigateToEditProfile = () => {
        navigation.navigate('EditProfilePageStack');
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Heading navigateToEditProfile={navigateToEditProfile}/>
            </View>
            <View>
                <Sumary />
            </View>
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
        </ScrollView>
    );
}

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF2FF',
        paddingTop: 10,
    },

    card1: {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
    },
    txt: {
        marginLeft: 20,
        fontFamily: 'Dosis-Bold',
        color: 'black',
        fontSize: 19,
    },
    shadow_Prop: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1.0,
        elevation: 1,
    },
});
