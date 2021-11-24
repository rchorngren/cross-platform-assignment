import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { InputText } from "../components/InputText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StackScreen } from "../helpers/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getData } from "./hooks/getData";
import { translate } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";

interface ILoginScreen
  extends NativeStackScreenProps<StackScreen, "LoginScreen"> {}
export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {loadData} = getData();

  const loginUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <Text></Text>
      <InputText
        defaultValue={translate(tokens.screens.loginScreen.InputEmail)}
        value={email}
        isNumeric={false}
        onTextChange={setEmail}
      />
      <InputText
        defaultValue={translate(tokens.screens.loginScreen.InputPassword)}
        value={password}
        isNumeric={false}
        onTextChange={setPassword}
        secureTextEntry={true}
      />
      <Pressable onPress={() => loginUser()} style={styles.buttonStyle}>
        <Text>{translate(tokens.screens.loginScreen.ButtonLogin)}</Text>
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
