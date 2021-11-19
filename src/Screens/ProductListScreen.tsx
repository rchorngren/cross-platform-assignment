import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackScreen } from "../helpers/types";

interface IProductListScreen extends NativeStackScreenProps<StackScreen, 'ProductListScreen'> { }

export const ProductListScreen: React.FC<IProductListScreen> = (props) => {

  return (
    <View style={styles.container}>
      <Text>Hello from ProductListScreen</Text>
      <Pressable
        onPress={() => props.navigation.navigate("AddProductScreen")}
      >
        <Text>Add product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})