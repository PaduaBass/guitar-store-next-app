import React from 'react';
import { ProductProvider } from './dataService/ProductContext';

const GlobalContext: React.FC = ({ children }) => {
  return <ProductProvider>
      { children }
  </ProductProvider>;
}

export default GlobalContext;