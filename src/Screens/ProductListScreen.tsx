import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, FlatList } from "react-native";
import { Context } from "../context/Context";
import { StackScreen } from "../helpers/types";
import { AntDesign } from '@expo/vector-icons';
import { translate } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";


interface IProductListScreen extends NativeStackScreenProps<StackScreen, "ProductListScreen"> { }

export const ProductListScreen: React.FC<IProductListScreen> = (props) => {
  const context = useContext(Context);
  const [savedProducts, setSavedProducts] = useState(context?.productArray);

  const [itemsToRender, setItemsToRender] = useState(
    <View style={styles.noItemView}>
      <Text style={styles.noItemText}>{translate(tokens.screens.productListScreen.NoProductsTextOne)}{"\n"}{translate(tokens.screens.productListScreen.NoProductsTextTwo)}</Text>
    </View>
  );

  const navigateToEditScreen = (productName: string, productPrice: string, productType: string, index: number) => {
    props.navigation.navigate("AddProductScreen", { productName, productPrice, productType, index });
  }

  const navigateToAddScreen = () => {
    const emptyObject = { productName: "", productPrice: "", productType: "", index: null }
    props.navigation.navigate("AddProductScreen", emptyObject)
  }

  useEffect(() => {
    const navListener = props.navigation.addListener('focus', () => {
      setSavedProducts(context?.productArray);

      if (savedProducts!.length > 0) {
        setItemsToRender(
          <FlatList
            data={savedProducts}
            renderItem={({ item, index }) =>
              <Pressable style={styles.product} key={index} onPress={() => navigateToEditScreen(item.productName, item.productPrice, item.productType, index)}>
                <Text>{item.productName}</Text>
                <Text>{item.productType}</Text>
                <Text>$ {item.productPrice}</Text>
              </Pressable>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        )

      } else {
        setItemsToRender(
          <View style={styles.noItemView}>
            <Text style={styles.noItemText}>{translate(tokens.screens.productListScreen.NoProductsTextOne)}{"\n"}{translate(tokens.screens.productListScreen.NoProductsTextTwo)}</Text>
          </View>
        )
      }
    });

    return navListener;
  }, [props.navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{translate(tokens.screens.productListScreen.HeaderText)}</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>{translate(tokens.screens.productListScreen.SubHeaderName)}</Text>
        <Text style={styles.subHeaderText}>{translate(tokens.screens.productListScreen.SubHeaderType)}</Text>
        <Text style={styles.subHeaderText}>{translate(tokens.screens.productListScreen.SubHeaderPrice)}</Text>
      </View>

      <View style={styles.content}>
        {itemsToRender}
      </View>

      <Pressable
        onPress={() => navigateToAddScreen()}
        style={styles.fab}
      >
        <AntDesign name="pluscircle" size={36} color="green" />
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  header: {
    height: 50,
    justifyContent: "center",
    backgroundColor: "green"
  },
  headerText: {
    marginLeft: 15,
    fontSize: 25,
    color: "white"
  },
  subHeader: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
  },
  subHeaderText: {
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  noItemView: {
    flex: 1,
    justifyContent: "center",
  },
  noItemText: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  },
  flatListItem: {
    width: 250,
    alignItems: "center"
  },
  product: {
    height: 40,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "gray"
  },
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0
  }
})