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
          // options={{
          //   tabBarLabel: "Home",
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialIcons name="home" size={24} color="black" />
          //   ),
          // }}
        ></Tab.Screen>

        <Tab.Screen
          name="Register"
          component={Register}
          // options={{
          //   tabBarLabel: "Register",
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialIcons name="add-box" size={28} color="black" />
          //   ),
          // }}
        ></Tab.Screen>

        <Tab.Screen
          name="Listing"
          component={Listing}
          // options={{
          //   tabBarLabel: "Listing",
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialIcons name="filter-list" size={28} color="black" />
          //   ),
          // }}
        ></Tab.Screen>

        <Tab.Screen
          name="Recipe"
          component={RecipeDetail}
          // options={{
          //   tabBarLabel: "Listing",
          //   tabBarIcon: ({ color, size }) => (
          //     <MaterialIcons name="filter-list" size={28} color="black" />
          //   ),
          // }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
