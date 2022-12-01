import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    changes: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteChange(id) {
        dispatch({
            type: 'DELETE_CHANGE',
            payload: id
        })
    }

    function addChange(change) {
        dispatch({
            type: 'ADD_CHANGE',
            payload: change
        })
    }

    return (<GlobalContext.Provider value={{
        changes: state.changes,
        deleteChange,
        addChange
    }}>
        {children}
    </GlobalContext.Provider>
    )
}