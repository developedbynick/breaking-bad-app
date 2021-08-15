import React, { useState, useEffect, useContext } from "react";
import { ReducerContext } from "../contexts";
import { ACTIONS } from "../contexts/reducer";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ProfileHeaderRight = ({ route }) => {
  const context = useContext(ReducerContext);

  const { character } = route.params;
  const { char_id } = character;
  const [starred, setStarred] = useState(false);
  const toggleStar = () => setStarred(!starred);
  useEffect(() => {
    const isCharacterFavorited = context.state.favorites.some(
      (fav) => fav.char_id === char_id
    );
    if (isCharacterFavorited) setStarred(true);
    else setStarred(false);
  }, [context.state.favorites.length]);

  const toggleFavorites = () => {
    if (starred) {
      // If character is already starred, we should setStarred to false, and remove character from favorites
      toggleStar();
      const newFavs = context.state.favorites.filter(
        (fav) => fav.char_id !== char_id
      );
      context.dispatch({ type: ACTIONS.REMOVE_FAVORITE, newFavs });
    } else {
      toggleStar();
      context.dispatch({ type: ACTIONS.ADD_FAVORITE, character });
    }
  };
  return (
    <TouchableOpacity onPress={toggleFavorites}>
      <Ionicons
        name={starred ? "ios-star" : "star-outline"}
        color={"white"}
        size={23}
      />
    </TouchableOpacity>
  );
};

export default ProfileHeaderRight;

const styles = StyleSheet.create({});
