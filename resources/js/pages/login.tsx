import { Head } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="Iniciar Sesión" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/background_login.png')" }}>
                <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Bienvenido</h2>
                        <p className="text-sm text-gray-600">Por favor, introduce tus datos</p>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
                        Espacio reservado para tu formulario
                        <form className="mt-4">
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Tu correo electrónico"
                                />
                            </div>
                            <div className="mb-6 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Tu contraseña"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* --- AQUÍ TERMINA TU FORMULARIO --- */}

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