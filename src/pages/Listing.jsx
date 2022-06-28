import {
  View,
  StyleSheet,
  Text,
  SectionList,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

import Recipe from "../services/sqlite/Recipe";
import listToSectionList from "../helpers/listToSectionList";

import i18n from "../services/lang";


//----------------------------------------------------------------------------------------------------------------------//

export default function Listing({ navigation }) {
  // Estados

  const [recipes, setRecipes] = useState([]);

  // Efeitos

  useEffect(() => {
    refreshList();

    navigation.addListener("tabPress", (e) => {
      refreshList();
    });
  }, []);

  // Callbacks

  const refreshList = () => {
    Recipe.all().then((data) => {
      setRecipes(listToSectionList(data));
    });
  };

  const description = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const remove = (item) => {
    Recipe.remove(item.id)
      .then((updated) => {
        console.log("Recipes removed: " + updated);
        refreshList();
      })
      .catch((err) => console.log(err));
  };

  // Renders e Componentes Internos

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.id}</Text>
      <Text style={styles.id}>{item.recipe}</Text>
      <Button
        style={styles.button}
        title={i18n.t("description")}
        onPress={() => description(item)}
      />
      <Button
        style={styles.button}
        title={i18n.t("delete")}
        onPress={() => remove(item)}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item}></Item>}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={styles.header}>{category}</Text>
        )}
        style={styles.scrow}
      ></SectionList>
    </SafeAreaView>
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
    paddingTop: 24,
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#DCDCDC",
    margin: 4,
    padding: 8,
    height: 120,
    marginBottom: 50,
  },
  scrow: {
    backgroundColor: "#DCDCDC",
    paddingTop: 10,
    height: "100%",
    paddingBottom: 20,
    padding: 8,
  },
  id: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
  button: {
    paddingBottom: 50,
  },
  header: {
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#DCDCDC",
    margin: 4,
    padding: 8,
    height: 60,
    marginBottom: 10,
  },
});
