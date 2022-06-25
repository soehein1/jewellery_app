import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Product from '../components/Product'


export default function TrendingProducts() {
  return (
    <View style={styles.container}>
      <Text style ={styles.title}>Trending Products</Text>
      <View style={styles.products_container}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
    },
    products_container:{
        
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'space-around'

    },
    title:{
        fontSize:25,
        padding:10
    }
})