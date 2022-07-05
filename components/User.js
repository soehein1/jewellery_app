import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Button from './Button'
export default function User() {
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    
  }, [user])

  return (
    <View >
      {user ?
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: user.profile_picture?user.profile_picture:'../assets/splash.png' }} />
          <View>
            <Text style = {styles.user_name}>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>

        </View> :
        <Button title = "LogIn"/>
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    backgroundColor: '#e6e6e6',
    alignItems:'center',
    borderRadius:5,
    elevation:4.5

  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin:10
  },
  user_name:{
    fontSize:20,
    fontWeight:'bold'
  }
})