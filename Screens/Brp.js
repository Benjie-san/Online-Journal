import { StyleSheet, Text, TouchableOpacity, View, ScrollView, LayoutAnimation, Image, Dimensions, UIManager} from 'react-native'
import React, {useState, useEffect} from 'react';
import EntryModal from '../components/EntryModal';
import SermoModal from '../components/SermonModal';
import { FlashList } from "@shopify/flash-list";

import AsyncStorage from '@react-native-async-storage/async-storage';
import data from "../constants/data.json"

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

const ExpandableComponent = ({item, navigation ,onClickFunction}) =>{
    const [layoutHeight, setlayoutHeight] = useState(0);
    const [entryVisible, setEntryVisible] = useState(false)
    const [sermonModalVisibile, setSermonModalVisible] = useState(false)
    const [verseProp, setVerseProp] = useState("")
    const [isImageStyle, setIsImageStyle] = useState(styles.caretIcon);
    const [show, setShow] = useState(false)

    const modalFunction = (modal, verse) => {
        if(verse != "Sermon Notes"){
          setEntryVisible(modal);
        }else{
          setSermonModalVisible(modal)
        }
        
        setVerseProp(verse);
    }

    const openEntry = (verse) => {
      navigation.navigate("Daily Entry", {verse});
  
    }

    useEffect(() => {
      if(item.isExpanded){
        setlayoutHeight(null);
        setIsImageStyle(styles.caretIcon)
        setShow(true);

      } else{
        setlayoutHeight(0);
        setIsImageStyle(styles.flip)
        setShow(false);
      }

    }, [item.isExpanded])

    return (

  <View>
    <TouchableOpacity onPress={onClickFunction} style={styles.months}>
        <Text>{item.category_name}</Text> 
        <Image style={isImageStyle} source={require("../assets/images/caret2.png")}/>
    </TouchableOpacity>

        <View style={{overflow: "hidden", height: layoutHeight}}>
          <ScrollView>
            { show ? (item.subcategory.map((item, key) => (
              <TouchableOpacity
              // onPress ={ ()=> modalFunction(true, item["verse"]) }
                onPress = {()=> {openEntry(item['verse'])}} 
              style={styles.dailyEntry}
              key={key}>

                <Text style={{fontFamily: "League-Spartan",fontSize: 20}}>{item.verse}</Text>
                <View style={[styles.check, styles.border]}></View>
              </TouchableOpacity>
            ))): null}
          </ScrollView>
        </View>
    
    <EntryModal visible={entryVisible} verse={verseProp} onClose={()=> setEntryVisible(false)}/>
    <SermoModal visible={sermonModalVisibile} onClose={()=> setSermonModalVisible(false)}/>
  </View>

    );
}

const Brp = ({navigation}) => {

    UIManager.setLayoutAnimationEnabledExperimental(true);
    const [listData, setListData] = useState([]);
    const saveData = async () =>{
        await AsyncStorage.setItem("brpContent", JSON.stringify(content));
    }

    const getData = async ()=> {
        const result = await AsyncStorage.getItem('brpContent');

        if(result != null){
            setListData(JSON.parse(result))
        }
    }        

    const updateLayout = async (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listData];
        array.map((value, placeIndex)=>
            placeIndex === index
            ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
            : (array[placeIndex]['isExpanded']) = false
        );
        setListData(array);
    }

    useEffect(() => {
        saveData();
        getData();
    }, []);

    return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.write, styles.border]}>
          <Text>Write your Journal Entry today now!</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: Dimensions.get("screen").width-20}}>
          <FlashList 
            data={listData}
            keyExtractor={(item, index) => index.toString()}
            estimatedItemSize={79}
            renderItem={ ({item, index}) => 
            
              <ExpandableComponent
                key={item.category_name}
                item={item}
                navigation={navigation}
                onClickFunction={()=>{ updateLayout(index)}}
              />
            }
          />
        </View>
      </ScrollView> 
    
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flex:1,
        backgroundColor: "#fff",
        gap: 10,
    },
    border:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
    write:{
        height: 70,
        padding: 10,
        justifyContent:"center",

    },
    contentContainer:{
        padding: 10,
    },
    months:{
        padding: 10,
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderBottomWidth: 1,
    },
    caretIcon:{
        width: 20,
        height: 13,
        resizeMode: "cover",
    },
    flip:{
        width: 20,
        height: 13,
        resizeMode: "cover",
        transform:[{rotate: '180deg'}],
    },

    dailyEntry:{
        
        padding: 10,
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderBottomWidth: 0.1,
        backgroundColor: '#f1f1f1',

    },
    check:{
        width: 25,
        height: 25,
    },
})

export default Brp;