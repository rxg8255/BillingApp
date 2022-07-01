import React, { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
    selectedData: [],
};

function reducer(state, action) {
    const currentState = {...state};
    switch (action.type) {
        // case 'UPDATE_DATA':
        //     console.log(action.payload);
        //     currentState.selectedData.mrp = 
        // return { ...state, item: action.payload };
        case 'ADD_DATA':
            console.log('Added data test');
            action.payload.map((item) => item['key'] = Number(item['mrp_price']));
            console.log(action.payload);
            currentState.selectedData = action.payload;
            debugger;
            // console.log(action.payload);
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
