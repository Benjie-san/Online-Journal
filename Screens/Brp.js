import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Brp({navigation}) {
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.write}>
            <Text>Write your Journal Entry today now!</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flex:1,
    },
    write:{
        height: 70,
        padding: 10,
        justifyContent:"center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
})