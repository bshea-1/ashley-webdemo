import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { SAVED_CARTS } from '../data';
import { useCart } from '../context/CartContext';

const MyCarts = () => {
    const navigate = useNavigate();
    const { setCart } = useCart();
    const [expandedCart, setExpandedCart] = useState(null);

    const handleResume = (items) => {
        setCart(items);
        navigate('/cart');
    };

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-100 text-green-700';
            case 'Saved': return 'bg-yellow-100 text-yellow-700';
            case 'Pending': return 'bg-blue-100 text-blue-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const toggleExpand = (id) => {
        setExpandedCart(expandedCart === id ? null : id);
    };

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen p-6 text-text-main dark:text-white">
                <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/associate-dashboard')} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 className="text-2xl font-bold">Saved Carts</h1>
                    </div>
                    <button
                        onClick={() => navigate('/self-service')}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md"
                    >
                        <span className="material-symbols-outlined text-sm">add</span>
                        New Cart
                    </button>
                </div>
                <main className="max-w-4xl mx-auto space-y-4">
                    {SAVED_CARTS.map((cart, index) => (
                        <FadeIn key={cart.id} delay={index * 100}>
                            <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden transition-all duration-300">
                                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold">Cart #{cart.id}</h3>
                                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-black ${getStatusStyle(cart.status)}`}>
                                                {cart.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-text-secondary dark:text-gray-400">
                                            Customer: <button onClick={() => navigate(`/customer/${cart.customerId}`)} className="font-bold text-primary hover:underline">{cart.customer}</button>
                                        </p>
                                        <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">Created: {cart.date}</p>
                                    </div>
                                    <div className="text-left sm:text-right px-4 py-2 bg-gray-50 dark:bg-black/10 rounded-lg border border-border-light dark:border-border-dark">
                                        <p className="text-xl font-black text-primary">${cart.total.toFixed(2)}</p>
                                        <p className="text-xs font-bold text-text-secondary dark:text-gray-400 text-center">{cart.items.length} items</p>
                                    </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <button
                                            onClick={() => toggleExpand(cart.id)}
                                            className="flex-1 sm:flex-none p-2 border border-border-light dark:border-border-dark rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center"
                                            title="View Items"
                                        >
                                            <span className="material-symbols-outlined">{expandedCart === cart.id ? 'expand_less' : 'expand_more'}</span>
                                        </button>
                                        <button
                                            onClick={() => handleResume(cart.items)}
                                            className="flex-1 sm:flex-none px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-sm flex items-center justify-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-sm">play_arrow</span>
                                            Resume
                                        </button>
                                    </div>
                                </div>

                                {/* Expandable Items Section */}
                                {expandedCart === cart.id && (
                                    <div className="border-t border-border-light dark:border-border-dark bg-gray-50/50 dark:bg-black/5 p-4 space-y-3">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-text-secondary dark:text-gray-500 mb-2">Cart Contents</h4>
                                        {cart.items.map((item) => (
                                            <div key={`${item.id}-${item.variant}`} className="flex items-center gap-4 bg-white dark:bg-surface-dark p-3 rounded-lg border border-border-light dark:border-border-dark shadow-sm">
                                                <img src={item.img} alt={item.name} className="size-12 rounded object-cover border border-border-light dark:border-border-dark" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold truncate">{item.name}</p>
                                                    <p className="text-xs text-text-secondary dark:text-gray-400">{item.variant} • Qty: {item.qty}</p>
                                                </div>
                                                <p className="text-sm font-black text-primary">${(item.price * item.qty).toFixed(2)}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </main>
            </div>
        </PageTransition>
    );
};
export default MyCarts;
