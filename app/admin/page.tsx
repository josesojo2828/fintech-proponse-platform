"use client";

import React, { useState } from 'react';
import {
    LayoutDashboard, Users, FileCheck, History, User, Settings,
    TrendingUp, DollarSign, Clock, CheckCircle, XCircle, AlertCircle,
    ChevronLeft, ChevronRight, Menu, Bell, Search, LogOut, Shield,
    ArrowUpCircle, ArrowDownCircle, Activity, Wallet, X, Eye,
    Mail, Phone, Calendar, MapPin, Edit, Trash2, Filter, Download
} from 'lucide-react';

export default function AdminDashboard() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [activeSection, setActiveSection] = useState('dashboard');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    // Paleta de colores igual al cliente
    // Navy: #2F4156, Teal: #567C8D, Sky Blue: #C8D9E6, Beige: #F5EFEB

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'users', label: 'Usuarios', icon: Users },
        { id: 'payments', label: 'Historial de Pagos', icon: History },
        { id: 'earnings', label: 'Ganancias', icon: TrendingUp },
        { id: 'activity', label: 'Bitácora', icon: FileCheck },
    ];

    const stats = [
        { label: 'Total Usuarios', value: '1,234', change: '+12%', icon: Users, color: 'from-[#567C8D] to-[#2F4156]' },
        { label: 'Pendientes', value: '8', change: '-3', icon: Clock, color: 'from-[#F0B90B] to-[#D9A506]' },
        { label: 'Ingresos Totales', value: '$124.5K', change: '+18%', icon: DollarSign, color: 'from-[#00C087] to-[#00a86b]' },
        { label: 'Aprobados Hoy', value: '24', change: '+5', icon: CheckCircle, color: 'from-[#C8D9E6] to-[#567C8D]' },
    ];

    const recentTransactions = [
        { id: 1, user: 'Carlos Rodríguez', type: 'Depósito', amount: 2500, status: 'approved', time: '14:23' },
        { id: 2, user: 'María González', type: 'Retiro', amount: 800, status: 'pending', time: '13:45' },
        { id: 3, user: 'Juan Pérez', type: 'Depósito', amount: 1500, status: 'approved', time: '12:10' },
        { id: 4, user: 'Ana Martínez', type: 'Retiro', amount: 3200, status: 'rejected', time: '11:30' },
        { id: 5, user: 'Luis Hernández', type: 'Depósito', amount: 1200, status: 'approved', time: '10:15' },
    ];

    const pendingApprovals = [
        { id: 1, user: 'Sofia López', amount: 4500, method: 'USDT', time: '2 min ago' },
        { id: 2, user: 'Diego Torres', amount: 600, method: 'Transferencia', time: '15 min ago' },
        { id: 3, user: 'Carmen Ruiz', amount: 2300, method: 'USDT', time: '1 hora ago' },
    ];

    // Estados adicionales
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Datos para Usuarios
    const usersData = [
        { id: 1, name: 'Carlos Rodríguez', email: 'carlos@email.com', phone: '+1234567890', balance: 12500, invested: 10000, earnings: 2500, status: 'active', joinDate: '2024-01-15' },
        { id: 2, name: 'María González', email: 'maria@email.com', phone: '+1234567891', balance: 8300, invested: 7000, earnings: 1300, status: 'active', joinDate: '2024-02-20' },
        { id: 3, name: 'Juan Pérez', email: 'juan@email.com', phone: '+1234567892', balance: 15600, invested: 12000, earnings: 3600, status: 'active', joinDate: '2023-12-10' },
        { id: 4, name: 'Ana Martínez', email: 'ana@email.com', phone: '+1234567893', balance: 5200, invested: 5000, earnings: 200, status: 'inactive', joinDate: '2024-03-05' },
        { id: 5, name: 'Luis Hernández', email: 'luis@email.com', phone: '+1234567894', balance: 22100, invested: 18000, earnings: 4100, status: 'active', joinDate: '2023-11-22' },
    ];

    // Datos para Historial de Pagos
    const paymentsData = [
        { id: 1, user: 'Carlos Rodríguez', type: 'Depósito', amount: 2500, method: 'USDT', status: 'approved', date: '2024-02-07 14:23' },
        { id: 2, user: 'María González', type: 'Retiro', amount: 800, method: 'Transferencia', status: 'pending', date: '2024-02-07 13:45' },
        { id: 3, user: 'Juan Pérez', type: 'Depósito', amount: 1500, method: 'USDT', status: 'approved', date: '2024-02-07 12:10' },
        { id: 4, user: 'Ana Martínez', type: 'Retiro', amount: 3200, method: 'Transferencia', status: 'rejected', date: '2024-02-07 11:30' },
        { id: 5, user: 'Luis Hernández', type: 'Depósito', amount: 1200, method: 'USDT', status: 'approved', date: '2024-02-07 10:15' },
        { id: 6, user: 'Sofia López', type: 'Depósito', amount: 4500, method: 'USDT', status: 'approved', date: '2024-02-06 18:20' },
        { id: 7, user: 'Diego Torres', type: 'Retiro', amount: 600, method: 'Transferencia', status: 'approved', date: '2024-02-06 16:45' },
    ];

    // Datos para Bitácora
    const activityData = [
        { id: 1, action: 'Usuario Creado', type: 'Usuarios', user: 'Admin', details: 'Nuevo usuario: Carlos Rodríguez', timestamp: '2024-02-07 15:30' },
        { id: 2, action: 'Pago Aprobado', type: 'Pagos', user: 'Admin', details: 'Depósito de $2,500 USDT', timestamp: '2024-02-07 14:23' },
        { id: 3, action: 'Pago Rechazado', type: 'Pagos', user: 'Admin', details: 'Retiro de $3,200 rechazado', timestamp: '2024-02-07 11:30' },
        { id: 4, action: 'Usuario Editado', type: 'Usuarios', user: 'Admin', details: 'Actualización de perfil: María González', timestamp: '2024-02-07 10:15' },
        { id: 5, action: 'Login', type: 'Sistema', user: 'Admin', details: 'Inicio de sesión exitoso', timestamp: '2024-02-07 09:00' },
        { id: 6, action: 'Pago Aprobado', type: 'Pagos', user: 'Admin', details: 'Depósito de $4,500 USDT', timestamp: '2024-02-06 18:20' },
    ];

    // Datos para Notificaciones
    const notifications = [
        { id: 1, title: 'Nueva solicitud de retiro', message: 'Sofia López - $4,500 USDT', time: '2 min', unread: true, type: 'payment' },
        { id: 2, title: 'Usuario registrado', message: 'Nuevo usuario: Diego Torres', time: '15 min', unread: true, type: 'user' },
        { id: 3, title: 'Pago aprobado', message: 'Depósito de $2,500 procesado', time: '1 hora', unread: false, type: 'payment' },
        { id: 4, title: 'Actualización del sistema', message: 'Nueva versión disponible', time: '2 horas', unread: false, type: 'system' },
        { id: 5, title: 'Retiro completado', message: 'Carmen Ruiz - $2,300 USDT', time: '3 horas', unread: false, type: 'payment' },
    ];

    return (
        <div className="min-h-screen bg-[#F5EFEB] text-[#2F4156] font-sans flex">
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebar Vertical */}
            <aside className={`
                ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-72'}
                bg-white/80 backdrop-blur-md border-r border-[#C8D9E6]/30 shadow-lg 
                transition-all duration-300 flex flex-col h-screen top-0 z-50
                w-72 fixed lg:sticky
                ${mobileMenuOpen ? 'left-0' : '-left-72 lg:left-0'}
            `}>
                {/* Logo */}
                <div className="h-20 flex items-center justify-between px-6 border-b border-[#C8D9E6]/30">
                    {!sidebarCollapsed && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] flex items-center justify-center shadow-lg">
                                <Shield size={20} className="text-[#2F4156]" />
                            </div>
                            <div>
                                <span className="font-bold text-[#2F4156] text-base block leading-none">Admin Panel</span>
                                <span className="text-[9px] text-[#567C8D] uppercase tracking-wider">CryptoSpace</span>
                            </div>
                        </div>
                    )}
                    {sidebarCollapsed && (
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] flex items-center justify-center shadow-lg mx-auto">
                            <Shield size={20} className="text-[#2F4156]" />
                        </div>
                    )}
                </div>

                {/* Toggle Button - Hidden on mobile */}
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 bg-[#567C8D] hover:bg-[#C8D9E6] rounded-full items-center justify-center border-2 border-[#2F4156] transition-all z-50"
                >
                    {sidebarCollapsed ? <ChevronRight size={14} className="text-white" /> : <ChevronLeft size={14} className="text-white" />}
                </button>

                {/* Menu Items */}
                <nav className="flex-1 px-3 py-6 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setMobileMenuOpen(false); // Close menu on mobile after selection
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group relative ${isActive
                                    ? 'bg-[#567C8D]/15 border-r-2 border-[#567C8D] text-[#2F4156]'
                                    : 'hover:bg-[#C8D9E6]/20 text-[#567C8D] hover:text-[#2F4156]'
                                    }`}
                                title={sidebarCollapsed ? item.label : ''}
                            >
                                <Icon size={20} />
                                {!sidebarCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                            </button>
                        );
                    })}
                </nav>

                {/* User Info */}
                <div className="p-4 border-t border-[#C8D9E6]/30">
                    {!sidebarCollapsed ? (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#C8D9E6]/20 border border-[#C8D9E6]/30">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] p-[2px]">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <User size={16} className="text-[#567C8D]" />
                                </div>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-bold text-[#2F4156] truncate">Admin User</p>
                                <p className="text-[10px] text-[#00C087]">● En línea</p>
                            </div>
                            <button className="text-[#567C8D] hover:text-red-400 transition-colors">
                                <LogOut size={16} />
                            </button>
                        </div>
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] p-[2px] mx-auto">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                <User size={16} className="text-[#567C8D]" />
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="w-full lg:flex-1 overflow-y-auto custom-scrollbar">
                {/* Header */}
                <header className="sticky top-0 z-40 h-20 bg-white/95 backdrop-blur-xl border-b border-[#C8D9E6]/30 shadow-sm">
                    <div className="h-full px-4 lg:px-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {/* Hamburger Menu - Mobile Only */}
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden w-10 h-10 rounded-lg bg-white border border-[#C8D9E6]/40 flex items-center justify-center hover:bg-[#F5EFEB] transition-colors"
                            >
                                <Menu size={20} className="text-[#567C8D]" />
                            </button>

                            <div className="hidden lg:block w-1 h-8 bg-gradient-to-b from-[#567C8D] to-[#C8D9E6] rounded-full"></div>
                            <div>
                                <h1 className="text-lg lg:text-2xl font-bold text-[#2F4156] capitalize tracking-tight">Dashboard</h1>
                                <p className="text-xs text-[#567C8D] mt-0.5 hidden lg:block">Panel de administración</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Search - Desktop Only */}
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#567C8D]" />
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="w-64 bg-white border border-[#C8D9E6]/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#2F4156] placeholder:text-[#567C8D] focus:outline-none focus:border-[#567C8D] transition-all shadow-sm"
                                />
                            </div>

                            {/* Notifications Button */}
                            <button
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#567C8D]/20 to-[#C8D9E6]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative w-11 h-11 rounded-xl bg-white backdrop-blur-sm flex items-center justify-center border border-[#C8D9E6]/40 hover:border-[#567C8D] transition-all group-hover:scale-105 shadow-sm">
                                    <Bell size={20} className="text-[#567C8D] group-hover:text-[#2F4156] transition-colors" />
                                    {/* Badge */}
                                    <div className="absolute -top-1 -right-1 flex items-center justify-center">
                                        <div className="absolute w-5 h-5 bg-red-500 rounded-full animate-ping opacity-75"></div>
                                        <div className="relative w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white flex items-center justify-center">
                                            <span className="text-[9px] font-bold text-white">{notifications.filter(n => n.unread).length}</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Notifications Panel */}
                {notificationsOpen && (
                    <>
                        {/* Overlay for mobile */}
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setNotificationsOpen(false)}
                        ></div>

                        {/* Panel */}
                        <div className="fixed inset-0 lg:top-20 lg:right-4 lg:left-auto lg:bottom-auto lg:inset-auto w-full lg:w-96 lg:max-h-[calc(100vh-5rem)] bg-white lg:rounded-2xl border-0 lg:border border-[#C8D9E6]/30 shadow-2xl z-50 overflow-hidden animate-in slide-in-from-bottom lg:slide-in-from-right-5 fade-in duration-300 flex flex-col">
                            {/* Header */}
                            <div className="p-4 border-b border-[#C8D9E6]/20 bg-gradient-to-r from-[#567C8D]/5 to-[#C8D9E6]/5 flex-shrink-0">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#2F4156]">Notificaciones</h3>
                                        <p className="text-xs text-[#567C8D]">{notifications.filter(n => n.unread).length} sin leer</p>
                                    </div>
                                    <button
                                        onClick={() => setNotificationsOpen(false)}
                                        className="w-8 h-8 rounded-lg hover:bg-[#F5EFEB] flex items-center justify-center transition-colors"
                                    >
                                        <X size={18} className="text-[#567C8D]" />
                                    </button>
                                </div>
                            </div>

                            {/* Notifications List */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar pb-4">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-4 border-b border-[#C8D9E6]/10 hover:bg-[#F5EFEB]/30 transition-colors cursor-pointer ${notification.unread ? 'bg-[#567C8D]/5' : ''}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${notification.type === 'payment' ? 'bg-[#00C087]/10' :
                                                notification.type === 'user' ? 'bg-[#567C8D]/10' :
                                                    'bg-[#C8D9E6]/20'
                                                }`}>
                                                {notification.type === 'payment' ? <DollarSign size={18} className="text-[#00C087]" /> :
                                                    notification.type === 'user' ? <Users size={18} className="text-[#567C8D]" /> :
                                                        <Bell size={18} className="text-[#2F4156]" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2 mb-1">
                                                    <h4 className="font-bold text-sm text-[#2F4156] leading-tight">{notification.title}</h4>
                                                    {notification.unread && (
                                                        <div className="w-2 h-2 rounded-full bg-[#00C087] flex-shrink-0 mt-1"></div>
                                                    )}
                                                </div>
                                                <p className="text-sm text-[#567C8D] mb-2">{notification.message}</p>
                                                <span className="text-xs text-[#567C8D]">{notification.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="p-3 border-t border-[#C8D9E6]/20 bg-[#F5EFEB]/30 flex-shrink-0">
                                <button className="w-full py-2 text-sm font-bold text-[#567C8D] hover:text-[#2F4156] transition-colors">
                                    Ver todas las notificaciones
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {/* Dashboard Content - Conditional Rendering */}
                {activeSection === 'dashboard' && (
                    <div className="p-8 space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl" style={{ background: `linear-gradient(135deg, ${stat.color})` }}></div>
                                        <div className="relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-[#C8D9E6]/30 hover:border-[#567C8D]/50 transition-all shadow-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                                    <Icon size={24} className="text-white" />
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-[#00C087]/10 text-[#00C087]' : 'bg-red-500/10 text-red-400'}`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#567C8D] mb-1">{stat.label}</p>
                                            <p className="text-3xl font-bold text-[#2F4156] font-mono">{stat.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Two Column Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Recent Transactions */}
                            <div className="bg-white backdrop-blur-sm rounded-2xl border border-[#C8D9E6]/30 overflow-hidden shadow-sm">
                                <div className="p-6 border-b border-[#C8D9E6]/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#567C8D] to-[#2F4156] flex items-center justify-center">
                                                <Activity size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#2F4156]">Transacciones Recientes</h3>
                                                <p className="text-xs text-[#567C8D]">Últimas 5 operaciones</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                                    {recentTransactions.map((tx) => (
                                        <div key={tx.id} className="flex items-center justify-between p-4 rounded-xl bg-[#F5EFEB]/50 border border-[#C8D9E6]/20 hover:bg-[#C8D9E6]/20 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${tx.type === 'Depósito' ? 'bg-[#00C087]/10' : 'bg-[#F0B90B]/10'}`}>
                                                    {tx.type === 'Depósito' ? (
                                                        <ArrowUpCircle size={20} className="text-[#00C087]" />
                                                    ) : (
                                                        <ArrowDownCircle size={20} className="text-[#F0B90B]" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm text-[#2F4156]">{tx.user}</p>
                                                    <p className="text-xs text-[#567C8D]">{tx.type} • {tx.time}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-mono font-bold text-sm text-[#2F4156]">${tx.amount.toLocaleString()}</p>
                                                <div className="flex items-center justify-end gap-1 mt-1">
                                                    {tx.status === 'approved' && <CheckCircle size={12} className="text-[#00C087]" />}
                                                    {tx.status === 'pending' && <Clock size={12} className="text-[#F0B90B]" />}
                                                    {tx.status === 'rejected' && <XCircle size={12} className="text-red-400" />}
                                                    <span className={`text-[10px] font-medium ${tx.status === 'approved' ? 'text-[#00C087]' :
                                                        tx.status === 'pending' ? 'text-[#F0B90B]' :
                                                            'text-red-400'
                                                        }`}>
                                                        {tx.status === 'approved' ? 'Aprobado' : tx.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pending Approvals */}
                            <div className="bg-white backdrop-blur-sm rounded-2xl border border-[#C8D9E6]/30 overflow-hidden shadow-sm">
                                <div className="p-6 border-b border-[#C8D9E6]/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F0B90B] to-[#D9A506] flex items-center justify-center">
                                                <FileCheck size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#2F4156]">Pendientes de Aprobación</h3>
                                                <p className="text-xs text-[#567C8D]">{pendingApprovals.length} solicitudes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 px-3 py-1.5 bg-[#F0B90B]/10 rounded-full border border-[#F0B90B]/20">
                                            <AlertCircle size={14} className="text-[#F0B90B]" />
                                            <span className="text-xs font-bold text-[#F0B90B]">{pendingApprovals.length}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3">
                                    {pendingApprovals.map((approval) => (
                                        <div key={approval.id} className="p-4 rounded-xl bg-[#F5EFEB]/50 border border-[#F0B90B]/30 hover:border-[#F0B90B]/50 transition-all">
                                            <div className="flex items-center justify-between mb-3">
                                                <div>
                                                    <p className="font-bold text-sm text-[#2F4156]">{approval.user}</p>
                                                    <p className="text-xs text-[#567C8D]">{approval.method} • {approval.time}</p>
                                                </div>
                                                <p className="font-mono font-bold text-lg text-[#F0B90B]">${approval.amount.toLocaleString()}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 py-2 px-4 bg-[#00C087] hover:bg-[#00a86b] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                                    <CheckCircle size={16} />
                                                    Aprobar
                                                </button>
                                                <button className="flex-1 py-2 px-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                                    <XCircle size={16} />
                                                    Rechazar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* USERS VIEW */}
                {activeSection === 'users' && (
                    <div className="p-8">
                        <div className="bg-white rounded-2xl border border-[#C8D9E6]/30 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-[#C8D9E6]/20">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#2F4156]">Usuarios</h2>
                                        <p className="text-sm text-[#567C8D]">Gestión de usuarios de la plataforma</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#567C8D]" />
                                            <input
                                                type="text"
                                                placeholder="Buscar usuario..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                className="pl-10 pr-4 py-2 bg-[#F5EFEB]/50 border border-[#C8D9E6]/30 rounded-lg text-sm text-[#2F4156] placeholder:text-[#567C8D] focus:outline-none focus:border-[#567C8D]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#F5EFEB]/50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Usuario</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Contacto</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Balance</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Invertido</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Ganancias</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Estado</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase tracking-wider">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#C8D9E6]/20">
                                        {usersData.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                                            <tr key={user.id} className="hover:bg-[#F5EFEB]/30 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#567C8D] to-[#C8D9E6] flex items-center justify-center">
                                                            <User size={18} className="text-white" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-sm text-[#2F4156]">{user.name}</p>
                                                            <p className="text-xs text-[#567C8D]">ID: {user.id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-2 text-xs text-[#2F4156]">
                                                            <Mail size={12} className="text-[#567C8D]" />
                                                            {user.email}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs text-[#2F4156]">
                                                            <Phone size={12} className="text-[#567C8D]" />
                                                            {user.phone}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="font-mono font-bold text-sm text-[#2F4156]">${user.balance.toLocaleString()}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="font-mono text-sm text-[#567C8D]">${user.invested.toLocaleString()}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <p className="font-mono text-sm text-[#00C087]">+${user.earnings.toLocaleString()}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${user.status === 'active' ? 'bg-[#00C087]/10 text-[#00C087]' : 'bg-gray-500/10 text-gray-500'}`}>
                                                        {user.status === 'active' ? 'Activo' : 'Inactivo'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => setSelectedUser(user)}
                                                        className="px-4 py-2 bg-[#567C8D] hover:bg-[#2F4156] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2"
                                                    >
                                                        <Eye size={14} />
                                                        Ver Ficha
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* USER MODAL */}
                {selectedUser && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedUser(null)}>
                        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
                            <div className="sticky top-0 bg-white border-b border-[#C8D9E6]/20 p-6 flex items-center justify-between z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#567C8D] to-[#C8D9E6] flex items-center justify-center">
                                        <User size={32} className="text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#2F4156]">{selectedUser.name}</h2>
                                        <p className="text-sm text-[#567C8D]">Miembro desde {selectedUser.joinDate}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedUser(null)} className="w-10 h-10 rounded-full hover:bg-[#F5EFEB] flex items-center justify-center transition-colors">
                                    <X size={24} className="text-[#567C8D]" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gradient-to-br from-[#567C8D] to-[#2F4156] rounded-xl p-4 text-white">
                                        <p className="text-sm opacity-90 mb-1">Balance Total</p>
                                        <p className="text-3xl font-bold font-mono">${selectedUser.balance.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#C8D9E6] to-[#567C8D] rounded-xl p-4 text-white">
                                        <p className="text-sm opacity-90 mb-1">Invertido</p>
                                        <p className="text-3xl font-bold font-mono">${selectedUser.invested.toLocaleString()}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#00C087] to-[#00a86b] rounded-xl p-4 text-white">
                                        <p className="text-sm opacity-90 mb-1">Ganancias</p>
                                        <p className="text-3xl font-bold font-mono">+${selectedUser.earnings.toLocaleString()}</p>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="bg-[#F5EFEB]/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-[#2F4156] mb-4">Información de Contacto</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                                <Mail size={20} className="text-[#567C8D]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#567C8D]">Email</p>
                                                <p className="text-sm font-medium text-[#2F4156]">{selectedUser.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                                <Phone size={20} className="text-[#567C8D]" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#567C8D]">Teléfono</p>
                                                <p className="text-sm font-medium text-[#2F4156]">{selectedUser.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div>
                                    <h3 className="text-lg font-bold text-[#2F4156] mb-4">Actividad Reciente</h3>
                                    <div className="space-y-3">
                                        {paymentsData.filter(p => p.user === selectedUser.name).slice(0, 5).map((payment) => (
                                            <div key={payment.id} className="flex items-center justify-between p-4 bg-[#F5EFEB]/50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${payment.type === 'Depósito' ? 'bg-[#00C087]/10' : 'bg-[#F0B90B]/10'}`}>
                                                        {payment.type === 'Depósito' ? <ArrowUpCircle size={20} className="text-[#00C087]" /> : <ArrowDownCircle size={20} className="text-[#F0B90B]" />}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-[#2F4156]">{payment.type}</p>
                                                        <p className="text-xs text-[#567C8D]">{payment.date}</p>
                                                    </div>
                                                </div>
                                                <p className="font-mono font-bold text-sm text-[#2F4156]">${payment.amount.toLocaleString()}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* PAYMENTS VIEW */}
                {activeSection === 'payments' && (
                    <div className="p-8">
                        <div className="bg-white rounded-2xl border border-[#C8D9E6]/30 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-[#C8D9E6]/20">
                                <h2 className="text-2xl font-bold text-[#2F4156]">Historial de Pagos</h2>
                                <p className="text-sm text-[#567C8D]">Todos los movimientos de la plataforma</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#F5EFEB]/50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">ID</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Usuario</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Tipo</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Monto</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Método</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Estado</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-[#567C8D] uppercase">Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#C8D9E6]/20">
                                        {paymentsData.map((payment) => (
                                            <tr key={payment.id} className="hover:bg-[#F5EFEB]/30 transition-colors">
                                                <td className="px-6 py-4 text-sm font-mono text-[#567C8D]">#{payment.id}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-[#2F4156]">{payment.user}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        {payment.type === 'Depósito' ? <ArrowUpCircle size={16} className="text-[#00C087]" /> : <ArrowDownCircle size={16} className="text-[#F0B90B]" />}
                                                        <span className="text-sm text-[#2F4156]">{payment.type}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-mono font-bold text-sm text-[#2F4156]">${payment.amount.toLocaleString()}</td>
                                                <td className="px-6 py-4 text-sm text-[#567C8D]">{payment.method}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${payment.status === 'approved' ? 'bg-[#00C087]/10 text-[#00C087]' :
                                                        payment.status === 'pending' ? 'bg-[#F0B90B]/10 text-[#F0B90B]' :
                                                            'bg-red-500/10 text-red-500'
                                                        }`}>
                                                        {payment.status === 'approved' ? 'Aprobado' : payment.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-[#567C8D]">{payment.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* EARNINGS VIEW */}
                {activeSection === 'earnings' && (
                    <div className="p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-[#2F4156]">Ganancias</h2>
                                <p className="text-sm text-[#567C8D]">Análisis de ingresos de la plataforma</p>
                            </div>
                            <div className="flex gap-3">
                                <input type="date" className="px-4 py-2 bg-white border border-[#C8D9E6]/30 rounded-lg text-sm text-[#2F4156] focus:outline-none focus:border-[#567C8D]" />
                                <input type="date" className="px-4 py-2 bg-white border border-[#C8D9E6]/30 rounded-lg text-sm text-[#2F4156] focus:outline-none focus:border-[#567C8D]" />
                                <button className="px-4 py-2 bg-[#567C8D] hover:bg-[#2F4156] text-white rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                                    <Filter size={16} />
                                    Filtrar
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-[#00C087] to-[#00a86b] rounded-2xl p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <DollarSign size={32} />
                                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">+18%</span>
                                </div>
                                <p className="text-sm opacity-90 mb-2">Ingresos Totales</p>
                                <p className="text-4xl font-bold font-mono">$124,500</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#567C8D] to-[#2F4156] rounded-2xl p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <TrendingUp size={32} />
                                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">+12%</span>
                                </div>
                                <p className="text-sm opacity-90 mb-2">Ganancias Netas</p>
                                <p className="text-4xl font-bold font-mono">$98,200</p>
                            </div>
                            <div className="bg-gradient-to-br from-[#C8D9E6] to-[#567C8D] rounded-2xl p-6 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <Activity size={32} />
                                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">+24</span>
                                </div>
                                <p className="text-sm opacity-90 mb-2">Transacciones</p>
                                <p className="text-4xl font-bold font-mono">1,234</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-[#C8D9E6]/30 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-[#2F4156] mb-4">Desglose por Método de Pago</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-[#2F4156]">USDT</span>
                                        <span className="text-sm font-bold text-[#2F4156]">$85,400 (68%)</span>
                                    </div>
                                    <div className="w-full bg-[#F5EFEB] rounded-full h-3">
                                        <div className="bg-gradient-to-r from-[#00C087] to-[#00a86b] h-3 rounded-full" style={{ width: '68%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-[#2F4156]">Transferencia Bancaria</span>
                                        <span className="text-sm font-bold text-[#2F4156]">$39,100 (32%)</span>
                                    </div>
                                    <div className="w-full bg-[#F5EFEB] rounded-full h-3">
                                        <div className="bg-gradient-to-r from-[#567C8D] to-[#2F4156] h-3 rounded-full" style={{ width: '32%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ACTIVITY LOG VIEW */}
                {activeSection === 'activity' && (
                    <div className="p-8">
                        <div className="bg-white rounded-2xl border border-[#C8D9E6]/30 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-[#C8D9E6]/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#2F4156]">Bitácora de Actividad</h2>
                                        <p className="text-sm text-[#567C8D]">Registro de todas las acciones del sistema</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-[#567C8D]/10 hover:bg-[#567C8D]/20 text-[#567C8D] rounded-lg text-sm font-bold transition-colors">Todos</button>
                                        <button className="px-4 py-2 bg-white hover:bg-[#F5EFEB] text-[#567C8D] rounded-lg text-sm font-bold transition-colors border border-[#C8D9E6]/30">Usuarios</button>
                                        <button className="px-4 py-2 bg-white hover:bg-[#F5EFEB] text-[#567C8D] rounded-lg text-sm font-bold transition-colors border border-[#C8D9E6]/30">Pagos</button>
                                        <button className="px-4 py-2 bg-white hover:bg-[#F5EFEB] text-[#567C8D] rounded-lg text-sm font-bold transition-colors border border-[#C8D9E6]/30">Sistema</button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                {activityData.map((activity) => (
                                    <div key={activity.id} className="flex items-start gap-4 p-4 bg-[#F5EFEB]/30 rounded-xl hover:bg-[#F5EFEB]/50 transition-colors">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${activity.type === 'Usuarios' ? 'bg-[#567C8D]/10' :
                                            activity.type === 'Pagos' ? 'bg-[#00C087]/10' :
                                                'bg-[#C8D9E6]/20'
                                            }`}>
                                            {activity.type === 'Usuarios' ? <Users size={20} className="text-[#567C8D]" /> :
                                                activity.type === 'Pagos' ? <DollarSign size={20} className="text-[#00C087]" /> :
                                                    <Activity size={20} className="text-[#2F4156]" />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-sm text-[#2F4156]">{activity.action}</h4>
                                                <span className="text-xs text-[#567C8D]">{activity.timestamp}</span>
                                            </div>
                                            <p className="text-sm text-[#567C8D] mb-2">{activity.details}</p>
                                            <div className="flex items-center gap-3">
                                                <span className="px-2 py-1 bg-white rounded text-xs font-medium text-[#567C8D]">{activity.type}</span>
                                                <span className="text-xs text-[#567C8D]">Por: {activity.user}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
