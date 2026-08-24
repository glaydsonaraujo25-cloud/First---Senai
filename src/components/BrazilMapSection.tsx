import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Users, 
  Trophy, 
  ChevronRight, 
  Compass, 
  Sparkles,
  Info
} from 'lucide-react';
import { brazilStatesData } from '../data/brazilData';

interface BrazilMapSectionProps {
  onOpenParticipation: (program?: string) => void;
}

export const BrazilMapSection: React.FC<BrazilMapSectionProps> = ({ onOpenParticipation }) => {
  const [selectedUf, setSelectedUf] = useState<string>('SP');
  const [selectedRegion, setSelectedRegion] = useState<string>('TODAS');

  const ufsList = Object.keys(brazilStatesData);
  const currentState = brazilStatesData[selectedUf] || brazilStatesData['SP'];

  const regions = ['TODAS', 'Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'];

  const filteredUfs = selectedRegion === 'TODAS'
    ? ufsList
    : ufsList.filter(uf => brazilStatesData[uf].region === selectedRegion);

  return (
    <section id="mapa-brasil" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Tech Patterns */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>PRESENÇA NACIONAL INTEGRADA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            ROBÓTICA QUE CONECTA O BRASIL
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Selecione um estado para explorar equipes ativas, centros tecnológicos SENAI participantes e competições regionais.
          </p>
        </div>

        {/* Region Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {reg === 'TODAS' ? 'Todas as Regiões' : `Região ${reg}`}
            </button>
          ))}
        </div>

        {/* State Quick Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filteredUfs.map((uf) => {
            const state = brazilStatesData[uf];
            const isSelected = selectedUf === uf;
            return (
              <button
                key={uf}
                id={`state-selector-${uf.toLowerCase()}`}
                onClick={() => setSelectedUf(uf)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 ring-2 ring-blue-400 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span className="font-mono">{uf}</span>
                <span className="text-[11px] text-slate-300 font-normal hidden sm:inline">{state.name}</span>
              </button>
            );
          })}
        </div>

        {/* State Inspector Details Card */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: State Profile & Metrics */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 text-sm font-black bg-blue-600 text-white rounded-lg font-mono">
                  {currentState.uf}
                </span>
                <span className="text-xs text-slate-400 font-semibold bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
                  Região {currentState.region}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  {currentState.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentState.description}
                </p>
              </div>

              {/* Metric Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono-tech block mb-0.5">
                    {currentState.activeTeams}
                  </span>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Equipes Ativas</span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center sm:text-left">
                  <span className="text-2xl sm:text-3xl font-black text-red-400 font-mono-tech block mb-0.5">
                    {currentState.senaiHubs}
                  </span>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Polos SENAI</span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center sm:text-left col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold text-emerald-400 block mb-1">Programas Ativos:</span>
                  <div className="flex justify-center sm:justify-start gap-1.5">
                    {currentState.programsActive.map(p => (
                      <span key={p} className="px-2 py-0.5 bg-slate-800 text-white font-mono text-[10px] font-bold rounded border border-slate-700">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Featured Regional Events */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  Torneios e Mostras em Destaque no Estado
                </h4>
                <div className="space-y-1.5">
                  {currentState.featuredEvents.map((evt, idx) => (
                    <div key={idx} className="text-xs text-slate-200 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenParticipation()}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>CRIAR EQUIPE EM {currentState.uf}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right: Graphic Map & Regional Emblem */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="text-center space-y-4">
                
                {/* Visual Map Pin Graphic */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center text-white text-3xl font-black font-mono shadow-2xl mx-auto">
                    {currentState.uf}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-950"></div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">
                    Rede Integrada SENAI {currentState.uf}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Laboratórios de robótica, equipamentos de prototipagem e mentoria técnica para competições.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-left text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Canal de Apoio:</span>
                    <strong className="text-white">robotica@{currentState.uf.toLowerCase()}.senai.br</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Atendimento:</span>
                    <strong className="text-emerald-400">Seg a Sex • 08h às 18h</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
