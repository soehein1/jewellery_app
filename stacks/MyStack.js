import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTab from '../screens/tabs/HomeTab'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import AuthScreen from '../screens/AuthScreen'
import CheckOutScreen from '../screens/CheckoutScreen'
const Stack = createStackNavigator()


export default function MyStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName='HomeTab'>
      <Stack.Screen options={{ headerShown: false }} name='HomeTab' component={HomeTab} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='Auth' component={AuthScreen} />
      <Stack.Screen name='CheckOut' component={CheckOutScreen} />
    </Stack.Navigator>

  )
}