import { createContext, useReducer } from "react";

const InputContext = createContext();

const inputReducer = (state = "bla", action) => {
  switch (action.type) {
    case "INPUT_TEXT":
      return action.payload;
    default:
      return state;
  }
};

const InputProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inputReducer, "");

  const value = { state, dispatch };
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export {InputProvider, InputContext}