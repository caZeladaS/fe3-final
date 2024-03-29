import axios from 'axios';
import { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from './reducer/reducer';

const DentistStates = createContext()

const initialState = {
        favs: [],
        list: [],
        // theme: '' o 'dark'
        // theme: true o false
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);
useEffect(()=> {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        // console.log(res);
        dispatch({type: 'GET_LIST', payload: res.data})
    })    
}, [])

    return (
        <DentistStates.Provider value={{state, dispatch}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)