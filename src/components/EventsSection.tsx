import React from 'react';
import { Calendar, CheckCircle2, Clock3, ExternalLink, Leaf, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface EventsSectionProps {
  onOpenParticipation: (program?: string) => void;
}

const milestones = [
  {
    program: 'FLL',
    name: 'BIOGLOW™',
    date: '04 de agosto de 2026',
    status: 'Desafio lançado',
    description: 'A temporada 2026–2027 da FIRST LEGO League integra a temporada global FIRST® CANOPY™.',
    url: 'https://www.firstinspires.org/programs/fll/',
    accent: 'amber'
  },
  {
    program: 'FTC',
    name: 'BIOBUZZ™ presented by RTX',
    date: '12 de setembro de 2026',
    status: 'Próximo lançamento',
    description: 'O novo desafio da FIRST Tech Challenge será revelado em setembro como parte da temporada CANOPY™.',
    url: 'https://www.firstinspires.org/programs/ftc/',
    accent: 'orange'
  },
  {
    program: 'FRC',
    name: 'BIOCORE™ presented by Haas',
    date: '09 de janeiro de 2027',
    status: 'Lançamento em 2027',
    description: 'O próximo jogo da FIRST Robotics Competition será apresentado em janeiro de 2027.',
    url: 'https://www.firstinspires.org/programs/frc/',
    accent: 'blue'
  }
] as const;

const accentStyles = {
  amber: { badge: 'bg-amber-500 text-slate-950', icon: 'text-amber-600', border: 'border-amber-300 dark:border-amber-500/40' },
  orange: { badge: 'bg-orange-600 text-white', icon: 'text-orange-600', border: 'border-orange-300 dark:border-orange-500/40' },
  blue: { badge: 'bg-blue-600 text-white', icon: 'text-blue-600', border: 'border-blue-300 dark:border-blue-500/40' }
};

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();

  return (
    <section id="eventos" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'}`}>
            <Leaf className="w-3.5 h-3.5" />
            <span>FIRST® CANOPY™ 2026–2027</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>MARCOS DA TEMPORADA</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Datas e desafios publicados pela FIRST. Eventos regionais, formatos e disponibilidade variam conforme o país e o parceiro responsável pela entrega do programa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {milestones.map((item) => {
            const style = accentStyles[item.accent];
            return (
              <article key={item.program} className={`rounded-2xl border-2 p-5 sm:p-6 flex flex-col ${style.border} ${isDark ? 'bg-slate-900 shadow-xl' : 'bg-slate-50 shadow-md'}`}>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${style.badge}`}>{item.program}</span>
                  {item.program === 'FLL' ? <CheckCircle2 className={`w-5 h-5 ${style.icon}`} /> : <Clock3 className={`w-5 h-5 ${style.icon}`} />}
                </div>
                <h3 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>{item.name}</h3>
                <div className={`flex items-center gap-2 text-sm font-semibold mb-4 ${style.icon}`}><Calendar className="w-4 h-4" /> {item.date}</div>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.description}</p>
                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.status}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-500">Ver detalhes oficiais <ExternalLink className="w-4 h-4" /></a>
                </div>
              </article>
            );
          })}
        </div>

        <div className={`mt-8 sm:mt-10 rounded-2xl border p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-blue-50 border-blue-200'}`}>
          <div className="flex items-start gap-3">
            <Rocket className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className={`font-black text-lg ${isDark ? 'text-white' : 'text-slate-950'}`}>Procurando torneios e eventos?</h3>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Consulte o localizador oficial da FIRST para verificar eventos disponíveis e informações atualizadas da sua região.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="https://www.firstinspires.org/programs/events" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2">Calendário oficial <ExternalLink className="w-4 h-4" /></a>
            <button onClick={() => onOpenParticipation()} className={`px-5 py-3 rounded-xl border font-bold text-sm ${isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'}`}>Tenho interesse</button>
          </div>
        </div>
      </div>
    </section>
  );
};
