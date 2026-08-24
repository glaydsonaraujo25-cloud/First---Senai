import React, { useMemo, useState } from 'react';
import { Compass, ExternalLink, Info, MapPin, School, Search, Users } from 'lucide-react';
import { brazilStatesData } from '../data/brazilData';
import { useTheme } from '../context/ThemeContext';

interface BrazilMapSectionProps {
  onOpenParticipation: (program?: string) => void;
}

const FIRST_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';
const SENAI_URL = 'https://www.senai.br/';

export const BrazilMapSection: React.FC<BrazilMapSectionProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const [selectedUf, setSelectedUf] = useState('DF');
  const [selectedRegion, setSelectedRegion] = useState('TODAS');

  const ufsList = Object.keys(brazilStatesData);
  const currentState = brazilStatesData[selectedUf] || brazilStatesData.DF || brazilStatesData.SP;
  const regions = ['TODAS', 'Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Norte'];

  const filteredUfs = useMemo(
    () => selectedRegion === 'TODAS'
      ? ufsList
      : ufsList.filter(uf => brazilStatesData[uf].region === selectedRegion),
    [selectedRegion, ufsList]
  );

  return (
    <section id="mapa-brasil" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
            <Compass className="w-3.5 h-3.5" />
            <span>ENCONTRE O CAMINHO NA SUA REGIÃO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech">ROBÓTICA PELO BRASIL</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Selecione seu estado e use fontes oficiais para procurar equipes, eventos FIRST® e unidades SENAI próximas.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto mb-10 rounded-xl border p-4 text-xs sm:text-sm flex items-start gap-3 ${isDark ? 'border-sky-500/30 bg-sky-500/10 text-sky-100' : 'border-blue-200 bg-blue-50 text-blue-900'}`}>
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
          <p>Esta seção não inventa números de equipes ou polos. A disponibilidade real muda ao longo da temporada e deve ser confirmada nos diretórios oficiais.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-7" aria-label="Filtrar estados por região">
          {regions.map(reg => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              aria-pressed={selectedRegion === reg}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                selectedRegion === reg
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              {reg === 'TODAS' ? 'Todas as regiões' : reg}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {filteredUfs.map(uf => {
            const state = brazilStatesData[uf];
            const isSelected = selectedUf === uf;
            return (
              <button
                key={uf}
                onClick={() => setSelectedUf(uf)}
                aria-pressed={isSelected}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isSelected
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                    : isDark
                      ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border-slate-700'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <span className="font-mono">{uf}</span>
                <span className="hidden sm:inline ml-1 font-normal opacity-80">{state.name}</span>
              </button>
            );
          })}
        </div>

        <div className={`rounded-3xl border p-6 sm:p-10 shadow-xl ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-red-600 text-white flex items-center justify-center text-lg font-black font-mono">{currentState.uf}</div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Região {currentState.region}</p>
                    <h3 className="text-2xl sm:text-3xl font-black">{currentState.name}</h3>
                  </div>
                </div>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Use o estado selecionado como referência ao pesquisar equipes, eventos e escolas. Os diretórios oficiais permitem conferir informações atualizadas sem depender de uma base simulada neste projeto.
                </p>
              </div>

              <button
                onClick={() => onOpenParticipation()}
                className={`mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold transition-colors ${isDark ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'}`}
              >
                <MapPin className="w-4 h-4 text-red-500" /> Registrar interesse no projeto
              </button>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <a href={FIRST_SEARCH_URL} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 group transition-all hover:-translate-y-0.5 ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'}`}>
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5"><Search className="w-5 h-5" /></div>
                <h4 className="text-lg font-black mb-2">Buscar equipes e eventos FIRST®</h4>
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Abra o Team & Event Search oficial e filtre por programa e localização.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">Abrir busca oficial <ExternalLink className="w-4 h-4" /></span>
              </a>

              <a href={SENAI_URL} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 group transition-all hover:-translate-y-0.5 ${isDark ? 'bg-slate-900 border-slate-800 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-400 shadow-sm'}`}>
                <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center mb-5"><School className="w-5 h-5" /></div>
                <h4 className="text-lg font-black mb-2">Encontrar escolas SENAI</h4>
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>O portal nacional do SENAI permite localizar escolas por estado e cidade.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600">Abrir diretório SENAI <ExternalLink className="w-4 h-4" /></span>
              </a>

              <div className={`sm:col-span-2 rounded-2xl border p-5 flex items-start gap-3 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <Users className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}><strong className={isDark ? 'text-white' : 'text-slate-900'}>Dica:</strong> ao procurar uma equipe, confirme sempre programa, temporada, cidade e canal oficial de contato antes de considerar a informação atual.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
