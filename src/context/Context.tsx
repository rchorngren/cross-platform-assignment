import React, { useState } from "react";

interface IContext {
  demoText: string;
  setDemoText: (text: string) => void;

  // productArray: ???
  // setProductArray: ???

}

export const Context = React.createContext<IContext | undefined>(
  undefined
);

export const ContextProvider: React.FC = (props) => {
  const [demoText, setDemoText] = useState("");
  // const [products, setProducts] = useState({});

  return (
    <Context.Provider
      value={{
        demoText: demoText,
        setDemoText: setDemoText,
        // products: products,
        // setProducts: setProducts
      }}
    >
      {props.children}
    </Context.Provider>
  );
};