import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Pressable, View, Alert } from "react-native";
import { InputText } from "../components/InputText";
import { AntDesign, Foundation } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { Context } from "../context/Context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreen } from "../helpers/types";

interface IAddProductScreen extends NativeStackScreenProps<StackScreen, "AddProductScreen"> {
}

export const AddProductScreen: React.FC<IAddProductScreen> = (props) => {
  const context = useContext(Context);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productType, setProductType] = useState<"Peripheral" | "Integrated">("Peripheral")
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [productArray, setProductArray] = useState(context?.productArray);

  const productTypes = ["Integrated", "Peripheral"];



  const saveData = () => {
    if (productType == "Integrated" && (parseInt(productPrice) < 1000) || parseInt(productPrice) > 2600) {
      setErrorMessage("Integrated products may be anywhere within the range of 1000 and 2600 dollars");
    } else if (productType == "Peripheral" && parseInt(productPrice) <= 0) {
      setErrorMessage("Price must be greater than 0");
    } else {

      var newData = { productName, productType, productPrice }

      // context?.setProductArray(productArray?.push(newData));
      context?.setProductArray([newData]);

      props.navigation.navigate("ProductListScreen");
    }
  }

  const undoAndGoBack = () => {
    Alert.alert(
      "Undo changes?",
      "This will remove any data yet not saved",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Ok",
          onPress: () => props.navigation.goBack()
        }
      ]
    );
  }

  useEffect(() => {
    console.log('productArray:', productArray)
    if ((productName == "" || null) || (productPrice == "" || null)) {
      setDisabled(true)
    } else {
      setDisabled(false);
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create New Product</Text>

      <InputText defaultValue="Name" value={productName} isNumeric={false} onTextChange={setProductName} />

      <InputText defaultValue="Price" value={productPrice} isNumeric={true} onTextChange={setProductPrice} />
      <Text style={styles.errorText}>{errorMessage}</Text>

      <SelectDropdown
        data={productTypes}
        onSelect={(selectedItem) => { setProductType(selectedItem) }}
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

        <Pressable
          style={styles.cancelButton}
          onPress={undoAndGoBack}
        >
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
  errorText: {
    width: 250,
    color: "red"
  },
  inputContainer: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    marginBottom: 25
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