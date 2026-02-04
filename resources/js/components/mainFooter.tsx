import React from 'react';
import { Link } from '@inertiajs/react';
import { CloudSun, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECCIÓN SUPERIOR: Branding y Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <CloudSun className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">
                Weather<span className="text-blue-500">X</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              La plataforma meteorológica líder en análisis predictivo y visualización de datos climáticos en tiempo real. Precisión global, decisiones locales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Columna 2: Explorar */}
          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explorar</h6>
            <ul className="space-y-4 text-sm">
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard Central</Link></li>
              <li><Link href="/mapas" className="hover:text-white transition-colors">Mapas de Calor</Link></li>
              <li><Link href="/historial" className="hover:text-white transition-colors">Historial de Búsquedas</Link></li>
              <li><Link href="/pronostico" className="hover:text-white transition-colors">Pronóstico Extendido</Link></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Soporte</h6>
            <ul className="space-y-4 text-sm">
              <li><Link href="/support" className="hover:text-white transition-colors">Centro de Ayuda</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentación API</Link></li>
              <li><Link href="/status" className="hover:text-white transition-colors">Estado del Sistema</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto Directo</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto Rápido */}
          <div>
            <h6 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Contacto</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <span>soporte@weatherx.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                <span>Silicon Valley, CA & Madrid, ES</span>
              </li>
              <li className="mt-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                    <p className="text-[10px] font-black text-blue-400 uppercase mb-1">Estado de la API</p>
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-white font-bold">Operacional</span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: Legal y Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-medium">
            © {currentYear} <span className="text-white font-bold">WeatherX Intelligence</span>. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;