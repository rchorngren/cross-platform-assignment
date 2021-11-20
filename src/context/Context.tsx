import React, { useState } from "react";

interface IProducts {
  productName: string;
  productType: "Integrated" | "Peripheral";
  productPrice: string;
}

interface IContext {
  productArray: IProducts[];
  // setProductArray: (array: []) => void;
  setProductArray: any;
}

export const Context = React.createContext<IContext | undefined>(
  undefined
)

export const ContextProvider: React.FC = (props) => {
  const [productArray, setProductArray] = useState<any>([]);

  return (
    <Context.Provider
      value={{
        productArray: productArray,
        setProductArray: setProductArray
      }}
    >
      {props.children}
    </Context.Provider>
  );
};