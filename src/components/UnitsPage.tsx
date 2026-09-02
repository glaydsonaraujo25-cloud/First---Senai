import React from 'react';
import { ArrowLeft, Building2, ExternalLink, Info, MapPin, Phone, Search, School } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface UnitsPageProps {
  onNavigateHome: () => void;
  onOpenParticipation: () => void;
  onOpenTeamFinder: () => void;
}

const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';
const SENAI_DF_EDUCACAO_URL = 'https://sistemafibra.org.br/senai/educacao';

const units = [
  { name: 'SENAI Brasília', region: 'Brasília · SIG', address: 'Setor de Indústrias Gráficas, Quadra 6, Lote 1.100' },
  { name: 'SENAI Brazlândia', region: 'Brazlândia', address: 'Área Especial nº 3 Norte – Parque de Serviços' },
  { name: 'SENAI Gama', region: 'Gama', address: 'Área Especial, Entrequadras 2 e 8 – Setor Sul' },
  { name: 'SENAI Taguatinga', region: 'Taguatinga', address: 'Área Especial nº 2 – Setor C Norte' },
  { name: 'SENAI Sobradinho', region: 'Sobradinho', address: 'Quadra 13, Área Especial nº 3, Lotes A/F' },
];

export const UnitsPage: React.FC<UnitsPageProps> = ({ onNavigateHome, onOpenParticipation, onOpenTeamFinder }) => {
  const { isDark } = useTheme();
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </button>

        <section className={`rounded-3xl border p-6 sm:p-10 lg:p-12 mb-6 ${card}`}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-700 text-white border-b-2 border-orange-500 px-3 py-1 text-xs font-black tracking-wider mb-4">SENAI-DF · DISTRITO FEDERAL</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-5">Unidades SENAI-DF</h1>
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Encontre as principais unidades listadas neste projeto e use os canais oficiais para confirmar endereço, horário, cursos e atividades disponíveis.</p>
          </div>
        </section>

        <div className={`rounded-2xl border p-4 sm:p-5 flex items-start gap-3 mb-6 ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-100' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">As informações podem mudar. Antes de se deslocar, confirme os dados diretamente no Sistema Fibra/SENAI-DF.</p>
        </div>

        <section aria-labelledby="units-title" className="mb-6">
          <h2 id="units-title" className="sr-only">Lista de unidades SENAI-DF</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map(unit => (
              <article key={unit.name} className={`rounded-2xl border p-6 ${card}`}>
                <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-4"><School className="w-5 h-5" /></div>
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{unit.region}</p>
                <h3 className="text-lg font-black mt-1 mb-3">{unit.name}</h3>
                <p className={`text-sm leading-relaxed flex items-start gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> {unit.address}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className={`rounded-2xl border p-6 ${card}`}>
            <Building2 className="w-6 h-6 text-blue-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Atendimento oficial</h2>
            <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>SAC Sistema Fibra</p>
            <p className="font-black flex items-center gap-2 mb-4"><Phone className="w-4 h-4 text-orange-500" /> (61) 4042-6565</p>
            <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-600">Abrir SENAI-DF <ExternalLink className="w-4 h-4" /></a>
          </div>

          <a href={SENAI_DF_EDUCACAO_URL} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 transition hover:-translate-y-0.5 ${card}`}>
            <School className="w-6 h-6 text-orange-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Cursos e educação</h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Consulte cursos e oportunidades educacionais diretamente no portal oficial.</p>
          </a>

          <button type="button" onClick={onOpenTeamFinder} className={`rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${card}`}>
            <Search className="w-6 h-6 text-blue-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Equipes e eventos</h2>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Use a busca orientada para encontrar caminhos oficiais relacionados à FIRST® no DF.</p>
          </button>
        </section>

        <div className="mt-6 rounded-2xl action-primary p-5 sm:p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div><p className="text-xs font-black uppercase tracking-widest text-white/80">Robótica no DF</p><strong className="text-lg">Quer saber como participar?</strong></div>
          <button type="button" onClick={onOpenParticipation} className="min-h-11 px-4 py-2.5 rounded-lg bg-white text-blue-800 font-bold">Continuar</button>
        </div>
      </div>
    </main>
  );
};
