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

// const Item = ({ item }) => (
//   <View style={styles.item}>
//     <Text>{item.id}</Text>
//     <Text style={styles.id}>{item.recipe}</Text>
//     <Text style={styles.id}>{item.recipe}</Text>
//   </View>
// );

export default function RecipeDetail({ navigation, route }) {
  const { item } = route.params;

  console.log(item);

  const returnToListing = () => {
    navigation.navigate("Listing");
  };

  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <Text>Id:{item.id}</Text>

        {/* Criar elementos Text para mostrar o resto dos atributos do item*/}

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
    backgroundColor: "#DCDCDC",
    paddingTop: 10,
    height: "100%",
    paddingBottom: 20,
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
});
