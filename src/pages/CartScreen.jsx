import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
    const navigate = useNavigate();
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const tax = cartTotal * 0.0834;
    const total = cartTotal + tax;

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
                <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 content-start">
                    <div className="lg:col-span-3 flex items-center justify-between mb-2">
                        <h1 className="text-2xl font-bold dark:text-white">Your Cart</h1>
                        <button onClick={() => navigate('/self-service')} className="text-sm font-bold text-text-secondary dark:text-gray-400 hover:text-primary transition-colors">Continue Shopping</button>
                    </div>
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.length === 0 ? (
                            <FadeIn>
                                <div className="bg-white dark:bg-surface-dark p-8 rounded-xl border border-border-light dark:border-border-dark text-center">
                                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4 block">shopping_cart</span>
                                    <h3 className="text-xl font-bold dark:text-white mb-2">Your cart is empty</h3>
                                    <p className="text-text-secondary dark:text-gray-400 mb-4">Looks like you haven't added anything yet.</p>
                                    <button onClick={() => navigate('/self-service')} className="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">Start Shopping</button>
                                </div>
                            </FadeIn>
                        ) : (
                            cartItems.map((item, index) => (
                                <FadeIn key={`${item.id}-${item.variant}`} delay={index * 100}>
                                    <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4">
                                        <div className="w-full sm:w-24 h-48 sm:h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                            <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start dark:text-white">
                                                <h3 className="font-bold text-lg truncate mr-2">{item.name}</h3>
                                                <span className="font-bold whitespace-nowrap">${(item.price * item.qty).toFixed(2)}</span>
                                            </div>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">{item.variant}</p>
                                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                                <div className="flex items-center border border-gray-300 dark:border-border-dark rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1, item.variant)}
                                                        className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                                                    >-</button>
                                                    <span className="px-2 text-sm font-bold dark:text-white">{item.qty}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1, item.variant)}
                                                        className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                                                    >+</button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.variant)}
                                                    className="text-sm text-red-500 hover:underline"
                                                >Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))
                        )}
                    </div>
                    <FadeIn delay={200}>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark h-fit sticky top-24 dark:text-white">
                            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                            <div className="space-y-2 text-sm mb-4">
                                <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                            </div>
                            <div className="border-t border-gray-200 dark:border-border-dark pt-4 mb-6 flex justify-between text-xl font-bold">
                                <span>Total</span><span>${total.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                disabled={cartItems.length === 0}
                                className={`w-full py-3 font-bold rounded-lg shadow transition-colors ${cartItems.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary text-white hover:bg-primary-dark'}`}
                            >
                                Checkout
                            </button>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </PageTransition>
    );
};

export default CartScreen;
