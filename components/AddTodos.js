import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const AddTodos = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        label="New Todos"
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        buttonColor="coral"
        // icon="camera"
        mode="contained"
        onPress={() => submitHandler(text)}
      >
        Add Todo
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
export default AddTodos;
