import { View, Text,TextInput , StyleSheet } from 'react-native'
import React from 'react'
import Button from '../components/Button'

export default function ForgotPassword({navigation}) {
  return (
    <View>
      <Text>Enter Your Email Address</Text>
      <TextInput style={styles.input} placeholder = 'Email'/>
      <Button title = "Next"/>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 30

  }
})