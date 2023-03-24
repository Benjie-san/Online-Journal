import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function NavButton({path}) {
    return (
        <TouchableOpacity style={styles.btn}>
            <Image style={styles.icon} source={path}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:60,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    icon:{
        width: 25,
        height: 25,
    }
})