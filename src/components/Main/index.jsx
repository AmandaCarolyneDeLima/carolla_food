import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import receita from "./receita.webp";

//----------------------------------------------------------------------------------------------------------------------//

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={receita} style={styles.receita} />
    </View>
  );
}

//----------------------------------------------------------------------------------------------------------------------//

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingBottom: 8,
    marginBottom: 8,
    marginTop: 200,
  },
  receita: {
    width: "100%",
    height: 200,
  },
});
