import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { CUSTOMERS } from '../data';

const CustomerLookup = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showCreateModal, setShowCreateModal] = useState(false);

    const filtered = CUSTOMERS.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm)
    );

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen p-6 text-text-main dark:text-white">
                <header className="max-w-5xl mx-auto mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate('/associate-dashboard')} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 className="text-2xl font-bold">Customer Lookup</h1>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">person_add</span>
                        New Customer
                    </button>
                </header>

                <main className="max-w-5xl mx-auto space-y-6">
                    <FadeIn>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                            <div className="flex gap-4">
                                <div className="flex-1 flex gap-2 items-center bg-background-light dark:bg-black/20 border border-border-light dark:border-border-dark px-4 rounded-lg h-12">
                                    <span className="material-symbols-outlined text-text-secondary">search</span>
                                    <input
                                        className="bg-transparent border-none flex-1 outline-none h-full"
                                        placeholder="Search by name, email, or phone..."
                                        value={searchTerm}
                                        onChange={e => setSearchTerm(e.target.value)}
                                    />
                                    {searchTerm && (
                                        <button onClick={() => setSearchTerm('')} className="text-text-secondary hover:text-primary">
                                            <span className="material-symbols-outlined text-sm">close</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100}>
                        <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-text-secondary border-b border-border-light dark:border-border-dark">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Customer</th>
                                        <th className="px-6 py-4 font-semibold hidden sm:table-cell">Email</th>
                                        <th className="px-6 py-4 font-semibold hidden md:table-cell">Phone</th>
                                        <th className="px-6 py-4 font-semibold hidden lg:table-cell">Total Spent</th>
                                        <th className="px-6 py-4 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    {filtered.map((c, index) => (
                                        <tr
                                            key={c.id}
                                            className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                            onClick={() => navigate(`/customer/${c.id}`)}
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                                                        <img src={c.avatar} alt={c.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{c.name}</p>
                                                        <p className="text-sm text-text-secondary sm:hidden">{c.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-400 hidden sm:table-cell">{c.email}</td>
                                            <td className="px-6 py-4 text-text-secondary dark:text-gray-400 hidden md:table-cell">{c.phone}</td>
                                            <td className="px-6 py-4 font-bold text-primary hidden lg:table-cell">${c.totalSpent.toLocaleString()}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); navigate(`/customer/${c.id}`); }}
                                                    className="text-primary font-bold hover:underline"
                                                >
                                                    View Profile
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filtered.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-12 text-center">
                                                <span className="material-symbols-outlined text-5xl text-gray-300 mb-4 block">person_search</span>
                                                <p className="text-text-secondary mb-4">No customers found matching "{searchTerm}"</p>
                                                <button
                                                    onClick={() => setShowCreateModal(true)}
                                                    className="text-primary font-bold hover:underline"
                                                >
                                                    Create New Customer
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </main>

                {/* Create Customer Modal */}
                {showCreateModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowCreateModal(false)}>
                        <FadeIn>
                            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">New Customer</h2>
                                    <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full">
                                        <span className="material-symbols-outlined">close</span>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-text-secondary">Full Name</label>
                                        <input className="w-full h-12 px-4 mt-1 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none" placeholder="John Smith" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-text-secondary">Email</label>
                                        <input type="email" className="w-full h-12 px-4 mt-1 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-text-secondary">Phone</label>
                                        <input type="tel" className="w-full h-12 px-4 mt-1 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:ring-2 focus:ring-primary focus:outline-none" placeholder="(555) 123-4567" />
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <button onClick={() => setShowCreateModal(false)} className="flex-1 py-3 border border-border-light dark:border-border-dark rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5">
                                        Cancel
                                    </button>
                                    <button onClick={() => { setShowCreateModal(false); navigate('/customer/1'); }} className="flex-1 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark">
                                        Create Customer
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                )}
            </div>
        </PageTransition>
    );
};

export default CustomerLookup;
