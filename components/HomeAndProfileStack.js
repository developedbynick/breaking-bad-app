import Home from "../screens/Home";
import CharacterProfile from "../screens/CharacterProfile";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import ProfileHeaderRight from "./ProfileHeaderRight";
const Stack = createStackNavigator();

const HomeAndProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({ route }) => {
          const { character } = route.params;
          const { char_id } = character;
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
export default HomeAndProfileStack;
