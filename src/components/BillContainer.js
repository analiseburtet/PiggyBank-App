import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native'

function Item({ name, money }){
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
            >$ {money}</Text>
            <Image
                style={styles.can}
                source={require('../../assets/can.png')}
            />
        </View>
    )
}

const BillContainer = ({data}) => {
    return(
        <SafeAreaView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Item name={item.name} value={item.money}/>
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