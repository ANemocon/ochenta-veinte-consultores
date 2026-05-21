"use client";

import React from 'react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    ShieldCheck,
    Truck,
    BarChart3,
    AlertTriangle,
    Zap,
    ArrowLeft,
} from 'lucide-react';

export default function AuditoriasPage() {
    const t = useTranslations("Auditorias");

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            title: t("f1_title"),
            description: t("f1_desc"),
            icon: <Zap className="text-blue-400" />
        },
        {
            title: t("f2_title"),
            description: t("f2_desc"),
            icon: <Truck className="text-blue-400" />
        },
        {
            title: t("f3_title"),
            description: t("f3_desc"),
            icon: <BarChart3 className="text-blue-400" />
        }
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200">
            {/* Hero de Servicio */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="mb-8"
                    >
                        <Link
                            href="/#soluciones"
                            className="inline-flex items-center text-sm font-mono tracking-tighter text-blue-400 hover:text-cyan-300 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            {t("back_to_solutions")}
                        </Link>
                    </motion.div>

                    <motion.div {...fadeIn} className="max-w-4xl">
                        <span className="text-blue-400 font-mono tracking-widest text-sm uppercase mb-4 block">
                            {t("badge")}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            {t.rich("title", {
                                blue: (chunks) => <span className="text-blue-500">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            {t("desc")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Diferenciales Técnicos */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-colors"
                            >
                                <div className="mb-4">{f.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-slate-400">{f.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* El Factor 80/20 */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                {t("enfoque_title")}
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    t("enfoque_item_1"),
                                    t("enfoque_item_2"),
                                    t("enfoque_item_3"),
                                    t("enfoque_item_4")
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <ShieldCheck className="text-blue-500 mt-1 shrink-0" size={20} />
                                        <span className="text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-blue-500/10 border border-blue-500/20 p-8 rounded-3xl relative">
                            <AlertTriangle className="text-blue-500 mb-4" size={40} />
                            <h3 className="text-2xl font-bold text-white mb-4">{t("promesa_badge")}</h3>
                            <p className="text-slate-400 mb-6 italic">
                                {t("promesa_desc")}
                            </p>
                            <Link href="/contacto" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all uppercase tracking-widest text-sm">
                                {t("promesa_cta")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}