import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodos from "./components/AddTodos";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "create an app", key: 2 },
    { text: "go to gym", key: 3 },
  ]);

  const onPressHndler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key != key);
    });
  };

  const onSubmitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        {
          text: "Understood",
          onPress: () => console.log("alert close"),
        },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header />
      <View style={styles.content}>
        {/*TODO FORM */}
        <AddTodos submitHandler={onSubmitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={onPressHndler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
