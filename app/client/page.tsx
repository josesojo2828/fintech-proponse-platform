"use client";

import React, { useState, useEffect } from 'react';
import {
    Home, Wallet, Users, User, Gem, ArrowUpCircle, ArrowDownCircle,
    FileText, ChevronRight, Copy, History, CreditCard, Shield,
    LogOut, HelpCircle, Share2, Zap, Award, ExternalLink, QrCode, Smartphone, Check, AlertTriangle, TrendingUp, Bell, Menu,
    Plus,
    Timer, Calendar, BarChart3, CheckCircle2, Lock
} from 'lucide-react';

const transactions = [
    { id: 1, type: 'Depósito USDT', amount: '+500.00', date: '07/02 14:30', status: 'Confirmado', icon: <ArrowUpCircle size={16} className="text-[#F0B90B]" /> },
    { id: 2, type: 'Rendimiento', amount: '+12.50', date: '06/02 09:15', status: 'Ganancia', icon: <Gem size={16} className="text-[#567C8D]" /> },
    { id: 3, type: 'Retiro USDT', amount: '-150.00', date: '05/02 18:20', status: 'Procesando', icon: <ArrowDownCircle size={16} className="text-[#F5EFEB]" /> },
    { id: 4, type: 'Depósito USDT', amount: '+1000.00', date: '01/02 10:00', status: 'Completado', icon: <ArrowUpCircle size={16} className="text-[#F0B90B]" /> },
    { id: 5, type: 'Rendimiento', amount: '+8.50', date: '01/02 09:15', status: 'Ganancia', icon: <Gem size={16} className="text-[#567C8D]" /> },
];

