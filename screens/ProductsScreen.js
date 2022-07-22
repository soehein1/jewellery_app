import { View, Text, Button, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Product from '../components/Product'
import BottomBar from '../components/BottomBar'
import * as Location from 'expo-location'



export default function ProductsScreen({ navigation }) {
  const getLoc = async ()=>{
    const {status} = await Location.requestForegroundPermissionsAsync()
    if(status !=='granted'){
      return
    }
    let location = await Location.getLastKnownPositionAsync()
    console.log(location)
  }

  return (
    <ImageBackground source={require('../assets/image/app_background.png')} style = {{height:'100%'}}>

      <ScrollView>
        <View style={styles.container}>
          <Button title = 'Get Loc' onPress={()=>getLoc()}/>
         
          

        </View>
      </ScrollView>
      <BottomBar />
    </ImageBackground>

  )
} const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})