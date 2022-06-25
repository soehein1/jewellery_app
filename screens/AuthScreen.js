import { View, Text, TextInput, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as secureStorage from 'expo-secure-store'
import { setUser } from '../state/userSlice'
import { postUserAsync } from '../state/userSlice'
import * as ImagePicker from 'expo-image-picker'
export default function AuthScreen({ navigation }) {
  const [login, setLogin] = useState(true)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [town, setTown] = useState('')
  const [village, setVillage] = useState('')
  const [selectedImage, setSelectedImage] = useState({ localUri: '../assets/splash.png' })
  const dispatch = useDispatch()
  let openImagePickerAsync = async () => {
    var permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted === false) {
      alert("Access denied")
      return;
    }
    let pickResult = await ImagePicker.launchImageLibraryAsync()
    if (pickResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickResult.uri })
    console.log(selectedImage)
  }

  return (
    <ScrollView style={styles.container}>
      {login ?

        <View>
          <Image source={{ uri: selectedImage.localUri }} />
          <Text >Login</Text>
          <Text style={styles.lebel}>Email</Text>
          <TextInput onChangeText={setName} style={styles.input} />
          <Text style={styles.lebel}>Email</Text>
          <TextInput onChangeText={setRole} style={styles.input} />
          <Button title="Log In" onPress={() => {
            const user = JSON.stringify({ 'name': name, 'role': role })

            secureStorage.deleteItemAsync('user').then(() => {
              secureStorage.setItemAsync('user', user).then(() => {

                dispatch(setUser(user))
              })
              navigation.navigate('Home')

            })

          }} />
          <Button title="Set New User" onPress={() => setLogin(false)} />

          <Button title="Are you new here?" onPress={() => setLogin(false)} />
        </View> :
        <View>
          <Text>SignUp</Text>
          <Text style={styles.lebel}>Full Name</Text>
          <TextInput style={styles.input} onChangeText={setFullName} />
          <Text style={styles.lebel}>Email</Text>
          <TextInput style={styles.input} onChangeText={setEmail} />
          <Text style={styles.lebel}>Password</Text>
          <TextInput style={styles.input} onChangeText={setPassword} />
          <Text style={styles.lebel}>Confirm Password</Text>
          <TextInput style={styles.input} onChangeText={setConfirmPassword} />
          <Text style={styles.lebel}>Phone</Text>
          <TextInput style={styles.input} onChangeText={setPhone} />
          <Text>Address</Text>
          <Text style={styles.lebel}>State</Text>
          <TextInput style={styles.input} onChangeText={setState} />
          <Text style={styles.lebel}>Town</Text>
          <TextInput style={styles.input} onChangeText={setTown} />
          <Text style={styles.lebel}>Village/Ward</Text>
          <TextInput style={styles.input} onChangeText={setVillage} />
          <TouchableOpacity onPress={openImagePickerAsync}><Text>Pick a Pic</Text></TouchableOpacity>
          <Image style={styles.img} source={{ uri: selectedImage.localUri }} />


          <Button title='summit' onPress={() => {
            const user = { full_name, email, password, confirmPassword, phone, state, town, village_or_ward: village }
            console.log(user)
            //dispatch(postUserAsync(user))
          }} />

        </View>
      }

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  input: {
    backgroundColor: 'grey',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderRadius: 5

  },
  lebel: {
    fontSize: 20,
    color: 'green'
  },
  btn: {
    marginTop: 5
  },
  img: {
    width: 100,
    height: 100
  }
})
