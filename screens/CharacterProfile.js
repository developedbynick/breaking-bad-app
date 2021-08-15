import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
const CharacterProfile = ({ route }) => {
  const { character } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.characterContainer}>
        <View>
          <Image source={{ uri: character.img }} style={styles.img} />
          <Text
            style={{
              ...styles.text,
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Quicksand-Bold",
            }}
          >
            {character.name}
          </Text>
        </View>
        <View style={styles.details}>
          {/* Detail */}

          <View style={styles.detail}>
            <Text style={styles.text}>
              Appearances:{"  "}
              <Text style={{ fontFamily: "Quicksand-Bold" }}>
                {character.appearance.join(" · ")}
              </Text>
            </Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text style={styles.text}>Nickname: {character.nickname}</Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Occupations: {character.occupation.join(" , ")}
            </Text>
          </View>

          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Actor: {character.portrayed}
            </Text>
          </View>
          {/* Detail */}

          <View style={styles.detail}>
            <Text numberOfLines={1.5} style={styles.text}>
              Status: {character.status}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
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
    // paddingBottom: 100,

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
