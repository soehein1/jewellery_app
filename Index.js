import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stacks/MyStack';
import { useSelector,useDispatch } from 'react-redux';
import * as secureStorage from 'expo-secure-store'
import { setUser } from './state/userSlice';
import { getUserAsync } from './state/userSlice'
import React, { useEffect , useCallback} from 'react'
import LoadingScreen from './screens/LoadingScreen';


export default function Index() {
    const {user,initializing} =useSelector((state)=>state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        secureStorage.getItemAsync('token').then((tk) => {
            const token = JSON.parse(tk)
          if (token) {
            dispatch(getUserAsync(token))
          } else {
            dispatch(setUser(null))
          }
        })
    
      }, []);

    return (

        <NavigationContainer>
            <StatusBar />
            {
              initializing?<LoadingScreen/>:<MyStack />
            }
            
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