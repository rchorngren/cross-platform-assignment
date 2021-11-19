import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AddProductScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Hello from AddProductScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})