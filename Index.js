import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stacks/MyStack';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from './state/userSlice';
import * as secureStorage from 'expo-secure-store'


export default function Index() {
    const {user,isLoading} =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        secureStorage.getItemAsync('data').then((data)=>{
            if(data){
                dispatch(setUser(data))
            }
        })

        })

    return (

        <NavigationContainer>
            <StatusBar />
            {isLoading?<Text>Loading</Text>:<MyStack />}
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