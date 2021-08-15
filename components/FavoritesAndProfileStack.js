import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/Favorites";
import Colors from "../constants/Colors";
import CharacterProfile from "../screens/CharacterProfile";
import ProfileHeaderRight from "./ProfileHeaderRight";
const Stack = createStackNavigator();
const FavoritesAndProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        options={{ headerShown: false }}
        component={Favorites}
      />
      <Stack.Screen
        options={({ route }) => {
          const { character } = route.params;

          return {
            headerTitle: character.name,
            headerStyle: {
              backgroundColor: Colors.primary,
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily: "Quicksand-SB",
            },
            headerRight: () => <ProfileHeaderRight route={route} />,

            headerRightContainerStyle: {
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            },
            headerLeftContainerStyle: {
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            },
          };
        }}
        name="CharacterProfile"
        component={CharacterProfile}
      />
    </Stack.Navigator>
  );
};

export default FavoritesAndProfileStack;
