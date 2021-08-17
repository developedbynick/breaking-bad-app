import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Colors from "./constants/Colors";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

// Navigation Packages
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Contexts
import { reducerInitalState, ReducerContext } from "./contexts";
import reducer from "./contexts/reducer";
// Screens and Icons
import { Ionicons } from "@expo/vector-icons";
import Favorites from "./screens/Favorites";
import HomeAndProfileStack from "./components/HomeAndProfileStack";
import FavoritesAndProfileStack from "./components/FavoritesAndProfileStack";
// Navigators
const Tabs = createBottomTabNavigator();

enableScreens();

export default function App() {
  const [state, dispatch] = useReducer(reducer, reducerInitalState);

  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SB": require("./assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <StatusBar style="light" translucent={true} />

        <Tabs.Navigator
          tabBarOptions={{
            style: {
              borderTopWidth: 0,
              minHeight: 60,
            },
            showLabel: false,
            activeTintColor: Colors.secondary,
            inactiveTintColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Tabs.Screen
            name="Home"
            component={HomeAndProfileStack}
            options={{
              tabBarIcon: (props) => {
                const focusedTextStyles = {
                  color: props.color,
                  fontFamily: "Quicksand-Bold",
                };
                return (
                  <View style={styles.iconContainer}>
                    <Ionicons
                      name={props.focused ? "home" : "home-outline"}
                      size={props.size}
                      color={props.color}
                    />
                    <Text style={[styles.tabText, focusedTextStyles]}>
                      Home
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tabs.Screen
            name="Favorites"
            component={FavoritesAndProfileStack}
            options={{
              tabBarIcon: (props) => (
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={props.focused ? "star" : "star-outline"}
                    size={props.size}
                    color={props.color}
                  />
                  <Text
                    style={[
                      styles.tabText,
                      {
                        color: props.color,
                        fontFamily: props.focused
                          ? "Quicksand-Bold"
                          : "Quicksand-SB",
                      },
                    ]}
                  >
                    Favorites
                  </Text>
                </View>
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </ReducerContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // width: 45,
  },
  tabText: {
    fontFamily: "Quicksand-SB",
  },
});
