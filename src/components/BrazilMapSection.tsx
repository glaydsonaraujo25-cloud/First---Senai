import React from 'react';
import { Building2, ExternalLink, Info, MapPin, Phone, Search, School } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BrazilMapSectionProps {
  onOpenParticipation: (program?: string) => void;
}

const FIRST_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';
const SENAI_DF_EDUCACAO_URL = 'https://sistemafibra.org.br/senai/educacao';

const units = [
  { name: 'SENAI Brasília', region: 'SIG · Brasília', address: 'Setor de Indústrias Gráficas, Quadra 6, Lote 1.100' },
  { name: 'SENAI Brazlândia', region: 'Brazlândia', address: 'Área Especial nº 3 Norte – Parque de Serviços' },
  { name: 'SENAI Gama', region: 'Gama', address: 'Área Especial, Entrequadras 2 e 8 – Setor Sul' },
  { name: 'SENAI Taguatinga', region: 'Taguatinga', address: 'Área Especial nº 2 – Setor C Norte' },
  { name: 'SENAI Sobradinho', region: 'Sobradinho', address: 'Quadra 13, Área Especial nº 3, Lotes A/F' }
];

export const BrazilMapSection: React.FC<BrazilMapSectionProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <section id="mapa-brasil" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-red-300' : 'bg-red-50 border-red-200 text-red-700'}`}>
            <MapPin className="w-3.5 h-3.5" /> SENAI-DF PERTO DE VOCÊ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech">UNIDADES NO DISTRITO FEDERAL</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            O site agora concentra a experiência no Distrito Federal. Consulte as unidades e os canais oficiais do SENAI-DF para confirmar cursos, atendimento e oportunidades disponíveis.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto mb-9 rounded-2xl border p-4 sm:p-5 flex items-start gap-3 ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-100' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">As unidades abaixo são apresentadas com base no portal educacional do SENAI-DF. A oferta de cursos e atividades de robótica pode variar por unidade e período; confirme antes de se deslocar.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {units.map((unit, index) => (
            <article key={unit.name} className={`rounded-2xl border p-5 sm:p-6 ${card} ${index === units.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0"><School className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600">{unit.region}</p>
                  <h3 className="font-black text-lg mt-0.5">{unit.name}</h3>
                </div>
              </div>
              <p className={`text-sm leading-relaxed flex items-start gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> {unit.address}
              </p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <div className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 ${card}`}>
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center mb-5"><Building2 className="w-6 h-6" /></div>
            <h3 className="text-xl sm:text-2xl font-black mb-3">Falar com o Sistema Fibra</h3>
            <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Para informações institucionais e orientação sobre unidades, use os canais oficiais do SENAI-DF.</p>
            <div className={`rounded-xl border p-4 mb-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">SAC Sistema Fibra</p>
              <p className="font-black flex items-center gap-2"><Phone className="w-4 h-4 text-red-500" /> (61) 4042-6565</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Segunda a sexta, conforme horário informado no portal oficial.</p>
            </div>
            <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-500">Abrir site do SENAI-DF <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <a href={SENAI_DF_EDUCACAO_URL} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 group transition-all hover:-translate-y-0.5 ${card} hover:border-red-400`}>
              <School className="w-6 h-6 text-red-600 mb-4" />
              <h3 className="text-lg font-black mb-2">Cursos e educação SENAI-DF</h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Consulte a área oficial de educação para conferir unidades, modalidades e oportunidades disponíveis no Distrito Federal.</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-red-600">Ver SENAI-DF <ExternalLink className="w-4 h-4" /></span>
            </a>

            <a href={FIRST_SEARCH_URL} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 group transition-all hover:-translate-y-0.5 ${card} hover:border-blue-400`}>
              <Search className="w-6 h-6 text-blue-600 mb-4" />
              <h3 className="text-lg font-black mb-2">Equipes e eventos FIRST®</h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Use a busca oficial da FIRST e filtre por Brasil e Distrito Federal para conferir informações atualizadas.</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600">Abrir busca FIRST <ExternalLink className="w-4 h-4" /></span>
            </a>

            <button onClick={() => onOpenParticipation()} className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 p-5 text-white text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-lg">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-white/75">Distrito Federal</p>
                <strong className="text-lg">Registrar interesse no projeto de robótica</strong>
              </div>
              <span className="text-sm font-bold">Continuar →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
