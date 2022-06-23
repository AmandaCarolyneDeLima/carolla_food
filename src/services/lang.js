import * as Localization from "expo-localization";
import i18n from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    welcome: "Hello",
    welcome2: "Hello, welcome to Carolla Food!",
    textMain: "This application has the function of facilitating the day to day of those who love to cook, just like me! Here you can enter recipes and view the data entered. After that, just venture into the kitchen! We are waiting for your recipe(s) here!",
    buttonCancel: "Cancel",
    home: "Home",
    register: "Register",
    listing: "Listing",
    nameRecipe: "Recipe Name",
    category: "Category",
    ingrendients: "Ingredients",
    preparation: "Preparation Mode",
    buttonDescription: "Description",
    buttonReturn: "Return",

  },
  "pt-BR": {
    welcome: "Bem vindo",
    welcome2: "Olá, seja muito bem vindo(a) ao Carolla Food!",
    textMain: "Esse aplicativo tem como função facilitar o dia a dia de quem ama cozinhar, assim como eu! Aqui você pode inserir receitas e visualizar os dados inseridos. Após isso, é só se aventurar na cozinha! Esperamos sua(s) receita(s) aqui!",
    buttonCancel: "Cancelar",
    home: "Principal",
    register: "Registrar",
    listing: "Listagem",
    nameRecipe: "Nome da Receita",
    category: "Categoria",
    ingrendients: "Ingredientes",
    preparation: "Modo de Preparo",
    buttonDescription: "Descrição",
    buttonReturn: "Voltar",
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
