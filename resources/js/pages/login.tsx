import { Head, useForm } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter'

export default function Login() {
    // 1. Inicializamos el motor del formulario
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    // 2. Función que se dispara al dar clic al botón
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mandamos los datos a la ruta /login de Laravel
        post('/login'); 
    };

    return (
        <>

            <MainNavbar/>
            <Head title="Iniciar Sesión" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/background_login.png')" }}>
                
                <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Bienvenido</h2>
                        <p className="text-sm text-gray-600">Por favor, introduce tus datos</p>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400">
                        {/* 3. Añadimos el onSubmit al formulario */}
                        <form className="mt-4" onSubmit={submit}>
                            
                            {/* Campo Email */}
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email} // Conectamos con el estado
                                    onChange={(e) => setData('email', e.target.value)} // Guardamos lo que escriben
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Tu correo electrónico"
                                />
                                {/* Mostramos error si Laravel dice que el email no existe */}
                                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                            </div>

                            {/* Campo Contraseña */}
                            <div className="mb-6 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password} // Conectamos con el estado
                                    onChange={(e) => setData('password', e.target.value)} // Guardamos lo que escriben
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Tu contraseña"
                                />
                                {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
                            </div>

                            <div className="flex items-center justify-between">
                                <button 
                                    type="submit" 
                                    disabled={processing} // Evita que den mil clics mientras carga
                                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
                                >
                                    {processing ? 'Entrando...' : 'Iniciar Sesión'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}