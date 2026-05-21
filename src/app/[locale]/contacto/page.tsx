"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactoPage() {
    const t = useTranslations("Contacto");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // Simulación de la lógica handleSubmit que tenías en el HTML
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Aquí conectarías con tu backend o servicio de formularios (ej. Formspree)
        // tal como estaba en tu action del HTML original.
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

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
                                detail="contacto@8020.com.co"
                            />
                            <ContactInfoItem
                                icon={<Phone className="text-emerald-400" />}
                                title={t('phone_title')}
                                detail="+57 (300) 000-0000"
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('label_name')}</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder={t('placeholder_name')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('label_company')}</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder={t('placeholder_company')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('label_email')}</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder={t('placeholder_email')}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">{t('label_message')}</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder={t('placeholder_message')}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-goldman py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-50"
                                >
                                    {status === 'loading' ? t('btn_loading') : (
                                        <>
                                            {t('btn_submit')} <Send size={18} />
                                        </>
                                    )}
                                </button>
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