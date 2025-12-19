import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTransition, { FadeIn, StaggeredList } from '../components/PageTransition';
import { CUSTOMERS } from '../data';

const CustomerProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('orders');

    const customer = CUSTOMERS.find(c => c.id === parseInt(id)) || CUSTOMERS[0];

    const tabs = [
        { id: 'orders', label: 'Order History', icon: 'receipt_long' },
        { id: 'addresses', label: 'Addresses', icon: 'location_on' },
        { id: 'payments', label: 'Payment Methods', icon: 'credit_card' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-700';
            case 'Shipped': return 'bg-blue-100 text-blue-700';
            case 'Processing': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-main dark:text-white">
                <header className="bg-white dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-4">
                    <div className="max-w-5xl mx-auto flex items-center gap-4">
                        <button onClick={() => navigate('/customer-lookup')} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 className="text-2xl font-bold">Customer Profile</h1>
                    </div>
                </header>

                <main className="max-w-5xl mx-auto p-6 space-y-6">
                    {/* Profile Header */}
                    <FadeIn>
                        <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6">
                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                    <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-1">{customer.name}</h2>
                                    <p className="text-text-secondary dark:text-gray-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">mail</span> {customer.email}
                                    </p>
                                    <p className="text-text-secondary dark:text-gray-400 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">phone</span> {customer.phone}
                                    </p>
                                </div>
                                <div className="flex gap-4 w-full sm:w-auto">
                                    <div className="flex-1 sm:flex-none text-center p-4 bg-primary/10 rounded-lg">
                                        <p className="text-2xl font-bold text-primary">${customer.totalSpent.toLocaleString()}</p>
                                        <p className="text-xs text-text-secondary uppercase font-bold">Total Spent</p>
                                    </div>
                                    <div className="flex-1 sm:flex-none text-center p-4 bg-gray-100 dark:bg-white/5 rounded-lg">
                                        <p className="text-2xl font-bold">{customer.ordersCount}</p>
                                        <p className="text-xs text-text-secondary uppercase font-bold">Orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex gap-3">
                                <button onClick={() => navigate('/associate-catalog')} className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
                                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                    Start New Order
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 border border-border-light dark:border-border-dark font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Tabs */}
                    <FadeIn delay={100}>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary'}`}
                                >
                                    <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Tab Content */}
                    <FadeIn delay={200} key={activeTab}>
                        <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                            {activeTab === 'orders' && (
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-text-secondary border-b border-border-light dark:border-border-dark">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Order #</th>
                                            <th className="px-6 py-4 font-semibold">Date</th>
                                            <th className="px-6 py-4 font-semibold">Items</th>
                                            <th className="px-6 py-4 font-semibold">Total</th>
                                            <th className="px-6 py-4 font-semibold">Status</th>
                                            <th className="px-6 py-4 font-semibold text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                        {customer.orders.map(order => (
                                            <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                                <td className="px-6 py-4 font-bold text-primary">{order.id}</td>
                                                <td className="px-6 py-4 text-text-secondary">{order.date}</td>
                                                <td className="px-6 py-4">{order.items} items</td>
                                                <td className="px-6 py-4 font-bold">${order.total.toFixed(2)}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(order.status)}`}>{order.status}</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-primary font-bold hover:underline">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}

                            {activeTab === 'addresses' && (
                                <div className="p-6 grid gap-4 sm:grid-cols-2">
                                    {customer.addresses.map(addr => (
                                        <div key={addr.id} className={`p-4 rounded-lg border-2 ${addr.isDefault ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark'}`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">{addr.type === 'Home' ? 'home' : 'business'}</span>
                                                    {addr.type}
                                                </span>
                                                {addr.isDefault && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">Default</span>}
                                            </div>
                                            <p className="text-text-secondary dark:text-gray-400">{addr.street}</p>
                                            <p className="text-text-secondary dark:text-gray-400">{addr.city}, {addr.state} {addr.zip}</p>
                                            <div className="mt-3 flex gap-2">
                                                <button className="text-sm text-primary font-bold hover:underline">Edit</button>
                                                {!addr.isDefault && <button className="text-sm text-text-secondary hover:underline">Set as Default</button>}
                                            </div>
                                        </div>
                                    ))}
                                    <button className="p-4 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark hover:border-primary flex items-center justify-center gap-2 text-text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">add</span>
                                        Add New Address
                                    </button>
                                </div>
                            )}

                            {activeTab === 'payments' && (
                                <div className="p-6 grid gap-4 sm:grid-cols-2">
                                    {customer.paymentMethods.map(pm => (
                                        <div key={pm.id} className={`p-4 rounded-lg border-2 ${pm.isDefault ? 'border-primary bg-primary/5' : 'border-border-light dark:border-border-dark'}`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-bold flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">credit_card</span>
                                                    {pm.type}
                                                </span>
                                                {pm.isDefault && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded">Default</span>}
                                            </div>
                                            <p className="text-xl font-mono tracking-wider">•••• •••• •••• {pm.last4}</p>
                                            <p className="text-text-secondary dark:text-gray-400 text-sm">Expires {pm.expiry}</p>
                                            <div className="mt-3 flex gap-2">
                                                <button className="text-sm text-primary font-bold hover:underline">Edit</button>
                                                <button className="text-sm text-red-500 hover:underline">Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="p-4 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark hover:border-primary flex items-center justify-center gap-2 text-text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">add</span>
                                        Add Payment Method
                                    </button>
                                </div>
                            )}
                        </div>
                    </FadeIn>
                </main>
            </div>
        </PageTransition>
    );
};

export default CustomerProfile;
