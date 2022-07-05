import { View, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import Button from '../components/Button'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { postUserAsync } from '../state/userSlice'
export default function SignupScreen() {
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [state, setState] = useState('')
    const [town, setTown] = useState('')
    const [village, setVillage] = useState('')
    const [role, setRole] = useState('shopkeeper')
    const [full_name, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [selectedImage, setSelectedImage] = useState({ localUri: '../assets/splash.png' })

////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Image Picker/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

    const openImagePickerAsync = async () => {
        var permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (permissionResult.granted === false) {
            return;
        }
        let pickResult = await ImagePicker.launchImageLibraryAsync()
        if (pickResult.cancelled === true) {
            return;
        }
        setSelectedImage({ localUri: pickResult.uri })
        console.log(typeof pickResult)
    }
    return (
        <ImageBackground  source={require('../assets/image/background.jpg')}>

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.lebel}>SignUp</Text>
                    <TextInput placeholder="full name*" style={styles.input} onChangeText={setFullName} />
                    <TextInput keyboardType='email-address' placeholder="email*" style={styles.input} onChangeText={setEmail} />
                    <TextInput secureTextEntry={true} textContentType='password' placeholder="password*" style={styles.input} onChangeText={setPassword} />
                    <TextInput secureTextEntry={true} placeholder="confirm*" style={styles.input} onChangeText={setConfirmPassword} />
                    <TextInput placeholder="phone*" style={styles.input} onChangeText={setPhone} />
                    <Text style={styles.lebel}>Address</Text>
                    <TextInput placeholder="state*" style={styles.input} onChangeText={setState} />
                    <TextInput placeholder="town*" style={styles.input} onChangeText={setTown} />
                    <TextInput placeholder="village/word" style={styles.input} onChangeText={setVillage} />
                    <TouchableOpacity onPress={openImagePickerAsync} style={styles.uploadBtn}><AntDesign name="upload" size={20} color="white" /><Text style={styles.uploadBtnLabel}>Select Profile Picture</Text></TouchableOpacity>
                    <Button style={styles.btn} title='Create account' onPress={() => {
                        const user = {role,full_name,email,password,confirmPassword,phone,state,town,village_or_ward:village}
                        dispatch(postUserAsync(user))
                    }} />
                </View>
            </ScrollView>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 60,
        marginBottom: 50,
        elevation: 2,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 50,
        paddingBottom: 40,
        borderRadius: 2
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
    uploadBtn: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: 200,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 3.5,
        marginBottom: 20,
        marginTop: 20


    },
    uploadBtnLabel: {
        paddingLeft: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    btn: {
        marginTop: 5,
        height: 50,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    img: {
        width: 100,
        height: 100
    }
})
