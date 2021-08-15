import React from "react";
import { StyleSheet, Text } from "react-native";

const BoldText = (props) => {
  return (
    <Text {...props} style={[styles.boldText, props.style]}>
      {props.children}
    </Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Quicksand-Bold",
  },
});
