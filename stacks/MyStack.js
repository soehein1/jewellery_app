import { View, Text } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTab from '../screens/tabs/HomeTab'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import SignInScreen from '../screens/SignInScreen'
import CheckOutScreen from '../screens/CheckoutScreen'
import SignupScreen from '../screens/SignupScreen'
import { useDispatch, useSelector } from 'react-redux'
import ForgotPassword from '../screens/ForgotPassword'


const Stack = createStackNavigator()


export default function MyStack({ navigation }) {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()



  return (
    <Stack.Navigator initialRouteName='HomeTab'>
      {user ?
        <Stack.Group>
          <Stack.Screen options={{ headerShown: false }} name='HomeTab' component={HomeTab} />
          <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
          <Stack.Screen name='CheckOut' component={CheckOutScreen} />
          <Stack.Screen name='Products' component={ProductsScreen} />
        </Stack.Group> :
        <Stack.Group>
          <Stack.Screen options={{ headerShown: false }} name='HomeTab' component={HomeTab} />
          <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
          <Stack.Screen name='Products' component={ProductsScreen} />
          <Stack.Screen name='SignUp' component={SignupScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Group>}


    </Stack.Navigator>

  )
}