import React, { useState } from "react";

interface IProducts {
  productName: string;
  productType: "Integrated" | "Peripheral";
  productPrice: string;
}

interface IContext {
  productArray: IProducts[];
  setProductArray: (products: IProducts[]) => void;
}

export const Context = React.createContext<IContext | undefined>(
  undefined
)

export const ContextProvider: React.FC = (props) => {
  const [productArray, setProductArray] = useState<IProducts[]>([]);

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