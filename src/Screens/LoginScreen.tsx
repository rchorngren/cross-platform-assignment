import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { InputText } from "../components/InputText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StackScreen } from "../helpers/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface ILoginScreen
  extends NativeStackScreenProps<StackScreen, "LoginScreen"> {}
export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.navigation.navigate("ProductListScreen");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <InputText
        defaultValue={"Username"}
        value={userName}
        isNumeric={false}
        onTextChange={setUserName}
      />
      <InputText
        defaultValue={"Password"}
        value={password}
        isNumeric={false}
        onTextChange={setPassword}
        secureTextEntry={true}
      />
      <Pressable onPress={() => loginUser()} style={styles.buttonStyle}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonStyle: {
    height: 45,
    width: 115,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "green",
  },
});
