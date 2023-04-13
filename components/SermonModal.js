import { StyleSheet, Text, View, Modal, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function SermoModal({visible, onClose}) {

    const closeModal = () => {
        return onClose();
    }

return (
<>
    <Modal visible={visible} >

        <View style={styles.header}>
            <TouchableOpacity style={{width: 40, height: 40,justifyContent: "center",
            alignItems: "center",}} onPress={closeModal}><Image style={{width: 20, height: 20, transform:[{rotate: '180deg'}],}} source={require("../assets/images/arrow-right.png")}/></TouchableOpacity>
            <Text style={{fontFamily: "League-Spartan-M", fontSize: 20,}}>Sunday Sermon</Text>
            <View style={[styles.border, {width: 25, height: 25,}]}></View>
        </View>

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={[styles.singleLine]}>
                <Text style={styles.text}>Date: </Text>
                <TextInput style={[styles.sideInput,,{width: '30%',}]}/>
                <Text style={styles.text}>Preacher: </Text>
                <TextInput style={[styles.sideInput,,{width: '30%',}]} />
            </View>


            <View style={[styles.singleLine]}>
                <Text style={styles.text}>Text: </Text>
                <TextInput style={[styles.sideInput]}/>
            </View>

            <View style={[styles.singleLine]}>
                <Text style={styles.text}>Theme: </Text>
                <TextInput style={[styles.sideInput]} multiline={true}/>
            </View>

            <View style={[styles.singleLine]}>
                <Text style={styles.text}>Question: </Text>
                <TextInput style={[styles.sideInput, {maxHeight: 100,}]} multiline={true}/>
            </View>

            <View>
                <Text style={[styles.text, {marginBottom: 5,}]}>Sermon Points:</Text>
                <TextInput style={[styles.input, styles.border]} multiline={true}/>
            </View>

            <View>
                <Text style={[styles.text, {marginBottom: 5,}]}>Recommendations:</Text>
                <TextInput style={[styles.input, styles.border, {fontSize: 18, fontFamily: "League-Spartan",}]} multiline={true}/>
            </View>

            <View>
                <Text style={[styles.text, {marginBottom: 5,}]}>Reflections:</Text>
                <TextInput style={[styles.input, styles.border]} multiline={true}/>
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
    singleLine:{
        justifyContent: "flex-start",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        height: 30,
        gap: 5,
        marginBottom: 10,
    },
    sideInput:{
        flexGrow: 1,
        borderRadius: 20,
        height: 30,
        backgroundColor: "#cccccc", 
        flexDirection: 'row',
        alignContent:"center", 
        alignItems: "center", 
        padding: 10,
    },
    container:{
        flex: 1,
        padding: 10,
        rowGap: 20,
    },
    border:{
        borderRadius: 10,
    },
    text:{
        fontFamily: "League-Spartan",
        fontSize: 18,
    },
    
    input:{
        fontSize: 15,
        fontFamily: "League-Spartan",
        padding: 10,
        backgroundColor: "#cccccc",
        minHeight: 70,
        maxHeight: 300,
        marginBottom: 10,
    },

})