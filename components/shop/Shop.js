import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Styles } from '../../styles/styles'
export default function Shop() {
    const { user } = useSelector(state => state.user)
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                {
                    user.profile_picture ?
                        <View>
                            <Image source={{ uri: user.profile_picture }} />
                        </View> :

                        <View style={styles.imgPlaceholder}>
                            <Text style={{ fontSize: 40, color: 'white' }}>+</Text>
                        </View>
                }
                <View style={styles.text_section}>
                    <Text style={styles.shopName}>Sohile Jewellery</Text>
                    <Text style={Styles.h6}>Habi Village</Text>
                </View>

            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style = {styles.btn}><Text>Products</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.btn}><Text>Orders</Text></TouchableOpacity>
                <TouchableOpacity style = {styles.btn}><Text>Followers</Text></TouchableOpacity>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        elevation:3.5,
        position: 'relative',
        alignItems: 'center',
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor: 'white',

    },
    headerSection: {
        flexDirection: 'row',
        marginTop: 10,
    },
    text_section: {
        borderWidth: 2,


    },
    shopName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imgPlaceholder: {
        backgroundColor: 'green',
        elevation: 3.5,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    buttonGroup:{
        flexDirection:'row',
        width:'100%',
        height:50,
        alignItems:'center',
        position:'absolute',
        bottom:0,
        left:0,
        
        
        

    },
    btn:{
        width:'33%',
        borderRightWidth:2,
        alignItems:'center',
        backgroundColor:'gray',
        height:50,
        justifyContent:'center'
    }
})