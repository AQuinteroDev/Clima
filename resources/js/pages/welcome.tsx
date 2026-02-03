import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { ArrowRight, CloudLightning, Globe, ShieldCheck, Zap, BarChart3, Database, ThermometerSun, Map, Info } from 'lucide-react';

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
            <Head title="Bienvenido a WeatherX - El Futuro del Clima" />

            <MainNavbar />

            <main className="flex-grow">
                {/* --- HERO SECTION (MEJORADA) --- */}
                <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden pt-16">
                    <div 
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                        style={{ backgroundImage: "url('/background.png')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
                    </div>

                    <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"></div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md animate-bounce-slow">
                            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-xs font-black uppercase tracking-widest text-blue-200">Disponible One Call 3.0</span>
                        </div>

                        <h1 className="mx-auto max-w-5xl text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl leading-none">
                            WEATHER <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">EXPLORER</span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-2xl font-medium">
                            La plataforma de inteligencia meteorológica definitiva. Datos granulares, 
                            predicciones neuronales y visualización en tiempo real.
                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Link href="/dashboard" className="flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                                COMENZAR EXPLORACIÓN <ArrowRight size={20} />
                            </Link>
                            <a href="#info" className="flex items-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md">
                                SABER MÁS
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN DE ESTADÍSTICAS RÁPIDAS --- */}
                <section className="py-12 border-y border-white/5 bg-white/[0.01]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Estaciones", val: "200k+" },
                                { label: "Precisión", val: "99.9%" },
                                { label: "Países", val: "210" },
                                { label: "Actualización", val: "1 min" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-4xl font-black text-white">{stat.val}</p>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- TABLA INFORMATIVA DE CAPACIDADES --- */}
                <section id="info" className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="mb-16 text-center">
                            <h2 className="text-4xl font-black mb-4">Potencia de Datos Sin Precedentes</h2>
                            <p className="text-slate-400 max-w-xl mx-auto">Compara nuestras capacidades de procesamiento de datos frente a servicios convencionales.</p>
                        </div>

                        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="p-6 text-sm font-black uppercase tracking-tighter">Característica</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-tighter text-blue-400">Weather Explorer Pro</th>
                                        <th className="p-6 text-sm font-black uppercase tracking-tighter text-slate-500">Servicios Estándar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { f: "Resolución de Datos", pro: "Hiperlocal (1km)", std: "Regional (15km)" },
                                        { f: "Intervalo de Forecast", pro: "Cada 1 hora", std: "Cada 3-6 horas" },
                                        { f: "Índice UV y Calidad Aire", pro: "Incluido", std: "Premium" },
                                        { f: "Alertas Tempranas", pro: "Instantáneas AI", std: "Retraso 15min" },
                                        { f: "Histórico de Datos", pro: "40 años+", std: "5 días" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="p-6 font-bold text-slate-300">{row.f}</td>
                                            <td className="p-6 font-black text-white flex items-center gap-2">
                                                <Zap size={14} className="text-blue-500" /> {row.pro}
                                            </td>
                                            <td className="p-6 text-slate-500 font-medium">{row.std}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* --- CARACTERÍSTICAS VISUALES (GRID) --- */}
                <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard 
                                icon={<Globe className="text-blue-400" />} 
                                title="Cobertura Global" 
                                desc="Acceso a radares meteorológicos en todos los continentes, incluyendo zonas polares y oceánicas."
                            />
                            <FeatureCard 
                                icon={<CloudLightning className="text-purple-400" />} 
                                title="Alertas por Rayos" 
                                desc="Detección de descargas eléctricas en un radio de 50km con precisión de milisegundos."
                            />
                            <FeatureCard 
                                icon={<ShieldCheck className="text-emerald-400" />} 
                                title="Precisión Blindada" 
                                desc="Algoritmos de corrección que comparan 5 modelos climáticos diferentes para darte el dato más exacto."
                            />
                        </div>
                    </div>
                </section>

                {/* --- SECCIÓN "SABER MÁS" TEXTO TÉCNICO --- */}
                <section className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-black">¿Por qué confiar en Weather Explorer?</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Nuestra arquitectura se basa en el procesamiento de flujos masivos de datos procedentes de satélites NOAA, EUMETSAT y una red propia de sensores IoT. No solo te decimos si va a llover; te proporcionamos la <strong>probabilidad de precipitación acumulada</strong>, la <strong>velocidad de ráfagas</strong> y el <strong>punto de rocío</strong> exacto.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <ThermometerSun className="mb-2 text-orange-400" />
                                        <p className="font-black text-sm">Índice Térmico Real</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <Map className="mb-2 text-blue-400" />
                                        <p className="font-black text-sm">Mapas de Isobaras</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-blue-600/10 border border-blue-500/20 p-8 rounded-[3rem] backdrop-blur-3xl relative">
                                <Info className="absolute -top-4 -left-4 text-blue-500 bg-slate-950 rounded-full" size={40} />
                                <h4 className="font-black text-xl mb-4 text-blue-400 italic">"El dato es el nuevo refugio"</h4>
                                <p className="text-sm text-slate-300 italic uppercase tracking-wider leading-relaxed">
                                    "En un mundo de cambios climáticos extremos, tener acceso a información meteorológica de grado militar ya no es un lujo, es una necesidad de planificación estratégica."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function FeatureCard({ icon, title, desc }: any) {
    return (
        <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-blue-500/50 backdrop-blur-md">
            <div className="mb-6 inline-block rounded-2xl bg-slate-950 p-4 shadow-xl transition-transform group-hover:scale-110">
                {React.cloneElement(icon, { size: 32 })}
            </div>
            <h3 className="mb-4 text-2xl font-black">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
        </div>
    );
}