import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen'
import MyShopScreen from '../MyShopScreen'
import ProfileScreen from '../ProfileScreen'
import OrdersScreen from '../OrdersScreen';
import {useSelector} from 'react-redux'
const Tab = createBottomTabNavigator();

export default function HomeTab(props) {
    const {user,loading} = useSelector((state)=> state.user)
    useEffect(()=>{
        console.log('Home Tab',user)
    },[user])
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                var iconName;
                if (route.name === "Home") {
                    iconName = 'home'
                } else if (route.name === "Cart") {
                    iconName = 'shoppingcart'
                } else if (route.name === 'MyShop') {
                    iconName = 'shoppingcart'
                } else if (route.name === 'Profile') {
                    iconName = 'profile'
                }else if(route.name ==='Orders'){
                    iconName = 'book'
                }
                return <AntDesign name={iconName} size={size} color={focused ? color : 'grey'} />

            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'grey'
        })}
            initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            {user['role'] ==='shopkeeper' ?
                <Tab.Group>
                    <Tab.Screen name='MyShop' component={MyShopScreen} />
                    <Tab.Screen name='Orders' component={OrdersScreen} />
                </Tab.Group>
                :
                <Tab.Screen name='Cart' component={CartScreen} />
            }




            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}