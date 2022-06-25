import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Product() {
    const [loaded] = useFonts({
        Robo:require('../assets/fonts/Roboto-BlackItalic.ttf')

    })
  return (
    <TouchableOpacity style={styles.container}>
        <Image style = {styles.image} source={require('../assets/image/OIP.jpg')}/>
        <Text style = {styles.title}>Gonden Ring With Embedded Diamond Stone</Text>
        <Text style = {styles.price}>200 tk</Text>
      
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        width:180,
        backgroundColor:'white',
        margin:5,
        elevation:1,
        borderRadius:5,
        paddingBottom:5
        
    },
    image:{
        width:180,
        height:180,
        borderRadius:8
    },
    title:{

        fontSize:15,
        fontFamily:'',
        padding:5,

    },
    price:{
        color:'gold',
        padding:5,
        fontSize:25,
        fontWeight:'bold'
    }
})