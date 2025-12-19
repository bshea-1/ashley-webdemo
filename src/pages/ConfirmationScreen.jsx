import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';

const ConfirmationScreen = () => {
    const navigate = useNavigate();
    const [showConfetti, setShowConfetti] = useState(true);
    const [emailSent, setEmailSent] = useState(false);

    const [orderNumber] = useState(() => "AF-" + Math.floor(10000 + Math.random() * 90000));

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleEmailReceipt = () => {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 3000);
    };

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6 text-text-main dark:text-white relative overflow-hidden">
                {/* Confetti Animation */}
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute animate-bounce"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `-20px`,
                                    animationDelay: `${Math.random() * 2}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`,
                                }}
                            >
                                <div
                                    className="w-3 h-3 rotate-45"
                                    style={{
                                        backgroundColor: ['#f27f0d', '#22c55e', '#3b82f6', '#eab308', '#ec4899'][Math.floor(Math.random() * 5)],
                                        transform: `rotate(${Math.random() * 360}deg)`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}

                <FadeIn>
                    <div className="max-w-lg w-full bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-border-light dark:border-border-dark text-center relative">
                        {/* Success Icon */}
                        <div className="size-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>

                        <h1 className="text-3xl font-black mb-2">Order Confirmed!</h1>
                        <p className="text-text-secondary dark:text-gray-400 mb-2">Thank you for your purchase</p>
                        <p className="text-2xl font-bold text-primary mb-6">Order #{orderNumber}</p>

                        {/* Order Details */}
                        <div className="bg-gray-50 dark:bg-black/20 rounded-xl p-4 mb-6 text-left space-y-3">
                            <div className="flex justify-between items-center pb-3 border-b border-border-light dark:border-border-dark">
                                <span className="text-text-secondary">Subtotal</span>
                                <span className="font-bold">$1,299.98</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-border-light dark:border-border-dark">
                                <span className="text-text-secondary">Tax</span>
                                <span className="font-bold">$108.35</span>
                            </div>
                            <div className="flex justify-between items-center text-lg">
                                <span className="font-bold">Total</span>
                                <span className="font-black text-primary">$1,408.33</span>
                            </div>
                        </div>

                        {/* Associate Instructions */}
                        <div className="bg-primary/5 p-6 rounded-xl mb-6 border-2 border-primary/20">
                            <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-3xl">support_agent</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Please See an Associate</h3>
                            <p className="text-sm text-text-secondary dark:text-gray-400">
                                Show this confirmation screen to a Sales Associate to finalize your purchase and arrange for delivery or immediate assistance.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => navigate('/')}
                                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-sm">home</span>
                                Return Home
                            </button>
                            <button
                                onClick={handleEmailReceipt}
                                disabled={emailSent}
                                className={`w-full py-3 border font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${emailSent ? 'bg-green-100 border-green-500 text-green-700' : 'border-gray-300 dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5'}`}
                            >
                                {emailSent ? (
                                    <>
                                        <span className="material-symbols-outlined text-sm">check</span>
                                        Email Sent!
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-sm">mail</span>
                                        Email Receipt
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => navigate('/self-service')}
                                className="w-full py-3 text-primary font-bold hover:underline transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </PageTransition>
    );
};

export default ConfirmationScreen;
