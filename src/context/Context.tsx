import React, { useState } from "react";

export interface IProducts {
  productName: string;
  productType: string | "Integrated" | "Peripheral";
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