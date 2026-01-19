import React, { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Star, MapPin, Globe, Trash2, Send, Bookmark, Navigation, Search, Loader2 } from 'lucide-react';

export default function Favorites({ favorites = [], auth }: any) {
    const [searching, setSearching] = useState(false);
    
    const { data, setData, post, processing, reset, errors } = useForm({
        city_name: '',
        country_code: '',
        latitude: '',
        longitude: '',
        reason: '',
    });

    const fetchCoords = async () => {
        if (!data.city_name || !data.country_code) {
            alert("Introduce ciudad y país (ej: ES)");
            return;
        }

        setSearching(true);
        
        const city = data.city_name.trim();
        const country = data.country_code.trim();

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city + ',' + country)}&limit=1`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept-Language': 'es' 
                }
            });
            const result = await response.json();

            console.log("Resultado de OpenStreetMap:", result);

            if (result && result.length > 0) {
                const lat = parseFloat(result[0].lat);
                const lon = parseFloat(result[0].lon);

                setData(prev => ({
                    ...prev,
                    latitude: lat.toFixed(4),
                    longitude: lon.toFixed(4)
                }));
            } else {
                alert(`No se han podido encontrar las coordenadas de "${city}". Revisa el nombre.`);
            }
        } catch (error) {
            console.error("Error en geocodificación:", error);
            alert("Error al conectar con el servicio de mapas.");
        } finally {
            setSearching(false);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/favoritesStore', {
            onSuccess: () => reset(),
        });
    };

    const glassInput = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all";

    return (
        <div className="flex min-h-screen flex-col bg-[#020617] text-white font-sans selection:bg-blue-500/30">
            <Head title="Mis Lugares - WeatherX" />
            <MainNavbar />

            {/* Fondo con Brillos Atmosféricos */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[120px]"></div>
            </div>

            <main className="relative z-10 flex-grow container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-16">
                    
                    {/* ENCABEZADO */}
                    <header className="text-center space-y-4">
                        <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
                            Mis Lugares Especiales
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Gestiona tus ubicaciones favoritas para un acceso rápido al reporte meteorológico preciso.
                        </p>
                    </header>

                    {/* FORMULARIO PROFESIONAL */}
                    <section>
                        <form onSubmit={submit} className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                
                                {/* Ciudad */}
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1 flex items-center gap-2">
                                        <MapPin size={14} className="text-blue-500"/> Ciudad
                                    </label>
                                    <input 
                                        type="text" 
                                        className={glassInput} 
                                        value={data.city_name}
                                        onChange={e => setData('city_name', e.target.value)}
                                        placeholder="Ej: Puente Genil"
                                        required
                                    />
                                    {errors.city_name && <p className="text-red-400 text-xs mt-1">{errors.city_name}</p>}
                                </div>

                                {/* País */}
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1 flex items-center gap-2">
                                        <Globe size={14} className="text-blue-500"/> Código País
                                    </label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            className={`${glassInput} uppercase w-24`} 
                                            value={data.country_code}
                                            onChange={e => setData('country_code', e.target.value)}
                                            placeholder="ES"
                                            maxLength={2}
                                            required
                                        />
                                        <button 
                                            type="button"
                                            onClick={fetchCoords}
                                            className="flex-grow bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl px-4 flex items-center justify-center gap-2 transition-all active:scale-95"
                                        >
                                            {searching ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
                                            <span className="text-xs font-bold uppercase tracking-widest">Buscar Coords</span>
                                        </button>
                                    </div>
                                    {errors.country_code && <p className="text-red-400 text-xs mt-1">{errors.country_code}</p>}
                                </div>

                                {/* Coordenadas (Resultados) */}
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1 flex items-center gap-2">
                                        <Navigation size={14} className="text-purple-500"/> Datos Obtenidos
                                    </label>
                                    <div className="flex gap-2 h-[50px]">
                                        <div className="flex-1 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 font-mono text-xs">
                                            {data.latitude || 'Lat: ---'}
                                        </div>
                                        <div className="flex-1 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-mono text-xs">
                                            {data.longitude || 'Lon: ---'}
                                        </div>
                                    </div>
                                    {(errors.latitude || errors.longitude) && <p className="text-red-400 text-xs mt-1">Se necesitan las coordenadas</p>}
                                </div>

                                {/* Nota Personal */}
                                <div className="md:col-span-2 lg:col-span-3 space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1 flex items-center gap-2">
                                        <Bookmark size={14} className="text-blue-500"/> ¿Por qué es especial este lugar?
                                    </label>
                                    <textarea 
                                        className={`${glassInput} h-24 resize-none`}
                                        value={data.reason}
                                        onChange={e => setData('reason', e.target.value)}
                                        placeholder="Escribe un pequeño recuerdo o motivo..."
                                    />
                                </div>

                                {/* Botón Guardar */}
                                <div className="lg:col-span-3 pt-4">
                                    <button 
                                        disabled={processing || !data.latitude}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                                    >
                                        <Send size={18} />
                                        <span>{processing ? 'Guardando en la nube...' : 'Guardar en Favoritos'}</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    {/* LISTADO DE FAVORITOS */}
                    <section className="space-y-8">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-3xl font-black text-white flex items-center gap-4">
                                <Star className="text-yellow-500 fill-yellow-500" size={28} /> Mi Colección
                            </h2>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
                                {favorites.length} Ubicaciones
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favorites.map((fav: any) => (
                                <div key={fav.id} className="group relative bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/50 rounded-[2rem] p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                                                {fav.city_name}
                                            </h3>
                                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                                                {fav.country_code}
                                            </span>
                                        </div>
                                        <button 
                                            onClick={() => router.delete(`/favorites/${fav.id}`)}
                                            className="text-slate-600 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-xl transition-all"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                    
                                    <p className="text-slate-400 text-sm italic mb-6 leading-relaxed">
                                        "{fav.reason || 'Sin descripción adicional'}"
                                    </p>

                                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                        <Navigation size={12} className="text-slate-600" />
                                        <span className="text-[10px] font-mono text-slate-500 tracking-tighter">
                                            {fav.latitude} / {fav.longitude}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}