export default function App() {
    const [activeTab, setActiveTab] = useState<any>('inicio');
    const [liveAlert, setLiveAlert] = useState<any>(null);

    useEffect(() => {
        const generateAlert = () => {
            const users = ['Crypto***99', 'User***21', 'Juan***05', 'Ana***88', 'Invest***10', 'Trader***55', 'Btc***King'];
            const randomUser = users[Math.floor(Math.random() * users.length)];
            const randomAmount = (Math.random() * (5000 - 50) + 50).toFixed(2);

            setLiveAlert({ user: randomUser, amount: randomAmount });

            setTimeout(() => {
                setLiveAlert(null);
            }, 4000);
        };

        const initialTimeout = setTimeout(generateAlert, 2000);
        const interval = setInterval(() => {
            generateAlert();
        }, Math.random() * 7000 + 8000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    const planets = [
        { id: 1, color: 'from-[#567C8D] to-[#2F4156]', percent: '2.6%-3.6%', quota: 'V6 Cuota:5000+', size: 'w-20 h-20', position: 'top-0 left-4' },
        { id: 2, color: 'from-[#C8D9E6] to-[#567C8D]', percent: '2.6%-3.6%', quota: 'V5 Cuota:5000+', size: 'w-16 h-16', position: 'top-[-20px] left-1/2 -translate-x-1/2' },
        { id: 3, color: 'from-[#F5EFEB] to-[#C8D9E6]', percent: '2.6%-3.6%', quota: 'V4 Cuota:5000+', size: 'w-20 h-20', position: 'top-4 right-4' },
        { id: 4, color: 'from-[#2F4156] to-black', percent: '2.6%-3.6%', quota: 'V7 Cuota:5000+', size: 'w-24 h-24', position: 'top-32 left-[-10px]' },
        { id: 5, color: 'from-[#C8D9E6] to-white', percent: '2.6%-3.6%', quota: 'V1 Cuota:5000+', size: 'w-24 h-24', position: 'top-48 left-1/2 -translate-x-1/2 z-20' },
        { id: 6, color: 'from-[#567C8D] to-[#F5EFEB]', percent: '2.6%-3.6%', quota: 'V2 Cuota:5000+', size: 'w-20 h-20', position: 'top-32 right-[-10px]' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'inicio':
                return <HomeView />;
            case 'wallet':
                return <WalletView />;
            case 'referidos':
                return <ReferralsView />;
            case 'perfil':
                return <ProfileView />;
            default:
                return <HomeView />;
        }
    };

    return (
        <div className="min-h-screen bg-[#2F4156] text-[#F5EFEB] font-sans overflow-hidden relative selection:bg-[#567C8D] selection:text-white flex flex-col md:flex-row">
            {/* Fondo Ambiental */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-[#567C8D]/20 blur-[100px] rounded-full mix-blend-overlay animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[50%] bg-[#C8D9E6]/10 blur-[80px] rounded-full mix-blend-overlay"></div>
            </div>

            {/* TOAST NOTIFICATION - MEJORADO */}
            {liveAlert && (
                <div className="fixed top-20 left-0 right-0 z-50 flex justify-center pointer-events-none animate-in slide-in-from-top-5 fade-in duration-500 md:justify-end md:right-6 md:top-6 md:left-auto">
                    <div className="relative bg-gradient-to-r from-[#1e2a38]/95 to-[#2F4156]/95 backdrop-blur-xl border border-[#00C087]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,192,135,0.15)] overflow-hidden max-w-[90%] mx-4 md:mx-0">
                        {/* Efecto de brillo animado */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C087]/10 to-transparent animate-pulse"></div>

                        {/* Borde superior brillante */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C087] to-transparent"></div>

                        <div className="relative flex items-center gap-4 px-5 py-3.5">
                            {/* Icono con animación */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00C087]/20 rounded-full blur-md animate-pulse"></div>
                                <div className="relative bg-gradient-to-br from-[#00C087] to-[#00a86b] p-2.5 rounded-xl shadow-lg">
                                    <TrendingUp size={18} className="text-white" strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-[#00C087] uppercase tracking-wider">Retiro Exitoso</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C087] animate-pulse"></div>
                                </div>
                                <p className="text-sm text-[#F5EFEB] leading-tight">
                                    <span className="font-bold text-[#C8D9E6]">{liveAlert.user}</span> retiró
                                    <span className="font-bold text-[#00C087] ml-1 font-mono">{liveAlert.amount} USDT</span>
                                </p>
                            </div>

                            {/* Indicador de tiempo */}
                            <div className="ml-auto flex items-center gap-1.5 text-[#567C8D]">
                                <div className="w-1 h-1 rounded-full bg-[#567C8D] animate-pulse"></div>
                                <span className="text-[10px] font-medium">Ahora</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- SIDEBAR (DESKTOP) --- */}
            <aside className="hidden md:flex flex-col w-72 bg-[#1e2a38]/80 backdrop-blur-md border-r border-[#C8D9E6]/10 z-50 h-screen sticky top-0 p-6 shrink-0">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] flex items-center justify-center shadow-lg shadow-[#567C8D]/30">
                        <Gem size={20} className="text-[#2F4156]" />
                    </div>
                    <div>
                        <span className="font-bold text-[#F5EFEB] text-lg block leading-none">CryptoSpace</span>
                        <span className="text-[10px] text-[#567C8D] uppercase tracking-wider">Dashboard</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <SidebarButton active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} icon={<Home size={20} />} label="Inicio" />
                    <SidebarButton active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} icon={<Wallet size={20} />} label="Billetera" />
                    <SidebarButton active={activeTab === 'referidos'} onClick={() => setActiveTab('referidos')} icon={<Users size={20} />} label="Referidos" />
                    <SidebarButton active={activeTab === 'perfil'} onClick={() => setActiveTab('perfil')} icon={<User size={20} />} label="Perfil" />
                </div>

                <div className="mt-auto pt-6 border-t border-[#C8D9E6]/10">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#2F4156]/50 border border-[#C8D9E6]/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] p-[1px]">
                            <div className="w-full h-full rounded-full bg-[#2F4156] flex items-center justify-center">
                                <User size={14} className="text-[#C8D9E6]" />
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-[#F5EFEB] truncate">CryptoUser_99</p>
                            <p className="text-[10px] text-[#00C087]">● En línea</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 relative z-10 h-screen overflow-y-auto custom-scrollbar flex flex-col">
                {/* Header Desktop Sticky - MEJORADO */}
                <div className="sticky top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#2F4156]/95 to-[#2F4156]/80 backdrop-blur-xl z-40 flex items-center justify-between px-4 md:px-10 border-b border-[#C8D9E6]/10 shadow-lg">
                    {/* Logo Mobile */}
                    <div className="flex items-center gap-3 md:hidden">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] rounded-xl blur-sm opacity-50"></div>
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] flex items-center justify-center shadow-lg">
                                <Gem size={20} className="text-[#2F4156]" />
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-[#F5EFEB] text-base">CryptoSpace</span>
                            <p className="text-[9px] text-[#567C8D] uppercase tracking-wider">Dashboard</p>
                        </div>
                    </div>

                    {/* Título Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-[#567C8D] to-[#C8D9E6] rounded-full"></div>
                            <div>
                                <h1 className="text-2xl font-bold text-[#F5EFEB] capitalize tracking-tight">{activeTab}</h1>
                                <p className="text-xs text-[#567C8D] mt-0.5">Bienvenido de nuevo, <span className="text-[#C8D9E6] font-semibold">CryptoUser_99</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Acciones del Header */}
                    <div className="flex items-center gap-3">
                        {/* Indicador USDT Live */}
                        <div className="hidden md:flex items-center gap-2.5 px-4 py-2 bg-[#1e2a38]/80 backdrop-blur-sm rounded-xl border border-[#00C087]/20 shadow-sm hover:border-[#00C087]/40 transition-all group">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#00C087] animate-pulse"></div>
                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#00C087] animate-ping opacity-75"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-[#567C8D] uppercase tracking-wider leading-none">Live</span>
                                <span className="text-xs font-bold text-[#F5EFEB] font-mono leading-none mt-0.5">USDT</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENIDO CENTRADO Y AJUSTADO */}
                {/* Cambié md:mx-0 a md:mx-auto para centrarlo en el área principal */}
                <div className="flex-1 w-full max-w-sm mx-auto md:max-w-5xl md:px-10 pb-24 md:pb-12 pt-4 md:pt-8">
                    {renderContent()}
                </div>
            </main>

            {/* --- BOTTOM NAV (MOBILE) --- */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#2F4156]/95 backdrop-blur-md border-t border-[#C8D9E6]/20 px-6 py-3 z-50 flex justify-between items-center rounded-t-2xl shadow-[0_-5px_20px_rgba(47,65,86,0.5)] md:hidden">
                <NavButton active={activeTab === 'inicio'} onClick={() => setActiveTab('inicio')} icon={<Home size={24} />} label="Inicio" />
                <NavButton active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} icon={<Wallet size={24} />} label="Wallet" />

                <div className="relative -top-6">
                    <button
                        className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] shadow-[0_0_15px_rgba(86,124,141,0.6)] flex items-center justify-center border-4 border-[#2F4156] transform transition-transform active:scale-95"
                        onClick={() => setActiveTab('inicio')}
                    >
                        <Gem size={28} className="text-[#2F4156] animate-pulse" />
                    </button>
                </div>

                <NavButton active={activeTab === 'referidos'} onClick={() => setActiveTab('referidos')} icon={<Users size={24} />} label="Referidos" />
                <NavButton active={activeTab === 'perfil'} onClick={() => setActiveTab('perfil')} icon={<User size={24} />} label="Perfil" />
            </nav>
        </div>
    );
}

/* --- VISTAS --- */

function HomeView() {
    // DATOS DEL USUARIO (Simulados)
    const investmentData = {
        invested: 1000.00,        // Capital Invertido
        dailyRate: 3.33,          // % Diario
        dailyEarnings: 33.30,     // Ganancia en $ por día
        daysPassed: 12,           // Días transcurridos
        totalDays: 30,            // Ciclo del mes
        accumulated: 399.60,      // Ganancia acumulada este mes
    };

    // Calculamos porcentajes para las barras de progreso
    const monthlyProgress = (investmentData.daysPassed / investmentData.totalDays) * 100;
    const todayProgress = 65; // Simulamos que va por el 65% del día actual

    // Historial de los últimos pagos diarios
    const payoutHistory = [
        { day: 'Hoy', amount: 'Pendiente...', status: 'processing' },
        { day: 'Ayer', amount: `+${investmentData.dailyEarnings.toFixed(2)}`, status: 'completed' },
        { day: '05 Feb', amount: `+${investmentData.dailyEarnings.toFixed(2)}`, status: 'completed' },
        { day: '04 Feb', amount: `+${investmentData.dailyEarnings.toFixed(2)}`, status: 'completed' },
    ];

    return (
        <div className="flex flex-col gap-5 px-4 fade-in w-full pb-24 md:pb-8">

            {/* 1. HERO: RESUMEN DE CAPITAL ACTIVO */}
            <div className="relative w-full bg-[#1e2a38] rounded-3xl p-6 border border-[#C8D9E6]/10 shadow-xl mt-4 overflow-hidden">
                {/* Barra de progreso superior (Ciclo Mensual) */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2F4156]">
                    <div
                        className="h-full bg-gradient-to-r from-[#00C087] to-[#567C8D]"
                        style={{ width: `${monthlyProgress}%` }}
                    ></div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mt-2">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#C8D9E6] text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                <Lock size={12} /> Capital en Staking
                            </span>
                        </div>
                        <h2 className="text-4xl font-bold text-[#F5EFEB] font-mono tracking-tighter">
                            ${investmentData.invested.toFixed(2)}
                        </h2>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="bg-[#00C087]/10 px-2 py-1 rounded-lg border border-[#00C087]/20 flex items-center gap-1">
                                <TrendingUp size={12} className="text-[#00C087]" />
                                <span className="text-[#00C087] text-xs font-bold">+{investmentData.dailyRate}% Diario</span>
                            </div>
                            <span className="text-xs text-[#567C8D]">
                                Ciclo: {investmentData.daysPassed}/{investmentData.totalDays} días
                            </span>
                        </div>
                    </div>

                    {/* Ganancia Acumulada del Mes Actual */}
                    <div className="bg-[#2F4156]/50 p-4 rounded-xl border border-[#C8D9E6]/5 text-right md:text-left min-w-[140px]">
                        <p className="text-[10px] text-[#C8D9E6] uppercase font-bold mb-1">Ganado este mes</p>
                        <p className="text-2xl font-bold text-[#F0B90B] font-mono">+${investmentData.accumulated.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            {/* 2. GRID PRINCIPAL: META DIARIA VS META MENSUAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* TARJETA A: PROGRESO DE HOY (La emoción diaria) */}
                <div className="bg-gradient-to-br from-[#1e2a38] to-[#2F4156] border border-[#C8D9E6]/10 rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Timer size={40} className="text-[#F0B90B]" />
                    </div>

                    <h3 className="text-[#F5EFEB] font-bold text-sm mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F0B90B] animate-pulse"></span>
                        Meta de Hoy
                    </h3>

                    <div className="flex items-end justify-between mb-2">
                        <span className="text-3xl font-bold text-[#F5EFEB]">${investmentData.dailyEarnings.toFixed(2)}</span>
                        <span className="text-xs text-[#00C087] font-bold mb-1">En proceso...</span>
                    </div>

                    {/* Barra de progreso del día */}
                    <div className="w-full h-3 bg-[#151c24] rounded-full overflow-hidden border border-[#C8D9E6]/5">
                        <div
                            className="h-full bg-gradient-to-r from-[#F0B90B] to-[#F6465D] animate-pulse relative"
                            style={{ width: `${todayProgress}%` }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 blur-[2px]"></div>
                        </div>
                    </div>
                    <p className="text-[10px] text-[#567C8D] mt-2 text-right">Se acredita a las 00:00 UTC</p>
                </div>

                {/* TARJETA B: PROGRESO MENSUAL (La meta de retiro) */}
                <div className="bg-[#1e2a38]/80 border border-[#C8D9E6]/10 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[#F5EFEB] font-bold text-sm flex items-center gap-2">
                            <Calendar size={16} className="text-[#567C8D]" />
                            Meta de Retiro
                        </h3>
                        <span className="text-[10px] bg-[#567C8D]/20 text-[#C8D9E6] px-2 py-1 rounded-md">
                            Faltan {investmentData.totalDays - investmentData.daysPassed} días
                        </span>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-[#567C8D]">Inicio</span>
                            <span className="text-[#F5EFEB] font-bold">{monthlyProgress.toFixed(0)}% Completado</span>
                            <span className="text-[#567C8D]">Retiro</span>
                        </div>
                        <div className="w-full h-2 bg-[#151c24] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#567C8D]"
                                style={{ width: `${monthlyProgress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. LISTA DE RENDIMIENTOS (HISTORIAL) */}
            <div className="bg-[#1e2a38]/60 border border-[#C8D9E6]/5 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#C8D9E6] text-sm font-bold uppercase tracking-wider">Historial de Pagos</h3>
                    <BarChart3 size={16} className="text-[#567C8D]" />
                </div>

                <div className="space-y-3">
                    {payoutHistory.map((payout, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-[#C8D9E6]/5 last:border-0 hover:bg-[#2F4156]/40 px-2 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${payout.status === 'completed' ? 'border-[#00C087]/30 bg-[#00C087]/10' : 'border-[#F0B90B]/30 bg-[#F0B90B]/10'}`}>
                                    {payout.status === 'completed' ? (
                                        <CheckCircle2 size={14} className="text-[#00C087]" />
                                    ) : (
                                        <Timer size={14} className="text-[#F0B90B] animate-spin-slow" /> // animate-spin-slow clase custom o usar animate-spin
                                    )}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#F5EFEB]">Rendimiento Diario</p>
                                    <p className="text-[10px] text-[#567C8D]">{payout.day}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-mono font-bold text-sm ${payout.status === 'processing' ? 'text-[#C8D9E6] opacity-50' : 'text-[#00C087]'}`}>
                                    {payout.amount}
                                </p>
                                <p className="text-[9px] text-[#567C8D] uppercase">
                                    {payout.status === 'processing' ? 'Procesando' : 'Acreditado'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-4 py-3 bg-[#2F4156] border border-[#567C8D]/30 text-[#C8D9E6] text-xs font-bold rounded-xl hover:bg-[#567C8D] hover:text-white transition-all">
                    Ver Historial Completo
                </button>
            </div>
        </div>
    );
}

function WalletView() {
    const [activeAction, setActiveAction] = useState('deposit');
    const [copied, setCopied] = useState(false);
    const walletAddress = "0x71C8F3929495A23";

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="px-4 pt-4 pb-24 md:pb-8 w-full mx-auto flex flex-col lg:flex-row gap-8 fade-in h-full justify-center">
            <div className="w-full max-w-sm mx-auto lg:w-1/2 lg:max-w-md flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-center mb-1 text-[#F5EFEB] lg:text-left">Billetera USDT</h2>

                <div className="relative rounded-2xl bg-gradient-to-br from-[#1e2a38] to-[#151c24] p-6 border border-[#F0B90B]/30 shadow-[0_0_20px_rgba(86,124,141,0.15)] overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F0B90B]/5 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-5 h-5 rounded-full bg-[#F0B90B] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-[#2F4156] transform rotate-45"></div>
                            </div>
                            <span className="text-[#F0B90B] font-bold text-xs uppercase tracking-wider">BNB Smart Chain</span>
                        </div>

                        <p className="text-[#C8D9E6] text-sm mb-1">Saldo Total Estimado</p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <h3 className="text-4xl font-bold font-mono text-[#F5EFEB]">1,293.30</h3>
                            <span className="text-sm font-bold text-[#567C8D]">USDT</span>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-[#2F4156] rounded-lg p-2 flex-1 border border-[#C8D9E6]/10">
                                <p className="text-[10px] text-[#C8D9E6]">Disponible</p>
                                <p className="font-bold text-[#F0B90B]">1,240.00</p>
                            </div>
                            <div className="bg-[#2F4156] rounded-lg p-2 flex-1 border border-[#C8D9E6]/10">
                                <p className="text-[10px] text-[#C8D9E6]">Congelado</p>
                                <p className="font-bold text-[#567C8D]">53.30</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex p-1 bg-[#1e2a38] rounded-xl border border-[#C8D9E6]/10">
                    <button
                        onClick={() => setActiveAction('deposit')}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeAction === 'deposit' ? 'bg-[#567C8D] text-white shadow-lg' : 'text-[#C8D9E6] hover:text-white'}`}
                    >
                        Depositar
                    </button>
                    <button
                        onClick={() => setActiveAction('withdraw')}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${activeAction === 'withdraw' ? 'bg-[#567C8D] text-white shadow-lg' : 'text-[#C8D9E6] hover:text-white'}`}
                    >
                        Retirar
                    </button>
                </div>

                <div className="bg-[#1e2a38]/80 border border-[#C8D9E6]/10 rounded-2xl p-5 backdrop-blur-sm flex-1 min-h-[300px] flex flex-col justify-center">
                    {activeAction === 'deposit' ? (
                        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 w-full">
                            <div className="flex items-start gap-2 bg-[#F0B90B]/10 p-3 rounded-lg border border-[#F0B90B]/20 mb-4 w-full">
                                <AlertTriangle size={16} className="text-[#F0B90B] shrink-0 mt-0.5" />
                                <p className="text-[10px] text-[#C8D9E6] leading-tight">
                                    Envía solo <strong className="text-[#F5EFEB]">USDT</strong> a esta dirección. Red <strong className="text-[#F0B90B]">BEP20</strong>.
                                </p>
                            </div>
                            <div className="bg-[#F5EFEB] p-2 rounded-xl mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                                <QrCode size={120} className="text-[#2F4156]" />
                            </div>
                            <div className="w-full bg-[#2F4156]/50 rounded-lg p-3 border border-[#C8D9E6]/10 flex items-center justify-between gap-2 mb-3">
                                <div className="overflow-hidden">
                                    <p className="text-[10px] text-[#567C8D] mb-0.5">Dirección</p>
                                    <p className="text-xs font-mono text-[#F0B90B] truncate">{walletAddress}</p>
                                </div>
                                <button onClick={handleCopy} className={`p-2 rounded-lg transition-all ${copied ? 'bg-green-500/20 text-green-400' : 'hover:bg-[#567C8D]/20 text-[#F5EFEB]'}`}>
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                            <button className="w-full py-3 bg-[#F0B90B] hover:bg-[#D9A506] text-[#2F4156] font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                                <Smartphone size={18} /> Binance Pay
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 w-full">
                            <div>
                                <label className="text-xs text-[#C8D9E6] mb-1 block">Dirección BEP20</label>
                                <input type="text" placeholder="Pega la dirección" className="w-full bg-[#2F4156] border border-[#C8D9E6]/10 rounded-lg p-3 text-sm text-[#F5EFEB] focus:border-[#567C8D] outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-[#C8D9E6] mb-1 block">Monto (USDT)</label>
                                <div className="relative">
                                    <input type="number" placeholder="0.00" className="w-full bg-[#2F4156] border border-[#C8D9E6]/10 rounded-lg p-3 text-sm text-[#F5EFEB] focus:border-[#567C8D] outline-none" />
                                    <span className="absolute right-3 top-3 text-xs font-bold text-[#567C8D]">MAX</span>
                                </div>
                            </div>
                            <button className="w-full py-3 mt-4 bg-[#F0B90B] hover:bg-[#D9A506] text-[#2F4156] font-bold rounded-xl transition-colors">
                                Retirar
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full max-w-sm mx-auto lg:w-1/2 lg:max-w-md">
                <div className="flex justify-between items-center mb-3 mt-2 lg:mt-0">
                    <h3 className="text-sm font-bold text-[#C8D9E6]">Historial Reciente</h3>
                    <button className="text-xs text-[#567C8D] hover:text-[#C8D9E6] flex items-center gap-1">Ver todo <ChevronRight size={12} /></button>
                </div>
                <div className="flex flex-col gap-2 h-auto lg:h-[580px] overflow-y-auto custom-scrollbar pr-1">
                    {transactions.map(tx => (
                        <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl bg-[#1e2a38]/50 border border-[#C8D9E6]/5 hover:bg-[#567C8D]/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#2F4156] flex items-center justify-center border border-[#567C8D]/30">
                                    {tx.icon}
                                </div>
                                <div>
                                    <p className="font-bold text-xs text-[#F5EFEB]">{tx.type}</p>
                                    <p className="text-[10px] text-[#567C8D]">{tx.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-mono font-bold text-sm ${tx.amount.startsWith('+') ? 'text-[#00C087]' : 'text-[#F6465D]'}`}>{tx.amount}</p>
                                <p className={`text-[9px] ${tx.status === 'Confirmado' ? 'text-[#00C087]' : tx.status === 'Procesando' ? 'text-yellow-500' : 'text-[#C8D9E6]'}`}>{tx.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ReferralsView() {
    return (
        <div className="px-4 pt-4 pb-24 w-full max-w-sm mx-auto flex flex-col gap-6 fade-in h-full md:max-w-4xl">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-1 text-[#F5EFEB]">Invita Amigos</h2>
                <p className="text-[#C8D9E6] text-sm">Gana comisiones por cada referido</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="bg-gradient-to-r from-[#567C8D] to-[#2F4156] p-8 rounded-2xl border border-[#C8D9E6]/20 text-center relative overflow-hidden flex-1 flex flex-col justify-center min-h-[200px]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8D9E6] to-transparent"></div>
                        <Zap className="w-16 h-16 text-[#F5EFEB] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(245,239,235,0.4)]" />
                        <p className="text-xs text-[#C8D9E6] mb-2 uppercase tracking-widest">Tu Código de Invitación</p>
                        <div className="flex items-center justify-center gap-2 mb-6 bg-[#2F4156]/50 p-3 rounded-lg border border-dashed border-[#C8D9E6]/30">
                            <span className="text-3xl font-mono font-bold text-[#F5EFEB] tracking-widest">XJ9-22K</span>
                            <Copy size={20} className="text-[#C8D9E6] cursor-pointer hover:text-white" />
                        </div>
                        <button className="w-full py-3 bg-[#F5EFEB] text-[#2F4156] font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                            <Share2 size={18} /> Compartir Enlace
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1e2a38]/80 p-6 rounded-xl border border-[#C8D9E6]/10 text-center">
                            <p className="text-4xl font-bold text-[#F5EFEB]">124</p>
                            <p className="text-xs text-[#C8D9E6] mt-1">Equipo Total</p>
                        </div>
                        <div className="bg-[#1e2a38]/80 p-6 rounded-xl border border-[#C8D9E6]/10 text-center">
                            <p className="text-4xl font-bold text-[#00C087]">$450</p>
                            <p className="text-xs text-[#C8D9E6] mt-1">Ganancia Total</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="font-bold mb-3 text-[#F5EFEB]">Tus Niveles</h3>
                    <div className="space-y-3 bg-[#1e2a38]/50 p-6 rounded-2xl border border-[#C8D9E6]/5 h-full">
                        <ReferralLevelRow level="Nivel 1" percent="10%" count="85" color="bg-[#567C8D]" />
                        <ReferralLevelRow level="Nivel 2" percent="5%" count="24" color="bg-[#C8D9E6]" />
                        <ReferralLevelRow level="Nivel 3" percent="2%" count="15" color="bg-[#F5EFEB]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfileView() {
    return (
        <div className="px-4 pt-4 pb-24 w-full max-w-sm mx-auto flex flex-col gap-6 fade-in h-full md:max-w-4xl justify-center">
            <div className="flex items-center gap-6 p-6 bg-[#1e2a38]/80 rounded-2xl border border-[#C8D9E6]/10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#567C8D] to-[#C8D9E6] p-[2px] shrink-0">
                    <div className="w-full h-full rounded-full bg-[#2F4156] flex items-center justify-center overflow-hidden">
                        <User size={48} className="text-[#C8D9E6]" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[#F5EFEB]">CryptoUser_99</h2>
                    <p className="text-base text-[#C8D9E6]">ID: 88392011</p>
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs border border-yellow-500/30">
                        <Award size={12} className="mr-1" /> Miembro VIP
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-sm text-[#567C8D] uppercase font-bold mb-3 ml-2">Cuenta</h3>
                        <div className="bg-[#1e2a38]/80 backdrop-blur-sm rounded-2xl border border-[#C8D9E6]/10 overflow-hidden">
                            <ProfileMenuItem icon={<Shield size={20} />} label="Seguridad de Cuenta" />
                            <ProfileMenuItem icon={<CreditCard size={20} />} label="Métodos de Pago" />
                            <ProfileMenuItem icon={<History size={20} />} label="Historial de Transacciones" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-sm text-[#567C8D] uppercase font-bold mb-3 ml-2">Otros</h3>
                        <div className="bg-[#1e2a38]/80 backdrop-blur-sm rounded-2xl border border-[#C8D9E6]/10 overflow-hidden">
                            <ProfileMenuItem icon={<HelpCircle size={20} />} label="Centro de Ayuda" />
                            <ProfileMenuItem icon={<ExternalLink size={20} />} label="Términos y Condiciones" />
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-900/10 flex items-center justify-center gap-2 transition-colors mt-auto font-bold">
                        <LogOut size={20} /> Cerrar Sesión
                    </button>
                </div>
            </div>
            <p className="text-center text-xs text-[#567C8D] mt-8">Versión App 1.2.5 (Beta)</p>
        </div>
    );
}

/* --- SUBCOMPONENTES --- */

function ReferralLevelRow({ level, percent, count, color }: any) {
    return (
        <div className="flex items-center justify-between p-4 bg-[#2F4156]/50 rounded-lg border border-[#C8D9E6]/10 transition-colors hover:bg-[#2F4156]/80">
            <div className="flex items-center gap-4">
                <div className={`w-2 h-10 rounded-full ${color}`}></div>
                <div>
                    <p className="font-bold text-base text-[#F5EFEB]">{level}</p>
                    <p className="text-xs text-[#C8D9E6]">Comisión: {percent}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-bold text-xl text-[#F5EFEB]">{count}</p>
                <p className="text-[10px] text-[#567C8D] uppercase">Miembros</p>
            </div>
        </div>
    );
}

function ProfileMenuItem({ icon, label }: any) {
    return (
        <div className="flex items-center justify-between p-5 border-b border-[#C8D9E6]/5 last:border-0 hover:bg-[#567C8D]/10 cursor-pointer transition-colors group">
            <div className="flex items-center gap-4 text-[#C8D9E6] group-hover:text-[#F5EFEB]">
                {icon}
                <span className="text-base font-medium">{label}</span>
            </div>
            <ChevronRight size={18} className="text-[#567C8D] group-hover:text-[#F5EFEB]" />
        </div>
    );
}

function TechCard({ title, value, align }: any) {
    return (
        <div className="relative bg-[#1e2a38]/80 backdrop-blur-sm p-5 rounded-lg border border-[#C8D9E6]/10 group overflow-hidden transition-transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#567C8D] rounded-tl-sm"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#567C8D] rounded-tr-sm"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#567C8D] rounded-bl-sm"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#567C8D] rounded-br-sm"></div>

            <div className={`relative z-10 ${align}`}>
                <p className="text-2xl md:text-3xl font-bold text-[#F5EFEB] font-mono tracking-wider drop-shadow-md">{value}</p>
                <p className="text-[#C8D9E6] text-xs mt-1 leading-tight">{title}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#567C8D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
}

function ActionButton({ label, icon, color }: any) {
    return (
        <button className={`flex-1 flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#1e2a38] border ${color} transition-all active:scale-95 group hover:shadow-lg hover:shadow-[#567C8D]/10`}>
            <div className="mb-2 group-hover:scale-110 transition-transform">{icon}</div>
            <span className="text-[10px] sm:text-xs font-medium leading-tight text-center px-1">
                {label}
            </span>
        </button>
    );
}

function NavButton({ active, onClick, icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-14 transition-colors ${active ? 'text-[#F5EFEB]' : 'text-[#567C8D] hover:text-[#C8D9E6]'}`}
        >
            <div className={`mb-1 transition-transform duration-300 ${active ? 'scale-110 drop-shadow-[0_0_8px_rgba(245,239,235,0.4)]' : ''}`}>
                {icon}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}

function SidebarButton({ active, onClick, icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all group ${active ? 'bg-[#567C8D]/20 border-r-2 border-[#567C8D] text-[#F5EFEB]' : 'hover:bg-[#2F4156]/50 text-[#567C8D] hover:text-[#C8D9E6]'}`}
        >
            <div className={`transition-colors`}>
                {icon}
            </div>
            <span className={`text-sm font-medium`}>
                {label}
            </span>
        </button>
    );
}

function ActionButtonMini({ icon, label, primary }: any) {
    return (
        <button className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl border transition-all active:scale-95 ${primary
            ? 'bg-[#F5EFEB] border-[#F5EFEB] text-[#2F4156] shadow-[0_0_15px_rgba(245,239,235,0.2)]'
            : 'bg-[#2F4156]/50 border-[#567C8D]/30 text-[#C8D9E6] hover:bg-[#567C8D]/20 hover:text-[#F5EFEB]'
            }`}>
            {icon}
            <span className="text-[10px] font-bold">{label}</span>
        </button>
    );
}

function MiniStatCard({ label, value, unit, color }: any) {
    return (
        <div className="bg-[#1e2a38]/80 border border-[#C8D9E6]/10 p-3 rounded-xl flex flex-col justify-center items-center text-center shadow-sm hover:border-[#567C8D]/30 transition-colors">
            <span className="text-[9px] text-[#C8D9E6] uppercase font-bold mb-1">{label}</span>
            <span className={`text-lg font-bold font-mono ${color}`}>{value}</span>
            <span className="text-[9px] text-[#567C8D]">{unit}</span>
        </div>
    );
}
