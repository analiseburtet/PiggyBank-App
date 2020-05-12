import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native'

const DATA = [
    { key: '1', name: 'English Course', value: 100 },
    { key: '2', name: 'English Course', value: 100 },
    { key: '3', name: 'English Course', value: 100 }
]

function Item({ name, value }){
    return(
        <View style={styles.container}>
            <Image
                style={styles.bill}
                source={require('../../assets/bill.png')}
            />
            <Text
                 style={styles.text}
            >{name}</Text>
            <Text
                 style={styles.negativeText}
            >$ {value}</Text>
            <Image
                style={styles.can}
                source={require('../../assets/can.png')}
            />
        </View>
    )
}

const BillContainer = () => {
    return(
        <SafeAreaView>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Item name={item.name} value={item.value}/>
                )}
            />
        </SafeAreaView>
    )
}

export default BillContainer

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 0.2,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 3,
        marginHorizontal: 12,
        marginVertical: 6
    },
    bill: {
        height: 30,
        width: 30
    },
    can: {
        height: 30,
        width: 30
    },
    text: {
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#111111',
        fontWeight: '900',
    },
    negativeText: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        color: '#E95420',
        fontWeight: '900',
    }
})