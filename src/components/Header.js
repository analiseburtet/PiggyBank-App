import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Header = () => {
    return(
        <View style={styles.background}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <Text
                 style={styles.text}
            >Piggy Bank</Text>
        </View>
    )
}

export default Header

const styles =  StyleSheet.create({
    background: {
        backgroundColor: '#77216F',
        flex: 0.1,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logo: {
        height: 45,
        width: 45
    },
    text: {
        fontSize: 24,
        fontFamily: 'sans-serif',
        color: '#111111',
        fontWeight: '900',
        paddingLeft: 10
    }
})