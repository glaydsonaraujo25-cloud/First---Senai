import React from 'react';
import { ExternalLink, Leaf, MapPin, Newspaper, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const highlights = [
  {
    tag: 'SENAI-DF',
    title: 'Robótica do DF em destaque',
    summary: 'O Sistema Fibra registra a participação de estudantes do SESI-DF e SENAI-DF em competições de robótica e ações ligadas ao ecossistema FIRST®.',
    url: 'https://www.sistemafibra.org.br/sesi/imprensa/noticias/2026/04/estudantes-do-sesi-df-e-senai-df-representam-brasil-no-mundial-de-robotica',
    accent: 'senai'
  },
  {
    tag: 'FLL',
    title: 'BIOGLOW™ na temporada 2026–2027',
    summary: 'A página oficial da FIRST LEGO League reúne as informações atuais da modalidade e da temporada CANOPY™.',
    url: 'https://www.firstinspires.org/programs/fll/',
    accent: 'amber'
  },
  {
    tag: 'FTC',
    title: 'BIOBUZZ™ na FIRST Tech Challenge',
    summary: 'Consulte na FIRST as informações atualizadas sobre o desafio, recursos e calendário da modalidade FTC.',
    url: 'https://www.firstinspires.org/programs/ftc/',
    accent: 'orange'
  },
  {
    tag: 'FRC',
    title: 'BIOCORE™ na FIRST Robotics Competition',
    summary: 'A página oficial da FRC concentra informações sobre a modalidade e os próximos marcos da temporada 2026–2027.',
    url: 'https://www.firstinspires.org/programs/frc/',
    accent: 'blue'
  }
] as const;

const styles = {
  senai: { badge: 'bg-[#005CA9] text-white', glow: 'from-blue-100 via-white to-orange-50 dark:from-blue-500/10 dark:via-slate-900 dark:to-orange-500/10', icon: 'text-[#005CA9]' },
  amber: { badge: 'bg-amber-500 text-slate-950', glow: 'from-amber-100 to-white dark:from-amber-500/10 dark:to-slate-900', icon: 'text-amber-600' },
  orange: { badge: 'bg-orange-600 text-white', glow: 'from-orange-100 to-white dark:from-orange-500/10 dark:to-slate-900', icon: 'text-orange-600' },
  blue: { badge: 'bg-blue-600 text-white', glow: 'from-blue-100 to-white dark:from-blue-500/10 dark:to-slate-900', icon: 'text-blue-600' }
};

export const NewsSection: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <section id="noticias" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'tech-grid-dark opacity-25' : 'tech-grid-pattern opacity-40'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-400' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}>
            <Newspaper className="w-3.5 h-3.5" /><span>FONTES E DESTAQUES</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>SENAI-DF + TEMPORADA FIRST®</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Acesse referências do Distrito Federal e páginas oficiais da FIRST®. Evitamos publicar notícias ou resultados sem uma fonte verificável.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {highlights.map((item) => {
            const style = styles[item.accent];
            return (
              <article key={item.title} className={`rounded-2xl border overflow-hidden flex flex-col ${isDark ? 'bg-slate-950 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-md'}`}>
                <div className={`h-28 bg-gradient-to-br ${style.glow} flex items-center justify-center relative overflow-hidden`}>
                  <div className={`absolute inset-0 ${isDark ? 'tech-grid-dark opacity-35' : 'tech-grid-pattern opacity-30'}`} />
                  {item.tag === 'SENAI-DF' ? <MapPin className={`w-10 h-10 relative z-10 ${style.icon}`} /> : item.tag === 'FLL' ? <Leaf className={`w-10 h-10 relative z-10 ${style.icon}`} /> : <Sparkles className={`w-10 h-10 relative z-10 ${style.icon}`} />}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider ${style.badge}`}>{item.tag}</span>
                  {item.tag === 'SENAI-DF' && <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-orange-500" aria-hidden="true" />}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.summary}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:text-blue-500">Ver fonte oficial <ExternalLink className="w-4 h-4" /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
