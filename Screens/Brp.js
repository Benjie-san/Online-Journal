import { StyleSheet, Text, TouchableOpacity, View, ScrollView, LayoutAnimation, Image, UIManager} from 'react-native'
import React, {useState, useEffect} from 'react';
import EntryModal from '../components/EntryModal';


const data = require("../constants/data.json");


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

const ExpandableComponent = ({item, onClickFunction}) =>{
    const [layoutHeight, setlayoutHeight] = useState(0);
    const [modalVisibile, setModalVisible] = useState(false)
    const [verseProp, setVerseProp] = useState("")
    const [isImageStyle, setIsImageStyle] = useState(styles.caretIcon);

    const modalFunction = (modal, verse) => {
        setModalVisible(modal);
        setVerseProp(verse);
    }

    useEffect(() => {
        if(item.isExpanded){
            setlayoutHeight(null);
            setIsImageStyle(styles.caretIcon)

        } else{
            setlayoutHeight(0);
            setIsImageStyle(styles.flip)


        }

    }, [item.isExpanded])


    return (
    <View>
        <TouchableOpacity onPress={onClickFunction} style={styles.months}>
            <Text>{item.category_name}</Text> 
            <Image style={isImageStyle} source={require("../assets/images/caret2.png")}/>
        </TouchableOpacity>

        <View style={{overflow: "hidden", height: layoutHeight}}>
            {
                item.subcategory.map((item, key) => (
                    <TouchableOpacity
                    onPress ={ ()=> modalFunction(true, item["verse"]) }
                    style={styles.dailyEntry}
                    key={key}>

                        <Text style={{fontFamily: "League-Spartan",fontSize: 20}}>
                            {item.verse}
                        </Text>
                        <View style={[styles.check, styles.border]}></View>
                    </TouchableOpacity>
                ))
            }
        </View>
        <EntryModal visible={modalVisibile} verse={verseProp} />
    </View>

    );
}

export default function Brp({}) {
    UIManager.setLayoutAnimationEnabledExperimental(true);

    const [listData, setListData] = useState(content);
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listData];
        array.map((value, placeIndex)=>
            placeIndex === index
            ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
            : (array[placeIndex]['isExpanded']) = false
        );
        setListData(array);
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.write, styles.border]}>
            <Text>Write your Journal Entry today now!</Text>
        </TouchableOpacity>

        <ScrollView style={[styles.contentContainer, styles.border]} showsHorizontalScrollIndicator={false}>
            {
                listData.map( (item, key) => (
                    <ExpandableComponent
                        key={item.category_name}
                        item={item}
                        onClickFunction={()=>{
                            updateLayout(key)
                        }}
                    />
                ))
            }
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