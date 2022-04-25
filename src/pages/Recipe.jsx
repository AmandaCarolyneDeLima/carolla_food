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

export default function Recipe({ navigation }) {
  const register = () => {
    navigation.navigate("Home");
  };
  return (
    <ScrollView style={styles.scrow}>
      <View style={styles.container}>
        <Text style={styles.explanation}>
          **Quando o usuário clicar em determinada receita da página da
          listagem, vai abrir outra página puxando os dados do banco de dados.
          Essa página é apenas uma representação. Ela não ficará como tabs,
          coloquei agora apenas para mostrar como ficaria a página.**
        </Text>
        <Text style={styles.nameRecipe}>Bolo de Chocolate</Text>
        <Image source={bolo} style={styles.bolo} />
        <Text style={styles.explanation}>
          **Aqui mais tarde vem a foto de cada receita.**
        </Text>
        <Text style={styles.title}>Categoria</Text>
        <Text>Doce</Text>
        <Text style={styles.title}>Ingredientes</Text>
        <Text>
          4 ovos. 4 colheres (sopa) de chocolate em pó. 2 colheres (sopa) de
          manteiga. 3 xícaras (chá) de farinha de trigo. 2 xícaras (chá) de
          açúcar. 2 colheres (sopa) de fermento. 1 xícara (chá) de leite. 4
          ovos. 4 colheres (sopa) de chocolate em pó.
        </Text>
        <Text style={styles.title}>Modo de Preparo</Text>
        <Text>
          Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga,
          a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.
          Adicione o fermento e misture com uma espátula delicadamente. Em uma
          forma untada, despeje a massa e asse em forno médio (180 ºC)
          preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma
          alta para essa receita: como leva duas colheres de fermento, ela
          cresce bastante! Outra solução pode ser colocar apenas uma colher de
          fermento e manter a sua receita em uma forma pequena. Em um
          liquidificador adicione os ovos, o chocolate em pó, a manteiga, a
          farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.
          Adicione o fermento e misture com uma espátula delicadamente. Em uma
          forma untada, despeje a massa e asse em forno médio (180 ºC)
          preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma
          alta para essa receita: como leva duas colheres de fermento, ela
          cresce bastante! Outra solução pode ser colocar apenas uma colher de
          fermento e manter a sua receita em uma forma pequena.
        </Text>
        <Button style={styles.button} title="Return" onPress={register} />
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
