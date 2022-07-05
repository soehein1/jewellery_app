import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import User from '../components/User'

export default function ProfileScreen({ navigation }) {
  const { user } = useSelector((state) => state.user)
  return (
    <View style={styles.container}>
      <User/>
      <Text>Profile Screen</Text>
      <Button title='Goto Auth Screen' onPress={() => navigation.navigate('SignIn')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,

  },
  name: {
    fontSize: 20,
    marginLeft: 10

  },
  user_card: {
    flexDirection: 'row',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    elevation: 4
  }
})