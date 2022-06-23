import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import RecipeDetail from "./pages/RecipeDetail";
import Register from "./pages/Register";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Register") {
              iconName = "add-box";
            } else if (route.name === "Listing") {
              iconName = "list";
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#A62A2A",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        ></Tab.Screen>

        <Tab.Screen
          name="Register"
          component={Register}
        ></Tab.Screen>

        <Tab.Screen
          name="Listing"
          component={Listing}
        ></Tab.Screen>

        <Tab.Screen
          name="Recipe"
          component={RecipeDetail}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
