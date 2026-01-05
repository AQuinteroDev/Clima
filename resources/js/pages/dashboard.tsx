import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    // 1. Estados
    const [city, setCity] = useState(''); 
    const [weather, setWeather] = useState<any>(null); 
    const [loading, setLoading] = useState(false);

    // Tus credenciales (Verificadas)
    const clientID = 'fue6eiRiClWmkVcj0CKf8';
    const clientSecret = 'IkzYmjMU6JdZo30zVCcwgvbEjUNId1v0iLOf535p';

    // 2. Función para consultar la API usando "Advanced Queries"
        const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city) return;

        setLoading(true);
        try {
            // 1. Limpiamos y codificamos la ciudad
            const cityEncoded = encodeURIComponent(city.trim());
            
            // 2. Usamos el endpoint directo (el más fiable para nombres de ciudades)
            // Eliminamos el /search?query= y ponemos la ciudad directamente tras /observations/
            const url = `https://data.api.xweather.com/observations/${cityEncoded}?client_id=${clientID}&client_secret=${clientSecret}`;

            const response = await fetch(url);
            const data = await response.json();

            // 3. XWeather devuelve los datos en 'response' (a veces es un array, a veces un objeto)
            if (data.success && data.response) {
                const weatherInfo = Array.isArray(data.response) ? data.response[0] : data.response;
                
                // Verificamos que existan datos de observación (ob)
                if (weatherInfo.ob) {
                    setWeather(weatherInfo);

                    // --- GUARDAR EN LARAVEL ---
                    router.post('/searches', {
                        city: weatherInfo.place.name || city,
                        temp: weatherInfo.ob.tempC,
                    }, {
                        preserveScroll: true,
                    });
                } else {
                    alert("La ciudad se encontró pero no hay datos climáticos actuales.");
                }

            } else {
                // Si data.success es false o no hay response
                alert(`No se encontraron resultados para "${city}". Prueba con "Ciudad, País" (ej: Madrid, ES)`);
                setWeather(null);
            }
        } catch (error) {
            console.error("Error en la petición:", error);
            alert("Error de conexión. Verifica tu internet o la URL de la API.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head title="Dashboard - Clima" />

            <div className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat p-4"
                style={{ backgroundImage: "url('/background_main.png')" }}>
                
                <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/20">
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-black text-gray-800 tracking-tight">Weather Explorer</h2>
                        <p className="text-gray-500 mt-2 font-medium">Consulta avanzada mediante XWeather API</p>
                        
                        <form onSubmit={fetchWeather} className="mt-8 flex flex-col sm:flex-row gap-3">
                            <input
                                id="city"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="text-black flex-1 shadow-inner border border-gray-300 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-400 outline-none text-lg"
                                placeholder="Ej: Madrid o Seattle,WA"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all disabled:opacity-50"
                            >
                                {loading ? 'Buscando...' : 'Consultar'}
                            </button>
                        </form>
                    </div>

                    <div className="mt-4">
                        {weather ? (
                            <div className="animate-in fade-in duration-500">
                                <div className="text-center mb-8">
                                    <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2 uppercase">
                                        {weather.place.country.toUpperCase()}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">{weather.place.name}</h3>
                                    <p className="text-6xl font-black text-blue-600 my-4">{weather.ob.tempC}°C</p>
                                    <p className="text-xl text-gray-500 italic">"{weather.ob.weather}"</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">Humedad</p>
                                        <p className="text-2xl font-bold text-gray-800">{weather.ob.humidity}%</p>
                                    </div>
                                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">Viento</p>
                                        <p className="text-2xl font-bold text-gray-800">{weather.ob.windKPH} <span className="text-sm font-normal">km/h</span></p>
                                    </div>
                                    <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
                                        <p className="text-xs text-gray-400 font-bold uppercase mb-1">Sensación</p>
                                        <p className="text-2xl font-bold text-gray-800">{weather.ob.feelslikeC}°C</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
                                <p className="text-gray-400">Esperando consulta...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}