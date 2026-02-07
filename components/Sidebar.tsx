'use client';

import {
    LayoutDashboard,
    TrendingUp,
    Wallet,
    PieChart,
    ArrowLeftRight,
    Settings,
    HelpCircle,
    LogOut,
    Shield
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Investments', href: '/dashboard/investments', icon: TrendingUp },
    { name: 'Portfolio', href: '/dashboard/portfolio', icon: PieChart },
    { name: 'Wallet', href: '/dashboard/wallet', icon: Wallet },
    { name: 'Transactions', href: '/dashboard/transactions', icon: ArrowLeftRight },
];

const adminItems = [
    { name: 'Admin', href: '/dashboard/admin', icon: Shield },
];

const secondaryItems = [
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Help', href: '/dashboard/help', icon: HelpCircle },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
            {/* Logo/Brand */}
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white font-display">Fintech</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6 overflow-y-auto">
                <div className="space-y-1">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${active
                                        ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-slate-800"></div>

                {/* Admin Navigation */}
                <div className="space-y-1">
                    {adminItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${active
                                        ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-slate-800"></div>

                {/* Secondary Navigation */}
                <div className="space-y-1">
                    {secondaryItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${active
                                        ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }
                `}
                            >
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Logout */}
            <div className="p-3 border-t border-slate-800">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
