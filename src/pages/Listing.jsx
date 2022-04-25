import {
  View,
  StyleSheet,
  Text,
  SectionList,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";

import recipes from "../services/recipes";

//----------------------------------------------------------------------------------------------------------------------//

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.id}</Text>
    <Text style={styles.id}>{item.recipe}</Text>
  </View>
);

export default function Listing({ navigation }) {
  const register = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item}></Item>}
        style={styles.scrow}
      ></SectionList>
      <Button style={styles.button} title="Return" onPress={register} />
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
    height: 60,
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
  },
  button: {
    paddingBottom: 50,
  },
});
