import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Constants from "expo-constants";
import * as ACTIONS from "../store/actions";
import { useDispatch } from "react-redux";
const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const placeholderText = `Search For A Specific Character!`;
  const onChangeTextHandler = (text) => {
    setQuery(text);
    dispatch({ type: ACTIONS.FILTER_CHARACTERS, query: text.trim() });
  };
  return (
    <View style={styles.header}>
      <TextInput
        value={query}
        placeholder={placeholderText}
        style={styles.input}
        onChangeText={onChangeTextHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight + 10,
    paddingVertical: 30,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    minHeight: 55,
    padding: 10,
    backgroundColor: "white",
    fontFamily: "Quicksand-Bold",
    borderRadius: 5,
  },
});
export default Header;
