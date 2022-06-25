import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import {  useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

export default function HomeScreen({ navigation }) {
  const { user } = useSelector(state => state.user)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Home Screen </Text>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})