import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition, { FadeIn } from '../components/PageTransition';
import { useSettings } from '../context/SettingsContext';

const Settings = () => {
    const navigate = useNavigate();
    const { settings, updateSetting } = useSettings();
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        // Since we are persisting on change, this is just visual feedback
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const Toggle = ({ checked, onChange }) => (
        <button
            onClick={onChange}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${checked ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
        >
            <div className={`size-4 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-6' : ''}`}></div>
        </button>
    );

    return (
        <PageTransition>
            <div className="bg-background-light dark:bg-background-dark min-h-screen p-6 text-text-main dark:text-white">
                <div className="max-w-2xl mx-auto mb-8 flex items-center gap-4">
                    <button onClick={() => navigate('/associate-dashboard')} className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-2xl font-bold">App Settings</h1>
                </div>
                <main className="max-w-2xl mx-auto space-y-6">
                    <FadeIn>
                        <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-border-light dark:border-border-dark">
                                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">display_settings</span>
                                    Display Preferences
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Dark Mode</p>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Use dark theme for low-light environments</p>
                                        </div>
                                        <Toggle
                                            checked={settings.darkMode}
                                            onChange={() => updateSetting('darkMode', !settings.darkMode)}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Kiosk Mode</p>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Disable exit navigation for customers</p>
                                        </div>
                                        <Toggle
                                            checked={settings.kioskMode}
                                            onChange={() => updateSetting('kioskMode', !settings.kioskMode)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b border-border-light dark:border-border-dark">
                                <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">notifications</span>
                                    Notifications
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Push Notifications</p>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Receive alerts for new orders</p>
                                        </div>
                                        <Toggle
                                            checked={settings.notifications}
                                            onChange={() => updateSetting('notifications', !settings.notifications)}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Auto Logout</p>
                                            <p className="text-sm text-text-secondary dark:text-gray-400">Sign out after 30 min of inactivity</p>
                                        </div>
                                        <Toggle
                                            checked={settings.autoLogout}
                                            onChange={() => updateSetting('autoLogout', !settings.autoLogout)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-white/5">
                                <p className="text-xs text-text-secondary dark:text-gray-400 uppercase font-bold mb-4">System Info</p>
                                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                                    <div>
                                        <p className="text-text-secondary dark:text-gray-400">Version</p>
                                        <p className="font-mono font-bold">v2.4.0-beta</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary dark:text-gray-400">Device ID</p>
                                        <p className="font-mono font-bold">IPAD-PRO-004</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary dark:text-gray-400">Store</p>
                                        <p className="font-mono font-bold">{settings.storeId}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-secondary dark:text-gray-400">Last Sync</p>
                                        <p className="font-mono font-bold">Just now</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleSave}
                                        className={`flex-1 py-3 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${saved ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary-dark'}`}
                                    >
                                        {saved ? (
                                            <>
                                                <span className="material-symbols-outlined text-sm">check</span>
                                                Saved!
                                            </>
                                        ) : 'Save Changes'}
                                    </button>
                                    <button
                                        onClick={() => navigate('/')}
                                        className="px-4 py-3 text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </main>
            </div>
        </PageTransition>
    );
};

export default Settings;
