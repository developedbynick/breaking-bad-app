import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
const CharacterProfile = ({ navigation }) => {
  const img = navigation.getParam("img");
  const name = navigation.getParam("name");
  const appearances = navigation.getParam("appearance");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.characterContainer}>
        <View>
          <Image source={{ uri: img }} style={styles.img} />
          <Text
            style={{
              ...styles.text,
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Quicksand-Bold",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={styles.details}>
          {/* Detail */}

          <View style={styles.detail}>
            <Text style={styles.text}>
              Appearances:{"  "}
              <Text style={{ fontFamily: "Quicksand-Bold" }}>
                {appearances.join(" · ")}
              </Text>
            </Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text style={styles.text}>
              Nickname: {navigation.getParam("nickname")}
            </Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Occupations: {navigation.getParam("occupation").join(" , ")}
            </Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Actor: {navigation.getParam("portrayed")}
            </Text>
          </View>
          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Status: {navigation.getParam("status")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
CharacterProfile.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("name"),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  characterContainer: {
    color: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
  },
  img: {
    width: 280,
    height: 300,
    borderRadius: 5,
  },
  text: {
    fontFamily: "Quicksand",
    color: "white",
    marginVertical: 8,
    fontSize: 16,
    textAlign: "center",
  },
  detail: {
    maxWidth: 300,
  },
});
export default CharacterProfile;
