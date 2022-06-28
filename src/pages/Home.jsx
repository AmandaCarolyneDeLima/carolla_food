import { View, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Main from "../components/Main";

//import i18n from "./src/services/lang";
import i18n from "../services/lang";

//----------------------------------------------------------------------------------------------------------------------//

export default function Home() {
  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{i18n.t("welcome2")}</Text>
          <Main></Main>

          <Text style={styles.about}>
            {i18n.t("textMain")}
          </Text>
        </View>
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
    // justifyContent: "space-between",
    padding: 8,
    // marginTop: 24,
    // height: "100%",
  },
  text: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
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
});
