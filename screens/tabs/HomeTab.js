import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen'
import MyShopScreen from '../MyShopScreen'
import ProfileScreen from '../ProfileScreen'
import OrdersScreen from '../OrdersScreen';
import { useSelector } from 'react-redux'
import { StackActions } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function HomeTab(props) {
    const { user, loading } = useSelector((state) => state.user)


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
                } else if (route.name === 'Orders') {
                    iconName = 'book'
                }
                return <AntDesign name={iconName} size={size} color={focused ? color : 'grey'} />

            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'grey'
        })}
            initialRouteName='Home'>
            {!user ?
                <Tab.Group>
                    <Tab.Screen name='Home' component={HomeScreen} />
                    <Tab.Screen name='Profile' component={ProfileScreen} />
                </Tab.Group> :
                <Tab.Group>
                    {user.role === "shopkeeper" ?
                        <Tab.Group>
                            <Tab.Screen name='Home' component={HomeScreen} />
                            <Tab.Screen name='MyShop' component={MyShopScreen} />
                            <Tab.Screen name='Orders' component={OrdersScreen} />
                            <Tab.Screen name='Profile' component={ProfileScreen} />
                        </Tab.Group> :
                        <Tab.Group>
                            <Tab.Screen name='Home' component={HomeScreen} />
                            <Tab.Screen name='Profile' component={ProfileScreen} />
                            <Tab.Screen name='Cart' component={CartScreen} />
                        </Tab.Group>
                    }
                </Tab.Group>


            }

        </Tab.Navigator>
    )
}