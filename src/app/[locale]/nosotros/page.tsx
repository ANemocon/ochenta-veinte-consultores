"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
    Target,
    Eye,
    Clock,
    BarChart3,
    Zap,
    ShieldCheck,
} from "lucide-react";

// --- Componentes Locales ---

const Linkedin = ({ size = 24 }: { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
    <div className="text-center md:text-left">
        <div className="text-3xl font-bold text-blue-600 font-goldman">{value}</div>
        <div className="text-slate-500 text-sm uppercase tracking-wider">{label}</div>
    </div>
);

const TeamMember = ({ name, role, bio, image }: { name: string, role: string, bio: string, image: string }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col items-center text-center md:items-start md:text-left"
    >
        <div className="relative w-32 h-32 mb-6 overflow-hidden rounded-full border-4 border-slate-800">
            <Image src={image} alt={name} fill className="object-cover" sizes="128px" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 font-medium mb-4">{role}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{bio}</p>
        <Link href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
        </Link>
    </motion.div>
);

// --- Página Nosotros ---

export default function NosotrosPage() {
    const t = useTranslations("Nosotros");

    const features = [
        {
            title: t('feature_1_title'),
            description: t('feature_1_desc'),
            icon: Zap,
            color: "text-cyan-400",
            border: "border-cyan-500/20"
        },
        {
            title: t('feature_2_title'),
            description: t('feature_2_desc'),
            icon: Clock,
            color: "text-emerald-400",
            border: "border-emerald-500/20"
        },
        {
            title: t('feature_3_title'),
            description: t('feature_3_desc'),
            icon: ShieldCheck,
            color: "text-blue-400",
            border: "border-blue-500/20"
        },
        {
            title: t('feature_4_title'),
            description: t('feature_4_desc'),
            icon: BarChart3,
            color: "text-purple-400",
            border: "border-purple-500/20"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200">

            {/* Hero Nosotros */}
            <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 translate-x-20" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            {t.rich('hero_title', {
                                yellow: (chunks) => <span className="text-yellow-400">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            {t('hero_desc')}
                        </p>
                        <div className="flex flex-wrap gap-8 py-8 border-t border-white/10">
                            <StatItem label={t('stat_1_label')} value={t('stat_1_value')} />
                            <StatItem label={t('stat_2_label')} value={t('stat_2_value')} />
                            <StatItem label={t('stat_3_label')} value={t('stat_3_value')} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* que hacemos */}
            <section className="py-20 px-6 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">

                        {/* Lado Izquierdo: Título con Vibe Coding */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="md:col-span-5"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight uppercase">
                                {t.rich('hacemos_title', {
                                    br: () =>
                                        <br />,
                                    slate: (chunks) => <span className="text-slate-500">{chunks}</span>
                                })}
                            </h2>
                            {/* Pequeña línea decorativa estilo 80/20 */}
                            <div className="h-1 w-12 bg-blue-500 mt-6" />
                        </motion.div>

                        {/* Lado Derecho: Cuerpo de texto */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="md:col-span-7 flex flex-col gap-6"
                        >
                            {/* Párrafo Font Regular */}
                            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                                {t('hacemos_p1')}
                            </p>

                            {/* Párrafo Italic Bold */}
                            <p className="text-lg md:text-xl text-white font-bold italic border-l-2 border-blue-500/50 pl-6 leading-relaxed">
                                {t('hacemos_p2')}
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Misión & Visión */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Target size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{t('mision_title')}</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {t('mision_desc')}
                        </p>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                            <Eye size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{t('vision_title')}</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {t('vision_desc')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-950 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block"
                            >
                                {t('diferencial_badge')}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                            >
                                {t.rich('diferencial_title', {
                                    br: () => <br />,
                                    italic: (chunks) => <span className="text-slate-400 font-light italic text-3xl md:text-4xl">{chunks}</span>
                                })}
                            </motion.h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col gap-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-blue-400">
                                    <item.icon size={24} />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-mono text-blue-500/50">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    {t('sistema_activo')}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* El Equipo */}
            <section className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('equipo_title')}</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            {t('equipo_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <TeamMember
                            name={t('member_1_name')}
                            role={t('member_1_role')}
                            bio={t('member_1_bio')}
                            image="/img/perfil_calidad2.png"
                        />
                        <TeamMember
                            name={t('member_2_name')}
                            role={t('member_2_role')}
                            bio={t('member_2_bio')}
                            image="/img/perfil_tech.png"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}