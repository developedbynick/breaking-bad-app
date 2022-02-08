import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import BoldText from "./BoldText";
const PaginationButton = (props) => {
  const addedStyles =
    props.activePage === props.page
      ? { backgroundColor: Colors.secondary }
      : {};

  return (
    <TouchableOpacity
      onPress={() => props.setPage(props.page)}
      activeOpacity={0.85}
      style={[styles.paginationButton, addedStyles]}
    >
      <BoldText style={styles.pageNumber}>{props.page}</BoldText>
    </TouchableOpacity>
  );
};
const Pagination = ({ charsPerPage, page: activePage, setPage }) => {
  const pages = [];
  for (let i = 0; i !== charsPerPage; i++) pages.push(i + 1);
  return (
    <View style={styles.paginationContainer}>
      {pages.map((page) => {
        return (
          <PaginationButton
            key={page}
            page={page}
            activePage={activePage}
            setPage={setPage}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  paginationButton: {
    marginHorizontal: 10,
    backgroundColor: "#d35400",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginVertical: 8,
  },
  pageNumber: {
    fontSize: 16,
    color: "white",
  },
});
