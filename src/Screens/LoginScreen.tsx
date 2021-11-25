import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { InputText } from "../components/InputText";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StackScreen } from "../helpers/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getData } from "./hooks/getData";
import { translate } from "../helpers/translation/translation";
import { tokens } from "../helpers/translation/appStructure";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

interface ILoginScreen
  extends NativeStackScreenProps<StackScreen, "LoginScreen"> {}
export const LoginScreen: React.FC<ILoginScreen> = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const { loadData } = getData();

  const loginUser = (data: FormData) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.navigation.navigate("ProductListScreen");
        // ...
      })
      .catch((error) => {
        console.log("Error while logging in: ", error);
        setErrorMessage(true);
      });
  };

  const gif = () => {
    return (
      <View style={styles.errorContainer}>
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
    loadData();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => loginUser(data));

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: translate(tokens.screens.loginScreen.ErrorRequired),
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: translate(tokens.screens.loginScreen.ErrorEmail),
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
          defaultValue={translate(tokens.screens.loginScreen.InputEmail)} 
          value={value} 
          isNumeric={false} 
          onTextChange={onChange}
          onBlur={onBlur}         
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorContainer}>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: translate(tokens.screens.loginScreen.ErrorRequired),
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputText 
          defaultValue={translate(tokens.screens.loginScreen.InputPassword)} 
          value={value} 
          isNumeric={false} 
          onTextChange={onChange}
          onBlur={onBlur} 
          secureTextEntry={true}        
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorContainer}>{errors.password.message}</Text>}

      <Pressable onPress={onSubmit} style={styles.buttonStyle}>
        <Text>{translate(tokens.screens.loginScreen.ButtonLogin)}</Text>
      </Pressable>
      {errorMessage && gif()}
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
  },
  inputContainer: {
    height: 40,
    width: 250,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    paddingLeft: 5,
    marginVertical: 15,
  },
});
