"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CapexRiskCalculator from '@/components/Calculators/CapexRiskCalculator';
import {
  Layers,
  ShieldCheck,
  FileText,
  Zap,
  CheckCircle,
  Search,
  ArrowRight,
  Clock,
  Scale,
  BadgeDollarSign,
  Target,
  BarChart3,
} from "lucide-react";

// --- Componentes de Apoyo ---

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <motion.article
    whileHover={{ y: -5 }}
    className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col gap-4"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.article>
);

const SolutionCard = ({ number, title, description, bgImage, link, linkText }: { number: string, title: string, description: string, bgImage: string, link: string, linkText: string }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[4/5] lg:aspect-auto lg:h-[500px]">
    {/* Background Image con Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

    {/* Content */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <span className="text-yellow-400 font-bold mb-2">{number}</span>
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-slate-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-4">
        {description}
      </p>
      <Link href={link} className="flex items-center gap-2 text-white font-medium hover:text-yellow-400 transition-colors">
        {linkText} <ArrowRight size={18} />
      </Link>
    </div>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- Página Principal ---

export default function HomePage() {
  const t = useTranslations("Home");

  const roiMetrics = [
    { icon: Clock, value: t('roi_1_value'), label: t('roi_1_label') },
    { icon: Scale, value: t('roi_2_value'), label: t('roi_2_label') },
    { icon: BadgeDollarSign, value: t('roi_3_value'), label: t('roi_3_label') },
  ];

  const ecosystemServices = [
    { icon: Target, title: t('eco_1_title'), description: t('eco_1_desc') },
    { icon: Search, title: t('eco_2_title'), description: t('eco_2_desc') },
    { icon: BarChart3, title: t('eco_3_title'), description: t('eco_3_desc') },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pb-20 md:pb-30 xs:pb-130">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {t.rich('hero_title', {
                yellow: (chunks) => <em className="text-yellow-400 not-italic">{chunks}</em>
              })}
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              {t('hero_desc')}
            </p>
            <Link href="/contacto" className="inline-block px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105">
              {t('hero_cta')}
            </Link>
          </motion.div>
        </div>

        {/* Partners */}
        <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-sm py-8 border-t border-white/20">
          <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale invert">
            <img src="/img/logo_siemens.png" alt="Siemens" className="h-8" />
            <img src="/img/logo_worley.png" alt="Worley" className="h-8" />
            <img src="/img/logo_isa.png" alt="ISA" className="h-8" />
            <img src="/img/logo_geb.png" alt="GEB" className="h-8" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            {roiMetrics.map((metric, i) => (
              <motion.div key={i} variants={itemVariants} className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
                <metric.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{metric.value}</div>
                <p className="text-slate-400 text-sm">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calculadora de Riesgo de CAPEX */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {t('capex_title')}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {t('capex_desc')}
          </p>
          <CapexRiskCalculator />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">{t('services_badge')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('services_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={ShieldCheck}
              title={t('service_1_title')}
              description={t('service_1_desc')}
            />
            <ServiceCard
              icon={FileText}
              title={t('service_2_title')}
              description={t('service_2_desc')}
            />
            <ServiceCard
              icon={CheckCircle}
              title={t('service_3_title')}
              description={t('service_3_desc')}
            />
            <ServiceCard
              icon={Search}
              title={t('service_4_title')}
              description={t('service_4_desc')}
            />
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
          >
            {t.rich('eco_title', {
              blue: (chunks) => <span className="text-blue-600">{chunks}</span>
            })}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystemServices.map((service, i) => (
              <motion.div
                key={i} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }}
                className="relative p-10 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-cyan-500/50 transition-colors"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <span className="absolute top-6 right-8 text-6xl font-mono font-black text-slate-800/40 group-hover:text-cyan-900/30">
                  0{i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-blue-600 font-bold uppercase text-sm mb-4">{t('solutions_badge')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('solutions_title')}</h2>
            <p className="text-slate-600 text-lg">{t('solutions_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              number={t('package_1')}
              title={t('solution_1_title')}
              description={t('solution_1_desc')}
              bgImage="/img/3_auditoria.png"
              link="/servicios/auditorias"
              linkText={t('solution_details')}
            />
            <SolutionCard
              number={t('package_2')}
              title={t('solution_2_title')}
              description={t('solution_2_desc')}
              bgImage="/img/2_consultoria.png"
              link="/servicios/mejora-continua"
              linkText={t('solution_details')}
            />

          </div>
        </div>
      </section>
    </div>
  );
}