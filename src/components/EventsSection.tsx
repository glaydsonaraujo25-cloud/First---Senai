import React from 'react';
import { Calendar, CheckCircle2, Clock3, ExternalLink, MapPin, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EventsSectionProps {
  onOpenParticipation: (program?: string) => void;
}

const FIRST_EVENTS = 'https://www.firstinspires.org/programs/events';
const FIRST_SEARCH = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF = 'https://www.sistemafibra.org.br/senai/';

const milestones = [
  { program: 'FLL', name: 'BIOGLOW™', date: '4 ago 2026', status: 'Temporada lançada', description: 'Marco global da temporada FIRST® CANOPY™ para a FIRST LEGO League.', url: 'https://www.firstinspires.org/programs/fll/', accent: 'amber' },
  { program: 'FTC', name: 'BIOBUZZ™', date: '12 set 2026', status: 'Game reveal', description: 'Revelação do desafio 2026–2027 da FIRST Tech Challenge.', url: 'https://www.firstinspires.org/programs/ftc/', accent: 'orange' },
  { program: 'FRC', name: 'BIOCORE™', date: '9 jan 2027', status: 'Kickoff', description: 'Lançamento do jogo 2027 da FIRST Robotics Competition.', url: 'https://www.firstinspires.org/programs/frc/', accent: 'blue' },
] as const;

const accentStyles = {
  amber: { badge: 'bg-amber-500 text-slate-950', icon: 'text-amber-600', border: 'border-amber-300 dark:border-amber-500/40' },
  orange: { badge: 'bg-orange-600 text-white', icon: 'text-orange-600', border: 'border-orange-300 dark:border-orange-500/40' },
  blue: { badge: 'bg-blue-600 text-white', icon: 'text-blue-600', border: 'border-blue-300 dark:border-blue-500/40' },
} as const;

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();

  return (
    <section id="eventos" className={`py-16 sm:py-24 border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-red-300' : 'bg-red-50 border-red-200 text-red-700'}`}>
            <MapPin className="w-3.5 h-3.5" /> ACOMPANHE A ROBÓTICA NO DF
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">TEMPORADA E EVENTOS</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Use os marcos globais da temporada como referência e confirme torneios, seletivas e atividades no Distrito Federal pelos canais oficiais.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {milestones.map(item => {
            const style = accentStyles[item.accent];
            return (
              <article key={item.program} className={`rounded-3xl border-2 p-6 flex flex-col ${style.border} ${isDark ? 'bg-slate-900' : 'bg-slate-50 shadow-sm'}`}>
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black ${style.badge}`}>{item.program}</span>
                  {item.program === 'FLL' ? <CheckCircle2 className={`w-5 h-5 ${style.icon}`} /> : <Clock3 className={`w-5 h-5 ${style.icon}`} />}
                </div>
                <h3 className="text-xl font-black mb-2">{item.name}</h3>
                <p className={`flex items-center gap-2 text-sm font-bold mb-4 ${style.icon}`}><Calendar className="w-4 h-4" /> {item.date}</p>
                <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.description}</p>
                <div className={`mt-5 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">{item.status}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-500">Fonte oficial <ExternalLink className="w-4 h-4" /></a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-8">
          <a href={SENAI_DF} target="_blank" rel="noreferrer" className={`rounded-2xl border p-5 transition-colors ${isDark ? 'bg-slate-900 border-slate-800 hover:border-red-500' : 'bg-red-50 border-red-200 hover:border-red-400'}`}>
            <MapPin className="w-5 h-5 text-red-600 mb-3" /><h3 className="font-black">SENAI-DF</h3><p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Acompanhe notícias, educação e canais do Sistema Fibra no Distrito Federal.</p>
          </a>
          <a href={FIRST_SEARCH} target="_blank" rel="noreferrer" className={`rounded-2xl border p-5 transition-colors ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-500' : 'bg-blue-50 border-blue-200 hover:border-blue-400'}`}>
            <Rocket className="w-5 h-5 text-blue-600 mb-3" /><h3 className="font-black">Buscar equipes e eventos</h3><p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Use a busca oficial da FIRST e filtre a localização para encontrar dados atualizados.</p>
          </a>
          <a href={FIRST_EVENTS} target="_blank" rel="noreferrer" className={`rounded-2xl border p-5 transition-colors ${isDark ? 'bg-slate-900 border-slate-800 hover:border-emerald-500' : 'bg-emerald-50 border-emerald-200 hover:border-emerald-400'}`}>
            <Calendar className="w-5 h-5 text-emerald-600 mb-3" /><h3 className="font-black">Calendário FIRST®</h3><p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Consulte o calendário oficial para datas e atualizações globais.</p>
          </a>
        </div>

        <div className={`mt-5 rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div><h3 className="font-black">Quer demonstrar interesse no DF?</h3><p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>O formulário do site registra interesse; disponibilidade e inscrição devem ser confirmadas pelos canais responsáveis.</p></div>
          <button type="button" onClick={() => onOpenParticipation()} className="min-h-11 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shrink-0">Registrar interesse</button>
        </div>
      </div>
    </section>
  );
};
