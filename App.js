import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import AccountAmount from './src/components/AccountAmount'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AccountAmount/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1F0',
    flexDirection: 'column'
  },
});
