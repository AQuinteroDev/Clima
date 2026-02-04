import { useForm, Head } from '@inertiajs/react';
import MainNavbar from '@/components/mainNavbar';
import Footer from '@/components/mainFooter';
import { Send, MessageSquare, Mail, User, HelpCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function Support() {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '', email: '', subject: 'Duda Técnica', message: ''
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/support', {
            onSuccess: () => {
                toast.success("¡Mensaje enviado con éxito!");
                reset();
            },
        });
    };

    const inputStyle = "w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-12 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white";

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <Head title="Soporte y Dudas" />
            <MainNavbar />

            <main className="flex-grow container mx-auto px-4 py-24 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                        ¿TIENES DUDAS?
                    </h1>
                    <p className="text-slate-400">Cuéntanos qué te parece la app o qué errores has encontrado.</p>
                </div>

                <div className="w-full max-w-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 h-48 w-48 bg-blue-600/20 blur-[80px]"></div>
                    
                    <form onSubmit={submit} className="space-y-6 relative z-10">
                        {/* Nombre */}
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input type="text" placeholder="Tu nombre" value={data.name} onChange={e => setData('name', e.target.value)} className={inputStyle} />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input type="email" placeholder="Tu email" value={data.email} onChange={e => setData('email', e.target.value)} className={inputStyle} />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Asunto */}
                        <div className="relative">
                            <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <select value={data.subject} onChange={e => setData('subject', e.target.value)} className={`${inputStyle} appearance-none`}>
                                <option className="bg-slate-900">Duda Técnica</option>
                                <option className="bg-slate-900">Sugerencia</option>
                                <option className="bg-slate-900">Error en el Mapa</option>
                                <option className="bg-slate-900">Otro</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-6 text-slate-500" size={20} />
                            <textarea rows={5} placeholder="Cuéntanos con detalle..." value={data.message} onChange={e => setData('message', e.target.value)} className={`${inputStyle} pt-5 pl-12 resize-none`}></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button disabled={processing} className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20">
                            {processing ? 'ENVIANDO...' : <>ENVIAR MENSAJE <Send size={20}/></>}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}