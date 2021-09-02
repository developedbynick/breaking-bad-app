import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as ACTIONS from "../store/actions";
const ProfileHeaderRight = ({ route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { character } = route.params;
  const { char_id } = character;
  const [starred, setStarred] = useState(false);
  const toggleStar = () => setStarred(!starred);
  useEffect(() => {
    const isCharacterFavorited = state.favorites.some(
      (fav) => fav.char_id === char_id
    );
    if (isCharacterFavorited) setStarred(true);
    else setStarred(false);
  }, [state.favorites.length]);

  const toggleFavorites = () => {
    if (starred) {
      // If character is already starred, we should setStarred to false, and remove character from favorites
      toggleStar();
      const newFavs = state.favorites.filter((fav) => fav.char_id !== char_id);
      dispatch({ type: ACTIONS.REMOVE_FAVORITE, newFavs });
    } else {
      toggleStar();
      dispatch({ type: ACTIONS.ADD_FAVORITE, character });
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
