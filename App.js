import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import {setCustomText} from 'react-native-global-props';
import Home from "./Screens/Home";

const customTextProps = {
  style: {
    fontSize: 20,
    fontFamily: "League-Spartan",
    color: 'black'
  }
}

setCustomText(customTextProps);

export default function App() {
  
    const [fontsLoaded] = useFonts({
      "League-Spartan" : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
      "League-Spartan-M" : require('./assets/fonts/LeagueSpartan-Medium.ttf'),
  });

if(!fontsLoaded){
    return null;
}

  return (
    <Home/>
  );
}
const styles = StyleSheet.create({
});
