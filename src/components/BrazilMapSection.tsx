import React, { useState } from 'react';
import { Compass, Trophy, ChevronRight, Info, MapPin } from 'lucide-react';
import { brazilStatesData } from '../data/brazilData';

interface BrazilMapSectionProps {
  onOpenParticipation: (program?: string) => void;
}

export const BrazilMapSection: React.FC<BrazilMapSectionProps> = ({ onOpenParticipation }) => {
  const [selectedUf, setSelectedUf] = useState<string>('SP');
  const [selectedRegion, setSelectedRegion] = useState<string>('TODAS');

  const ufsList = Object.keys(brazilStatesData);
  const currentState = brazilStatesData[selectedUf] || brazilStatesData.SP;
  const regions = ['TODAS', 'Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'];

  const filteredUfs = selectedRegion === 'TODAS'
    ? ufsList
    : ufsList.filter(uf => brazilStatesData[uf].region === selectedRegion);

  return (
    <section id="mapa-brasil" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>EXPLORAÇÃO POR REGIÃO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            ROBÓTICA PELO BRASIL
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Explore uma visualização demonstrativa da presença dos programas e veja como um localizador de equipes pode funcionar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs sm:text-sm text-emerald-50 flex items-start gap-3">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-emerald-300" />
          <p>
            Quantidades de equipes, polos e eventos exibidas nesta seção são dados de demonstração do projeto. Para localizar equipes e unidades reais, consulte os canais oficiais da FIRST e do SENAI.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8" aria-label="Filtrar estados por região">
          {regions.map(reg => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              aria-pressed={selectedRegion === reg}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedRegion === reg
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {reg === 'TODAS' ? 'Todas as Regiões' : `Região ${reg}`}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {filteredUfs.map(uf => {
            const state = brazilStatesData[uf];
            const isSelected = selectedUf === uf;
            return (
              <button
                key={uf}
                onClick={() => setSelectedUf(uf)}
                aria-pressed={isSelected}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
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

        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 text-sm font-black bg-blue-600 text-white rounded-lg font-mono">{currentState.uf}</span>
                <span className="text-xs text-slate-400 font-semibold bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
                  Região {currentState.region}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">{currentState.name}</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{currentState.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono-tech block mb-0.5">{currentState.activeTeams}</span>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Equipes — demonstração</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-black text-red-400 font-mono-tech block mb-0.5">{currentState.senaiHubs}</span>
                  <span className="text-[11px] uppercase font-bold text-slate-400">Polos — demonstração</span>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-xs font-bold text-emerald-400 block mb-1">Programas representados</span>
                  <div className="flex gap-1.5 flex-wrap">
                    {currentState.programsActive.map(p => (
                      <span key={p} className="px-2 py-0.5 bg-slate-800 text-white font-mono text-[10px] font-bold rounded border border-slate-700">{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  Exemplos de eventos regionais
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

              <button
                onClick={() => onOpenParticipation()}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                <span>Simular interesse em {currentState.uf}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="text-center space-y-5">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center text-white text-3xl font-black font-mono shadow-2xl mx-auto">
                  {currentState.uf}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-red-400" /> {currentState.name}
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto mt-2">
                    Esta área foi preparada para, futuramente, receber dados reais de equipes, unidades, torneios e contatos institucionais a partir de uma fonte oficial.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left text-xs text-slate-300">
                  <strong className="text-white block mb-1">Próxima evolução recomendada</strong>
                  Integrar uma base oficial ou API para localizar equipes e eventos reais por estado e cidade.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
