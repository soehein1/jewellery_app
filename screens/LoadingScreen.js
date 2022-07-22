import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
const LoadingScreen = () => {
  return (
    <View style = {styles.screen}>
      <StatusBar/>
      <Text>Loading....</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        width:"100%",
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default LoadingScreen