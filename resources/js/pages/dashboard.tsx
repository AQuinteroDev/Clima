import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Search, MapPin, Wind, Droplets, Thermometer, Cloud, Star, Sunrise, Sunset, Gauge, Eye, ChevronDown } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Dashboard({ favorites = [] }: any) {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [forecast, setForecast] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Lógica de GIFs y Colores (FONDOS DINÁMICOS)
    const getWeatherVisuals = (main: string) => {
        const visuals: any = {
            Clear: { 
                bg: "from-orange-500/40 to-yellow-600/40", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/01d/giphy.gif" 
            },
            Clouds: { 
                bg: "from-slate-400/40 to-slate-700/40", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/04d/giphy.gif" 
            },
            Rain: { 
                bg: "from-blue-600/40 to-indigo-900/40", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/09d/giphy.gif" 
            },
            Thunderstorm: { 
                bg: "from-purple-900/40 to-slate-900/40", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/11d/giphy.gif" 
            },
            Snow: { 
                bg: "from-blue-100/30 to-slate-300/30", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/13d/giphy.gif" 
            },
            Default: { 
                bg: "from-blue-500/20 to-slate-900/40", 
                gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRyeWp6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6bm9ueXF6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/50d/giphy.gif" 
            }
        };
        return visuals[main] || visuals.Default;
    };

    const handleFavoriteSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        if (!selectedValue) return;

        const [favCity, favCountry] = selectedValue.split('|');
        setCity(favCity);
        setCountry(favCountry);
    };

    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city) return;
        setLoading(true);

        try {
            const response = await fetch(`/api/weather-data?city=${city.trim()}&country=${country.trim()}`);
            const data = await response.json();

            if (data.current && data.current.cod === 200) {
                const visuals = getWeatherVisuals(data.current.weather[0].main);
                
                setWeather({
                    ...data.current,
                    visuals: visuals,
                    sunrise: new Date(data.current.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                    sunset: new Date(data.current.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                });

                // Filtrar pronóstico: uno por día
                const daily = data.forecast.list.filter((f: any) => f.dt_txt.includes("12:00:00"));
                setForecast(daily);

                // Guardar búsqueda
                router.post('/searches', {
                    city: data.current.name,
                    country: data.current.sys.country,
                    temp: data.current.main.temp,
                }, { preserveScroll: true });
            } else {
                toast.error("Ciudad no encontrada.");
            }
        } catch (error) {
            toast.error("Error al conectar con la API.");
        } finally {
            setLoading(false);
        }
    };

    // Estilo base corregido para el select (texto oscuro en las opciones)
    const glassInputStyle = "w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-md text-lg appearance-none";

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white font-sans selection:bg-blue-500/30">
            <Head title="Weather Explorer - Dashboard" />
            <MainNavbar />

            <main className="flex-grow max-w-6xl mx-auto px-4 py-12 w-full">
                
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        Weather Explorer
                    </h1>
                    <p className="text-slate-500 mt-2">Datos en tiempo real y pronósticos extendidos.</p>
                </div>

                {/* FAVORITOS CORREGIDO (Visibilidad arreglada) */}
                {favorites.length > 0 && (
                    <div className="mb-8 animate-in fade-in duration-500">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-2 flex items-center gap-2">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" /> Lugares Favoritos
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none" size={18} />
                            <select 
                                onChange={handleFavoriteSelect} 
                                className={`${glassInputStyle} pl-14 cursor-pointer`}
                            >
                                <option value="" className="text-slate-900 bg-white">Selecciona un favorito...</option>
                                {favorites.map((fav: any) => (
                                    <option key={fav.id} value={`${fav.city_name}|${fav.country_code}`} className="text-slate-900 bg-white">
                                        {fav.city_name} ({fav.country_code})
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                        </div>
                    </div>
                )}

                {/* FORMULARIO DE BÚSQUEDA */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl mb-12 shadow-2xl">
                    <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-[2] relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input 
                                type="text" 
                                value={city} 
                                onChange={(e) => setCity(e.target.value)} 
                                className={`${glassInputStyle} pl-14`} 
                                placeholder="Ciudad (Ej: Cordoba)" 
                                required 
                            />
                        </div>
                        <div className="flex-1">
                            <input 
                                type="text" 
                                value={country} 
                                onChange={(e) => setCountry(e.target.value)} 
                                className={`${glassInputStyle} uppercase text-center`} 
                                placeholder="País (ES)" 
                                maxLength={3} 
                            />
                        </div>
                        <button 
                            disabled={loading} 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-10 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                        >
                            {loading ? '...' : 'CONSULTAR'}
                        </button>
                    </form>
                </div>

                {weather && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        
                        {/* WIDGET PRINCIPAL CON GIF DINÁMICO */}
                        <div className={`rounded-[3rem] border border-white/10 bg-gradient-to-br ${weather.visuals.bg} p-1 shadow-2xl overflow-hidden relative`}>
                            <div className="bg-slate-950/40 backdrop-blur-xl rounded-[2.9rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="text-center md:text-left z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
                                        <MapPin size={14} /> {weather.sys.country}
                                    </div>
                                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
                                        {weather.name}
                                    </h2>
                                    <p className="text-2xl md:text-3xl font-medium text-slate-300 capitalize">
                                        {weather.weather[0].description}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center relative z-10">
                                    <img src={weather.visuals.gif} alt="weather animation" className="w-56 h-56 object-contain drop-shadow-2xl" />
                                    <div className="text-8xl md:text-9xl font-black text-white mt-[-20px]">
                                        {Math.round(weather.main.temp)}°
                                    </div>
                                    <p className="text-slate-400 font-bold">SENSACIÓN {Math.round(weather.main.feels_like)}°</p>
                                </div>
                            </div>
                        </div>

                        {/* GRID DE DETALLES */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <DetailCard icon={<Droplets />} label="Humedad" value={`${weather.main.humidity}%`} color="text-cyan-400" />
                            <DetailCard icon={<Wind />} label="Viento" value={`${(weather.wind.speed * 3.6).toFixed(1)} km/h`} color="text-emerald-400" />
                            <DetailCard icon={<Gauge />} label="Presión" value={`${weather.main.pressure} hPa`} color="text-orange-400" />
                            <DetailCard icon={<Eye />} label="Visibilidad" value={`${(weather.visibility / 1000)} km`} color="text-purple-400" />
                        </div>

                        {/* AMANECER / ATARDECER */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex justify-between items-center backdrop-blur-md">
                                <div className="flex gap-4 items-center">
                                    <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-500"><Sunrise size={28} /></div>
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Amanecer</span>
                                </div>
                                <span className="text-3xl font-black">{weather.sunrise}</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex justify-between items-center backdrop-blur-md">
                                <div className="flex gap-4 items-center">
                                    <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500"><Sunset size={28} /></div>
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Atardecer</span>
                                </div>
                                <span className="text-3xl font-black">{weather.sunset}</span>
                            </div>
                        </div>

                        {/* PRONÓSTICO SEMANAL */}
                        <div className="pt-12">
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <Star className="text-blue-500 fill-blue-500" size={24} /> PRÓXIMOS DÍAS
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                {forecast.map((day, i) => (
                                    <div key={i} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] text-center backdrop-blur-xl hover:bg-white/[0.08] transition-all group">
                                        <p className="text-xs font-black text-slate-500 mb-4 uppercase tracking-tighter">
                                            {new Date(day.dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' })}
                                        </p>
                                        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform" alt="icon" />
                                        <p className="text-4xl font-black text-white">{Math.round(day.main.temp)}°</p>
                                        <p className="text-[10px] text-blue-400 font-black uppercase mt-3">{day.weather[0].main}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {!weather && !loading && (
                    <div className="rounded-[3rem] border-2 border-dashed border-white/5 p-24 text-center">
                        <Cloud size={60} className="mx-auto mb-6 text-slate-800" />
                        <h3 className="text-2xl font-bold text-slate-400">¿Qué tiempo hace hoy?</h3>
                        <p className="text-slate-600 mt-2 max-w-xs mx-auto text-sm font-medium uppercase tracking-widest">Introduce una ciudad para comenzar la exploración meteorológica.</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

function DetailCard({ icon, label, value, color }: any) {
    return (
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors">
            <div className={`mb-4 ${color}`}>{icon}</div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{label}</p>
            <p className="text-3xl font-black mt-1 text-white">{value}</p>
        </div>
    );
}