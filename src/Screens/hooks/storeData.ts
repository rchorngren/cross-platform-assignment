import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { IProducts } from "../../context/Context";

export const storeData = () => {
 const [navigateReady, setNavigateReady] = useState(false);
  const storingData = async (value: IProducts[]) => {
    try {
      let itemToSet = JSON.stringify(value);
      await AsyncStorage.setItem("storedData", itemToSet);
      setNavigateReady(true)
    } catch (error) {
      console.log("There was an error ", error);
    }
  };
  return ({storingData, navigateReady});
};
