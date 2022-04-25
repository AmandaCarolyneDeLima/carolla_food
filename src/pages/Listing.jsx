import {
  View,
  StyleSheet,
  Text,
  SectionList,
  SafeAreaView,
} from "react-native";
import React from "react";

import recipes from "../services/recipes";

//----------------------------------------------------------------------------------------------------------------------//

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.id}</Text>
    <Text>{item.recipe}</Text>
  </View>
);

export default function Listing() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item}></Item>}
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
    marginTop: 24,
  },
  item: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#DCDCDC",
    margin: 4,
  },
});
