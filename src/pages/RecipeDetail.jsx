import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React from "react";

import bolo from "../../assets/bolo.webp";

//----------------------------------------------------------------------------------------------------------------------//

export default function RecipeDetail({ navigation, route }) {
  const { item } = route.params;

  console.log(item);

  const returnToListing = () => {
    navigation.navigate("Listing");
  };

  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <Text style={styles.id}>Id:{item.id}</Text>
        <Text style={styles.recipe}>{item.recipe}</Text>
        <Text style={styles.ingredients}>Ingrendientes: {item.ingredients}</Text>
        <Text style={styles.preparation}>Modo de preparo: {item.preparation}</Text>
        <Text style={styles.espaco}></Text>
        <Text style={styles.espaco}></Text>

        <Button
          style={styles.button}
          title="Return"
          onPress={returnToListing}
        />
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
  nameRecipe: {
    textAlign: "left",
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  title: {
    textAlign: "left",
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 10,
  },
  about: {
    fontStyle: "italic",
    padding: 8,
    textAlign: "center",
    marginTop: 200,
    fontSize: 16,
  },
  scrow: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#DCDCDC",
    margin: 5,
    padding: 8,
    height: 150,
    marginBottom: 1,
  },
  explanation: {
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    marginBottom: 50,
  },
  bolo: {
    width: "100%",
    height: 200,
  },
  id: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "right",
  },
  recipe: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28,
    fontWeight: "bold",
    fontStyle: "italic",
    justifyContent: "space-between",
    padding: 8,
    paddingTop: 2,
  },
  ingredients: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 20,
    // fontWeight: "bold",
    fontStyle: "italic",
    justifyContent: "space-between",
    padding: 8,
    paddingTop: 2,
    textAlign: "left",
  },
  preparation: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 20,
    // fontWeight: "bold",
    fontStyle: "italic",
    justifyContent: "space-between",
    padding: 8,
    paddingTop: 2,
    textAlign: "left",
  },
  espaco: {
    paddingTop: 100,
  }
});
