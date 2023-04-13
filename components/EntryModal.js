import { StyleSheet, Text, View, Modal, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EntryModal({visible, verse, onClose}) {

  const [title, setTitle] = useState('');
  const [obs, setObs] = useState('');
  const [appli, setAppli] = useState('');
  const [pray, setPray] = useState('');

  const [entry, setEntry] = useState([])

  const handleTextChange = (text, valueFor)=>{
    if(valueFor === 'title') setTitle(text);
    if(valueFor === 'obs') setObs(text);
    if(valueFor === 'appli') setAppli(text);
    if(valueFor === 'pray') setPray(text);

  };

  const closeModal = async()  => {
    
    const entrys = {id: Date.now(), title, obs, appli, pray};
    const updatedEntry = [...entry, entrys];
    setEntry(updatedEntry);
    await AsyncStorage.setItem('entry', JSON.stringify(updatedEntry));

    return onClose();
  }


  useEffect(() => {
    //  AsyncStorage.clear()
    closeModal();
  }, []);


return (
<>
  <Modal visible={visible} >

      <View style={styles.header}>
        <TouchableOpacity style={{width: 40, height: 40,justifyContent: "center",
        alignItems: "center",}} onPress={closeModal}><Image style={{width: 20, height: 20, transform:[{rotate: '180deg'}],}} source={require("../assets/images/arrow-right.png")}/></TouchableOpacity>
        <Text style={{fontFamily: "League-Spartan-M", fontSize: 20,}}>Daily Entry</Text>
        <View style={[styles.border, {width: 25, height: 25,}]}></View>
      </View>

    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={[styles.scr]}>
        <Text>Scripture: </Text>
        <View style={[styles.sideInput]}>
          <Text>{verse}</Text>
        </View>
      </View>

      <View style={[styles.scr]}>
        <Text>Title: </Text>
        <TextInput value={title} onChangeText={(text)=>{handleTextChange(text, 'title')}} style={[styles.sideInput]} multiline={true}/>
      </View>

      <View>
        <Text style={[styles.text, {marginBottom: 5,}]}>Observations:</Text>
        <TextInput value={obs} onChangeText={(text)=>{handleTextChange(text, 'obs')}} style={[styles.input, styles.border]} multiline={true}/>
      </View>

      <View>
        <Text style={[styles.text, {marginBottom: 5,}]}>Application:</Text>
        <TextInput value={appli} onChangeText={(text)=>{handleTextChange(text, 'appli')}} style={[styles.input, styles.border, {fontSize: 18, fontFamily: "League-Spartan",}]} multiline={true}/>
      </View>

      <View>
        <Text style={[styles.text, {marginBottom: 5,}]}>Prayer:</Text>
        <TextInput value={pray} onChangeText={(text)=>{handleTextChange(text, 'pray')}} style={[styles.input, styles.border]} multiline={true}/>
      </View>

    </ScrollView>
  </Modal>
</>
)
}

const styles = StyleSheet.create({
    header:{
        height: 60,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        flexDirection: 'row',
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1,
    },
    scr:{
      justifyContent: "flex-start",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      height: 50,
      gap: 5,
      marginBottom: 20,
    },
    sideInput:{
      flexGrow: 1,
      borderRadius: 20,
      minHeight: 50,
      maxHeight: 100, 
      backgroundColor: "#cccccc", 
      flexDirection: 'row',
      alignContent:"center", 
      alignItems: "center", 
      padding: 10,
  },
    container:{
        flex: 1,
        padding: 10,
        gap: 20,
    },
    border:{
        borderRadius: 10,
    },
    text:{
      fontFamily: "League-Spartan",
      fontSize: 20,
    },
    
    input:{
      
      fontSize: 18,
      fontFamily: "League-Spartan",
      padding: 10,
      backgroundColor: "#cccccc",
      minHeight: 70,
      maxHeight: 300,
      marginBottom: 10,
    },
    


})