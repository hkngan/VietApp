import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Input from '../Components/EditProfile/Input';
import React from 'react';
import UserAvatar from '../Components/EditProfile/UserAvatar';
import { useNavigation } from '@react-navigation/native';
import { UIButton } from '../Components/LoginPage';
const EditProfile = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.boxBtn}>
                    <TouchableOpacity onPress={() => navigation.goBack('ProfilePageStack')} style={styles.backBtn}>
                        <Text style={styles.txtBtn}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txt}>Your Profile</Text>
                    <UserAvatar />
                    <View>
                        <Text style={styles.txt}>Name</Text>
                        <Input placeholder="Kim Ngân" />
                        <Text style={styles.txt}>Username</Text>
                        <Input placeholder="Username" />
                        <Text style={styles.txt}>Password</Text>
                        <Input placeholder="Password" />
                        <Text style={styles.txt}>Email</Text>
                        <Input placeholder="Email" />
                    </View>
                    <View style={styles.box2}>
                        <UIButton title="UPDATE" style={styles.button} backgroundColor='#47A992' />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2E9E9'
    },
    box: {
        paddingTop: 30,
        backgroundColor: 'white',
        marginTop: 10,
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
        elevation:10,
        minHeight: 780
    },
    txt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 30,
        color: 'black',
    },
    txtBtn: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 10,
        color: 'green',
        marginBottom: 10,
        textAlign: 'auto',
    },
    backBtn: {
        width: 70,
    },
    boxBtn: {
        alignItems: 'flex-end',
        height: 50,
        width: '100%',
        marginBottom: 10,
        shadowColor: '#333',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 1,
        elevation: 1.00,
        shadowRadius: 18.00,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'green'
    },
    box2: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        alignSelf: 'center',
        alignContent: 'center',
    },
   
});
