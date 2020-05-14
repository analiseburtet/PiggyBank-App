import React, { useState } from 'react'
import { View, Image, StyleSheet, TextInput } from 'react-native'

const AccountAmount = ({ accountBalance, updatePositiveBalance }) => {
    const [ positiveBalance, setPositiveBalance ] = useState()
    const [ negativeBalance, setNegativeBalance ] = useState()

    return(
        <View style={styles.background}>
            <Image
                style={styles.coin}
                source={require('../../assets/coin.png')}
            />
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.text}
                    placeholder='$ 2.000'
                    onChangeText={(positiveBalance) => {
                        setPositiveBalance(positiveBalance)
                        updatePositiveBalance(positiveBalance)
                    }}
                    value={positiveBalance}
                />
            </View>
             <Image
                style={styles.coinfly}
                source={require('../../assets/coinfly.png')}
            />
             <View style={styles.inputBox}>
                <TextInput
                    style={styles.negativeText}
                    placeholder='$ 200'
                    value={negativeBalance}
                />
            </View>
        </View>
    )
}

export default AccountAmount

const styles =  StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex: 0.1,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 3,
        margin: 12,
    },
    coin: {
        height: 30,
        width: 30
    },
    coinfly: {
        height: 40,
        width: 40
    },
    text: {
        fontSize: 24,
        fontFamily: 'sans-serif',
        color: '#111111',
        fontWeight: '900',
        paddingLeft: 6,
        
    },
    negativeText: {
        fontSize: 24,
        fontFamily: 'sans-serif',
        color: '#E95420',
        fontWeight: '900',
        paddingLeft: 6
    },
    inputBox: {
        flex: 1
    }
})