import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Heading from '../Components/ProfilePage/Heading';
import Sumary from '../Components/ProfilePage/Sumary';
import ApplicationOption from '../Components/ProfilePage/ApplicationOption';
import { image } from '../../constants';
const ProfiePage = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Heading />
            </View>
            <View>
                <Sumary />
            </View>
            <Text style={styles.txt}>Application dashboard</Text>
            <View style={[styles.card1, styles.shadow_Prop]}>
                <ApplicationOption title="Setting" icon={image.setting} />
                <ApplicationOption title="Achivements" icon={image.crown} />
                <ApplicationOption title="Privacy" icon={image.privacy} />
            </View>
            <Text style={styles.txt}>My account</Text>
            <View style={[styles.card1, styles.shadow_Prop]}>
                <ApplicationOption title="Switch to Another Account" />
                <ApplicationOption title="Logout Account" />
            </View>
        </ScrollView>
    );
};

export default ProfiePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        paddingTop: 10
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
    shadow_Prop:{
      shadowColor: "#000",
      shadowOffset: {width: 1, height: 1,},
      shadowOpacity: 1,
      shadowRadius: 1.00,
      elevation: 1,
  },
});
