import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import NavButton from '../components/NavButton';

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const path = [require("../assets/images/brp.png"), require("../assets/images/mirror.png"), require("../assets/images/person.png"), require("../assets/images/info.png"), ];

const m = new Date().getMonth();
const d = new Date().getDate();
const today = `${month[m]} ${d}`



export default function Home({navigation}) {
    
    const openBrp = () => {
        navigation.navigate("BRP");
        console.log("work?");
    }

    return (
        <View style={styles.container}>
            <View  style={styles.journal}>
            <Text style={{fontFamily: "League-Spartan-M", fontSize:20}}>Journal 2023</Text>

            </View>
            
            <View style={styles.date}>
                <Text>Today's Passage</Text>
                <Text>{today}</Text>
            </View>

            <TouchableOpacity style={styles.verse}>
                <Text>Matthew 28:19-20</Text>
                <Image source={require('../assets/images/arrow-right.png')}/>
            </TouchableOpacity>

            <View style={styles.navContainer}>
                < NavButton onPress={()=> {openBrp()} } path={path[0]} />
                < NavButton path={path[1]} />
                < NavButton path={path[2]} />
                < NavButton path={path[3]} />

            </View>
            
            <View>
                <Text>Add Entries</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        gap:10,
    },
    journal:{ 
        paddingTop: 20, 
        alignItems: "center",
        justifyContent:"center", 
    },

    date:{
        alignContent: "center",
        justifyContent:"space-between", 
        flexDirection: "row",
    },
    verse:{
        height: 70,
        padding: 10,
        alignItems: "center",
        justifyContent:"space-between", 
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
    },
    navContainer:{
        width:"100%",
        position: "absolute",
        left: 10,
        bottom: 0,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        gap: 20,
        
    },
})