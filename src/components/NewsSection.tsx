import React from 'react';
import { ExternalLink, Leaf, Newspaper, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const highlights = [
  {
    tag: 'FLL',
    title: 'BIOGLOW™ já está disponível',
    summary: 'A FIRST LEGO League iniciou a temporada 2026–2027 com desafios ligados à biodiversidade e ao equilíbrio dos ecossistemas.',
    url: 'https://www.firstinspires.org/programs/fll/',
    accent: 'amber'
  },
  {
    tag: 'FTC',
    title: 'BIOBUZZ™ chega em setembro',
    summary: 'O novo desafio da FIRST Tech Challenge será lançado em 12 de setembro de 2026 como parte da temporada FIRST® CANOPY™.',
    url: 'https://www.firstinspires.org/programs/ftc/',
    accent: 'orange'
  },
  {
    tag: 'FRC',
    title: 'BIOCORE™ chega em janeiro de 2027',
    summary: 'A FIRST Robotics Competition prepara um novo desafio de engenharia em grande escala para a temporada 2026–2027.',
    url: 'https://www.firstinspires.org/programs/frc/',
    accent: 'blue'
  },
  {
    tag: 'FIRST',
    title: 'Explore a temporada FIRST® CANOPY™',
    summary: 'A temporada global conecta FLL, FTC e FRC em uma temática que convida estudantes a observar, compreender e projetar soluções inspiradas na natureza.',
    url: 'https://www.firstinspires.org/first-canopy',
    accent: 'emerald'
  }
] as const;

const styles = {
  amber: { badge: 'bg-amber-500 text-slate-950', glow: 'from-amber-100 to-white dark:from-amber-500/10 dark:to-slate-900' },
  orange: { badge: 'bg-orange-600 text-white', glow: 'from-orange-100 to-white dark:from-orange-500/10 dark:to-slate-900' },
  blue: { badge: 'bg-blue-600 text-white', glow: 'from-blue-100 to-white dark:from-blue-500/10 dark:to-slate-900' },
  emerald: { badge: 'bg-emerald-600 text-white', glow: 'from-emerald-100 to-white dark:from-emerald-500/10 dark:to-slate-900' }
};

export const NewsSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="noticias" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-400' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}>
            <Newspaper className="w-3.5 h-3.5" />
            <span>DESTAQUES OFICIAIS</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>TEMPORADA FIRST® CANOPY™</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Acompanhe os principais marcos publicados pela FIRST para FLL, FTC e FRC. Os links abaixo levam diretamente às páginas oficiais.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {highlights.map((item) => {
            const style = styles[item.accent];
            return (
              <article key={item.title} className={`rounded-2xl border overflow-hidden flex flex-col ${isDark ? 'bg-slate-950 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className={`h-28 bg-gradient-to-br ${style.glow} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 tech-grid-dark opacity-50" />
                  {item.tag === 'FIRST' ? <Leaf className="w-10 h-10 text-emerald-600 relative z-10" /> : <Sparkles className="w-10 h-10 text-blue-600 relative z-10" />}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider ${style.badge}`}>{item.tag}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.summary}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:text-blue-500">
                    Ver fonte oficial <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
