
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

                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Tu Aplicación
                    </p>
                </div>
            </div>
        </>
    );
}
