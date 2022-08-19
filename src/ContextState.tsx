
import React, { createContext, useContext, useReducer, useState } from 'react';
import { ProductType } from './features/products/ProductType';

export interface AppContextType {
    cartItems: ProductType[];
    addToCart: (item: ProductType) => void;
    removeFromCart: (productId: number) => void;
}
export const AppContext = createContext({} as AppContextType);

const AppContextWrapper = ({ children }: any) => {
    const reducer = (state: AppContextType, items: ProductType[]) => {
        return { ...state, cartItems: items }
    };

    const [state, dispatch] = useReducer(reducer, {} as AppContextType);

    const addToCart = React.useCallback((item: ProductType) => {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products') as string);
        }
        products.push(item);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(products);
    }, []);

    const removeFromCart = React.useCallback((productId: number) => {
        let storageProducts = JSON.parse(localStorage.getItem('products') as string);
        let products = storageProducts.filter((product: ProductType) => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(products);
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem('products')) {
            dispatch(JSON.parse(localStorage.getItem('products') as string));
        }
    }, []);

    return (<AppContext.Provider value={{ ...state, addToCart, removeFromCart }}>
        {children}
    </AppContext.Provider>);
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppContextWrapper, useAppContext }