import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Mail, Lock, User, Link as LinkIcon, UserPlus } from 'lucide-react';

export default function Register() {
    // 1. Configuración del formulario
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        img_url: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };

    // Estilo de inputs compartido con el Login
    const inputStyle = "w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-12 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 focus:bg-white/[0.08] transition-all duration-300";

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
            <MainNavbar />
            <Head title="Crear Cuenta - WeatherX" />

            {/* Decoración Atmosférica de Fondo */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <main className="relative z-10 flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
                <div className="w-full max-w-[480px]">
                    
                    {/* Tarjeta Glassmorphism */}
                    <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[3rem] p-10 md:p-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden">
                        
                        {/* Línea de brillo superior */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-black tracking-tighter text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                                Únete a WeatherX
                            </h1>
                            <p className="text-slate-400 font-medium text-sm">Crea tu perfil meteorológico hoy</p>
                        </div>

                        <form onSubmit={submit} className="space-y-5">
                            
                            {/* Input: Nombre */}
                            <div className="group relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input 
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className={inputStyle}
                                    placeholder="Nombre completo"
                                    required
                                />
                                {errors.name && <p className="text-red-400 text-xs font-bold mt-2 ml-2 animate-pulse">{errors.name}</p>}
                            </div>

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
                                    placeholder="Contraseña (mín. 8 caracteres)"
                                    required
                                />
                                {errors.password && <p className="text-red-400 text-xs font-bold mt-2 ml-2 animate-pulse">{errors.password}</p>}
                            </div>

                            {/* Input: Img URL */}
                            <div className="group relative">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input 
                                    type="text"
                                    value={data.img_url}
                                    onChange={e => setData('img_url', e.target.value)}
                                    className={inputStyle}
                                    placeholder="(Opcional) URL de tu foto"
                                />
                                {errors.img_url && <p className="text-red-400 text-xs font-bold mt-2 ml-2 animate-pulse">{errors.img_url}</p>}
                            </div>

                            {/* Botón Principal de Registro */}
                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97] disabled:opacity-50 flex items-center justify-center gap-3 group"
                                >
                                    <span>{processing ? 'Creando cuenta...' : 'Comenzar ahora'}</span>
                                    <UserPlus size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        {/* Footer de la tarjeta */}
                        <div className="mt-12 text-center border-t border-white/5 pt-8">
                            <p className="text-slate-500 text-sm font-medium">
                                ¿Ya tienes una cuenta? 
                                <Link href="/loginClima" className="text-white font-black hover:text-blue-400 transition-colors ml-2">
                                    Inicia sesión
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