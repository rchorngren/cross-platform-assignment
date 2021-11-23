import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  View,
  Alert,
} from "react-native";
import { InputText } from "../components/InputText";
import { AntDesign, Foundation } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { Context } from "../context/Context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreen } from "../helpers/types";
import { translate } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";
import { storeData } from "./hooks/storeData";

interface IAddProductScreen
  extends NativeStackScreenProps<StackScreen, "AddProductScreen"> {}

export const AddProductScreen: React.FC<IAddProductScreen> = (props) => {
  const context = useContext(Context);
  const params = props.route.params;

  const [productName, setProductName] = useState(params.productName);
  const [productPrice, setProductPrice] = useState(params.productPrice);
  const [productType, setProductType] = useState(params.productType);
  const [productIndex, setProductIndex] = useState<number | null>(params.index);
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const productTypes = [
    translate(tokens.screens.productScreen.PickerIntegrated),
    translate(tokens.screens.productScreen.PickerPeripheral),
  ];

  const { storingData, navigateReady } = storeData();

  const saveNewItem = () => {
    let currentData = context?.productArray;
    let newData = { productName, productType, productPrice };

    //if currentData is empty, always save the first item
    if (currentData?.length === 0) {
      currentData?.push(newData);
      context?.setProductArray(currentData!);
      storingData(currentData);

      //if there at least one item, check for duplicates
    } else {
      let duplicateFound = false;
      currentData!.forEach((element) => {
        if (element.productName === newData.productName) {
          duplicateFound = true;
        }
      });

      if (duplicateFound) {
        setErrorMessage(translate(tokens.screens.productScreen.ErrorDuplicate));
      } else {
        currentData?.push(newData);
        context?.setProductArray(currentData!);
        storingData(currentData!);
      }
    }
  };

  const saveEditedItem = () => {
    let index = productIndex;
    let currentData = context?.productArray;
    let newData = { productName, productType, productPrice };

    let duplicateFound = false;
    currentData!.forEach((element, index) => {
      if (element.productName === newData.productName) {
        if (index != productIndex) {
          duplicateFound = true;
        }
      }
    });

    if (duplicateFound) {
      setErrorMessage(translate(tokens.screens.productScreen.ErrorDuplicate));
    } else {
      currentData![index!] = newData;
      context?.setProductArray(currentData!);
      storingData(currentData!);
    }
  };

  const saveData = () => {
    const reg = new RegExp(/^\d+(\.\d{1,2})?$/);

    if (
      (productType ==
        translate(tokens.screens.productScreen.PickerIntegrated) &&
        parseInt(productPrice) < 1000) ||
      parseInt(productPrice) > 2600
    ) {
      setErrorMessage(translate(tokens.screens.productScreen.ErrorIntegrated));
    } else if (
      productType == translate(tokens.screens.productScreen.PickerPeripheral) &&
      parseInt(productPrice) <= 0
    ) {
      setErrorMessage(translate(tokens.screens.productScreen.ErrorPeripheral));
    } else {
      if (reg.test(productPrice)) {
        if (productIndex != null) {
          saveEditedItem();
        } else {
          saveNewItem();
        }
      } else {
        setErrorMessage(translate(tokens.screens.productScreen.ErrorPricetype));
      }
    }
  };

  const deleteData = () => {
    let currentArray = context?.productArray;
    currentArray?.splice(productIndex!, 1);
    context?.setProductArray(currentArray!);
    storingData(currentArray!);
  };

  const undoAndGoBack = () => {
    Alert.alert(
      translate(tokens.screens.productScreen.AlertHeader),
      translate(tokens.screens.productScreen.AlertMessage),
      [
        {
          text: translate(tokens.screens.productScreen.AlertCancel),
          style: "cancel",
        },
        {
          text: translate(tokens.screens.productScreen.AlertConfirm),
          onPress: () => props.navigation.goBack(),
        },
      ]
    );
  };

  useEffect(() => {
    if (
      productName == "" ||
      null ||
      productType == "" ||
      null ||
      productPrice == "" ||
      null
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  useEffect(() => {
    if (navigateReady) {
      props.navigation.navigate("ProductListScreen");
    }
  }, [navigateReady]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        {productIndex != null
          ? translate(tokens.screens.productScreen.HeaderTextEdit)
          : translate(tokens.screens.productScreen.HeaderTextNew)}
      </Text>

      <InputText
        defaultValue={translate(tokens.screens.productScreen.InputName)}
        value={productName}
        isNumeric={false}
        onTextChange={setProductName}
      />

      <InputText
        defaultValue={translate(tokens.screens.productScreen.InputPrice)}
        value={productPrice}
        isNumeric={true}
        onTextChange={setProductPrice}
      />

      <Text style={styles.errorText}>{errorMessage}</Text>

      <SelectDropdown
        data={productTypes}
        onSelect={(selectedItem) => {
          setProductType(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        buttonStyle={styles.inputContainer}
        defaultButtonText={
          productType === ""
            ? translate(tokens.screens.productScreen.PickerType)
            : productType
        }
      />

      <View style={styles.buttonView}>
        <Pressable
          style={
            disabled
              ? [styles.buttonStyle, styles.saveButton, styles.disabled]
              : [styles.buttonStyle, styles.saveButton]
          }
          onPress={!disabled ? () => saveData() : null}
        >
          <Text>{translate(tokens.screens.productScreen.ButtonSave)}</Text>
          <AntDesign name="download" size={20} color="white" />
        </Pressable>

        <Pressable
          style={[styles.buttonStyle, styles.cancelButton]}
          onPress={undoAndGoBack}
        >
          <Text>{translate(tokens.screens.productScreen.ButtonCancel)}</Text>
          <Foundation name="prohibited" size={30} color="white" />
        </Pressable>
      </View>

      {productIndex != null ? (
        <Pressable
          style={[styles.buttonStyle, styles.deleteButton]}
          onPress={deleteData}
        >
          <Text>{translate(tokens.screens.productScreen.ButtonDelete)}</Text>
          <Foundation name="trash" size={30} color="white" />
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  errorText: {
    width: 250,
    color: "red",
  },
  inputContainer: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    marginBottom: 25,
  },
  buttonView: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    height: 45,
    width: 115,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
  },
  saveButton: {
    backgroundColor: "green",
  },
  cancelButton: {
    backgroundColor: "lightgray",
  },
  deleteButton: {
    width: 250,
    marginTop: 15,
    backgroundColor: "red",
  },
  disabled: {
    opacity: 0.5,
  },
});
