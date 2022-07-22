import { View, Text, Button, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Shop from '../components/shop/Shop'

export default function HomeScreen({ navigation }) {
  const { user } = useSelector(state => state.user)
  return (
    <ImageBackground style={styles.container} source={require('../assets/image/app_background.png')}>
      <ScrollView>
        {!user || user.role !== 'shopkeeper' ? <Categories /> : <Shop />}
      </ScrollView>
    </ImageBackground>


  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})