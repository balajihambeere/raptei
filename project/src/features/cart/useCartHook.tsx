import React from "react";
import { ProductType } from "../products/types/Product";


const useCart = () => {

    const [products, setProducts] = React.useState([] as ProductType[]);

    const addToCart = React.useCallback((item: ProductType) => {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products') as string);
        }
        products.push(item);
        setProducts([...products, item]);
        localStorage.setItem('products', JSON.stringify(products));
    }, [])

    const removeFromCart = React.useCallback((productId: number) => {
        let storageProducts = JSON.parse(localStorage.getItem('products') as string);
        let products = storageProducts.filter((product: ProductType) => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(products));
    }, []);


    const getFromCart = React.useEffect(() => {
        if (localStorage.getItem('products')) {
            setProducts(JSON.parse(localStorage.getItem('products') as string));
        }
    }, [products]);

    return { products, addToCart, removeFromCart, getFromCart };
};

export default useCart;
