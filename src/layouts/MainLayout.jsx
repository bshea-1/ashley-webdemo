import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import { useCart } from '../context/CartContext';

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartCount } = useCart();

    // Determine if we should show the search bar
    // Hide on: welcome screen, associate login, checkout/confirmation flows, and associate tools
    const hideSearchPaths = ['/', '/associate-login', '/navigate', '/associate-dashboard', '/customer-lookup', '/my-carts', '/settings', '/checkout', '/confirmation'];
    const showSearch = !hideSearchPaths.includes(location.pathname) && !location.pathname.startsWith('/customer/');

    // Determine if we should show cart icon
    // Hide on: associate dashboard/tools, welcome, login, checkout, confirmation
    const hideCartPaths = ['/', '/associate-login', '/associate-dashboard', '/customer-lookup', '/my-carts', '/settings', '/checkout', '/confirmation'];
    const showCart = !hideCartPaths.includes(location.pathname) && !location.pathname.startsWith('/customer/');

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white overflow-y-scroll scrollbar-stable">
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-white/95 backdrop-blur-md px-6 md:px-10 h-20 shadow-sm dark:bg-surface-dark dark:border-border-dark transition-all duration-300">
                <div onClick={() => navigate('/')} className="cursor-pointer flex items-center h-full">
                    <Logo />
                </div>

                <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                    {location.pathname === '/' && (
                        <button
                            onClick={() => navigate('/associate-dashboard')}
                            className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 text-amber-900 rounded-full font-bold text-xs hover:bg-amber-200 transition-colors"
                        >
                            <span className="material-symbols-outlined text-base">bug_report</span>
                            Admin (Debug)
                        </button>
                    )}

                    {showSearch && (
                        <label className="hidden md:flex flex-col min-w-40 !h-12 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-border-light bg-surface-light hover:border-primary/50 transition-colors">
                                <div className="text-text-secondary flex border-none items-center justify-center pl-4 rounded-l-full border-r-0">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-text-main focus:outline-0 border-none bg-transparent h-full placeholder:text-text-secondary px-4 pl-2 text-base" placeholder="Search furniture..." />
                            </div>
                        </label>
                    )}

                    {showCart && (
                        <button onClick={() => navigate('/cart')} className="p-2 relative hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-3xl">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 size-5 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-surface-dark">{cartCount}</span>
                            )}
                        </button>
                    )}
                </div>
            </header>

            <main className="flex-1 w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
