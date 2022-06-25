import { View, Text ,Button , ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import Product from '../components/Product'


export default function ProductsScreen({navigation}) {
  return (
<ScrollView>
    <View style={styles.container}>
       <Text>Products Screen</Text>

    </View>
</ScrollView>

  )
}const styles = StyleSheet.create({
    container: {
      display: 'flex',
      margin: 5,
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    }
  })