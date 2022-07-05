import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <TouchableOpacity style = {props.style?props.style:styles.defaultbtn}onPress = {props.onPress}>
      <Text style={props.textStyle?props.textStyle:styles.defaultText} >{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    defaultbtn:{
        backgroundColor:'green',
        
        height:60,
        margin:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
    },
    defaultText:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    }
})