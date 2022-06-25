import { View, Text, Image, StyleSheet,  } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
export default function Categories() {
    const navigation = useNavigation()

    return (
        <View>
            <Text style = {styles.title}>Shop By Categories</Text>
            <View style={styles.icon_container}>

                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')}>
                    <Image style={styles.image} source={require('../assets/image/icons/earings.png')} />
                    <Text style = {styles.icon_title}>Earrings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')} >
                    <Image style={styles.image} source={require('../assets/image/icons/bracelet.png')} />
                    <Text style = {styles.icon_title}>Bracelets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')}>
                    <Image style={styles.image} source={require('../assets/image/icons/chain.png')} />
                    <Text style = {styles.icon_title}>Chains</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')}>
                    <Image style={styles.image} source={require('../assets/image/icons/earings.png')} />
                    <Text style = {styles.icon_title}>Earrings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')} >
                    <Image style={styles.image} source={require('../assets/image/icons/bracelet.png')} />
                    <Text style = {styles.icon_title}>Bracelets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')}>
                    <Image style={styles.image} source={require('../assets/image/icons/chain.png')} />
                    <Text style = {styles.icon_title}>Chains</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')} >
                    <Image style={styles.image} source={require('../assets/image/icons/bracelet.png')} />
                    <Text style = {styles.icon_title}>Bracelets</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={()=>navigation.navigate('Products')}>
                    <Image style={styles.image} source={require('../assets/image/icons/chain.png')} />
                    <Text style = {styles.icon_title}>Chains</Text>
                </TouchableOpacity>
                
                

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    icon_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        elevation:3,
        padding:5
        


    },
    icon: {
        width: 80,
        height: 80,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'brown',
        borderRadius: 5,
        margin:5

    },
    title:{                                          ////Categories
        fontSize:25,
        fontWeight:'bold',
        color:'gray',
        padding:10
    },
    icon_title:{
        color:'gold',
        paddingTop:5
    },
    image: {
        width: 50,
        height: 50
    }
})