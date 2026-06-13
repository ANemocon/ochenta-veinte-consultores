import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="col-span-1">
          <Image src="/img/8020.png" alt="8020" width={120} height={40} className="h-10 w-auto mb-6 brightness-0 invert" />
          <p className="text-slate-400 leading-relaxed">
            Consultoría de alto nivel para el mercado global de infraestructura energética desde 2021.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li><Link href="/#servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Paquetes</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/servicios/auditorias" className="hover:text-white">Auditoria Interna</Link></li>
              <li><Link href="/servicios/mejora-continua" className="hover:text-white">Mejora Continua</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 Ochenta Veinte. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <Link href="/terminos" className="hover:text-white">Privacidad</Link>
          <Link href="/terminos" className="hover:text-white">Términos</Link>
        </div>
      </div>
    </footer>
  );
}
