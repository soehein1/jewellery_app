import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import { setUser } from '../state/userSlice'
import * as secureStorage from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'
export default function User() {
  const { user } = useSelector((state) => state.user)
  const navigation = useNavigation()
  const dispatch = useDispatch()


  return (
    <View >
      {user ?
        <View style={styles.container}>
          {user.profile_picture ?
            <Image style={styles.img} source={{ uri: user.profile_picture }} /> :


            <TouchableOpacity style={styles.imgBone}>
              <Text style={styles.imgBone_text} >+</Text>
            </TouchableOpacity>
            }
            
          <View style={styles.textSection}>
            <Text style={styles.user_name}>{user.name}</Text>
            <Text>{user.email}</Text>
            <Button title='logout' style={styles.btn} onPress={() => {
              secureStorage.deleteItemAsync('token').then(() => {
                dispatch(setUser(null))
              })
            }} />
          </View>

        </View> :

        <View style={styles.container}>
          <Button style={styles.btn} title="LogIn" onPress={() => navigation.navigate('SignIn')} />
        </View>

      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 4.5

  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,

  },
  user_name: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  btn: {
    backgroundColor: 'red',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  imgBone: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgBone_text: {
    fontSize: 40,
    color: 'white',
  },
  textSection: {
    borderColor: 'grey',
    borderWidth: 1,
    paddingRight: 70,
    paddingLeft: 15,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 5

  }
})