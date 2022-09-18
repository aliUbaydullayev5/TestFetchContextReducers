import React, {createContext, useEffect, useReducer, useState} from 'react';
import fetchReducer from "../Reducers/fetchReducer";

export const MainContext = createContext()

const Context = ({children}) => {

    const [state, dispatch] = useReducer(fetchReducer, []);


    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch({type: 'addData', payload: json}))
    }, []);


    return(
        <MainContext.Provider value={[state, dispatch]}>
            {children}
        </MainContext.Provider>
    )
}

export default Context;