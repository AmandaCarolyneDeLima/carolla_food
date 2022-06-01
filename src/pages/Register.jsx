import Recipe from "../services/sqlite/Recipe";

import { useActionSheet } from "@expo/react-native-action-sheet";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//----------------------------------------------------------------------------------------------------------------------//

export default function Register({ navigation }) {
  const { showActionSheetWithOptions } = useActionSheet();

  const options = [
    "Os dados inseridos estão corretos?",
    "Sim, cadastrar receita!",
    "Não, voltar e revisar!",
  ];
  const destructiveButtonIndex = 0;
  const cancelButtonIndex = 2;

  const handleOpen = () => {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        console.log("Selected: ", buttonIndex);

        if (buttonIndex == 1) {
          register();
        }
      }
    );
  };

  const [nameRecipe, setNameRecipe] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [preparation, setPreparation] = React.useState("");

  const register = () => {
    Recipe.create({
      nome: nameRecipe,
      categoria: category,
      ingredientes: ingredients,
      preparo: preparation,
    })
      .then((id) => console.log("Recipe created with id: " + id))
      .catch((err) => console.log(err));
    navigation.navigate("Home");
  };
  const search = () => {
    navigation.navigate("Home");
  };


  delete
    Recipe.remove(4)
      .then((updated) => console.log("Recipes removed: " + updated))
      .catch((err) => console.log(err));

    Recipe.remove(5)
      .then((updated) => console.log("Recipes removed: " + updated))
      .catch((err) => console.log(err));

    Recipe.remove(6)
      .then((updated) => console.log("Recipes removed: " + updated))
      .catch((err) => console.log(err));



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.scrow}
    >
      <ScrollView style={styles.scrow}>
        <View style={styles.container}>
          <Text style={styles.title}>Nome da Receita</Text>
          <TextInput
            style={styles.inputText}
            value={nameRecipe}
            onChangeText={setNameRecipe}
            placeholder="Adicione aqui o nome da receita"
          ></TextInput>
          <Text style={styles.title}>Categoria</Text>
          <TextInput
            style={styles.inputText}
            value={category}
            onChangeText={setCategory}
            placeholder="Doce ou Salgado?"
          ></TextInput>
          <Text style={styles.title}>Ingredientes</Text>
          <TextInput
            style={styles.inputText}
            value={ingredients}
            onChangeText={setIngredients}
            placeholder="Adicione os ingredientes"
          ></TextInput>

          <Text style={styles.title}>Modo de Preparo</Text>
          <TextInput
            multiline
            numberOfLines={50}
            maxLength={500}
            style={styles.inputText}
            value={preparation}
            onChangeText={setPreparation}
            placeholder="Adicione o modo de preparação"
          ></TextInput>

          <Text style={styles.title}>Tem uma foto? Adicione aqui:</Text>
          <Button style={styles.button} title="Search" onPress={register} />

          {/* <Button style={styles.button} title="Register" onPress={register} /> */}
          <Button
            style={styles.button}
            title="Register"
            onPress={handleOpen}
          ></Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

//----------------------------------------------------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCDCDC",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 8,
    marginTop: 24,
  },
  inputText: {
    height: 50,
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
    textAlignVertical: "top",
  },
  scrow: {
    backgroundColor: "#DCDCDC",
    paddingTop: 10,
    height: "100%",
    paddingBottom: 20,
  },
  title: {
    textAlign: "left",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 10,
  },
  button: {
    paddingBottom: 50,
  },
});
