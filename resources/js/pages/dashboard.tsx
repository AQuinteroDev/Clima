import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Search, MapPin, Wind, Droplets, Thermometer, Cloud } from 'lucide-react';

export default function Dashboard() {
    const [city, setCity] = useState(''); 
    const [country, setCountry] = useState(''); 
    const [weather, setWeather] = useState<any>(null); 
    const [loading, setLoading] = useState(false);

    const clientID = 'fue6eiRiClWmkVcj0CKf8';
    const clientSecret = 'IkzYmjMU6JdZo30zVCcwgvbEjUNId1v0iLOf535p';

    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city) return;

        setLoading(true);
        try {
            const query = country ? `${city.trim()},${country.trim()}` : city.trim();
            const queryEncoded = encodeURIComponent(query);
            const url = `https://data.api.xweather.com/observations/${queryEncoded}?client_id=${clientID}&client_secret=${clientSecret}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.success && data.response) {
                const weatherInfo = Array.isArray(data.response) ? data.response[0] : data.response;
                if (weatherInfo.ob) {
                    setWeather(weatherInfo);
                    router.post('/searches', {
                        city: city.trim(),
                        country: country.trim(),
                        temp: weatherInfo.ob.tempC,
                    }, { preserveScroll: true });
                }
            } else {
                alert(`No se encontraron resultados.`);
                setWeather(null);
            }
        } catch (error) {
            alert("Error de conexión.");
        } finally {
            setLoading(false);
        }
    };

    const glassInputStyle = "w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-md text-lg";

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
            <Head title="Weather Explorer - Dashboard" />
            <MainNavbar />

            <main className="flex-grow relative overflow-hidden py-16 md:py-24">
                {/* Efectos de fondo (Glows) */}
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px] -z-10"></div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Header con gradiente */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Weather Explorer
                        </h1>
                        <p className="mt-4 text-slate-400 text-lg">Consulta datos climáticos en tiempo real con precisión global.</p>
                    </div>

                    {/* Card de Búsqueda */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl shadow-2xl mb-10">
                        <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-[2] relative group">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={20} />
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className={`${glassInputStyle} pl-14`}
                                    placeholder="Ciudad (Ej: Madrid)"
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
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? 'Cargando...' : 'Consultar'}
                            </button>
                        </form>
                    </div>

                    {/* Resultado del Clima */}
                    {weather ? (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                
                                {/* Card Principal Clima */}
                                <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl flex flex-col justify-center items-center text-center">
                                    <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
                                        <MapPin size={14} /> {weather.place.country.toUpperCase()}
                                    </div>
                                    <h3 className="text-5xl font-black text-white mb-2">{weather.place.name}</h3>
                                    <div className="flex items-center gap-6 my-8">
                                        <span className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                                            {Math.round(weather.ob.tempC)}°
                                        </span>
                                        <div className="text-left border-l border-white/10 pl-6">
                                            <p className="text-2xl font-bold text-blue-400 capitalize">{weather.ob.weather}</p>
                                            <p className="text-slate-400">Sensación {weather.ob.feelslikeC}°C</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Cards de Detalles */}
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex items-center gap-5">
                                        <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400"><Droplets /></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-500 uppercase">Humedad</p>
                                            <p className="text-2xl font-black">{weather.ob.humidity}%</p>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex items-center gap-5">
                                        <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400"><Wind /></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-500 uppercase">Viento</p>
                                            <p className="text-2xl font-black">{weather.ob.windKPH} <span className="text-sm font-normal text-slate-400">km/h</span></p>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl flex items-center gap-5">
                                        <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400"><Thermometer /></div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-500 uppercase">Visibilidad</p>
                                            <p className="text-2xl font-black">{weather.ob.visibilityKM} <span className="text-sm font-normal text-slate-400">km</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : (
                        <div className="rounded-3xl border-2 border-dashed border-white/5 p-20 text-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 text-slate-500">
                                <Cloud size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-300">¿Cómo está el clima hoy?</h3>
                            <p className="text-slate-500 mt-2">Introduce una ubicación para comenzar la exploración.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}