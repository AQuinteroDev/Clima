import React, { useState, useEffect } from 'react';
import { usePage, Link } from '@inertiajs/react';
import { Menu, X, CloudSun, User, LayoutDashboard, LogIn, LogOut } from 'lucide-react';
import { toast } from 'react-hot-toast';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Perfil', href: '/perfilInfo', icon: User },
  { name: 'Historial', href: '/historial', icon: LogIn },
  { name: 'Favoritos', href: '/favorites', icon: LogIn },
  { name: 'Soporte', href: '/consultas', icon: LogIn },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { auth, flash } = usePage().props as any;
  const user = auth.user;

 useEffect(() => {
    if (flash?.error) {
        toast.error((t) => (
            <div className="flex flex-col items-center justify-center gap-6 py-4 px-2">
                <div className="flex items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold text-center leading-tight">
                        {flash.error}
                    </span>
                </div>
                
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-black transition-all active:scale-95 border border-white/20 shadow-lg"
                >
                    ENTENDIDO
                </button>
            </div>
        ), {
            id: 'flash-error',
            position: 'top-center', 
            duration: 8000,
            style: {
                marginTop: '25vh',
                minWidth: '350px',
                maxWidth: '500px',
                width: '90vw',
                background: '#1e293b',
                color: '#fff',
                borderRadius: '28px',
                border: '2px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                padding: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            },
        });
    }
}, [flash]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
          
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <CloudSun className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">
                Weather<span className="text-blue-500 underline decoration-2 underline-offset-4">X</span>
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1 pr-4 rounded-full">
                  <img 
                    src={user.img_url || `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`} 
                    className="w-9 h-9 rounded-full border border-blue-500 object-cover" 
                    alt="Profile" 
                  />
                  <span className="text-white text-sm font-semibold">{user.name}</span>
                </div>
                <Link
                  href="/logout"
                  method="post"
                  as="button"
                  className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border border-red-500/20"
                >
                  <LogOut className="w-4 h-4" />
                  Salir
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link 
                  href="/loginClima" 
                  className="text-gray-300 hover:text-white text-sm font-semibold transition-colors px-4"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/registerClima"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20"
                >
                  Crear Cuenta
                </Link>
              </div>
            )}
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

      {/* Menú Móvil */}
<div
  className={classNames(
    'md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950 border-b border-white/10',
    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
  )}
>
  <div className="space-y-1 px-4 pb-6 pt-2">
    {/* Si hay usuario, mostramos su perfil en móvil */}
    {user && (
      <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5 mb-2">
        <img 
          src={user.img_url || `https://ui-avatars.com/api/?name=${user.name}`} 
          className="w-12 h-12 rounded-full border-2 border-blue-500" 
          alt="Profile" 
        />
        <div>
          <p className="text-white font-bold">{user.name}</p>
          <p className="text-blue-400 text-xs">Sesión Activa</p>
        </div>
      </div>
    )}

    {/* Enlaces de navegación comunes */}
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="flex items-center gap-3 rounded-xl px-4 py-4 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-all"
      >
        <item.icon className="h-5 w-5 text-blue-500" />
        {item.name}
      </Link>
    ))}

    {/* --- ESTO ES LO QUE TE FALTABA: Botones para cuando NO hay usuario en móvil --- */}
    {!user ? (
      <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
              <Link 
                href="/loginClima" 
                className="block w-full text-center text-gray-300 hover:text-white text-base font-semibold py-3"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/registerClima"
                className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl text-base font-black shadow-lg shadow-blue-600/20"
              >
                Crear Cuenta
              </Link>
            </div>
          ) : (
            /* Botón de Salir en móvil para usuarios logueados */
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/logout"
                method="post"
                as="button"
                className="flex w-full items-center justify-center gap-2 bg-red-500/10 text-red-500 py-4 rounded-2xl text-base font-black border border-red-500/20"
              >
                <LogOut className="w-5 h-5" />
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}