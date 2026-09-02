import { SeasonTimeline } from './SeasonTimeline';
import { seasonMilestones, seasonSource, formatSeasonDate, milestoneStatus } from '../data/season';
import React from 'react';
import { ArrowLeft, CalendarDays, ExternalLink, Info, MapPin, Search, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EventsPageProps {
  onNavigateHome: () => void;
  onOpenParticipation: () => void;
  onOpenTeamFinder: () => void;
}

const FIRST_EVENTS = 'https://www.firstinspires.org/programs/events';
const FIRST_SEARCH = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF = 'https://www.sistemafibra.org.br/senai/';


const accents = {
  amber: 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200',
  orange: 'border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-500/40 dark:bg-orange-500/10 dark:text-orange-200',
  blue: 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-200',
} as const;

export const EventsPage: React.FC<EventsPageProps> = ({ onNavigateHome, onOpenParticipation, onOpenTeamFinder }) => {
  const { isDark } = useTheme();
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const muted = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </button>

        <section className={`rounded-3xl border p-6 sm:p-10 lg:p-12 mb-6 ${card}`}>
          <span className="inline-flex items-center rounded-full bg-blue-700 text-white border-b-2 border-orange-500 px-3 py-1 text-xs font-black tracking-wider mb-4">SENAI-DF · EVENTOS</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-5">Acompanhe a temporada FIRST® e os caminhos para eventos no DF</h1>
          <p className={`max-w-3xl text-base sm:text-lg leading-relaxed ${muted}`}>Esta página organiza marcos globais da temporada e os canais que devem ser usados para confirmar torneios, seletivas, equipes e atividades no Distrito Federal.</p>
        </section>

        <section className={`rounded-2xl border p-5 mb-6 flex items-start gap-3 ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-100' : 'bg-blue-50 border-blue-200 text-blue-900'}`}>
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed"><strong>Importante:</strong> os marcos abaixo são referências de temporada. Datas e locais de eventos específicos no DF devem ser confirmados diretamente nos canais oficiais da FIRST® e do Sistema Fibra/SENAI-DF.</p>
        </section>

        <section aria-labelledby="event-milestones-title" className="mb-6">
          <h2 id="event-milestones-title" className="text-2xl sm:text-3xl font-black mb-5">Marcos da temporada 2026–2027</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {seasonMilestones.map(item => (
              <article key={item.program} className={`rounded-2xl border p-6 ${card}`}>
                <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-black mb-4 ${accents[item.accent]}`}><CalendarDays className="w-4 h-4" /> {item.program}</div>
                <h3 className="text-xl font-black mb-2">{item.name}</h3>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">{formatSeasonDate(item.isoDate)}</p><p className="text-xs muted mb-3">{milestoneStatus(item.isoDate)}</p>
                <p className={`text-sm leading-relaxed mb-5 ${muted}`}>{item.description}</p>
                <a href={seasonSource} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-600">Ver fonte oficial <ExternalLink className="w-4 h-4" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-6">
          <a href={SENAI_DF} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 transition-all hover:-translate-y-0.5 ${card} hover:border-orange-400`}>
            <MapPin className="w-6 h-6 text-orange-600 mb-4" /><h2 className="text-lg font-black mb-2">SENAI-DF</h2><p className={`text-sm ${muted}`}>Acompanhe divulgações, educação e atendimento local do Sistema Fibra.</p>
          </a>
          <button type="button" onClick={onOpenTeamFinder} className={`rounded-2xl border p-6 text-left transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${card} hover:border-blue-400`}>
            <Search className="w-6 h-6 text-blue-600 mb-4" /><h2 className="text-lg font-black mb-2">Equipes e eventos</h2><p className={`text-sm ${muted}`}>Use a busca orientada do portal para chegar às fontes oficiais.</p>
          </button>
          <a href={FIRST_EVENTS} target="_blank" rel="noreferrer" className={`rounded-2xl border p-6 transition-all hover:-translate-y-0.5 ${card} hover:border-emerald-400`}>
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-4" /><h2 className="text-lg font-black mb-2">Calendário FIRST®</h2><p className={`text-sm ${muted}`}>Consulte diretamente o calendário e as páginas oficiais dos programas.</p>
          </a>
        </section>

        <section className={`rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${card}`}>
          <div><h2 className="text-lg font-black">Quer participar de uma iniciativa no DF?</h2><p className={`text-sm mt-1 ${muted}`}>Veja como participar e confirme disponibilidade pelos canais responsáveis.</p></div>
          <div className="flex flex-wrap gap-3">
            <a href={FIRST_SEARCH} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-300 text-blue-700 font-bold text-sm hover:bg-blue-50 dark:border-blue-500/40 dark:text-blue-300 dark:hover:bg-blue-500/10">Busca FIRST® <ExternalLink className="w-4 h-4" /></a>
            <button type="button" onClick={onOpenParticipation} className="min-h-11 px-5 py-2.5 rounded-xl action-primary text-white font-bold text-sm">Como participar</button>
          </div>
        </section>
      </div>
      <SeasonTimeline />
    </main>
  );
};
