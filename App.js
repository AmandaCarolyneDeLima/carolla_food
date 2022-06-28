import Routes from "./src/Routes";

import Recipe from "./src/services/sqlite/Recipe";

import { StyleSheet, Text, View } from "react-native";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import i18n from "./src/services/lang";

//----------------------------------------------------------------------------------------------------------------------//

const printRecipe = (recipe) => {
  console.log(
    `id:${recipe.id}, nome:${recipe.nome}, categoria:${recipe.categoria}, ingredientes:${recipe.ingredientes}, preparo:${recipe.preparo}`
  );
};

export default function App() {
  //----------------------------------------------------------------------------------------------------------------------//
  //all
  Recipe.all().then((recipes) => recipes.forEach((r) => printRecipe(r)));
  //----------------------------------------------------------------------------------------------------------------------//

  // console.log(i18n.t("welcome2"));
  // console.log(i18n.t("textMain"));

  return (
    <ActionSheetProvider>
      <Routes />
    </ActionSheetProvider>
  );
}

///----------------------------------------------------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
