import React from 'react';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Save, X, User, Mail, Briefcase, FileText, Camera, Shield, MapPin } from 'lucide-react';

interface ProfileFormData {
    name: string;
    email: string;
    location: string;
    title: string;
    bio: string;
    img_url: string;
}

export default function EditProfile() {
    const { auth } = usePage().props as any;
    const user = auth.user;

    const { data, setData, post, processing, errors } = useForm<ProfileFormData>({
        name: user?.name || '',
        email: user?.email || '',
        location: user?.location || '',
        title: user?.title || '',
        bio: user?.bio || '',
        img_url: user?.img_url || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/updatePerfil', {
            preserveScroll: true,
        });
    };

    const labelStyle = "block text-sm font-bold text-slate-300 mb-2 flex items-center gap-2";
    const inputContainerStyle = "relative group space-y-2";
    const glassInputStyle = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none backdrop-blur-md";

    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-white selection:bg-blue-500/30 font-sans">
            <Head title="Editar Perfil - WeatherX" />
            <MainNavbar />

            <main className="flex-grow relative overflow-hidden py-12 md:py-20">
                {/* Efectos de fondo */}
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] -z-10"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                Editar Perfil
                            </h1>
                            <p className="mt-2 text-lg text-slate-400">Ajusta tu presencia digital en WeatherX.</p>
                        </div>
                        <Link href="/perfil" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-300 hover:bg-white/10 transition-all">
                            <X size={18} /> Cancelar
                        </Link>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <form className="space-y-12" onSubmit={handleSubmit}>
                            
                            {/* IMAGEN DE PERFIL */}
                            <section className="space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Imagen Pública</h2>
                                <div className="flex items-center gap-8">
                                    <div className="relative group">
                                        <img 
                                            src={user?.img_url || `https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`} 
                                            alt="Avatar" 
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/10 object-cover shadow-lg"
                                        />
                                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                                            <Camera className="text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className={inputContainerStyle}>
                                            <label className={labelStyle}>URL de la Imagen</label>
                                            <input 
                                                className={glassInputStyle} 
                                                type="text" 
                                                value={data.img_url} 
                                                onChange={e => setData('img_url', e.target.value)} 
                                                placeholder="https://tu-imagen.com/foto.jpg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* INFORMACIÓN BÁSICA */}
                            <section className="space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Información Personal</h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className={inputContainerStyle}>
                                        <label className={labelStyle}><User size={16} className="text-blue-400"/> Nombre</label>
                                        <input 
                                            className={glassInputStyle} 
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            placeholder="Tu nombre" 
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    <div className={inputContainerStyle}>
                                        <label className={labelStyle}><Mail size={16} className="text-indigo-400"/> Email</label>
                                        <input 
                                            className={glassInputStyle} 
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            placeholder="correo@ejemplo.com" 
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                            </section>

                            {/* PERFIL PROFESIONAL */}
                            <section className="space-y-6">
                                <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">Perfil Profesional</h2>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className={inputContainerStyle}>
                                        <label className={labelStyle}><Briefcase size={16} className="text-purple-400"/> Cargo</label>
                                        <input 
                                            className={glassInputStyle} 
                                            type="text"
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            placeholder="Ej. Meteorólogo Senior" 
                                        />
                                    </div>
                                    <div className={inputContainerStyle}>
                                        <label className={labelStyle}><MapPin size={16} className="text-green-400"/> Ubicación</label>
                                        <input 
                                            className={glassInputStyle} 
                                            type="text"
                                            value={data.location}
                                            onChange={e => setData('location', e.target.value)}
                                            placeholder="Madrid, España" 
                                        />
                                    </div>
                                    <div className={`${inputContainerStyle} md:col-span-2`}>
                                        <label className={labelStyle}><FileText size={16} className="text-slate-400"/> Biografía</label>
                                        <textarea 
                                            className={`${glassInputStyle} h-32 resize-none`}
                                            value={data.bio}
                                            onChange={e => setData('bio', e.target.value)}
                                            placeholder="Cuéntanos sobre tu experiencia..."
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* BOTONES */}
                            <div className="pt-8 border-t border-white/10 flex items-center justify-end gap-4">
                                <Link href="/perfil" className="px-6 py-3 rounded-xl border border-white/10 font-bold text-slate-300 hover:text-white transition-all">
                                    Cancelar
                                </Link>
                                <button 
                                    type="submit"
                                    disabled={processing}
                                    className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] disabled:opacity-50 active:scale-95"
                                >
                                    <Save size={20} className="group-hover:scale-110 transition-transform" />
                                    {processing ? 'Guardando...' : 'Guardar Cambios'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}