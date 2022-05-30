import { View, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Main from "../components/Main";

//----------------------------------------------------------------------------------------------------------------------//

export default function Home() {
  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Olá, seja muito bem vindo(a) ao Carolla Food!
          </Text>
          <Main></Main>

          <Text style={styles.about}>
            Esse aplicativo tem como função facilitar o dia a dia de quem ama
            cozinhar, assim como eu! Aqui você pode inserir receitas, bem como
            visualizar os envios de outras pessoas. Após isso, é só se aventurar
            na cozinha! Esperamos sua(s) receita(s) aqui!
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
