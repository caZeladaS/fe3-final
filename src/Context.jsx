import axios from 'axios';
import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react';

// Estado inicial combinado
const initialState = {
    favs: [],
    list: [],
    theme: 'light', // o 'dark'
};

// Acciones combinadas
export const actionTypes = {
    TOGGLE_THEME: 'TOGGLE_THEME',
    GET_LIST: 'GET_LIST',
};

// Reductor combinado
const combinedReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        case actionTypes.GET_LIST:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

// Creación del contexto combinado
export const CombinedContext = createContext(initialState);

// Proveedor del contexto combinado
export const CombinedContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(combinedReducer, initialState);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch({ type: actionTypes.GET_LIST, payload: res.data });
            });
    }, []);

    const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <CombinedContext.Provider value={value}>
            {children}
        </CombinedContext.Provider>
    );
};

// Hook personalizado para consumir el contexto combinado
export const useCombinedContext = () => useContext(CombinedContext);
