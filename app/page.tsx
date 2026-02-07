import Link from "next/link";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="text-center space-y-8 px-6 max-w-4xl">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white font-display">
            Fintech Investment Platform
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Plataforma de inversión institucional de alto rendimiento
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/client/dashboard"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
          >
            <TrendingUp className="w-5 h-5" />
            Portal del Cliente
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/admin/dashboard"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Panel Administrativo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
