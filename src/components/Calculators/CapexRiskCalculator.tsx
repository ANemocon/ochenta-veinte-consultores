"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, TrendingDown, Mail, ChevronRight } from 'lucide-react';

interface Sector {
    id: string;
    name: string;
    rs: number;
    requiresPUE?: boolean;
}

interface CalculatorData {
    sector: Sector;
    capex: number;
    control: { id: string; name: string; fc: number };
    pue: number;
    email: string;
}

const SECTORS = [
    { id: 'og', name: 'Oil & Gas', rs: 0.15 },
    { id: 're', name: 'Fotovoltaico / Eólico', rs: 0.08 },
    { id: 'el', name: 'Eléctrico', rs: 0.10 },
    { id: 'dc', name: 'Data Center / Misión Crítica', rs: 0.12, requiresPUE: true }, // La fórmula del Data Center
];

const CONTROLS = [
    { id: 'manual', name: 'Confío en Excel / Papel', fc: 1.2 },
    { id: 'software', name: 'Tengo un software básico', fc: 0.8 },
];


export default function CapexRiskCalculator() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<CalculatorData>({
        sector: SECTORS[0],
        capex: 1000000,
        control: CONTROLS[0],
        pue: 1.5,
        email: '',
    });


    const results = useMemo(() => {
        let riskFactor = data.sector.rs;

        if (data.sector.requiresPUE) {
            // Si el PUE es mayor a 1.5, el riesgo sube proporcionalmente
            riskFactor = data.sector.rs * (data.pue / 1.5);
        }

        const pp = data.capex * riskFactor * data.control.fc;
        const ahorro = pp * 0.80; // Promesa 80/20
        return { pp, ahorro };
    }, [data]);

    const handleNext = () => setStep((prev) => prev + 1);

    return (
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl font-sans text-slate-100">
            {/* Header técnico */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div>
                    <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">Sistema de Diagnóstico 80/20</h2>
                    <p className="text-xl font-semibold tracking-tight">Calculador de Riesgo CAPEX</p>
                </div>
                <div className="text-right">
                    <span className="text-xs text-slate-500 block">PASO</span>
                    <span className="text-2xl font-mono text-blue-500">{step}/4</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {/* Paso 1: Sector */}
                {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                        <label className="block text-sm text-slate-400 mb-4 uppercase tracking-wider">1. Selecciona tu campo de batalla</label>
                        <div className="grid grid-cols-1 gap-3">
                            {SECTORS.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => { setData({ ...data, sector: s }); handleNext(); }}
                                    className={`p-4 text-left border transition-all ${data.sector.id === s.id ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 hover:border-slate-600'}`}
                                >
                                    {s.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Paso 2: CAPEX */}
                {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <label className="block text-sm text-slate-400 mb-4 uppercase tracking-wider">2. Magnitud de la inversión (USD)</label>
                        <input
                            type="range" min="100000" max="100000000" step="100000"
                            value={data.capex}
                            onChange={(e) => setData({ ...data, capex: Number(e.target.value) })}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-4"
                        />
                        <div className="text-4xl font-mono text-center mb-8">
                            ${data.capex.toLocaleString()}
                        </div>

                        {data.sector.requiresPUE && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded">
                                <label className="block text-xs text-blue-400 mb-2 uppercase tracking-widest">
                                    Target PUE (Power Usage Effectiveness)
                                </label>
                                <input
                                    type="range" min="1.0" max="2.5" step="0.1"
                                    value={data.pue}
                                    onChange={(e) => setData({ ...data, pue: Number(e.target.value) })}
                                    className="w-full h-1 bg-slate-700 appearance-none cursor-pointer accent-blue-400"
                                />
                                <div className="flex justify-between mt-2 font-mono text-sm">
                                    <span>1.0 (Ideal)</span>
                                    <span className="text-blue-500 font-bold">{data.pue}</span>
                                    <span>2.5 (Crítico)</span>
                                </div>
                            </motion.div>
                        )}

                        <button onClick={handleNext} className="w-full bg-blue-600 py-4 font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                            Continuar <ChevronRight size={18} />
                        </button>
                    </motion.div>
                )}

                {/* Paso 3: Control */}
                {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                        <label className="block text-sm text-slate-400 mb-4 uppercase tracking-wider">3. ¿Cómo vigilas el cumplimiento hoy?</label>
                        <div className="grid grid-cols-1 gap-3 mb-6">
                            {CONTROLS.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setData({ ...data, control: c })}
                                    className={`p-4 text-left border transition-all ${data.control.id === c.id ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800'}`}
                                >
                                    {c.name}
                                </button>
                            ))}
                        </div>
                        <button onClick={handleNext} className="w-full bg-blue-600 py-4 font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors">
                            Generar Diagnóstico
                        </button>
                    </motion.div>
                )}

                {/* Paso 4: Lead & Resultados */}
                {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="bg-red-500/10 border border-red-500/50 p-6 rounded mb-8 text-center">
                            <ShieldAlert className="mx-auto mb-2 text-red-500" size={32} />
                            <p className="text-sm text-red-200 uppercase tracking-tighter">Pérdida Potencial Detectada</p>
                            <h3 className="text-3xl font-mono text-red-500 font-bold">${results.pp.toLocaleString()}</h3>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 text-sm text-slate-300">
                                <TrendingDown className="text-green-400" />
                                <span>Mitigación posible con 8020: <b className="text-green-400">${results.ahorro.toLocaleString()}</b></span>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-lg">
                            <label className="block text-xs text-slate-400 mb-2 uppercase tracking-widest">Desbloquear informe detallado</label>
                            <div className="flex gap-2">
                                <input
                                    type="email" placeholder="correo@empresa.com"
                                    className="bg-slate-950 border border-slate-700 p-3 flex-grow text-sm focus:border-blue-500 outline-none"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />
                                <button className="bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500 transition-all flex items-center">
                                    <Mail size={18} />
                                </button>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-3 italic text-center">Recibirás el plan de mitigación y el semáforo de salud operativa en 72h.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}