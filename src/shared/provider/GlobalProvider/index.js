import { createContext, useReducer } from "react";
import {  ADD_PERSON } from "./types";

export const globalContext = createContext({
  count: null,
});

const initialState = {
  person: [],
  people: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
   

    case ADD_PERSON:
      return { ...state, people: [action.payload, ...state.people] };

  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};
