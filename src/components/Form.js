import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import Moment from "moment";

const Form = ({ createNewBill }) => {
  const [name, setName] = useState();
  const [money, setMoney] = useState();
  const [ error, setError ] = useState('')

  return (
    <View style={styles.background}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="SPA day"
          onChangeText={(name) => setName(name)}
          value={name}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.inputNumber}
          placeholder="R$ 300"
          keyboardType="numeric"
          onChangeText={(money) => setMoney(money)}
          value={money}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(!name || !money){
              setError('All fields are required.')
            } else {
              let id = Moment().unix().toString()
              createNewBill(id, name, money)
              setMoney('')
              setName('')
            }
          }}
        >
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    borderRadius: 3,
    margin: 12,
    marginTop: 0,
    marginBottom: 6,
    paddingVertical: 14,
    paddingBottom: 36,
  },
  input: {
    backgroundColor: "#C4C4C4",
    padding: 12,
    borderRadius: 3,
  },
  row: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "stretch",
  },
  button: {
    backgroundColor: "#77216F",
    borderRadius: 100,
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    marginLeft: 8,
  },
  inputNumber: {
    backgroundColor: "#C4C4C4",
    borderRadius: 3,
    flex: 1,
    paddingLeft: 12,
  },
  add: {
    color: "#ffffff",
    fontWeight: "900",
    fontSize: 18,
  },
  error: {
    color: 'red'
  }
});
