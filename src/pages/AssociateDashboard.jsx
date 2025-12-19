import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEMO_USER } from '../data';
import PageTransition, { FadeIn, StaggeredList } from '../components/PageTransition';

const AssociateDashboard = () => {
    const navigate = useNavigate();
    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-text-main dark:text-white">
                {/* Dashboard Header */}
                <div className="bg-white dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-6 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
                        <div>
                            <h1 className="text-2xl font-bold">Welcome back, Sarah!</h1>
                            <p className="text-text-secondary dark:text-gray-400 text-sm">Store #{DEMO_USER.storeId} • {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-3">
                            {/* Action buttons removed from here as they might be elsewhere or this is fine */}
                            <button onClick={() => navigate('/settings')} className="flex items-center gap-2 px-4 py-2 border border-border-light dark:border-border-dark rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-bold text-sm">
                                <span className="material-symbols-outlined text-lg">settings</span> Settings
                            </button>
                            <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 bg-text-main text-white rounded-full hover:bg-black/80 transition-colors font-bold text-sm">
                                <span className="material-symbols-outlined text-lg">logout</span> Logout
                            </button>
                        </div>
                    </div>
                </div>
                <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-8">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                            <div>
                                <h1 className="text-3xl font-black text-text-main dark:text-white">Good Morning, Sarah</h1>
                                <p className="text-text-secondary mt-1">Ready to make some sales today?</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-surface-light dark:bg-surface-dark p-3 px-5 rounded-lg border border-border-light shadow-sm flex flex-col items-center">
                                    <span className="text-xs font-bold text-text-secondary uppercase">Today's Sales</span>
                                    <span className="text-xl font-bold">$4,250</span>
                                </div>
                                <div className="bg-surface-light dark:bg-surface-dark p-3 px-5 rounded-lg border border-border-light shadow-sm flex flex-col items-center">
                                    <span className="text-xs font-bold text-text-secondary uppercase">Active Carts</span>
                                    <span className="text-xl font-bold text-primary">3</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                        {[
                            { icon: 'add_shopping_cart', label: 'Start New Sale', desc: 'Create fresh cart', link: '/associate-catalog' },
                            { icon: 'person_search', label: 'Find Customer', desc: 'Lookup profile', link: '/customer-lookup' },
                            { icon: 'shopping_cart', label: 'My Carts', desc: 'View saved carts', link: '/my-carts' },
                            { icon: 'settings', label: 'App Settings', desc: 'Configure kiosk', link: '/settings' },
                        ].map((action, i) => (
                            <FadeIn key={i} delay={100 + i * 100}>
                                <button onClick={() => navigate(action.link)} className="group flex flex-col gap-4 p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary shadow-sm hover:shadow-md transition-all text-left w-full">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">{action.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1">{action.label}</h3>
                                        <p className="text-sm text-text-secondary">{action.desc}</p>
                                    </div>
                                </button>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={500}>
                        <section>
                            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 dark:bg-white/5 text-xs uppercase text-text-secondary">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold">Time</th>
                                            <th className="px-6 py-4 font-semibold">Customer</th>
                                            <th className="px-6 py-4 font-semibold">Action</th>
                                            <th className="px-6 py-4 font-semibold text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-light dark:divide-border-dark text-text-main dark:text-gray-200">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer" onClick={() => navigate('/customer/1')}>
                                            <td className="px-6 py-4 text-sm text-text-secondary">10:42 AM</td>
                                            <td className="px-6 py-4 font-medium">John Smith</td>
                                            <td className="px-6 py-4 text-sm">Created Cart #1024</td>
                                            <td className="px-6 py-4 text-right"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">Active</span></td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer" onClick={() => navigate('/customer/3')}>
                                            <td className="px-6 py-4 text-sm text-text-secondary">09:15 AM</td>
                                            <td className="px-6 py-4 font-medium">Mike Ross</td>
                                            <td className="px-6 py-4 text-sm">Completed Order #8821</td>
                                            <td className="px-6 py-4 text-right"><span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">Paid</span></td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer" onClick={() => navigate('/customer/2')}>
                                            <td className="px-6 py-4 text-sm text-text-secondary">Yesterday</td>
                                            <td className="px-6 py-4 font-medium">Sarah Connor</td>
                                            <td className="px-6 py-4 text-sm">Added items to Cart #1019</td>
                                            <td className="px-6 py-4 text-right"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </FadeIn>
                </main>
            </div>
        </PageTransition>
    );
};

export default AssociateDashboard;
