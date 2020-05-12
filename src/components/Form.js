import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

const Form = () => {
    return(
        <View style={styles.background}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="SPA day"
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.inputNumber}
                    placeholder="$ 300"
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.add}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Form

const styles =  StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex: 0.2,
        paddingHorizontal: 14,
        borderRadius: 3,
        margin: 12,
        marginTop: 0,
        paddingBottom: 0,
        paddingTop: 14
    },
    input: {
        backgroundColor: '#C4C4C4',
        padding: 12,
        borderRadius: 3
    },
    row:{
       paddingTop: 8,
       flexDirection: 'row',
       alignItems: 'stretch'
    },
    button: {
        backgroundColor: '#77216F',
        borderRadius: 100,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
        marginLeft: 8
    },
    inputNumber: {
        backgroundColor: '#C4C4C4',
        borderRadius: 3,
        flex: 1,
        paddingLeft: 12
    },
    add: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 18,
    },
})