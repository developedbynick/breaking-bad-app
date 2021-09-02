import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { baseUrl, limiter } from "../config";
import Character from "../components/Character";
import Problem from "../components/Problem";
import AppLoading from "expo-app-loading";
import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from "../store/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
  // useSelector
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const filterCharacters = (query) => {
    query = query.toLowerCase().trim();
    if (!query) {
      //setFilteredCharacters(characters);//dispatch
      return;
    }
    dispatch({ type: ACTIONS.FILTER_CHARACTERS, query });
    // () => {
    //   return state.characters.filter((char) =>
    //     char.name.toLowerCase().includes(query)
    //   );
    // }
  };
  // Load Storage
  const loadStorage = async () => {
    try {
      const state = await AsyncStorage.getItem("state");

      if (!state) {
        return;
      }
      dispatch({ type: ACTIONS.SET_STATE, state: JSON.parse(state) });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadStorage();
  }, []);
  const fetchData = async () => {
    try {
      const res = await fetch(baseUrl + limiter + 25);
      if (!res.ok)
        throw new Error(`There was an error. StatusCode: ${res.status}`);
      const data = await res.json();
      dispatch({ type: ACTIONS.SET_CHARACTERS, data });
      dispatch({ type: ACTIONS.SET_LOADING, loading: false });
    } catch (err) {
      dispatch({ type: ACTIONS.SET_ERROR, error: err.message });
      dispatch({ type: ACTIONS.SET_LOADING, loading: false });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_FILTERED_CHARACTERS,
      characters: state.characters,
    });
  }, [state.characters]);
  // SET Storage
  const setState = async () => {
    try {
      await AsyncStorage.setItem("state", JSON.stringify(state));
    } catch (error) {
      Alert.alert(error);
    }
  };
  useEffect(() => {
    // Async function to set state
    setState();
  }, [state]);
  if (state.isLoading) {
    return <AppLoading />;
  }
  if (state.error) {
    return (
      <Problem style={styles.problem}>
        <Text numberOfLines={2} style={styles.bigText}>
          {error}
        </Text>
      </Problem>
    );
  }
  return (
    <View style={styles.container}>
      <Header filterCharacters={filterCharacters} />
      {state.isDataLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size={"large"} color={Colors.secondary} />
        </View>
      ) : (
        <FlatList
          data={state.filteredCharacters}
          keyExtractor={(item) => item.char_id.toString()}
          initialNumToRender={2}
          style={{ width: "100%" }}
          renderItem={(item) => (
            <Character navigation={navigation} character={item.item} />
          )}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    alignItems: "center",
    height: "100%",
    // paddingBottom: 80,
  },
  touchable: {
    marginVertical: 10,
    padding: 10,
    width: "40%",
    backgroundColor: Colors.secondary,
    borderRadius: 7,
  },
  problem: {
    backgroundColor: Colors.primary,
  },
  bigText: {
    fontSize: 20,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
