import React, { createContext, useContext, useReducer } from 'react'

// prepare the data layer
export const stateContext = createContext();

// wrap the stateProvider app with the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <stateContext.Provider value = {useReducer( reducer, initialState )}>
            {children}
         </stateContext.Provider>
    )
}

// pull data from data layer
export const useStateValue = () => useContext(stateContext)







