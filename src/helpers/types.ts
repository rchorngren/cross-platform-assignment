export type StackScreen = {
  LoginScreen: undefined,
  ProductListScreen: undefined,
  AddProductScreen: { productName: string, productType: string, productPrice: string, index: number | null }
}