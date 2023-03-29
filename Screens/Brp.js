import { StyleSheet, Text, TouchableOpacity, View, ScrollView, LayoutAnimation, Image, UIManager} from 'react-native'
import React, {useState, useEffect} from 'react';

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
    const [isImageStyle, setIsImageStyle] = useState(styles.caretIcon);

    useEffect(() => {
        if(item.isExpanded){
            setlayoutHeight(null);
            setIsImageStyle(styles.flip);
        } else{
            setlayoutHeight(0);
            setIsImageStyle(styles.caretIcon);
        }
        
    }, [item.isExpanded])
    
    return (
    <View>
        <TouchableOpacity onPress={onClickFunction} style={styles.months}>
            <Text>{item.category_name}</Text>
            <Image style={isImageStyle} source={require("../assets/images/caret-down.svg")} />
        </TouchableOpacity>
        <View style={{overflow: "hidden", height: layoutHeight}}>
            {
                item.subcategory.map((item, key) => (
                    <TouchableOpacity style={styles.dailyEntry}>
                        <Text>
                            {item.verse}
                        </Text>
                        <TouchableOpacity style={styles.check}></TouchableOpacity>
                    </TouchableOpacity>
                ))
            }
        </View>
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
        <TouchableOpacity style={styles.write}>
            <Text>Write your Journal Entry today now!</Text>
        </TouchableOpacity>

        <ScrollView style={styles.contentContainer} showsHorizontalScrollIndicator={false}>
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
    write:{
        height: 70,
        padding: 10,
        justifyContent:"center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
    contentContainer:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
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
        width: 25,
        height: 25,

    },
    flip:{
        width: 25,
        height: 25,
        transform: 'rotateX(180deg)',
    },

    dailyEntry:{
        padding: 20,
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderBottomWidth: 1,
        backgroundColor: '#fffff',
    
    },
    check:{
        width: 25,
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
    },
})