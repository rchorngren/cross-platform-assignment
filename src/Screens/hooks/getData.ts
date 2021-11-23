import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { Context } from "../../context/Context";

export const getData = () => {

 const context = useContext(Context);

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem("storedData");
      if (value !== null) {
        let storedItems = JSON.parse(value);
        context?.setProductArray(storedItems);
      }
    } catch (error) {
      console.log("There was an error while retrieving data ", error);
    }
  };
  return ({loadData});
};
