import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { baseUrl, limiter } from "../config";
import Character from "../components/Character";
import Problem from "../components/Problem";
import AppLoading from "expo-app-loading";

const Home = ({ navigation }) => {
  const [limit, setLimit] = useState(25);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const filterCharacters = (query) => {
    query = query.toLowerCase().trim();
    if (!query) {
      setFilteredCharacters(characters);
      return;
    }
    setFilteredCharacters(() => {
      return characters.filter((char) =>
        char.name.toLowerCase().includes(query)
      );
    });
  };

  const fetchData = async () => {
    try {
      const res = await fetch(baseUrl + limiter + limit);
      if (!res.ok)
        throw new Error(`There was an error. StatusCode: ${res.status}`);
      const data = await res.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [limit]);
  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  if (isLoading) {
    return <AppLoading />;
  }
  if (error) {
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
      <FlatList
        data={filteredCharacters}
        keyExtractor={(item) => item.char_id.toString()}
        initialNumToRender={2}
        style={{ width: "100%" }}
        renderItem={(item) => (
          <Character navigation={navigation} character={item.item} />
        )}
      />
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
});
