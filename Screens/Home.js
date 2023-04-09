import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import NavButton from '../components/NavButton';
//for the icons
const path = [require("../assets/images/brp.png"), require("../assets/images/mirror.png"), require("../assets/images/person.png"), require("../assets/images/info.png"), ];

// date setting
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date().getMonth();
const d = new Date().getDate();
const today = `${month[m]} ${d}`

const data = require("../constants/data.json");

const verse = data[month[m]][d-1]["verse"];

export default function Home({navigation}) {
    
    const openBrp = () => {
        navigation.navigate("BRP");

    }

    return (
        <View style={styles.container}>
            <View  style={styles.journal}>
            <Text style={{ fontFamily: "League-Spartan-M", fontSize:25}}>Journal 2023</Text>

            </View>
            
            <View style={[styles.date, styles.spaceBetween]}>
                <Text>Today's Passage</Text>
                <Text>{today}</Text>
            </View>

            <TouchableOpacity style={[styles.verse, styles.border, styles.spaceBetween]}>
                <Text>{verse}</Text>
                <Image style={{width: 25, height: 25}}source={require("../assets/images/arrow-right.png")}/>
            </TouchableOpacity>

            <View style={[styles.recentNotes, styles.border]}>
                <Text>Recent Entries</Text>
            </View>

            <View style={[styles.navContainer, styles.border]}>
                < NavButton onPress={()=> {openBrp()} } path={path[0]} />
                < NavButton path={path[1]} />
                < NavButton path={path[2]} />
                < NavButton path={path[3]} />

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        gap:10,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    journal:{ 
        paddingTop: 20, 
        alignItems: "center",
        justifyContent:"center", 
    },
    border:{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    spaceBetween:{
        alignContent: "center",
        justifyContent:"space-between", 
        flexDirection: "row",
    },
    date:{
    
    },
    verse:{
        height: 70,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    recentNotes:{
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    
    navContainer:{
        height: 50,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#fff',
    
    },
})