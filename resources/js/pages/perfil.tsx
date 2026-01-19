import React from 'react';
import { Head, usePage, Link } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';  
import { 
  User, Mail, MapPin, Calendar, Briefcase, 
  GraduationCap, Settings, LogOut, Bell, X, 
  Twitter, Github, Linkedin, ExternalLink, ChevronRight
} from 'lucide-react';

const ProfileProPage = () => {
  const { auth } = usePage().props as any;
  const user = auth.user;

  // Estilo Maestro: Glassmorphism Dark
  const cardStyle = "bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] rounded-[2.5rem] relative overflow-hidden";
  
  // Estilo de los iconos de información
  const iconBoxStyle = "p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/10";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 flex flex-col">
      <Head title={`${user.name} | Perfil WeatherX`} />
      <MainNavbar />

      {/* 1. DECORACIÓN ATMOSFÉRICA */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 2. HEADER / BANNER */}
      <div className="h-64 w-full bg-gradient-to-br from-blue-900/40 via-[#020617] to-purple-900/40 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* 3. CUERPO DE LA PÁGINA */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 flex-grow w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA (Sidebar de Perfil) */}
          <div className="lg:col-span-4 space-y-8">
            <div className={`${cardStyle} p-10 text-center`}>
              {/* Línea de brillo superior en la card */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="relative inline-block group">
                <div className="w-36 h-36 rounded-[2.5rem] bg-slate-800 mx-auto mb-6 border-4 border-white/10 shadow-2xl overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={user.img_url || `https://ui-avatars.com/api/?name=${user.name}`} 
                    className="w-full h-full object-cover" 
                    alt="Profile" 
                  />
                </div>
                <div className="absolute bottom-8 right-1 w-7 h-7 bg-green-500 border-4 border-[#020617] rounded-full shadow-lg"></div>
              </div>

              <h1 className="text-3xl font-black text-white tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                {user.name}
              </h1>
              <p className="text-blue-400 font-black uppercase text-[10px] tracking-[0.2em] mb-8 bg-blue-500/10 py-1 px-3 rounded-full inline-block">
                Especialista Meteorológico
              </p>
              
              <div className="flex justify-center gap-4 mb-10">
                <button className="p-3 bg-white/5 hover:bg-blue-600 hover:text-white rounded-2xl transition-all border border-white/5"><Twitter size={18}/></button>
                <button className="p-3 bg-white/5 hover:bg-slate-700 hover:text-white rounded-2xl transition-all border border-white/5"><Github size={18}/></button>
                <button className="p-3 bg-white/5 hover:bg-blue-700 hover:text-white rounded-2xl transition-all border border-white/5"><Linkedin size={18}/></button>
              </div>

              <div className="grid grid-cols-2 gap-4 py-8 border-t border-white/5 mb-8">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Seguidores</p>
                  <p className="text-xl font-black text-white italic">1.2K</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Proyectos</p>
                  <p className="text-xl font-black text-white italic">42</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href="/editarPerfil"
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-600 py-4 font-black text-white text-xs uppercase tracking-widest transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  <Settings size={18} className="transition-transform duration-500 group-hover:rotate-90" />
                  <span>Editar Perfil</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </Link>
                
                <Link
                  href={`/borrarPerfil/${user.id}`}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-red-600/10 border border-red-500/20 py-4 font-black text-red-500 text-xs uppercase tracking-widest transition-all hover:bg-red-600 hover:text-white active:scale-95"
                >
                  <X size={18} className="transition-transform duration-500 group-hover:rotate-90" />
                  <span>Eliminar Perfil</span>
                </Link>
              </div>
            </div>

            {/* HABILIDADES (Skills) */}
            <div className={`${cardStyle} p-8`}>
              <h2 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-6 flex items-center gap-3">
                <Settings size={16} className="text-blue-500"/> Stack Tecnológico
              </h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'Python', 'Xweather', 'PHP', 'Docker'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 text-slate-300 rounded-xl text-[10px] font-black border border-white/5 hover:border-blue-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA (Información Detallada) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* SOBRE MÍ */}
            <div className={`${cardStyle} p-10 md:p-12`}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-4 italic uppercase tracking-tighter">
                <User size={24} className="text-blue-500"/> Biografía Profesional
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg mb-10 font-medium">
                Arquitecto de soluciones meteorológicas y apasionado por la visualización de datos en tiempo real. Me especializo en convertir complejos flujos de datos satelitales en experiencias de usuario intuitivas y estéticas dentro del ecosistema WeatherX.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-5 group">
                  <div className={iconBoxStyle}><Mail size={22}/></div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Canal Privado</p>
                    <p className="text-white font-bold">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className={iconBoxStyle}><MapPin size={22}/></div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Base de Operaciones</p>
                    <p className="text-white font-bold">Andalucía, España</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className={iconBoxStyle}><Calendar size={22}/></div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Fecha de Registro</p>
                    <p className="text-white font-bold">19 Enero, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className={iconBoxStyle}><Briefcase size={22}/></div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Estado Actual</p>
                    <p className="text-blue-400 font-bold">Disponible para Proyectos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCIA Y EDUCACIÓN (Grid 2 columnas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Experiencia */}
              <div className={`${cardStyle} p-10`}>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <Briefcase size={16} className="text-blue-500"/> Trayectoria
                </h2>
                <div className="space-y-8 border-l border-white/10 pl-6 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <p className="text-sm font-black text-white">Lead Weather Analyst</p>
                    <p className="text-[10px] text-blue-400 font-bold uppercase">2024 - Active</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-slate-700 rounded-full"></div>
                    <p className="text-sm font-black text-slate-300">Data Scientist</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">2021 - 2024</p>
                  </div>
                </div>
              </div>

              {/* Educación */}
              <div className={`${cardStyle} p-10`}>
                <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <GraduationCap size={16} className="text-purple-500"/> Formación
                </h2>
                <div className="space-y-8 border-l border-white/10 pl-6 ml-2">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    <p className="text-sm font-black text-white">PhD in Meteorology</p>
                    <p className="text-[10px] text-purple-400 font-bold uppercase">Cambridge University</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 bg-slate-700 rounded-full"></div>
                    <p className="text-sm font-black text-slate-300">Software Engineering</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Polytechnic Institute</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfileProPage;