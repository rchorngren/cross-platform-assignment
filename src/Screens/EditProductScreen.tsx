import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert, Pressable } from "react-native";
import { AntDesign, Foundation } from '@expo/vector-icons';
import { InputText } from "../components/InputText";
import { Context } from "../context/Context";
import { StackScreen } from "../helpers/types";
import SelectDropdown from "react-native-select-dropdown";

interface IEditProductScreen extends NativeStackScreenProps<StackScreen, "EditProductScreen"> {
}

export const EditProductScreen: React.FC<IEditProductScreen> = (props) => {
  const params = props.route.params;

  const [nameInput, setNameInput] = useState<string>(params.productName);
  const [priceInput, setPriceInput] = useState(params.productPrice);
  const [selectedProductType, setSelectedProductType] = useState(params.productType);
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const productTypes = ["Integrated", "Peripheral"];

  const context = useContext(Context);

  const saveData = () => { }

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
    if ((nameInput == "" || null) || (selectedProductType == "" || null) || (priceInput == "" || null)) {
      setDisabled(true)
    } else {
      setDisabled(false);
    }
  })


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Edit Product</Text>

      <InputText defaultValue="Name" value={nameInput} isNumeric={false} onTextChange={setNameInput} />

      <InputText defaultValue="Price" value={priceInput} isNumeric={true} onTextChange={setPriceInput} />
      <Text style={styles.errorText}>{errorMessage}</Text>


      <SelectDropdown
        data={productTypes}
        onSelect={(selectedItem) => { setSelectedProductType(selectedItem) }}
        buttonTextAfterSelection={(selectedItem) => { return selectedItem }}
        rowTextForSelection={(item) => { return item }}
        buttonStyle={styles.inputContainer}
        defaultValue={params.productType}
        defaultButtonText={params.productType}
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
  )
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