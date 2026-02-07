'use client';

import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Users,
    CheckSquare,
    History,
    User,
    ChevronLeft,
    ChevronRight,
    LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Usuarios', href: '/admin/users', icon: Users },
    { name: 'Aprobaciones', href: '/admin/approvals', icon: CheckSquare },
    { name: 'Historial', href: '/admin/history', icon: History },
    { name: 'Perfil', href: '/admin/profile', icon: User },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Load collapsed state from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('adminSidebarCollapsed');
        if (saved !== null) {
            setIsCollapsed(JSON.parse(saved));
        }
    }, []);

    // Save collapsed state to localStorage
    const toggleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem('adminSidebarCollapsed', JSON.stringify(newState));
    };

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-slate-950 border-r border-slate-800 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            {/* Logo/Brand */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
                {!isCollapsed && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <LayoutDashboard className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white font-display">Admin</span>
                    </div>
                )}
                <button
                    onClick={toggleCollapse}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                    title={isCollapsed ? 'Expandir' : 'Colapsar'}
                >
                    {isCollapsed ? (
                        <ChevronRight className="w-5 h-5" />
                    ) : (
                        <ChevronLeft className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-2 py-6 overflow-y-auto">
                <div className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-500 shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                                title={isCollapsed ? item.name : undefined}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                {!isCollapsed && <span>{item.name}</span>}

                                {/* Tooltip when collapsed */}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Logout */}
            <div className="p-2 border-t border-slate-800">
                <button
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group relative`}
                    title={isCollapsed ? 'Logout' : undefined}
                >
                    <LogOut className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span>Logout</span>}

                    {/* Tooltip when collapsed */}
                    {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                            Logout
                        </div>
                    )}
                </button>
            </div>
        </aside>
    );
}
