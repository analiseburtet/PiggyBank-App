import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header'
import AccountAmount from './src/components/AccountAmount'
import Form from './src/components/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <AccountAmount/>
      <Form/>
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
