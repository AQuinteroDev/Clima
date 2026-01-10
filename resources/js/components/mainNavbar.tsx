import React, { useState, useEffect } from 'react';
import { Menu, X, CloudSun, User, LayoutDashboard, LogIn } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Perfil', href: '/profile', icon: User },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={classNames(
        'fixed inset-x-0 top-0 z-[100] transition-all duration-300',
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-2 shadow-2xl' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Lado Izquierdo: Logo */}
          <a href="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <CloudSun className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Weather<span className="text-blue-500 underline decoration-2 underline-offset-4">X</span>
              </span>
            </div>
          </a>

          {/* Centro: Links Desktop */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Lado Derecho: Auth */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="/loginClima" 
              className="text-gray-300 hover:text-white text-sm font-semibold transition-colors px-4"
            >
              Iniciar Sesión
            </a>
            <a
              href="/registerClima"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              Crear Cuenta
            </a>
          </div>

          {/* Botón Móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div
        className={classNames(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 border-b border-white/10',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="space-y-1 px-4 pb-6 pt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-4 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all"
            >
              <item.icon className="h-5 w-5 text-blue-500" />
              {item.name}
            </a>
          ))}
          <div className="my-4 border-t border-white/10 pt-4 flex flex-col gap-3">
            <a 
              href="/loginClima" 
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-white font-bold"
            >
              <LogIn className="h-4 w-4" /> Iniciar Sesión
            </a>
            <a 
              href="/registerClima" 
              className="bg-blue-600 py-3 rounded-xl text-center text-white font-bold shadow-lg"
            >
              Registrarse Gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}