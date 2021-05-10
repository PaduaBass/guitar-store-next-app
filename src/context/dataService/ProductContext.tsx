import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';
interface ProductContextProps {
    products: Product[];
    getProducts(): Promise<void>;
}
interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const ProductProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState([]);
    const getProducts = useCallback(async() => {
        const response = await api.get("/products");
        setProducts(response.data);
    },[]);

    useEffect(() => {
        getProducts();
    },[]);

    return <ProductContext.Provider value={{ getProducts, products }}>
        { children }
    </ProductContext.Provider>;
}

function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('Not found context product');
    }
    return context;
}


export { ProductProvider, useProductContext }