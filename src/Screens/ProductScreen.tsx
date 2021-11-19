import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Pressable, View } from "react-native";
import { InputText } from "../components/InputText";
import { AntDesign, Foundation } from '@expo/vector-icons';

import SelectDropdown from 'react-native-select-dropdown'

export const ProductScreen = () => {
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [selectedProductType, setSelectedProductType] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const productTypes = ["Integrated", "Peripheral"];

  const saveData = () => {
    if (selectedProductType == "Integrated" && (parseInt(priceInput) < 1000) || parseInt(priceInput) > 2600) {
      setErrorMessage("Integrated products may be anywhere within the range of 1000 and 2600 dollars");
    } else if (selectedProductType == "Peripheral" && parseInt(priceInput) <= 0) {
      setErrorMessage("price must be greater than 0");
    } else {
      console.log('Saving data');
    }
  }

  //TODO: Make logic prettier
  useEffect(() => {
    if (nameInput != "" || null) {
      if (selectedProductType != "" || null) {
        if (priceInput != "" || null) {
          setDisabled(false);
        }
        else {
          setDisabled(true);
        }
      }
      else {
        setDisabled(true);
      }
    }
    else {
      setDisabled(true);
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create New Product</Text>

      <InputText defaultValue="Name" value={nameInput} isNumeric={false} onTextChange={setNameInput} />

      <InputText defaultValue="Price" value={priceInput} isNumeric={true} onTextChange={setPriceInput} />
      <Text>{errorMessage}</Text>

      <SelectDropdown
        data={productTypes}
        onSelect={(selectedItem) => { setSelectedProductType(selectedItem) }}
        buttonTextAfterSelection={(selectedItem) => { return selectedItem }}
        rowTextForSelection={(item) => { return item }}
        buttonStyle={styles.inputContainer}
        defaultButtonText="Product Type"
      />

      <View style={styles.buttonView}>
        <Pressable
          style={disabled ? [styles.saveButton, styles.disabled] : styles.saveButton}
          onPress={!disabled ? () => saveData() : null}
        >
          <Text>Save</Text>
          <AntDesign name="download" size={20} color="white" />
        </Pressable>

        <Pressable style={styles.cancelButton}>
          <Text>Cancel</Text>
          <Foundation name="prohibited" size={30} color="white" />
        </Pressable>
      </View>



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
  },
  inputContainer: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    marginBottom: 15
  },
  buttonView: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  saveButton: {
    height: 45,
    width: 115,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "green"
  },
  cancelButton: {
    height: 45,
    width: 115,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "lightgray"
  },
  disabled: {
    opacity: 0.5
  }
})