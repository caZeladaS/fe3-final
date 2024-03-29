import React, { createContext, useContext, useReducer, useMemo } from "react";

export const initialState = { theme: "light", data: [] };

// Acciones
export const actionTypes = {
  TOGGLE_THEME: 'TOGGLE_THEME',
};

// Reductor
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// Contexto Global
const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Hook para usar el contexto global
export const useContextGlobal = () => useContext(ContextGlobal);
