import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { InputText } from "../components/InputText";

export const ProductScreen = () => {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create New Product</Text>

      <InputText defaultValue="Name" value={nameInput} isNumeric={false} onTextChange={setNameInput} />

      <InputText defaultValue="Price" value={priceInput} isNumeric={true} onTextChange={setPriceInput} />

      {/* <InputText defaultValue="Name" value={nameInput} isNumeric={false} onTextChange={setNameInput} /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15
  }
})