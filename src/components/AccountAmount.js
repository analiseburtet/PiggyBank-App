import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Text } from "react-native";

const AccountAmount = ({ moneyTotal, billTotal }) => {
  return (
    <View style={styles.background}>
      <View style={{ maxWidth: "30%" }}>
        <Image
          style={styles.coinfly}
          source={require("../../assets/coinfly.png")}
        />
      </View>
      <View style={{ alignSelf: "stretch", justifyContent: "center" }}>
        <Text style={styles.negativeText} placeholder="$ 200">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(billTotal)}
        </Text>
      </View>
    </View>
  );
};

export default AccountAmount;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    padding: 14,
    flexDirection: "row",
    borderRadius: 3,
    margin: 12,
  },
  coin: {
    height: 30,
    width: 30,
  },
  coinfly: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 24,
    fontFamily: "sans-serif",
    color: "#111111",
    fontWeight: "900",
    paddingLeft: 6,
  },
  negativeText: {
    fontSize: 24,
    fontFamily: "sans-serif",
    color: "#E95420",
    fontWeight: "900",
    paddingLeft: 6,
  },
});
