import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import Colors from "../constants/Colors";
import { ReducerContext } from "../contexts";
import BoldText from "../components/BoldText";
import Character from "../components/Character";
const Favorites = ({ navigation }) => {
  const context = useContext(ReducerContext);
  if (context.state.favorites.length === 0) {
    const stylesInner = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
      },
      boldText: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
      },
      button: {
        marginTop: 15,
        backgroundColor: Colors.secondary,
        width: "40%",
        maxWidth: 200,
        paddingHorizontal: 10,
        paddingVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      },
      buttonText: {
        color: "white",
      },
    });
    return (
      <View style={[styles.favoritesContainer, stylesInner.container]}>
        <BoldText numberOfLines={2} style={stylesInner.boldText}>
          You have 0 favorites.
        </BoldText>
        <TouchableOpacity
          activeOpacity={0.8}
          style={stylesInner.button}
          onPress={() => navigation.navigate("Home")}
        >
          <BoldText style={stylesInner.buttonText}>Add Favorites!</BoldText>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BoldText numberOfLines={2} style={styles.boldText}>
          Your Favorites
        </BoldText>
      </View>
      <ScrollView>
        {context.state.favorites.map((fav) => {
          return (
            <Character
              character={fav}
              key={fav.char_id}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  favoritesContainer: {},
  headerContainer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
});
export default Favorites;
