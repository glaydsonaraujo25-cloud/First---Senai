import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, ExternalLink, Leaf, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramFLLProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFLL: React.FC<ProgramFLLProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const highlights = ['Construção e programação com LEGO® Education', 'Pesquisa e resolução de problemas', 'Trabalho em equipe e comunicação', 'Experiências práticas de STEM'];

  return (
    <section id="fll" className={`scroll-mt-24 py-16 sm:py-20 border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-950 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 text-xs font-black tracking-wider">FLL</span>
              <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>5–16 anos* · Grades K–8</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FIRST® LEGO® League</h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Uma jornada de descoberta em STEM que combina tecnologia LEGO® Education, criatividade, programação, pesquisa e colaboração em desafios práticos.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {highlights.map(item => (
                <div key={item} className={`flex items-start gap-2.5 rounded-xl border p-3.5 ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/program/fll" className="min-h-12 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center gap-2">Explorar FLL <ArrowRight className="w-4 h-4" /></a>
              <button onClick={() => onOpenParticipation('FLL')} className={`min-h-12 px-5 py-3 rounded-xl border font-bold ${isDark ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'}`}>Tenho interesse</button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-amber-50 border-amber-200'}`}>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center"><Cpu className="w-7 h-7 text-amber-600" /></div>
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">FIRST® CANOPY™ 2026–2027</p>
              <h3 className="text-2xl font-black mt-2 mb-2">BIOGLOW™</h3>
              <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>O desafio foi lançado em 4 de agosto de 2026 e explora biodiversidade e a relação entre pessoas e ecossistemas.</p>
              <div className={`rounded-2xl border p-4 text-xs leading-relaxed ${isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-amber-200 text-slate-600'}`}>
                <Sparkles className="w-4 h-4 text-amber-600 mb-2" />
                A temporada 2026–2027 é a temporada final da FIRST LEGO League no formato atual, com edições Founders e Future. Disponibilidade e formato variam por região.
              </div>
              <a href="https://www.firstinspires.org/programs/fll/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:text-blue-500">Fonte oficial <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <p className={`mt-6 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>*A faixa etária varia conforme edição e região.</p>
      </div>
    </section>
  );
};
