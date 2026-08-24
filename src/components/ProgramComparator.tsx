import React from 'react';
import { ArrowRight, Bot, Cpu, HelpCircle, Sparkles, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramComparatorProps {
  onOpenQuiz: () => void;
  onOpenParticipation: (program?: string) => void;
}

const programs = [
  {
    id: 'fll', code: 'FLL', name: 'FIRST® LEGO® League', tag: 'INICIAÇÃO STEM', age: '9 a 15 anos', level: 'Iniciante', platform: 'LEGO® SPIKE™ Prime', language: 'Blocos / Python', Icon: Cpu,
    border: 'border-amber-500/40', icon: 'text-amber-500', badge: 'bg-amber-500 text-slate-950', button: 'bg-amber-500 hover:bg-amber-400 text-slate-950'
  },
  {
    id: 'ftc', code: 'FTC', name: 'FIRST® Tech Challenge', tag: 'ENGENHARIA APLICADA', age: '12 a 18 anos', level: 'Intermediário', platform: 'Estruturas modulares', language: 'Java', Icon: Wrench,
    border: 'border-orange-500/40', icon: 'text-orange-500', badge: 'bg-orange-600 text-white', button: 'bg-orange-600 hover:bg-orange-500 text-white'
  },
  {
    id: 'frc', code: 'FRC', name: 'FIRST® Robotics Competition', tag: 'ENGENHARIA AVANÇADA', age: '14 a 19 anos', level: 'Avançado', platform: 'WPILib / robô de grande porte', language: 'Java / C++ / Python', Icon: Bot,
    border: 'border-blue-500/40', icon: 'text-blue-500', badge: 'bg-blue-600 text-white', button: 'bg-blue-600 hover:bg-blue-500 text-white'
  }
];

export const ProgramComparator: React.FC<ProgramComparatorProps> = ({ onOpenQuiz, onOpenParticipation }) => {
  const { isDark } = useTheme();

  return (
    <section id="programas" className={`py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-400' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMPARE AS MODALIDADES</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>QUAL DESAFIO COMBINA COM VOCÊ?</h2>
          <p className={`text-base sm:text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Compare rapidamente FLL, FTC e FRC. Para uma recomendação personalizada, use o quiz.</p>
          <button onClick={onOpenQuiz} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition-all">
            <Sparkles className="w-5 h-5 text-amber-300" /> Descobrir meu programa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map(program => {
            const Icon = program.Icon;
            return (
              <article key={program.id} className={`rounded-2xl border-2 p-7 flex flex-col justify-between transition-all hover:-translate-y-1 ${program.border} ${isDark ? 'bg-slate-950/90 shadow-2xl' : 'bg-white shadow-lg'}`}>
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}><Icon className={`w-6 h-6 ${program.icon}`} /></div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider ${program.badge}`}>{program.tag}</span>
                  </div>
                  <h3 className={`text-2xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-950'}`}>{program.name}</h3>
                  <div className={`space-y-3 border-t pt-5 mt-5 text-sm ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                    {[
                      ['Faixa etária', program.age], ['Nível', program.level], ['Plataforma', program.platform], ['Programação', program.language]
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-4"><span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{label}</span><strong className="text-right">{value}</strong></div>
                    ))}
                  </div>
                </div>
                <div className={`space-y-2 pt-5 mt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <a href={`#/program/${program.id}`} className={`w-full py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 ${program.button}`}>Ver página do programa <ArrowRight className="w-4 h-4" /></a>
                  <button onClick={() => onOpenParticipation(program.code)} className={`w-full py-2.5 font-semibold text-xs rounded-xl border transition-colors ${isDark ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'}`}>Tenho interesse</button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
