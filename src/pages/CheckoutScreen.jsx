import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { useCart } from '../context/CartContext';

const STEPS = ['Customer', 'Payment', 'Review'];

const CheckoutScreen = () => {
    const navigate = useNavigate();
    const { cartItems, cartTotal, clearCart } = useCart();

    const [currentStep, setCurrentStep] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('instore');

    const [customerInfo, setCustomerInfo] = useState({
        firstName: '', lastName: '', address: '', city: '', state: '', zip: '', phone: '', email: ''
    });

    const [card, setCard] = useState({
        number: '', expiry: '', cvv: '', name: ''
    });

    const [errors, setErrors] = useState({});

    // Use cart data from context
    const subtotal = cartTotal;
    const tax = subtotal * 0.0834;
    const total = subtotal + tax;

    const validateStep = () => {
        const newErrors = {};
        if (currentStep === 0) {
            if (!customerInfo.firstName) newErrors.firstName = true;
            if (!customerInfo.lastName) newErrors.lastName = true;
            if (!customerInfo.phone) newErrors.phone = true;
            if (!customerInfo.email) newErrors.email = true;
        }
        if (currentStep === 1 && paymentMethod === 'card') {
            if (!card.number || card.number.length < 16) newErrors.cardNumber = true;
            if (!card.expiry) newErrors.expiry = true;
            if (!card.cvv || card.cvv.length < 3) newErrors.cvv = true;
            if (!card.name) newErrors.cardName = true;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            if (currentStep < STEPS.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleSubmit = () => {
        setIsProcessing(true);
        setTimeout(() => {
            clearCart(); // Clear the global cart on successful order
            navigate('/confirmation');
        }, 2000);
    };

    const InputField = ({ label, value, onChange, error, type = 'text', placeholder = '', autocomplete = '' }) => (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-text-secondary">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autocomplete}
                className={`h-12 px-4 rounded-lg border ${error ? 'border-red-500 bg-red-50' : 'border-border-light dark:border-border-dark bg-white dark:bg-background-dark'} focus:ring-2 focus:ring-primary focus:outline-none transition-all`}
            />
        </div>
    );

    // Redirect if cart is empty
    if (cartItems.length === 0 && !isProcessing) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                    <button onClick={() => navigate('/self-service')} className="text-primary hover:underline">Continue Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen p-6 text-text-main dark:text-white">
                <div className="max-w-4xl mx-auto mb-8 flex items-center gap-4">
                    <button onClick={() => currentStep > 0 ? setCurrentStep(currentStep - 1) : navigate('/cart')} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-2xl font-bold">Kiosk Checkout</h1>
                </div>

                {/* Step Indicator */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="flex items-center justify-between">
                        {STEPS.map((step, index) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${index <= currentStep ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                                    {index < currentStep ? <span className="material-symbols-outlined">check</span> : index + 1}
                                </div>
                                <span className={`ml-2 font-medium hidden sm:block ${index <= currentStep ? 'text-primary' : 'text-gray-400'}`}>{step}</span>
                                {index < STEPS.length - 1 && (
                                    <div className={`flex-1 h-1 mx-4 rounded ${index < currentStep ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <main className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <FadeIn key={currentStep}>
                            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border border-border-light dark:border-border-dark">
                                {/* Step 1: Customer Info */}
                                {currentStep === 0 && (
                                    <>
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">person</span>
                                            Customer Information
                                        </h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <InputField label="First Name" value={customerInfo.firstName} onChange={e => setCustomerInfo({ ...customerInfo, firstName: e.target.value })} error={errors.firstName} placeholder="John" autocomplete="given-name" />
                                            <InputField label="Last Name" value={customerInfo.lastName} onChange={e => setCustomerInfo({ ...customerInfo, lastName: e.target.value })} error={errors.lastName} placeholder="Smith" autocomplete="family-name" />
                                            <InputField label="Phone" value={customerInfo.phone} onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })} error={errors.phone} type="tel" placeholder="(555) 123-4567" autocomplete="tel" />
                                            <InputField label="Email (for receipt)" value={customerInfo.email} onChange={e => setCustomerInfo({ ...customerInfo, email: e.target.value })} error={errors.email} type="email" placeholder="john@example.com" autocomplete="email" />

                                            <div className="sm:col-span-2 pt-4 border-t border-border-light dark:border-border-dark mt-2">
                                                <p className="text-sm text-text-secondary mb-4">Billing Address (Optional for records)</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="sm:col-span-2">
                                                        <InputField label="Street Address" value={customerInfo.address} onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })} error={errors.address} placeholder="123 Main Street" autocomplete="street-address" />
                                                    </div>
                                                    <InputField label="City" value={customerInfo.city} onChange={e => setCustomerInfo({ ...customerInfo, city: e.target.value })} error={errors.city} placeholder="Tampa" autocomplete="address-level2" />
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <InputField label="State" value={customerInfo.state} onChange={e => setCustomerInfo({ ...customerInfo, state: e.target.value })} error={errors.state} placeholder="FL" autocomplete="address-level1" />
                                                        <InputField label="ZIP Code" value={customerInfo.zip} onChange={e => setCustomerInfo({ ...customerInfo, zip: e.target.value })} error={errors.zip} placeholder="33601" autocomplete="postal-code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Step 2: Payment */}
                                {currentStep === 1 && (
                                    <>
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">payment</span>
                                            Payment Method
                                        </h2>
                                        <div className="space-y-4">
                                            <label
                                                onClick={() => setPaymentMethod('instore')}
                                                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'instore' ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark hover:border-primary/50'}`}
                                            >
                                                <input type="radio" name="payment" checked={paymentMethod === 'instore'} onChange={() => { }} className="text-primary focus:ring-primary" />
                                                <span className="material-symbols-outlined text-primary">store</span>
                                                <div className="flex-1">
                                                    <span className="font-bold">Pay at Counter</span>
                                                    <p className="text-sm text-text-secondary">Take your order slip to any cashier</p>
                                                </div>
                                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Recommended</span>
                                            </label>

                                            <label
                                                onClick={() => setPaymentMethod('card')}
                                                className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark hover:border-primary/50'}`}
                                            >
                                                <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => { }} className="text-primary focus:ring-primary" />
                                                <span className="material-symbols-outlined text-primary">credit_card</span>
                                                <div className="flex-1">
                                                    <span className="font-bold">Credit / Debit Card</span>
                                                    <p className="text-sm text-text-secondary">Swipe or tap on this device</p>
                                                </div>
                                            </label>

                                            {paymentMethod === 'card' && (
                                                <FadeIn>
                                                    <div className="mt-6 p-6 bg-gray-50 dark:bg-black/20 rounded-xl space-y-4">
                                                        <InputField label="Card Number" value={card.number} onChange={e => setCard({ ...card, number: e.target.value.replace(/\D/g, '').slice(0, 16) })} error={errors.cardNumber} placeholder="1234 5678 9012 3456" autocomplete="cc-number" />
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <InputField label="Expiry (MM/YY)" value={card.expiry} onChange={e => setCard({ ...card, expiry: e.target.value })} error={errors.expiry} placeholder="12/26" autocomplete="cc-exp" />
                                                            <InputField label="CVV" value={card.cvv} onChange={e => setCard({ ...card, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })} error={errors.cvv} placeholder="123" autocomplete="cc-csc" />
                                                        </div>
                                                        <InputField label="Name on Card" value={card.name} onChange={e => setCard({ ...card, name: e.target.value })} error={errors.cardName} placeholder="John Smith" autocomplete="cc-name" />
                                                    </div>
                                                </FadeIn>
                                            )}
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Review */}
                                {currentStep === 2 && (
                                    <>
                                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">fact_check</span>
                                            Review Your Order
                                        </h2>

                                        <div className="space-y-6">
                                            <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-lg">
                                                <h3 className="font-bold mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">person</span> Customer</h3>
                                                <p className="text-text-secondary">{customerInfo.firstName} {customerInfo.lastName}</p>
                                                <p className="text-text-secondary">{customerInfo.email}</p>
                                                <p className="text-text-secondary">{customerInfo.phone}</p>
                                            </div>

                                            <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-lg">
                                                <h3 className="font-bold mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">payment</span> Payment</h3>
                                                <p className="text-text-secondary">
                                                    {paymentMethod === 'instore' ? 'Pay at Counter' : `Card ending in ${card.number.slice(-4)}`}
                                                </p>
                                            </div>

                                            <div className="p-4 bg-gray-50 dark:bg-black/20 rounded-lg">
                                                <h3 className="font-bold mb-3 flex items-center gap-2"><span className="material-symbols-outlined text-sm">shopping_bag</span> Items ({cartItems.length})</h3>
                                                {cartItems.map((item, i) => (
                                                    <div key={i} className="flex justify-between py-2 border-b border-border-light dark:border-border-dark last:border-0">
                                                        <span>{item.name} x{item.qty}</span>
                                                        <span className="font-bold">${item.price.toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Navigation Buttons */}
                                <div className="mt-8 flex gap-4">
                                    {currentStep > 0 && (
                                        <button
                                            onClick={() => setCurrentStep(currentStep - 1)}
                                            className="flex-1 py-3 border border-border-light dark:border-border-dark rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {currentStep < STEPS.length - 1 ? (
                                        <button
                                            onClick={handleNext}
                                            className="flex-1 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                                        >
                                            Continue
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isProcessing}
                                            className="flex-1 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>Complete Order - ${total.toFixed(2)}</>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark h-fit sticky top-6">
                        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                        <div className="space-y-3 text-sm mb-4">
                            {cartItems.map((item, i) => (
                                <div key={i} className="flex justify-between">
                                    <span className="text-text-secondary">{item.name}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-4 space-y-2 text-sm">
                            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark pt-4 mt-4 flex justify-between text-xl font-bold">
                            <span>Total</span><span className="text-primary">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    );
};

export default CheckoutScreen;
