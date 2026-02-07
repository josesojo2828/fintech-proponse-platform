'use client';

import { Bell, Search, User, ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-6">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search investments, transactions..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-slate-950"></span>
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-slate-800"></div>

                {/* User Profile */}
                <button className="flex items-center gap-3 hover:bg-slate-800 rounded-lg px-3 py-2 transition-all group">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left hidden md:block">
                        <p className="text-sm font-medium text-white">John Investor</p>
                        <p className="text-xs text-slate-400">Premium Account</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </button>
            </div>
        </header>
    );
}
