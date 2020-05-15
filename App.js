import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AccountAmount from "./src/components/AccountAmount";
import Form from "./src/components/Form";
import BillContainer from "./src/components/BillContainer";

const VALOR_TOTAL_ID = "valor-total";

export default function App() {
  const [data, setData] = useState([]);
  const [moneyTotal, setMoneyTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  const createNewBill = async (id, name, money) => {
    const unixTimestamp = id;
    await AsyncStorage.setItem(unixTimestamp, JSON.stringify({ name, money }));
    setData([...data, { key: id, name, money }]);
    let currentBill = money;
    const updatedTotalBill = billTotal + parseInt(currentBill, 10);
    setBillTotal(updatedTotalBill);
    await AsyncStorage.setItem(VALOR_TOTAL_ID, updatedTotalBill);
  };

  useEffect(() => {
    const getData = async () => {
      let data = null;
      try {
        const res = await displayData();
        data = res.objects.map(([key, name, money]) => {
          const finalValue = JSON.parse(name, money);
          return { key, ...finalValue };
        });
        console.log(res.valorTotal);
        setBillTotal(parseInt(res.valorTotal || 0, 10));
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
      const filteredData = data.filter((item) => item.key !== key);
      setData(filteredData);
      await Promise.all([
        AsyncStorage.removeItem(key),
        AsyncStorage.setItem(VALOR_TOTAL_ID, billTotal),
      ]);
      setBillTotal(billTotal);
    } catch (error) {
      console.log(error, "imposible to delete item");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: "column" }}>
        <AccountAmount moneyTotal={moneyTotal} billTotal={billTotal} />
      </View>
      <Form createNewBill={createNewBill} />
      <BillContainer onDelete={deleteBill} data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F1F0",
    flexDirection: "column",
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

      const valorTotal = await AsyncStorage.getItem(VALOR_TOTAL_ID);

      return { objects, valorTotal };
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
