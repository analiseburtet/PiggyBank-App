import React, { useState, useEffect } from 'react';
import { AsyncStorage } from "react-native";
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header'
import AccountAmount from './src/components/AccountAmount'
import Form from './src/components/Form'
import BillContainer from './src/components/BillContainer'

export default function App() {
  const [data, setData] = useState([]);
  const [ positiveValue, setPositiveValue ] = useState() 

  const updateNegativeBalance = async (id, name, money) => {
    const unixTimestamp = id;
    await AsyncStorage.setItem(
      unixTimestamp,
      JSON.stringify({ name, money })
    );
    setData([...data, { key: id, name, money }]);
    let negativeValue = money
    accountBalance(positiveValue, negativeValue)
  }

  const accountBalance = async ( positiveValue, negativeValue ) => {
    let balance = positiveValue - negativeValue
    return balance
  }

  useEffect(() => {
    const getData = async () => {
      let data = null;
      try {
        data = (await displayData()).map(([key, name, money]) => {
          const finalValue = JSON.parse(name, money);
          return { key, ...finalValue };
        });
      } catch (error) {
        console.log(error);
        data = [];
      }
      setData(data);
    };
    getData();
  }, []);


  const deleteBill = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      const filteredData = data.filter((item) => item.key !== key);
      setData(filteredData);
    } catch (error) {
      console.log(error, "imposible to delete item");
    }
  };

  const updatePositiveBalance = (positiveBalance) => {
    setPositiveValue(positiveBalance)
  }

  return (
    <View style={styles.container}>
      <Header/>
      <AccountAmount accountBalance={accountBalance} updateNegativeBalance={updateNegativeBalance} updatePositiveBalance={updatePositiveBalance}/>
      <Form accountBalance={accountBalance} updateNegativeBalance={updateNegativeBalance}/>
      <BillContainer onDelete={deleteBill} data={data} />
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