import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { 
    History as HistoryIcon, 
    MapPin, 
    Thermometer, 
    Calendar, 
    Trash2, 
    ExternalLink, 
    BarChart3, 
    CloudSun 
} from 'lucide-react';

interface SearchRecord {
    id: number;
    city: string;
    countrycode: string;
    temp: number;
    created_at: string;
}

interface Props {
    searches: SearchRecord[];
}

export default function History({ searches = [] }: Props) {
    
    // Función para borrar (opcional, solo diseño)
    const deleteSearch = (id: number) => {
        if(confirm('¿Eliminar este registro?')) {
            router.delete(`/searches/${id}`);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            <Head title="Historial - WeatherX" />
            <MainNavbar />

            {/* Luces de fondo cinemáticas */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]"></div>
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-4 py-16">
                
                {/* Header de la página */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 text-blue-400">
                                <HistoryIcon size={24} />
                            </div>
                            <span className="text-blue-500 font-black tracking-[0.2em] text-xs uppercase">Insights</span>
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tighter">
                            Tu Historial
                        </h1>
                        <p className="text-slate-400 mt-2 font-medium">Registros recientes de tus consultas meteorológicas.</p>
                    </div>

                    {/* Stats rápidas */}
                    <div className="flex gap-4">
                        <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-6 py-4 rounded-3xl">
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Total</p>
                            <p className="text-2xl font-black text-white">{searches.length}</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-6 py-4 rounded-3xl">
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Promedio</p>
                            <p className="text-2xl font-black text-blue-400">
                                {searches.length > 0 
                                    ? Math.round(searches.reduce((acc, s) => acc + s.temp, 0) / searches.length) 
                                    : 0}°C
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tabla de Historial */}
                <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/[0.05] bg-white/[0.02]">
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-500">Ubicación</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-500">Temperatura</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-500">Fecha y Hora</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-widest text-slate-500 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.05]">
                                {searches.length > 0 ? searches.map((search) => (
                                    <tr key={search.id} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                    <MapPin size={18} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white text-lg">{search.city}</p>
                                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">{search.countrycode}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <Thermometer size={16} className={search.temp > 25 ? "text-orange-400" : "text-blue-400"} />
                                                <span className="text-xl font-black text-white">{search.temp}°C</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-slate-400 font-medium">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar size={14} />
                                                {new Date(search.created_at).toLocaleDateString('es-ES', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link 
                                                    href={`/dashboard?city=${search.city}`}
                                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                                                    title="Re-consultar"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                                <button 
                                                    onClick={() => deleteSearch(search.id)}
                                                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-red-400 hover:border-red-500/50 transition-all"
                                                    title="Eliminar"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center">
                                            <CloudSun size={48} className="mx-auto text-slate-700 mb-4" />
                                            <p className="text-slate-500 font-bold">No hay búsquedas registradas todavía.</p>
                                            <Link href="/dashboard" className="text-blue-500 text-sm font-black uppercase mt-4 inline-block hover:text-blue-400">
                                                Empezar a buscar
                                            </Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Botón de exportar o limpiar (Decorativo) */}
                <div className="mt-8 flex justify-end">
                    <button className="text-slate-500 text-xs font-black uppercase tracking-widest hover:text-red-500 transition-colors flex items-center gap-2">
                        <BarChart3 size={14} />
                        Limpiar historial completo
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}