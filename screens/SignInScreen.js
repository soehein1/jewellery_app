import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as secureStorage from 'expo-secure-store'
import { setUser } from '../state/userSlice'
import { loginAsync } from '../state/userSlice'
import { useFocusEffect ,Link} from '@react-navigation/native'
import Button from '../components/Button'




export default function SignInScreen({ navigation }) {
  const { message } = useSelector((state) => state.user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  return (
    <ScrollView >

      <View style={styles.container}>

        <Text style={styles.lebel}>Login</Text>
        <TextInput autoComplete='email' placeholder='Email' onChangeText={setEmail} style={styles.input} />
        <TextInput secureTextEntry={true} placeholder='Password' onChangeText={setPassword} style={styles.input} />
        <Link style = {styles.link} to={{screen:'ForgotPassword' }}>Forgot Password</Link>
        <Button style={styles.btn} title='LogIn' onPress={() => {
          if (email && password) {
            dispatch(loginAsync({ email, password }))
          }
        }} />
        <Button style={styles.btn} title="Are you new here?" onPress={() => navigation.replace('SignUp')} />
        <Text style={styles.error}>{message}</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 60,
    marginBottom: 50,
    elevation: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 50,
    paddingBottom: 40,
    borderRadius: 5
  },
  input: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 30

  },
  lebel: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  btn: {
    marginTop: 15,
    height: 50,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  img: {
    width: 100,
    height: 100
  },
  error: {
    color: 'red',
    padding: 10
  },
  link:{
    color:'blue'
  }
})