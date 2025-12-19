import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('ashley_cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('ashley_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id && item.variant === product.variant);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.variant === product.variant)
                        ? { ...item, qty: item.qty + (product.qty || 1) }
                        : item
                );
            }
            return [...prev, { ...product, qty: product.qty || 1 }];
        });
    };

    const removeFromCart = (id, variant) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && (variant ? item.variant === variant : true))));
    };

    const updateQuantity = (id, delta, variant) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id && (variant ? item.variant === variant : true)) {
                return { ...item, qty: Math.max(1, item.qty + delta) };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const setCart = (items) => {
        setCartItems(items);
    };

    const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            setCart,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
