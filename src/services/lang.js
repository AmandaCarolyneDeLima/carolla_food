import * as Localization from "expo-localization";
import i18n from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    welcome: "Hello",
    welcome2: "Hello, welcome to Carolla Food!",
    textMain:
      "This application has the function of facilitating the day to day of those who love to cook, just like me! Here you can enter recipes and view the data entered. After that, just venture into the kitchen! We are waiting for your recipe(s) here!",
    buttonCancel: "Cancel",
    home: "Home",
    register: "Register",
    listing: "Listing",
    recipe: "Recipe",
    nameRecipe: "Recipe Name",
    category: "Category",
    ingrendients: "Ingredients: ",
    preparation: "Preparation Mode: ",
    buttonReturn: "Return",
    placeholderName: "Add recipe name here",
    placeholderCategory: "Sweet or Salty?",
    placeholderIngredients: "Add the ingredients",
    placeholderPreparation: "Add preparation mode",
    description: "Description",
    delete: "Delete",
    options1: "Is the data entered correct?",
    options2: "Yes, register recipe!",
    options3: "No, go back and review!",
  },
  "pt-BR": {
    welcome: "Bem vindo",
    welcome2: "Olá, seja muito bem vindo(a) ao Carolla Food!",
    textMain:
      "Esse aplicativo tem como função facilitar o dia a dia de quem ama cozinhar, assim como eu! Aqui você pode inserir receitas e visualizar os dados inseridos. Após isso, é só se aventurar na cozinha! Esperamos sua(s) receita(s) aqui!",
    buttonCancel: "Cancelar",
    home: "Principal",
    register: "Registrar",
    listing: "Listagem",
    recipe: "Receita",
    nameRecipe: "Nome da Receita",
    category: "Categoria",
    ingrendients: "Ingredientes: ",
    preparation: "Modo de Preparo: ",
    buttonReturn: "Voltar",
    placeholderName: "Adicione aqui o nome da receita",
    placeholderCategory: "Doce ou Salgado?",
    placeholderIngredients: "Adicione os ingredientes",
    placeholderPreparation: "Adicione o modo de preparação",
    description: "Descrição",
    delete: "Deletar",
    options1: "Os dados inseridos estão corretos?",
    options2: "Sim, cadastrar receita!",
    options3: "Não, voltar e revisar!",
  },
};
// Set the locale once at the beginning of your app.
//i18n.locale = "en"//Localization.locale;
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
