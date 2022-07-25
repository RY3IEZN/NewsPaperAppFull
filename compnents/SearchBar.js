/** @format */

import React, { useState } from "react";

import { View, StyleSheet, TextInput, Text } from "react-native";

function SearchBar({ searchText, setSearchText, onSubmit }) {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Search"
          style={styles.inputtext}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={onSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "white",
    shadowColor: "black",
  },
  elevation: 5,
  inputtext: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    color: "green",
  },
});

export default SearchBar;
