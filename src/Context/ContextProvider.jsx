import React, { useState } from 'react';
import { CartUpdateContext } from './CreateContext';

const ContextProvider = ({ children }) => {
    const [Carts, SetCarts] = useState([])
    const HandleCartUpdate = (product) => {
        SetCarts((prev) => {
            const exists = prev.some((item) => item.id === product.id)
            if (exists) {
                return prev.map((item) => item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item)
            }
            else {
                return [...prev, { ...product, cartQuantity: 1 }]
            }
        })

    }
    const obj = {

        HandleCartUpdate,
        Carts,
        SetCarts
    }
    return (
        <CartUpdateContext value={obj}>
            {children}
        </CartUpdateContext>
    );
};

export default ContextProvider;