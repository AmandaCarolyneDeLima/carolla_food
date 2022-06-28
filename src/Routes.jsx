import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import RecipeDetail from "./pages/RecipeDetail";
import Register from "./pages/Register";

import i18n from "./services/lang";

//----------------------------------------------------------------------------------------------------------------------//

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === i18n.t("home")) {
              iconName = "home";
            } else if (route.name === i18n.t("register")) {
              iconName = "add-box";
            } else if (route.name === i18n.t("listing")) {
              iconName = "list";
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "#A62A2A",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name={i18n.t("home")} component={Home}></Tab.Screen>

        <Tab.Screen name={i18n.t("register")} component={Register}></Tab.Screen>

        <Tab.Screen name={i18n.t("listing")} component={Listing}></Tab.Screen>

        <Tab.Screen name={i18n.t("recipe")} component={RecipeDetail}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
