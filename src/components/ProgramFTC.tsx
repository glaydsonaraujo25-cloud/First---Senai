import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink, Leaf, Sparkles, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramFTCProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFTC: React.FC<ProgramFTCProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const highlights = ['Projeto e construção de mecanismos', 'Programação, sensores e testes', 'Estratégia de competição', 'Documentação e comunicação de engenharia'];

  return (
    <section id="ftc" className={`scroll-mt-24 py-16 sm:py-20 border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-950 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2">
            <div className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-orange-50 border-orange-200'}`}>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-orange-200 dark:border-orange-500/30 flex items-center justify-center"><Wrench className="w-7 h-7 text-orange-600" /></div>
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">FIRST® CANOPY™ 2026–2027</p>
              <h3 className="text-2xl font-black mt-2 mb-2">BIOBUZZ™ presented by RTX</h3>
              <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>O novo desafio será revelado em 12 de setembro de 2026, com foco na energia e dinâmica encontradas no mundo natural.</p>
              <div className={`rounded-2xl border p-4 text-xs leading-relaxed ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-orange-200 text-slate-600'}`}>
                <Sparkles className="w-4 h-4 text-orange-600 mb-2" />
                Equipes trabalham com mentores para projetar, construir e programar robôs e participar de partidas competitivas, além de atividades de engenharia e outreach.
              </div>
              <a href="https://www.firstinspires.org/programs/ftc/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:text-blue-500">Fonte oficial <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-lg bg-orange-600 text-white text-xs font-black tracking-wider">FTC</span>
              <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${isDark ? 'bg-orange-500/10 border-orange-500/30 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-800'}`}>12–18 anos · Grades 7–12</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FIRST® Tech Challenge</h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Engenharia aplicada em uma escala intermediária: equipes desenvolvem robôs, combinam hardware e software, testam soluções e criam estratégias para um novo jogo a cada temporada.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {highlights.map(item => (
                <div key={item} className={`flex items-start gap-2.5 rounded-xl border p-3.5 ${isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/program/ftc" className="min-h-12 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold flex items-center justify-center gap-2">Explorar FTC <ArrowRight className="w-4 h-4" /></a>
              <button onClick={() => onOpenParticipation('FTC')} className={`min-h-12 px-5 py-3 rounded-xl border font-bold ${isDark ? 'bg-slate-950 border-slate-700 text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'}`}>Tenho interesse</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
