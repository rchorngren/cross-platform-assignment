import { tokens } from "./appStructure";

export const swedish = {
  [tokens.screens.productListScreen.HeaderText]: "Föremål",
  [tokens.screens.productListScreen.SubHeaderName]: "Namn",
  [tokens.screens.productListScreen.SubHeaderType]: "Typ",
  [tokens.screens.productListScreen.SubHeaderPrice]: "Pris",
  [tokens.screens.productListScreen.NoProductsTextOne]: "Du har inga produkter.",
  [tokens.screens.productListScreen.NoProductsTextTwo]: "Tryck på den gröna knappen nedan för att skapa en",

  [tokens.screens.productScreen.HeaderTextNew]: "Skapa ny produkt",
  [tokens.screens.productScreen.HeaderTextEdit]: "Editera produkt",
  [tokens.screens.productScreen.InputName]: "Namn",
  [tokens.screens.productScreen.InputPrice]: "Pris",
  [tokens.screens.productScreen.PickerType]: "Produkt Typ",
  [tokens.screens.productScreen.PickerIntegrated]: "Integrerad",
  [tokens.screens.productScreen.PickerPeripheral]: "Kringutrustning",
  [tokens.screens.productScreen.ButtonSave]: "Spara",
  [tokens.screens.productScreen.ButtonCancel]: "Avbryt",
  [tokens.screens.productScreen.ButtonDelete]: "Radera",
  [tokens.screens.productScreen.ErrorDuplicate]: "Föremålet finns readn - välj ett annat namn",
  [tokens.screens.productScreen.ErrorIntegrated]: "Integrerade produkter måste ha ett pris mellan $1000 och $2600",
  [tokens.screens.productScreen.ErrorPeripheral]: "Priset måste vara minst $1",
  [tokens.screens.productScreen.ErrorPricetype]: "Kontrollera att priset är angivet i siffror",
  [tokens.screens.productScreen.AlertHeader]: "Kasta ändringar?",
  [tokens.screens.productScreen.AlertMessage]: "All data som inte är sparad kommer raderas",
  [tokens.screens.productScreen.AlertCancel]: "Avbryt",
  [tokens.screens.productScreen.AlertConfirm]: "Ok",

}