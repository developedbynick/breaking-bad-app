import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Problem = (props) => {
  return (
    <View {...props} style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

export default Problem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
