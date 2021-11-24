enum LoginScreen {
  InputEmail = "loginscreen-input-email",
  InputPassword = "loginscreen-input-password",
  ButtonLogin = "loginscreen-button-login",
}

enum ProductListScreen {
  HeaderText = "productlistscreen-header-text",
  SubHeaderName = "productlistscreen-subheader-name",
  SubHeaderType = "productlistscreen-subheader-type",
  SubHeaderPrice = "productlistscreen-subheader-price",
  NoProductsTextOne = "productlistscreen-noproducts-textone",
  NoProductsTextTwo = "productlistscreen-noproducts-texttwo",
}

enum ProductScreen {
  HeaderTextNew = "productscreen-header-textnew",
  HeaderTextEdit = "productscreen-header-textedit",
  InputName = "productscreen-input-name",
  InputPrice = "productscreen-input-price",
  PickerType = "productscreen-picker-type",
  PickerIntegrated = "productscreen-picker-integrated",
  PickerPeripheral = "productscreen-picker-peripheral",
  ButtonSave = "productscreen-button-save",
  ButtonCancel = "productscreen-button-cancel",
  ButtonDelete = "productscreen-button-delete",

  ErrorDuplicate = "productscreen-error-duplicate",
  ErrorIntegrated = "productscreen-error-integrated",
  ErrorPeripheral = "productscreen-error-peripheral",
  ErrorPricetype = "productscreen-error-pricetype",

  AlertHeader = "productscreen-alert-header",
  AlertMessage = "productscreen-alert-message",
  AlertCancel = "productscreen-alert-cancel",
  AlertConfirm = "productscreen-alert-confirm",
}

export const tokens = {
  screens: {
    loginScreen: LoginScreen,
    productListScreen: ProductListScreen,
    productScreen: ProductScreen,
  },
};