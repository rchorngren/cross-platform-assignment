import { tokens } from "./appStructure";

export const english = {
  [tokens.screens.productListScreen.HeaderText]: "Items",
  [tokens.screens.productListScreen.SubHeaderName]: "Name",
  [tokens.screens.productListScreen.SubHeaderType]: "Type",
  [tokens.screens.productListScreen.SubHeaderPrice]: "Price",
  [tokens.screens.productListScreen.NoProductsTextOne]: "You do not have any products.",
  [tokens.screens.productListScreen.NoProductsTextTwo]: "Press the green button below to add a new one",

  [tokens.screens.productScreen.HeaderTextNew]: "Create New Product",
  [tokens.screens.productScreen.HeaderTextEdit]: "Edit Product",
  [tokens.screens.productScreen.InputName]: "Name",
  [tokens.screens.productScreen.InputPrice]: "Price",
  [tokens.screens.productScreen.PickerType]: "Product Type",
  [tokens.screens.productScreen.PickerIntegrated]: "Integrated",
  [tokens.screens.productScreen.PickerPeripheral]: "Peripheral",
  [tokens.screens.productScreen.ButtonSave]: "Save",
  [tokens.screens.productScreen.ButtonCancel]: "Cancel",
  [tokens.screens.productScreen.ButtonDelete]: "Delete",
  [tokens.screens.productScreen.ErrorDuplicate]: "This item already exists - please select another name for it",
  [tokens.screens.productScreen.ErrorIntegrated]: "Integrated products may be anywhere within the range of $1000 and $2600",
  [tokens.screens.productScreen.ErrorPeripheral]: "Price must be $1 or greater",
  [tokens.screens.productScreen.ErrorPricetype]: "Make sure you are using numbers to specify price",
  [tokens.screens.productScreen.AlertHeader]: "Undo changes?",
  [tokens.screens.productScreen.AlertMessage]: "This will remove any data yet not saved",
  [tokens.screens.productScreen.AlertCancel]: "Cancel",
  [tokens.screens.productScreen.AlertConfirm]: "Ok",
}