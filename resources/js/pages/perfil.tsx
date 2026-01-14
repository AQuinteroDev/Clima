import React, { useState } from 'react';
import MainNavbar from '@/components/mainNavbar';
import { usePage, Link } from '@inertiajs/react';
import Footer from '@/components/mainFooter';  
import { 
  User, Mail, MapPin, Calendar, Briefcase, 
  GraduationCap, Settings, LogOut, Bell, Menu, X, 
  Twitter, Github, Linkedin, ExternalLink 
} from 'lucide-react';

const ProfileProPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Clase común para las tarjetas con efecto cristal
  const cardStyle = "bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl";
  const { auth } = usePage().props as any;
  const user = auth.user;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
        <MainNavbar />

      {/* 2. HEADER DE PERFIL (Banner) */}
      <div className="h-48 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700"></div>

      {/* 3. CUERPO DE LA PÁGINA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 flex-grow w-full pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA (Sidebar de Perfil) */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`${cardStyle} p-6 text-center`}>
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-3xl bg-slate-200 mx-auto mb-4 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={user.img_url || `https://ui-avatars.com/api/?name=${user.name}`} 
                    className="w-full h-full object-cover" 
                    alt="Profile" 
                  />
                </div>
                <div className="absolute bottom-6 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
              <p className="text-blue-600 font-medium text-sm mb-4">Especialista en Meteorología</p>
              
              <div className="flex justify-center gap-3 mb-6">
                <button className="p-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-xl transition-all"><Twitter size={18}/></button>
                <button className="p-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-xl transition-all"><Github size={18}/></button>
                <button className="p-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-xl transition-all"><Linkedin size={18}/></button>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Seguidores</p>
                  <p className="text-lg font-bold">1.2k</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Proyectos</p>
                  <p className="text-lg font-bold">42</p>
                </div>
              </div>

              <Link
                href="/editarPerfil"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 py-3 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95 shadow-lg shadow-blue-600/20"
              >
                {/* Icono que rota sutilmente al pasar el ratón */}
                <Settings size={18} className="transition-transform duration-500 group-hover:rotate-90" />
                
                <span>Editar Perfil</span>

                {/* Reflejo de luz interno para toque premium */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              </Link>
            </div>

            {/* HABILIDADES (Skills) */}
            <div className={`${cardStyle} p-6`}>
              <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings size={18} className="text-blue-500"/> Habilidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'Python', 'Node.js', 'AWS', 'Docker'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA (Información Detallada) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SOBRE MÍ */}
            <div className={`${cardStyle} p-8`}>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <User size={22} className="text-blue-500"/> Acerca de mí
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Diseñador y desarrollador apasionado por crear experiencias digitales únicas. Me especializo en la intersección entre el diseño visual y la ingeniería de software, buscando siempre soluciones escalables y estéticas. 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Mail size={20}/></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Email</p>
                    <p className="text-sm font-semibold text-slate-700">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><MapPin size={20}/></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Ubicación</p>
                    <p className="text-sm font-semibold text-slate-700">Madrid, España</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Calendar size={20}/></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Cumpleaños</p>
                    <p className="text-sm font-semibold text-slate-700">15 de Mayo, 1995</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl"><Briefcase size={20}/></div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Disponibilidad</p>
                    <p className="text-sm font-semibold text-slate-700">Freelance / Full-time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCIA Y EDUCACIÓN (Grid 2 columnas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Experiencia */}
              <div className={`${cardStyle} p-8`}>
                <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-500"/> Experiencia
                </h2>
                <div className="space-y-6 border-l-2 border-slate-100 pl-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                    <p className="text-sm font-bold">Senior Developer</p>
                    <p className="text-xs text-slate-400">2022 - Presente</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
                    <p className="text-sm font-bold">Frontend Engineer</p>
                    <p className="text-xs text-slate-400">2019 - 2022</p>
                  </div>
                </div>
              </div>

              {/* Educación */}
              <div className={`${cardStyle} p-8`}>
                <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <GraduationCap size={20} className="text-blue-500"/> Educación
                </h2>
                <div className="space-y-6 border-l-2 border-slate-100 pl-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"></div>
                    <p className="text-sm font-bold">Máster en UI/UX</p>
                    <p className="text-xs text-slate-400">Universidad Tech</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
                    <p className="text-sm font-bold">Grado en Software</p>
                    <p className="text-xs text-slate-400">Instituto Politécnico</p>
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