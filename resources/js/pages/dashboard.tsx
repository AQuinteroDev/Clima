import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    // 1. Estados
    const [city, setCity] = useState(''); // Para el input
    const [weather, setWeather] = useState<any>(null); // Para los datos de la API
    const [loading, setLoading] = useState(false);

    // Tus credenciales
    const clientID = 'fue6eiRiClWmkVcj0CKf8';
    const clientSecret = 'IkzYmjMU6JdZo30zVCcwgvbEjUNId1v0iLOf535p';

    // 2. Función para consultar la API
    const fetchWeather = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city) return;

        setLoading(true);
        try {
            // Usamos el endpoint de 'observations' para obtener el clima actual
            const response = await fetch(
                `https://api.xweather.com/observations/${city}?client_id=${clientID}&client_secret=${clientSecret}`
            );
            const data = await response.json();

            if (data.success) {
                setWeather(data.response);
            } else {
                alert("No se encontró la ciudad");
            }
        } catch (error) {
            console.error("Error consultando la API:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head title="Dashboard - Clima" />

            <div className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat p-4"
                style={{ backgroundImage: "url('/background_main.png')" }}>
                
                {/* Caja principal más ancha (max-w-4xl) */}
                <div className="w-full max-w-4xl bg-white/90 backdrop-blur shadow-2xl overflow-hidden rounded-2xl p-8">
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Buscador de Clima</h2>
                        <p className="text-gray-600">Introduce una ciudad para obtener datos en tiempo real</p>
                        
                        <form onSubmit={fetchWeather} className="mt-6 flex gap-2">
                            <input
                                id="city"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="text-black flex-1 shadow-sm border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Ej: Madrid, ES o Miami, FL"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all disabled:opacity-50"
                            >
                                {loading ? 'Buscando...' : 'Buscar'}
                            </button>
                        </form>
                    </div>

                    {/* 3. Mostrar los resultados */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8">
                        {weather ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-600 font-bold uppercase">Temperatura</p>
                                    <p className="text-4xl font-black text-gray-800">{weather.ob.tempC}°C</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <p className="text-sm text-green-600 font-bold uppercase">Humedad</p>
                                    <p className="text-4xl font-black text-gray-800">{weather.ob.humidity}%</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <p className="text-sm text-purple-600 font-bold uppercase">Viento</p>
                                    <p className="text-4xl font-black text-gray-800">{weather.ob.windKPH} km/h</p>
                                </div>
                                <div className="md:col-span-3 mt-4 text-gray-500 italic">
                                    Condición: {weather.ob.weather}
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-400">Introduce una ciudad para ver los datos aquí</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}