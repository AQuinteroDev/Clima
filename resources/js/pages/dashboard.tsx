/*

https://www.xweather.com/docs/weather-api/getting-started/authentication


ID:
fue6eiRiClWmkVcj0CKf8

Secret:
IkzYmjMU6JdZo30zVCcwgvbEjUNId1v0iLOf535p

Namespace:
*

https://data.api.xweather.com/places/98109?client_id={client_id}&client_secret={client_secret}


*/

import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/background_dashboard.png')" }}>
                <div className="w-full sm:max-w-4xl mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Panel de Control</h2>
                        <p className="text-sm text-gray-600">Aquí puedes ver un resumen de tu actividad</p>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
                        Espacio reservado para el contenido del dashboard
                    </div>

                </div>
            </div>
        </>
    );
}
