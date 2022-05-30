import Routes from "./src/Routes";

import Recipe from "./src/services/sqlite/Recipe";

import { StyleSheet, Text, View } from "react-native";

// //----------------------------------------------------------------------------------------------------------------------//

const printRecipe = (recipe) => {
  console.log(
    `id:${recipe.id}, nome:${recipe.nome}, categoria:${recipe.categoria}, ingredientes:${recipe.ingredientes}, preparo:${recipe.preparo}`
  );
};

export default function App() {
//   //-------------------------------------------------------------------------------------------

//   //forced error catch
//   Recipe.find(-1)
//     .then((recipe) => printRecipe(recipe))
//     .catch((err) => console.log(err));

//   //-------------------------------------------------------------------------------------------

//   //create
//   Recipe.create({
//     nome: "teste",
//     categoria: "teste",
//     ingredientes: "teste",
//     preparo: "teste",
//   })
//     .then((id) => console.log("Recipe created with id: " + id))
//     .catch((err) => console.log(err));

//   Recipe.create({
//     nome: "teste1",
//     categoria: "teste1",
//     ingredientes: "teste1",
//     preparo: "teste1",
//   })
//     .then((id) => console.log("Recipe created with id: " + id))
//     .catch((err) => console.log(err));

//   Recipe.create({
//     nome: "teste2",
//     categoria: "teste2",
//     ingredientes: "teste2",
//     preparo: "teste2",
//   })
//     .then((id) => console.log("Recipe created with id: " + id))
//     .catch((err) => console.log(err));

//   //-------------------------------------------------------------------------------------------

//   //search id=1
//   Recipe.find(1)
//     .then((recipe) => printRecipe(recipe))
//     .catch((err) => console.log(err));

//   //-------------------------------------------------------------------------------------------

//   //search nome=bolo
//   Recipe.findByNome("teste")
//     .then((recipes) => console.log(recipes))
//     .catch((err) => console.log(err));

//   //-------------------------------------------------------------------------------------------

//   //update
//   Recipe.update(1, {
//     nome: "teste3",
//     categoria: "teste3",
//     ingredientes: "teste3",
//     preparo: "teste3",
//   })
//     .then((updated) => console.log("Recipes updated: " + updated))
//     .catch((err) => console.log(err));

//   //-------------------------------------------------------------------------------------------

//   //all

Recipe.all().then((recipes) => recipes.forEach((r) => printRecipe(r)));

//   //-------------------------------------------------------------------------------------------

//   //delete
//   Recipe.remove(1)
//     .then((updated) => console.log("Recipes removed: " + updated))
//     .catch((err) => console.log(err));

//   Recipe.remove(2)
//     .then((updated) => console.log("Recipes removed: " + updated))
//     .catch((err) => console.log(err));

//   Recipe.remove(3)
//     .then((updated) => console.log("Recipes removed: " + updated))
//     .catch((err) => console.log(err));

//   //forced empty array (all=[])
//   Recipe.all().then((recipes) => console.log(recipes));

  return <Routes />;
}
//   return (
//     <View style={styles.container}>
//       <Text>(Check Console)</Text>
//       <Routes />
//     </View>
//   );
// }

//----------------------------------------------------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
