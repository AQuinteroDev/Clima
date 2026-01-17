import React from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Star, MapPin, Globe, Trash2, Send, Bookmark } from 'lucide-react';

export default function Favorites({ favorites = [] }: any) {
    const { data, setData, post, processing, reset, errors } = useForm({
        city: '',
        country: '',
        reason: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/favorites', {
            onSuccess: () => reset(),
        });
    };

    const glassInput = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all";

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white font-sans">
            <Head title="Mis Favoritos - WeatherX" />
            <MainNavbar />

            <main className="flex-grow container mx-auto px-4 py-12 relative">
                {/* Glows de fondo */}
                <div className="absolute top-0 right-0 h-80 w-80 bg-blue-600/10 blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 h-80 w-80 bg-purple-600/10 blur-[100px] -z-10"></div>

                <div className="max-w-5xl mx-auto space-y-12">
                    
                    {/* SECCIÓN CUESTIONARIO */}
                    <section className="text-center">
                        <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                            Mis Lugares Especiales
                        </h1>
                        <p className="text-slate-400">Guarda los rincones del mundo que más te importan.</p>

                        <form onSubmit={submit} className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                                        <MapPin size={16} className="text-blue-500"/> Ciudad
                                    </label>
                                    <input 
                                        type="text" 
                                        className={glassInput} 
                                        value={data.city}
                                        onChange={e => setData('city', e.target.value)}
                                        placeholder="Ej: Kioto"
                                    />
                                    {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                                        <Globe size={16} className="text-blue-500"/> Código País
                                    </label>
                                    <input 
                                        type="text" 
                                        className={`${glassInput} uppercase`} 
                                        value={data.country}
                                        onChange={e => setData('country', e.target.value)}
                                        placeholder="Ej: JP"
                                        maxLength={3}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                                        <Bookmark size={16} className="text-blue-500"/> ¿Por qué es especial?
                                    </label>
                                    <textarea 
                                        className={`${glassInput} h-24 resize-none`}
                                        value={data.reason}
                                        onChange={e => setData('reason', e.target.value)}
                                        placeholder="Algún recuerdo o motivo especial..."
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button 
                                    disabled={processing}
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                                >
                                    <Send size={18} /> Guardar en mi Lista
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* SECCIÓN TABLA */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black flex items-center gap-3">
                            <Star className="text-yellow-500 fill-yellow-500" /> Mi Colección Personal
                        </h2>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.01] overflow-hidden backdrop-blur-md">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Ubicación</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500">Nota Personal</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {favorites.map((fav: any) => (
                                        <tr key={fav.id} className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-5">
                                                <p className="font-bold text-lg">{fav.city}</p>
                                                <p className="text-xs text-blue-500 font-black uppercase">{fav.country}</p>
                                            </td>
                                            <td className="px-6 py-5 text-slate-400 italic">
                                                "{fav.reason || 'Sin nota'}"
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button 
                                                    onClick={() => router.delete(`/favorites/${fav.id}`)}
                                                    className="p-2 text-slate-600 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {favorites.length === 0 && (
                                        <tr>
                                            <td colSpan={3} className="px-6 py-12 text-center text-slate-500">
                                                Aún no has añadido ningún lugar favorito.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}