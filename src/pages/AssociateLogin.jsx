import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';

const AssociateLogin = () => {
    const navigate = useNavigate();
    return (
        <PageTransition>
            <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased min-h-screen flex flex-col">
                <div className="p-6">
                    <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span> Back
                    </Link>
                </div>
                <div className="flex-grow flex items-center justify-center p-4 pb-32">
                    <FadeIn>
                        <div className="w-full max-w-5xl bg-white dark:bg-surface-dark rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 bg-surface-light relative min-h-[300px] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center opacity-60 dark:opacity-40" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAh6ocCodzrW7EhfPZBLx9D288zBgw_CJCm3KvGhLEHVrapPlYd8wiD1hHhY0bdzXovBvl3CzXBqGB_waTrbh-RE2i5IK_xm0PYKuBmZ8x8UTSMnH8pDZayAecW8cluQSTtjzRUOzqdfLaKG5fx4SBjA0x86J9z_vZEhLGHA63t-ckWMCdHqp1W-uJwekPnOFYB7fXGPcClF3AKe6wOMCp8qUdvCpG39eifiwFZG4muXWkkeOhmCbbIdpAB2YoDg4UHtnOd7HFGxz81")' }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                                <div className="relative z-10 flex flex-col items-center p-8 text-center">
                                    <div className="text-primary md:text-text-main dark:text-white text-5xl font-black tracking-tighter drop-shadow-sm">ASHLEY</div>
                                    <div className="text-white md:text-text-secondary dark:text-gray-300 text-sm font-bold tracking-widest uppercase mt-2 bg-black/20 md:bg-transparent px-3 py-1 rounded-full backdrop-blur-sm md:backdrop-blur-none">Associate Portal</div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold dark:text-white">Sign In</h2>
                                    <p className="text-text-secondary dark:text-gray-400 mt-2">Welcome back! Please enter your details.</p>
                                </div>
                                <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); navigate('/associate-dashboard'); }}>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-text-main dark:text-gray-200">Email Address</span>
                                        <input className="w-full rounded-xl border border-border-light bg-background-light dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all dark:text-white" placeholder="user@ashleyfurniture.com" type="email" defaultValue="sarah.jenkins@ashley.com" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-text-main dark:text-gray-200">PIN Code</span>
                                        <input className="w-full rounded-xl border border-border-light bg-background-light dark:bg-background-dark h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none transition-all dark:text-white" type="password" placeholder="••••••" defaultValue="123456" />
                                    </label>
                                    <button type="submit" className="flex items-center justify-center rounded-xl h-14 bg-primary hover:bg-primary-dark text-white font-bold text-lg w-full mt-4 shadow-lg hover:shadow-xl transition-all">
                                        Sign In
                                    </button>
                                </form>
                                <p className="text-center text-sm text-text-secondary dark:text-gray-500 mt-8">
                                    Protected system for authorized personnel only.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </PageTransition>
    );
};

export default AssociateLogin;
