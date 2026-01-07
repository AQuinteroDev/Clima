import { Head, Link, useForm } from '@inertiajs/react';

interface Props {
    auth: {
        user: {
            name: string;
            email: string;
        }
    }
}

export default function Profile({ auth }: Props) {
    const { user } = auth;
    const { post } = useForm();

    const handleLogout = (e: React.FormEvent) => {
        e.preventDefault();
        post('/logout'); // Ruta estándar de Laravel Fortify/Breeze
    };

    return (
        <>
            <Head title="Mi Perfil" />

            {/* Fondo igual al resto de la app */}
            <div className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat p-4"
                style={{ backgroundImage: "url('/background_main.png')" }}>
                
                <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/20 text-center">
                    
                    {/* Avatar con la inicial del nombre */}
                    <div className="mx-auto w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-lg mb-6">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-500 mb-8">{user.email}</p>

                    <div className="space-y-4">
                        {/* Botón para volver al Dashboard */}
                        <Link
                            href="/dashboard"
                            className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-2xl transition-all"
                        >
                            Volver al Buscador
                        </Link>

                        {/* Botón de Cerrar Sesión */}
                        <form onSubmit={handleLogout}>
                            <button
                                type="submit"
                                className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 px-4 rounded-2xl transition-all border border-red-100"
                            >
                                Cerrar Sesión
                            </button>
                        </form>
                    </div>

                    <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest">
                        Usuario de Weather Explorer
                    </p>
                </div>
            </div>
        </>
    );
}