import { View, Text,Button } from 'react-native'
import React from 'react'

export default function CartScreen({navigation}) {
  return (
    <View>
      <Text>CartScreen</Text>
      <Button title='Go to Checkout screen' onPress={()=>navigation.navigate('CheckOut')}/>
    </View>
  )
}