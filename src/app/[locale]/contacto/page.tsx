"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';


export default function ContactoPage() {
    const t = useTranslations("Contacto");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Simulación de la lógica handleSubmit que tenías en el HTML
    const [state, handleSubmit] = useForm("xkoaqjwy");
    if (state.succeeded) {
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-slate-900 border border-emerald-500/30 rounded-xl text-center max-w-md mx-auto mt-[200px] mb-[150px]"
          >
            <CheckCircle2 className="mx-auto text-emerald-400 mb-4 animate-bounce" size={40} />
            <h3 className="font-mono text-xl text-white uppercase tracking-wider mb-2">Conexión Exitosa</h3>
            <p className="text-slate-400 text-sm">
              Hemos recibido tus datos de proyecto. Un especialista técnico de Ochenta Veinte analizará la información para darte una respuesta en menos de 72 horas.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="text-emerald-400 hover:underline pt-4"
            >
            Cerrar
            </button>
          </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 pb-12">
            <div className="container mx-auto px-4">

                {/* Header de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-goldman font-bold mb-4 bg-clip-text text-white">
                        {t('title')}
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t('desc')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Información de Contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-goldman mb-6 flex items-center gap-2">
                                <MessageSquare className="text-emerald-400" /> {t('section_title')}
                            </h2>
                            <p className="text-slate-400 mb-8">
                                {t('section_desc')}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <ContactInfoItem
                                icon={<Mail className="text-blue-400" />}
                                title={t('email_title')}
                                detail="ochentaveinteconsultores@gmail.com"
                            />
                            <ContactInfoItem
                                icon={<Phone className="text-emerald-400" />}
                                title={t('phone_title')}
                                detail="+57 (315) 567-7764"
                            />
                            <ContactInfoItem
                                icon={<MapPin className="text-red-400" />}
                                title={t('map_title')}
                                detail={t('map_detail')}
                            />
                        </div>
                    </motion.div>

                    {/* Formulario Estilo Terminal/Vibe */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl"
                    >
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                                <h3 className="text-2xl font-goldman">{t('success_title')}</h3>
                                <p className="text-slate-400">{t('success_desc')}</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-emerald-400 hover:underline pt-4"
                                >
                                    {t('success_cta')}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-8 bg-slate-950 border border-slate-800 rounded-xl">
                        <div className="border-b border-slate-800 pb-4 mb-6">
                            <h2 className="font-mono text-lg uppercase tracking-widest text-cyan-400">Contacto</h2>
                            <p className="text-xs text-slate-500">Ingrese las variables de su requerimiento técnico.</p>
                        </div>

                        {/* Campo: Nombre */}
                        <div>
                            <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                            Nombre Completo
                            </label>
                            <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white rounded px-4 py-2.5 text-sm outline-none transition-all font-sans"
                            placeholder="Ej. Ing. Carlos Mendoza"
                            />
                        </div>

                        {/* Campo: Correo Electrónico */}
                        <div>
                            <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                            Correo Corporativo
                            </label>
                            <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white rounded px-4 py-2.5 text-sm outline-none transition-all font-sans"
                            placeholder="carlos.mendoza@empresa.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-400 mt-1" />
                        </div>

                        {/* Campo: Mensaje / Detalles del Proyecto */}
                        <div>
                            <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                            Especificaciones del Requerimiento / CAPEX Estimado
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white rounded px-4 py-2.5 text-sm outline-none transition-all font-sans resize-none"
                            placeholder="Describa brevemente el alcance de la auditoría o los riesgos de CAPEX que desea mitigar..."
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-400 mt-1" />
                        </div>

                        {/* Botón de Envíos con Estado Loading */}
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full py-3 px-4 font-mono text-xs uppercase tracking-widest font-bold bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-slate-950 rounded transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? (
                            <>
                                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                                Procesando_Transmision...
                            </>
                            ) : (
                            <>
                                <Send size={14} />
                                Enviar_información
                            </>
                            )}
                        </button>

                        {/* Feedback de error general de red */}
                        {state.errors && state.errors.getFormErrors().length > 0 && (
                            <div className="p-3 bg-rose-950/30 border border-rose-500/20 rounded flex items-center gap-2 text-rose-400 text-xs font-mono">
                            <AlertCircle size={14} />
                            Error en la transmisión. Intente de nuevo.
                            </div>
                        )}
                        </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

// Sub-componente para los items de contacto
function ContactInfoItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-slate-800 hover:bg-slate-800/30 transition-all">
            <div className="p-3 bg-slate-800 rounded-lg">
                {icon}
            </div>
            <div>
                <h4 className="text-sm uppercase tracking-tighter text-slate-500 font-bold">{title}</h4>
                <p className="text-lg text-slate-200">{detail}</p>
            </div>
        </div>
    );
}