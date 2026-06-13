"use client";

import React from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = locale === "es" ? "en" : "es";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image src="/img/logo_corto8020.png" alt="Ochenta Veinte" width={160} height={48} priority className="h-8 w-auto xs:h-6 xs:w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/#servicios" className="hover:text-blue-600 transition-colors">{t("servicios")}</Link>
          <Link href="/#soluciones" className="hover:text-blue-600 transition-colors">{t("soluciones")}</Link>
          <Link href="/nosotros" className="hover:text-blue-600 transition-colors">{t("nosotros")}</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition-colors">{t("contacto")}</Link>
          <Link href={pathname} locale={toggleLocale as "es" | "en"} className="text-sm font-bold text-slate-400 hover:text-slate-900">{t("lang_toggle")}</Link>
        </nav>

        <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4 font-medium text-slate-700">
              <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">{t("servicios")}</Link>
              <Link href="/#soluciones" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">{t("soluciones")}</Link>
              <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">{t("nosotros")}</Link>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">{t("contacto")}</Link>
              <Link href={pathname} locale={toggleLocale as "es" | "en"} onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-400 hover:text-slate-900 mt-2 pt-2 border-t border-slate-100">{t("lang_toggle")}</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
