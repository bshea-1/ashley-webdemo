import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { useCart } from '../context/CartContext';

const COLORS = [
    { id: 'beige', name: 'Linen Beige', hex: '#d6cdc3' },
    { id: 'charcoal', name: 'Charcoal Gray', hex: '#4a4a4a' },
];

const ProductDetail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { addToCart, cartCount } = useCart();
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    // Fallback if accessed directly without state
    const product = state?.product || {
        id: 999,
        name: "Tanavi 2-Piece Sectional",
        price: "$1,299.99",
        numPrice: 1299.99,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMPsLS0AIQwmfycv9JrPyjnaJaYWsEtCRq0hFqXdjp95gtTjVYcORSR_ZtiQlmkKVDN0U5E35CEvTCfXznwqiK19oXsN4X9mXekwkfO-iUiyznYgs2UlwiydKqEcTt_pH1dCkjgPULn_W_nZI54H_O0DnPO1VTmaFGfmMKPle3DYDXWgeg8aHmcWZ_E91SZ2vjqsTmIGMZmG8-BWEo2xS9tacsskc4208Si7tThcjFCZKvTwAqvBtWRh0qWhnJF46wBct6XdMhUkOV"
    };

    // Construct images array - put the real product image first
    const images = [
        product.img,
        // Add some generic filler images for gallery effect
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD86a0CGCWebZZNa7mC4EGEt1oszU7YdQtVmXsm180zdiZZzH973bN0lwhFVculdUra36uZ2Ig6zF0LTj2mBgYYce-vyCLr6bsOo0jPIg9irg2OHE1s2gFID0-hI4e2b5ddP6X9HMkgqbQp0tUPpPFtQ--oDMaaV5z02_B0-ftlgJ-5MTqoPLw-fvDabw0eII5FJC4eRAnEGaVeaECzGNxQfGPsvYTTYTP3OIcKvrIrcL4if7-yB06txuQwygVzdlAgkvtfhEOdPo7f",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBfZbBtpdbEXs1lNQ31M0UaFOYndvCw-RfUo_pNWuR9oR8OAV9F3VA4uMyAyjkvr5q6pq8nkeocEWgIoxWifc7Aex5JJesOhmKwfqq1dAI1Ao8jTEA9OuL_1FdrGmlGNvdrFxVwh8pJOAbbSZHyqvIKGYekSmdJa73euciheScquAIlFKeHcSD0AWgOOidGqAu7jabuVQEtMxiTeaoXWf-Lr0swxmcZTOO-CPO6XBBwdR92Svo7wvGtOivctJkz4w3l_MIgHF7ZoZoZ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCsIsRoov8Afgf_n8Q9NE3wGw1jO2gB7WJu_P-ItI2lKxM8E4mnZ4qLs3jJUFcIPHUqUv82FvbX0kYYx-gToo0y7TlzWoip81rZCBgWbu6EhNzaZ53T-smNSGkUs-ojucw_ksVJyEv7l2z8v4Y_SU-WtzPBTjU9PX78XToUb-Ayge-ZNIe_Bqea3ln80fCbTP7b2XmBloThqzOsmwaFEhcbuuuReSibI-AJ1wZAunyyOANCarqdi-jBA3LYRZ8sJP79-0tKn4TGwi7H",
    ];

    // Ensure we don't have duplicates if product.img matches one of the fillers
    const uniqueImages = Array.from(new Set(images));

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.numPrice || parseFloat(product.price.replace('$', '').replace(',', '')),
            img: product.img,
            variant: selectedColor.name,
            qty: quantity
        });

        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 2000);
    };

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen">
                <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="lg:col-span-2">
                        <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-bold hover:text-primary transition-colors mb-4"><span className="material-symbols-outlined">arrow_back</span> Back</button>
                    </div>
                    <FadeIn>
                        <div className="space-y-4">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-border-light dark:border-border-dark">
                                <img src={uniqueImages[selectedImage]} className="w-full h-full object-cover transition-all duration-300" />
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {uniqueImages.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`aspect-square rounded-lg border-2 cursor-pointer overflow-hidden transition-all ${selectedImage === i ? 'border-primary ring-2 ring-primary/30' : 'border-border-light dark:border-border-dark hover:border-primary/50'}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <h1 className="text-3xl font-black text-text-main dark:text-white mb-2">{product.name}</h1>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-primary flex">
                                        {[1, 2, 3, 4].map(i => <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                                        <span className="material-symbols-outlined">star_half</span>
                                    </span>
                                    <span className="text-sm text-text-secondary dark:text-gray-400">(128 Reviews)</span>
                                </div>
                                <p className="text-4xl font-bold text-primary">{product.price}</p>
                            </div>

                            {/* Color Selection */}
                            <div className="p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl">
                                <h3 className="font-bold mb-3 dark:text-white">Color: {selectedColor.name}</h3>
                                <div className="flex gap-3">
                                    {COLORS.map(color => (
                                        <button
                                            key={color.id}
                                            onClick={() => setSelectedColor(color)}
                                            className={`size-10 rounded-full transition-all ${selectedColor.id === color.id ? 'ring-2 ring-primary ring-offset-2' : 'ring-1 ring-gray-300 hover:ring-primary'}`}
                                            style={{ backgroundColor: color.hex }}
                                            title={color.name}
                                        ></button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div className="p-4 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl">
                                <h3 className="font-bold mb-3 dark:text-white">Quantity</h3>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="size-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                    <span className="text-xl font-bold w-8 text-center dark:text-white">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="size-10 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={addedToCart}
                                className={`w-full py-4 font-bold rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${addedToCart ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary-dark'}`}
                            >
                                {addedToCart ? (
                                    <>
                                        <span className="material-symbols-outlined">check</span>
                                        Added to Cart!
                                    </>
                                ) : (
                                    <>Add to Cart - {((product.numPrice || parseFloat(product.price.replace('$', '').replace(',', ''))) * quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</>
                                )}
                            </button>
                            <div className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                                <p>This {product.name} offers a modern silhouette with deep, plush seating perfect for lounging. Upholstered in our durable, stain-resistant linen weave.</p>
                            </div>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </PageTransition>
    );
};

export default ProductDetail;
