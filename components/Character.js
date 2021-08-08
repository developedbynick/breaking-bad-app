import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Character = ({ character, navigation }) => {
  const navigateHandler = () =>
    navigation.navigate("CharacterProfile", character);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,

        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={navigateHandler}
        activeOpacity={0.9}
        style={{
          width: "85%",
          height: 330,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          overflow: "hidden",
          color: "white",
        }}
      >
        <ImageBackground
          source={{ uri: character.img }}
          style={styles.bgImage}
          resizeMode="cover"
          resizeMethod={"resize"}
        >
          <View style={styles.nameContainer}>
            <Text style={styles.name}> {character.name} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  nameContainer: {
    width: "100%",
    minHeight: 30,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingVertical: 10,
  },
  name: {
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
export default Character;
