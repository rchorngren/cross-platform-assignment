import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { InputText } from "../components/InputText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StackScreen } from "../helpers/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface ILoginScreen
  extends NativeStackScreenProps<StackScreen, "LoginScreen"> {}
export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage(errorMessage);
      });
  };

  const gif = () => {
    return (
      <View>
        <Image
          style={{ width: 300, height: 220 }}
          source={{
            uri: "https://media0.giphy.com/media/RKMm7X3HGKZMuoZlMF/giphy.gif?cid=790b76114adfa09c663f5d9769765db4b5fd65f054049697&rid=giphy.gif&ct=g",
          }}
        />
      </View>
    );
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
      {errorMessage ? (
        <View style={styles.errorContainer}>
          <Text>{errorMessage}</Text> 
         <View>{gif()}</View>
        </View>
      ) : null}
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
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  }
});
