import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

function Item({ bill, onDelete }) {
  return (
    <View style={[styles.container]} key={bill.key}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Image style={styles.bill} source={require("../../assets/bill.png")} />
        <View />
        <Text style={styles.text}>{bill.name}</Text>
      </View>
      <View />
      <Text style={styles.negativeText}>$ {bill.money}</Text>
      <View />
      <TouchableOpacity onPress={async () => await onDelete(bill.key)}>
        <Image style={styles.can} source={require("../../assets/can.png")} />
      </TouchableOpacity>
    </View>
  );
}

const BillContainer = ({ data, onDelete }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Item bill={item} onDelete={onDelete} />}
      />
    </SafeAreaView>
  );
};

export default BillContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 14,
    flexDirection: "row",
    borderRadius: 3,
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginVertical: 6,
  },
  bill: {
    height: 30,
    width: 30,
  },
  can: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: "sans-serif",
    color: "#111111",
    fontWeight: "900",
  },
  negativeText: {
    fontSize: 18,
    fontFamily: "sans-serif",
    color: "#E95420",
    fontWeight: "900",
  },
});
