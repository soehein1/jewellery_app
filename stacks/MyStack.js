import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTab from '../screens/tabs/HomeTab'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import SignInScreen from '../screens/SignInScreen'
import CheckOutScreen from '../screens/CheckoutScreen'
import SignupScreen from '../screens/SignupScreen'
const Stack = createStackNavigator()


export default function MyStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName='HomeTab'>

      <Stack.Screen options={{ headerShown: false }} name='HomeTab' component={HomeTab} />
      <Stack.Screen name = 'SignUp' component={SignupScreen}/>
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='CheckOut' component={CheckOutScreen} />
    </Stack.Navigator>

  )
}