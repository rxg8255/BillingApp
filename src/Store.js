import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    selectedData: [],
    cartData: [],
};

function reducer(state, action) {
    const currentState = {...state};
    switch (action.type) {
        case 'UPDATE_DATA':
            console.log('Updated cart data');
            console.log(action.updatedData);
            currentState.cartData = action.updatedData;
            return currentState;
        case 'ADD_DATA':
            console.log('Added data');
            console.log(action.payload);
            currentState.selectedData = action.payload;
        return currentState;
        case 'REMOVE_DATA':
        return {
            ...state,
            data: action.payload
        };
        default:
        return state;
    }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
