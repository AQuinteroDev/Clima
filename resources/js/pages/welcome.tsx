import React from 'react';
import { Head } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { ArrowRight, CloudLightning, Globe, ShieldCheck, Zap } from 'lucide-react';

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-blue-500/30">
            <Head title="Bienvenido a WeatherX" />

            {/* Navbar Pro */}
            <MainNavbar />

            <main className="flex-grow">
                {/* --- HERO SECTION --- */}
                <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
                    {/* Fondo con Imagen y Overlay Gradiente */}
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                        style={{ backgroundImage: "url('/background.png')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
                    </div>

                    {/* Decoración: Luces de Fondo (Glow) */}
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]"></div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        {/* Badge de Novedad */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs font-medium uppercase tracking-widest text-blue-200">Nueva Versión 2026</span>
                        </div>

                        {/* Título Principal Impactante */}
                        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            Domina el clima con <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Inteligencia Real
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
                            La plataforma meteorológica más avanzada para profesionales. 
                            Datos en tiempo real, análisis predictivo y cobertura global en un solo lugar.
                        </p>

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}