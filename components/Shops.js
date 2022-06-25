import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Shops() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search By Shops</Text>
      <View style={styles.shops_container}>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Zam Zam Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Cox's Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Madina Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Saint Martin Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Madina Jewellery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shop}>
          <Image style={styles.image} source={require('../assets/image/icons/jewelry.png')} />
          <Text style={styles.shop_title}>Saint Martin Jewellery</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  shops_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  shop: {
    width: 100,
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 2,
    borderWidth:2,
    borderColor:'gold'


  },
  image: {
    width: 100,
    height: 100

  },
  title: {
    fontSize: 25,
    padding: 10,
    fontWeight:'bold',
    color:'grey'

  },
  shop_title: {
    padding: 5
  }
})