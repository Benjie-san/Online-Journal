import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import {setCustomText} from 'react-native-global-props';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Screens/Home";
import Brp from "./Screens/Brp";

const customTextProps = {
  style: {
    fontSize: 20,
    fontFamily: "League-Spartan",
    color: 'black'
  }
}

setCustomText(customTextProps);

const Stack = createNativeStackNavigator();

export default function App() {
  
    const [fontsLoaded] = useFonts({
      "League-Spartan" : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
      "League-Spartan-M" : require('./assets/fonts/LeagueSpartan-Medium.ttf'),
  });

  if(!fontsLoaded){
      return null;
  }

const RenderHome = (props) => <Home {...props}  />

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        options={{headerTitle: '', headerTransparent: true}} 
        component={RenderHome} 
        name="Home"/>
        <Stack.Screen component={Brp} name="BRP"/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
});
