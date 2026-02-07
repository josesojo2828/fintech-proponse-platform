'use client';

import { Home, Bell, Wallet, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Hogar', href: '/client/dashboard', icon: Home },
    { name: 'Notificaciones', href: '/client/notifications', icon: Bell, badge: 3 },
    { name: 'Wallet', href: '/client/wallet', icon: Wallet },
    { name: 'Perfil', href: '/client/profile', icon: User },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 md:hidden z-50 safe-bottom">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${isActive ? 'text-emerald-500' : 'text-slate-400'
                                }`}
                        >
                            <div className="relative">
                                <Icon className={`w-6 h-6 ${isActive ? 'text-emerald-500' : 'text-slate-400'}`} />
                                {item.badge && item.badge > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <span className={`text-xs mt-1 font-medium ${isActive ? 'text-emerald-500' : 'text-slate-400'}`}>
                                {item.name}
                            </span>
                            {isActive && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-emerald-500 rounded-b-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
