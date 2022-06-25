import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stacks/MyStack';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from './state/userSlice';
import * as secureStorage from 'expo-secure-store'
import { getUserAsync } from './state/userSlice';


export default function Index() {
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUserAsync())
        secureStorage.setItemAsync('user',JSON.stringify({'name':'Shamvil' , 'role':'shopkeeper'})).then(()=>{
            secureStorage.getItemAsync('user').then((user)=>{
                console.log('Index',user)
                dispatch(setUser(user))
            })
                 
                setLoading(false)

        })
        
    })

    return (

        <NavigationContainer>
            <StatusBar />
            {loading?<Text>Loading</Text>:<MyStack />}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});