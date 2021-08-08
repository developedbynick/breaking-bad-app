import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Screens
import Home from "../screens/Home";
import CharacterProfile from "../screens/CharacterProfile";
// Constants
import Colors from "../constants/Colors";

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    CharacterProfile: {
      screen: CharacterProfile,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
        elevation: 0,
      },
      headerTintColor: "white",
      headerTitleAlign: "left",
      headerTitleStyle: {
        fontFamily: "Quicksand-SB",
        fontWeight: "500",
      },
    },
  }
);

export default createAppContainer(StackNavigator);
