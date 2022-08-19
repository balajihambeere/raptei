
import React, { createContext, useContext, useReducer, useState } from 'react';
import { ProductType } from './features/products/ProductType';

export interface AppContextType {
    cartItems: ProductType[];
    addToCart: (item: ProductType) => void;
}
export const AppContext = createContext({} as AppContextType);

const AppContextWrapper = ({ children }: any) => {
    const reducer = (state: AppContextType, items: ProductType[]) => {
        return { ...state, cartItems: items }
    };

    const [state, dispatch] = useReducer(reducer, {} as AppContextType);

    console.log(state);
    const addToCart = (item: ProductType) => {
        console.log(item);
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products') as string);
        }
        products.push(item);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(products)
    }

    React.useEffect(() => {
        if (localStorage.getItem('products')) {
            dispatch(JSON.parse(localStorage.getItem('products') as string));
        }
    }, []);
    
    return (<AppContext.Provider value={{ ...state, addToCart }}>
        {children}
    </AppContext.Provider>);
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppContextWrapper, useAppContext }