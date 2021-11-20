import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { Context } from "../context/Context";
import { StackScreen } from "../helpers/types";
import { AntDesign } from '@expo/vector-icons';


interface IProductListScreen extends NativeStackScreenProps<StackScreen, "ProductListScreen"> { }

export const ProductListScreen: React.FC<IProductListScreen> = (props) => {
  const [savedProducts, setSavedProducts] = useState("");

  const context = useContext(Context);

  // useEffect(() => {
  //   console.log('product found: ', savedProducts);
  // }, [savedProducts]);

  useEffect(() => {
    console.log('checking data...', context?.demoText)
    if (context?.demoText != "") {
      console.log('setting products');
      setSavedProducts(context?.demoText!);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Items</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Name</Text>
        <Text style={styles.subHeaderText}>Type</Text>
        <Text style={styles.subHeaderText}>Price</Text>
      </View>

      <View style={styles.content}>
        {savedProducts ? (
          <Text>{savedProducts}</Text>
        ) : (
          <Text style={styles.noItemText}>You do not have any products.{"\n"}Press the green button below to add a new one</Text>
        )}

      </View>

      <Pressable
        onPress={() => props.navigation.navigate("AddProductScreen")}
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
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  noItemText: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15
  },
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0
  }
})