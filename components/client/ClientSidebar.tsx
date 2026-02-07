'use client';

import { Home, Bell, Wallet, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', href: '/client/dashboard', icon: Home },
    { name: 'Notificaciones', href: '/client/notifications', icon: Bell, badge: 3 },
    { name: 'Wallet', href: '/client/wallet', icon: Wallet },
    { name: 'Perfil', href: '/client/profile', icon: User },
];

export default function ClientSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-slate-800 flex-col">
            {/* Logo/Brand */}
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white font-display">Fintech</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6">
                <div className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                                {item.badge && item.badge > 0 && (
                                    <span className="ml-auto bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
}
