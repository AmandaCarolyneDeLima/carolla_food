import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//----------------------------------------------------------------------------------------------------------------------//

export default function Register({ navigation }) {
  const register = () => {
    navigation.navigate("Home");
  };
  const search = () => {
    navigation.navigate("Home");
  };

  const [nameRecipe, mostrarName] = React.useState(
    "Adicione aqui o nome da receita"
  );
  const [category, mostrarCategory] = React.useState("Doce ou Salgado?");
  const [ingredients, mostrarIngredients] = React.useState(
    "Adicione os ingredientes"
  );
  const [preparation, mostrarPreparation] = React.useState(
    "Adicione o modo de preparação"
  );

  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <Text style={styles.title}>Nome da Receita</Text>
        <TextInput
          style={styles.inputText}
          mostrarName={(text) => mostrarName(text)}
          value={nameRecipe}
        ></TextInput>
        <Text style={styles.title}>Categoria</Text>
        <TextInput
          style={styles.inputText}
          mostrarCategory={(text) => mostrarCategory(text)}
          value={category}
        ></TextInput>
        <Text style={styles.title}>Ingredientes</Text>
        <TextInput
          style={styles.inputText}
          mostrarIngredients={(text) => mostrarIngredients(text)}
          value={ingredients}
        ></TextInput>

        <Text style={styles.title}>Modo de Preparo</Text>
        <TextInput
          multiline
          numberOfLines={50}
          maxLength={500}
          style={styles.inputText}
          mostrarPreparation={(text) => mostrarPreparation(text)}
          value={preparation}
        ></TextInput>

        <Text style={styles.title}>Tem uma foto? Adicione aqui:</Text>
        <Button style={styles.button} title="Search" onPress={register} />

        <Button style={styles.button} title="Register" onPress={register} />
      </View>
    </ScrollView>
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
    padding: 8,
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
