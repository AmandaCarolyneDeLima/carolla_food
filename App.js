import Routes from "./src/Routes";

import Recipe from "./src/services/sqlite/Recipe";

import { StyleSheet, Text, View } from "react-native";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";

//----------------------------------------------------------------------------------------------------------------------//
import api from "./src/services/api";
//----------------------------------------------------------------------------------------------------------------------//

//----------------------------------------------------------------------------------------------------------------------//
//i18n
// import I18n from "react-native-i18n";
// // OR const I18n = require('react-native-i18n').default

// class Demo extends React.Component {
//   render() {
//     return <Text>{I18n.t('greeting')}</Text>;
//   }
// }

// // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
// I18n.fallbacks = true;

// I18n.translations = {
//   en: {
//     greeting: 'Olá!',
//   },
//   'en-GB': {
//     greeting: 'Olá, do Reino Unido!',
//   },
// };

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

  // console.log(i18n.t("welcome")); // Exemplo de uso do "t"

  return (
    <ActionSheetProvider>
      <Routes />
    </ActionSheetProvider>
  );
}

//----------------------------------------------------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
