import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { useCart } from '../context/CartContext';

const ProductCatalog = () => {
    const navigate = useNavigate();
    const { addToCart, cartCount } = useCart();
    const [favorites, setFavorites] = useState([]);
    const [addedProducts, setAddedProducts] = useState([]);

    const toggleFavorite = (e, productId) => {
        e.stopPropagation();
        setFavorites(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        // Add to global cart context
        addToCart({
            id: product.id,
            name: product.name,
            price: parseFloat(product.price.replace('$', '').replace(',', '')),
            img: product.img,
            variant: 'Standard', // Default variant for quick add
            qty: 1
        });

        // Visual feedback
        setAddedProducts(prev => [...prev, product.id]);
        setTimeout(() => {
            setAddedProducts(prev => prev.filter(id => id !== product.id));
        }, 1500);
    };

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
                <main className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
                        <h1 className="text-xl font-bold dark:text-white">Sofas & Sectionals</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRODUCTS.map((p, index) => (
                            <FadeIn key={p.id} delay={index * 100}>
                                <div onClick={() => navigate('/product-detail', { state: { product: p } })} className="group bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                                    <div className="aspect-[4/3] bg-gray-100 relative">
                                        <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <button
                                            onClick={(e) => toggleFavorite(e, p.id)}
                                            className={`absolute top-2 right-2 p-2 rounded-full transition-all ${favorites.includes(p.id) ? 'bg-red-500 text-white' : 'bg-white/80 hover:text-red-500'}`}
                                        >
                                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: favorites.includes(p.id) ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1 truncate dark:text-white">{p.name}</h3>
                                        <p className="text-primary font-bold text-xl">{p.price}</p>
                                        <button
                                            onClick={(e) => handleAddToCart(e, p)}
                                            className={`w-full mt-3 font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2 ${addedProducts.includes(p.id) ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary-dark'}`}
                                        >
                                            {addedProducts.includes(p.id) ? (
                                                <>
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                    Added!
                                                </>
                                            ) : (
                                                'Add to Cart'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </main>
            </div>
        </PageTransition>
    );
};

export default ProductCatalog;
