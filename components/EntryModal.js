import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import React from 'react'

export default function EntryModal({visible, verse}) {
    return (
        <>
            <Modal visible={visible} >
                <ScrollView style={styles.container}>
                    <View style={[styles.scr, styles.border]}>
                        <Text>Scripture {verse}</Text>
                        <Text>Date</Text>
                    </View>

                    <View style={[styles.inputBox, styles.border]}>
                        <Text>Observations</Text>
                    </View>

                    <View style={[styles.inputBox, styles.border]}>
                        <Text>Application</Text>
                    </View>

                    <View style={[styles.inputBox, styles.border]}>
                        <Text>Prayer</Text>
                    </View>

                </ScrollView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        gap: 20,
    },
    border:{
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
    },
    inputBox:{
        height: 150,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#f1f1f1"
    },
    scr:{
        height: 80,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#f1f1f1"
    }
    


})