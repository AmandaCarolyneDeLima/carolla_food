import * as Localization from "expo-localization";
import i18n from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    welcome: "Hello",
    buttonBack: "Back",
    buttonCancel: "Cancel",
    buttonCancel2: "Cancelar",
  },
  "pt-BR": {
    welcome: "Bem vindo",
    buttonBack: "Voltar",
    buttonCancel: "Cancelar",
    buttonCancel2: "Cancelar",
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;
