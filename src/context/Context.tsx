import React, { useState } from "react";

interface IContext {
  demoText: string;
  setDemoText: (text: string) => void;
}

export const Context = React.createContext<IContext | undefined>(
  undefined
);

export const ContextProvider: React.FC = (props) => {
  const [demoText, setDemoText] = useState("");

  return (
    <Context.Provider
      value={{
        demoText: demoText,
        setDemoText: setDemoText,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};