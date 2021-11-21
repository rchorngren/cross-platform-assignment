export type StackScreen = {
  ProductListScreen: undefined,
  AddProductScreen: { productName: string, productType: string, productPrice: string, index: number | null }
  EditProductScreen: { productName: string, productType: string, productPrice: string }
}