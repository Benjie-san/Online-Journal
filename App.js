import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import {setCustomText} from 'react-native-global-props';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Screens/Home";
import Brp from "./Screens/Brp";
import data from "./constants/data.json"

const customTextProps = {
  style: {
    fontSize: 20,
    fontFamily: "League-Spartan",
    color: 'black'
  }
}

setCustomText(customTextProps);

const Stack = createNativeStackNavigator();

let content = Object.keys(data).map( (key, index) =>
    (
        {
            isExpanded: false,
            category_name: Object.keys(data)[index],
            subcategory: [  
                ...data[key]
            ],
        }
    )
);

export default function App() {  
  
  const [fontsLoaded] = useFonts({
      "League-Spartan" : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
      "League-Spartan-M" : require('./assets/fonts/LeagueSpartan-Medium.ttf'),
  });

  if(!fontsLoaded){
      return null;
  }

const RenderHome = (props) => <Home {...props}  />
const RenderBrp = (props) => <Brp {...props}  content={content}/>

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
        options={{headerTitle: '', headerTransparent: true}} 
        component={RenderHome} 
        name="Home"/>
        <Stack.Screen component={RenderBrp} name="BRP"/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
});
