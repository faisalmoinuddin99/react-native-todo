import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={styles.appBarHeader}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="My-Todos" />
      <Appbar.Action icon="calendar" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: "coral",
  },
});
export default Header;
