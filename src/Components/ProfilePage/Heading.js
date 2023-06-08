import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Heading = () => {
    const data = [
        {
            id: 1,
            name: 'Kim Ngan',
            type: 'Newbie',
            avatar: require('../../../assets/image/user.png')
        }
    ]
  return (
    <View>
        {data.map((info) => (
                <View key={info.id} style={[styles.header, styles.shadow_Prop]}>
                    <Image style={styles.avatar} source={info.avatar}/>
                    <Text style={styles.nametxt}>{info.name}</Text>
                    <Text style={styles.typetxt}>{info.type}</Text>
                    <TouchableOpacity>
                        <FontAwesome style={styles.editIcon} name="edit" size={30} color='#333'/>
                    </TouchableOpacity>
                </View>
        ))}
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    header:{
        height: 100,
        width: '100%',
        flexDirection: 'row',
        padding: 5
        
    },
    shadow_Prop:{
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 1,},
        shadowOpacity: 0.14,
        shadowRadius: 1.00,
        elevation: 0.4,
    },  
    avatar: {
        position: 'absolute',
        width: 75,
        height: 75,
        margin: 10,
        left: 10
    },
    nametxt:{
        position: 'absolute',
        top: 15,
        left: 110,
        fontFamily: 'Dosis-SemiBold',
        fontSize: 26,
        color: 'black'
    },
    typetxt: {
        position: 'absolute',
        fontFamily: 'Dosis',
        color: '#333',
        left: 111,
        top: 45,
        fontSize: 16,
        fontStyle: 'italic'
    },
    
    editIcon:{
        position: 'absolute',
        left: 350,
        top: 25
    }

})