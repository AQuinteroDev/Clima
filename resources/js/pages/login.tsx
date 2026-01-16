import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    // Estilos refinados de alto nivel
    const inputStyle = "w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-12 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300";

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            <MainNavbar />
            <Head title="Iniciar Sesión - WeatherX" />

            {/* Decoración Atmosférica de Fondo */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <main className="relative z-10 flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-[440px]">
                    
                    {/* Tarjeta Glassmorphism */}
                    <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[3rem] p-10 md:p-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden">
                        
                        {/* Línea de brillo superior */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-black tracking-tighter text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                                Iniciar Sesión
                            </h1>
                            <p className="text-slate-400 font-medium text-sm">Gestiona tu red meteorológica</p>
                        </div>

                        <form onSubmit={submit} className="space-y-6">
                            
                            {/* Input: Email */}
                            <div className="group relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input 
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className={inputStyle}
                                    placeholder="correo@ejemplo.com"
                                    required
                                />
                                {errors.email && <p className="text-red-400 text-xs font-bold mt-2 ml-2 animate-pulse">{errors.email}</p>}
                            </div>

                            {/* Input: Password */}
                            <div className="group relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input 
                                    type="password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className={inputStyle}
                                    placeholder="Tu contraseña"
                                    required
                                />
                                {errors.password && <p className="text-red-400 text-xs font-bold mt-2 ml-2 animate-pulse">{errors.password}</p>}
                            </div>

                            {/* Acciones del Formulario */}
                            <div className="flex items-center justify-between text-xs px-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input 
                                            type="checkbox" 
                                            className="peer w-4 h-4 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-0 appearance-none checked:bg-blue-600 checked:border-transparent transition-all"
                                            checked={data.remember}
                                            onChange={e => setData('remember', e.target.checked)}
                                        />
                                        <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none w-4 h-4 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                    </div>
                                    <span className="text-slate-500 group-hover:text-slate-300 transition-colors">Mantener sesión</span>
                                </label>
                                <Link href="#" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">¿Olvidaste la clave?</Link>
                            </div>

                            {/* Botón Principal */}
                            <button 
                                type="submit"
                                disabled={processing}
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-3 group"
                            >
                                <span>{processing ? 'Verificando...' : 'Acceder al Panel'}</span>
                                <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Footer de la tarjeta */}
                        <div className="mt-12 text-center">
                            <p className="text-slate-500 text-sm font-medium">
                                ¿No eres miembro? 
                                <Link href="/registerClima" className="text-white font-black hover:text-blue-400 transition-colors ml-2">
                                    Regístrate ahora
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}