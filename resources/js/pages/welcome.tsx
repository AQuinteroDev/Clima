import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Bienvenido" />

            <div className="flex min-h-screen flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
                   style={{ backgroundImage: "url('/background.png')" }}>
                <div className="rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Bienvenido al Clima Mundial
                    </h1>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        <a href="/loginReact" className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
                            Iniciar sesion
                        </a>
                    </p>
                    <div className="mt-6 ">
                            <button className='rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-green-600'>
                                Registrarse
                            </button>
                    </div>
                </div>
            </div>
        </>
    );
}