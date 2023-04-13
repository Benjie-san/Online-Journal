import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Entry({entry}) {
  return (
    <View style={styles.container}>
    <Text>{entry.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 1,
  }
})