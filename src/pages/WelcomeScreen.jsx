import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';

const WelcomeScreen = () => {
    const navigate = useNavigate();
    return (
        <PageTransition>
            <div className="relative flex h-auto w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display text-text-main">
                <div className="flex flex-1 justify-center py-10 px-4 md:px-10 lg:px-20">
                    <div className="flex flex-col max-w-[1000px] flex-1 gap-8">
                        <FadeIn delay={100}>
                            <div className="flex flex-col gap-2 text-center items-center justify-center pt-8 pb-4">
                                <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Welcome to Ashley Furniture</h1>
                                <p className="text-text-secondary dark:text-gray-400 text-lg font-medium leading-normal">How would you like to shop today?</p>
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                            <FadeIn delay={200}>
                                <div onClick={() => navigate('/associate-login')} className="group relative flex flex-col gap-4 p-6 rounded-[2rem] bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/30 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(242,127,13,0.15)]">
                                    <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-3xl relative overflow-hidden shadow-inner" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQRV0a8V5LzV86yybKedHLIejiYjuoPqQbJUCIPpZFwBFc8WMW2layUNByqyJSYaLPElVyM9t74neeOMIs5dt9lt81T3QcXky-CNciBG5DG-5ifaVDAIgw4edXbzSOQHnlZBwFuVuxT7oU7fRXIBEHooHr8YsM92nhNPeKASVpRa7kpizH7cWN2TDsuuWFasU2l25wuClkzxMcdq3Ipb-kIe528RZksQeXx7XtaMDGwXQUJcTjI9w0rFj-b32N8P-hgdb9ltJgC3wE")' }}>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-3 text-primary shadow-md">
                                            <span className="material-symbols-outlined !text-3xl">support_agent</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-text-main dark:text-white text-2xl font-bold leading-tight group-hover:text-primary transition-colors">Shop with an Associate</h3>
                                        <ul className="text-text-secondary dark:text-gray-400 text-base space-y-1">
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Expert guidance & advice</li>
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Personalized styling</li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <button className="w-full h-12 rounded-full bg-text-main text-white font-bold group-hover:bg-primary transition-all">Select</button>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={300}>
                                <div onClick={() => navigate('/self-service')} className="group relative flex flex-col gap-4 p-6 rounded-[2rem] bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/30 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(242,127,13,0.15)]">
                                    <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-3xl relative overflow-hidden shadow-inner" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjhPYNMuLuOaXJjZk8-Y4MzdjfxX8XJ1amN-diy_w3HhU5S9PmpE4N3tcdq0eyVVYfJxWRqBcrSQqWAW-cUw7xdtSPSQ5JuFXYWgyKRYlHlbawMYGJX5XFygLUjWYTdEZIgTZL1AfNBvEmEY8wDGH-Vfp82CinsSxfwFal5VgzHULogAX0gCMhJTynv7epc44MQXipjQgptmytnMulbUeAiNkN-tPd3Qt1SAVbhYFXgroS2J2VM1B22pmtjuKQfxnGszqG3DuKSETc")' }}>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-3 text-primary shadow-md">
                                            <span className="material-symbols-outlined !text-3xl">touch_app</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-text-main dark:text-white text-2xl font-bold leading-tight group-hover:text-primary transition-colors">Self-Service Shop</h3>
                                        <ul className="text-text-secondary dark:text-gray-400 text-base space-y-1">
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Browse at your own pace</li>
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-primary">check_circle</span> Fast, independent checkout</li>
                                        </ul>
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <button className="w-full h-12 rounded-full bg-text-main text-white font-bold group-hover:bg-primary transition-all">Select</button>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default WelcomeScreen;
