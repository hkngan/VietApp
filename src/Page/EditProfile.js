import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Input from '../Components/EditProfile/Input'
import React from 'react'
import UserAvatar from '../Components/EditProfile/UserAvatar'
import { useNavigation } from '@react-navigation/native';
import UIButton from '../Components/LoginPage/UIButton'

const EditProfile = () => {
    const navigation = useNavigation();
    const goBackToProfilePage = () => {
        navigation.goBack('ProfilePage')
    }

  return (
      <ScrollView style={styles.container}>
          <View>
              <View style={styles.boxBtn}>
                  <TouchableOpacity onPress={goBackToProfilePage} style={styles.backBtn}>
                      <Text style={styles.txtBtn}>Done</Text>
                  </TouchableOpacity>
              </View>
              <Text style={styles.txt}>Your Profile</Text>
              <UserAvatar />
              <View style={styles.box}>
                  <Text style={styles.txtLabel}>Name</Text>
                  <Input placeholder="Kim Ngân" />
                  <Text style={styles.txtLabel}>Username</Text>
                  <Input placeholder="Username" />
                  <Text style={styles.txtLabel}>Password</Text>
                  <Input placeholder="Password" />
                  <Text style={styles.txtLabel}>Email</Text>
                  <Input placeholder="Email" />
              </View>
              <View style={styles.box2}>
                  <UIButton title="UPDATE" style={styles.button} />
                  <UIButton title="Cancle" style={styles.button} />
              </View>
          </View>
      </ScrollView>
  );
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0EEED'
    },
    box:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    txt:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 10,
        color: 'black',
    },
    txtBtn:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 10,
        color: 'green',
        marginBottom: 10,
        textAlign: 'auto',
    },
    backBtn:{
       width: 70,

    },
    boxBtn:{
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
    button:{
        backgroundColor: 'green'
    },
    box2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        alignSelf: 'center',
        alignContent: 'center',
    },
    txtLabel:{
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        color: 'black',
        margin: 5,
        bottom: 10
      }
})