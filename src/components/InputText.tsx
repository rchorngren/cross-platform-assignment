import React from "react"
import { View, StyleSheet, TextInput } from "react-native"

interface IInputText {
  defaultValue: string;
  value: string;
  isNumeric: boolean;
  onTextChange?: (text: string) => void;
}

export const InputText: React.FC<IInputText> = (props) => {

  return (
    <View>

      <TextInput
        style={styles.inputContainer}
        onChangeText={props.onTextChange}
        value={props.value}
        placeholder={props.defaultValue}
        keyboardType={props.isNumeric ? "numeric" : "default"}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    paddingLeft: 5,
    marginBottom: 15
  }
})