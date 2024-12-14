import { createContext } from 'react';
import { ProductType } from 'src/types';

export const ProductContext = createContext<ProductType[]>([]);
