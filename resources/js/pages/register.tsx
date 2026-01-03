import { Head, useForm, Link } from '@inertiajs/react';

export default function Register() {
    // 1. Configuramos el motor del formulario con los campos que Laravel espera
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Necesario para el registro en Laravel
    });

    // 2. Función que envía los datos al backend
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Enviamos a la ruta /register
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Regístrate" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/background_register.png')" }}>
                
                <div className="w-full sm:max-w-lg mt-6 px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">                    
                    
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Crea tu cuenta</h2>
                        <p className="text-sm text-gray-600">Introduce tus datos para empezar</p>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                        <form className="mt-4" onSubmit={submit}>
                            
                            {/* Nombre */}
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tu nombre completo"
                                    required
                                />
                                {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                            </div>

                            {/* Email */}
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="correo@ejemplo.com"
                                    required
                                />
                                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                            </div>

                            {/* Contraseña */}
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Mínimo 8 caracteres"
                                    required
                                />
                                {errors.password && <div className="text-red-500 text-xs mt-1">{errors.password}</div>}
                            </div>


                            <div className="flex items-center justify-between gap-4">
                                <Link 
                                    href="/login" 
                                    className="text-sm text-blue-500 hover:text-blue-800 font-semibold"
                                >
                                    ¿Ya tienes cuenta?
                                </Link>
                                
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none transition duration-150 ease-in-out disabled:opacity-50"
                                >
                                    {processing ? 'Registrando...' : 'Registrarme'}
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}