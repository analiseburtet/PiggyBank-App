import React, { useState, useEffect } from 'react';
import { AsyncStorage } from "react-native";
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header'
import AccountAmount from './src/components/AccountAmount'
import Form from './src/components/Form'
import BillContainer from './src/components/BillContainer'

export default function App() {
  const [data, setData] = useState([]);

  const updateNegativeBalance = async (id, name, money) => {
    const unixTimestamp = id;
    await AsyncStorage.setItem(
      unixTimestamp,
      JSON.stringify({ name, money })
    );
    setData([...data, { key: id, name, money }]);
  }

  useEffect(() => {
    const getData = async () => {
      let data = null;
      try {
        data = (await displayData()).map(([key, name, money]) => {
          const finalValue = JSON.parse(name, money);
          return { key, ...finalValue };
        });
        console.log(data);
      } catch (error) {
        console.log(error);
        data = [];
      }
      setData(data);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Header/>
      <AccountAmount updateNegativeBalance={updateNegativeBalance}/>
      <Form updateNegativeBalance={updateNegativeBalance}/>
      <BillContainer data={data} />
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

const displayData = async () => {
  let objects = null;
  try {
    let keys = null;
    try {
      keys = await AsyncStorage.getAllKeys();
      objects = await AsyncStorage.multiGet(
        keys.filter((key) => !!parseInt(key, 10))
      );
      return objects;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};