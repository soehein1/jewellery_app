import { View, Text,StyleSheet,Dimensions , TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import Button from './Button'
const window = Dimensions.get('screen')
export default function BottomBar() {
  console.log(window.height)
  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {{...styles.btn,backgroundColor:'rgb(0, 128, 0)'}}><Text>Store</Text></TouchableOpacity>
      <TouchableOpacity style = {{...styles.btn,backgroundColor:'gold'}}><Text>Buy</Text></TouchableOpacity>
      <TouchableOpacity style = {{...styles.btn,backgroundColor:'rgb(204, 0, 0)'}} ><Text>Add to Cart</Text></TouchableOpacity>
    </View>
  )
}

//<MaterialIcons name="store" size={24} color="black" />
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:'absolute',
        right:0,
        start:0,
        bottom:0,
        borderColor:'gray',
        borderTopWidth:1,
        height:50,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'white'
    },
    btn:{
      height:"85%",
      width:"30%",
      alignItems:'center',
      justifyContent:'center',
      borderRadius:5,
      elevation:3
    },
})