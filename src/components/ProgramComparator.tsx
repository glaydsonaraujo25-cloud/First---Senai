import React from 'react';
import { ArrowRight, Bot, Cpu, Scale, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramComparatorProps {
  onSelectProgram: (programId: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (program?: string) => void;
}

const programs = [
  {
    id: 'fll' as const,
    code: 'FLL',
    name: 'FIRST® LEGO® League',
    age: '5–16 anos*',
    focus: 'Descoberta, LEGO® e projeto de inovação',
    experience: 'Entrada na robótica e no pensamento computacional',
    Icon: Cpu,
    accent: 'amber',
  },
  {
    id: 'ftc' as const,
    code: 'FTC',
    name: 'FIRST® Tech Challenge',
    age: '12–18 anos',
    focus: 'Mecânica, programação e estratégia de arena',
    experience: 'Engenharia aplicada em equipes menores',
    Icon: Wrench,
    accent: 'orange',
  },
  {
    id: 'frc' as const,
    code: 'FRC',
    name: 'FIRST® Robotics Competition',
    age: '14–18 anos',
    focus: 'Engenharia, software, fabricação e gestão',
    experience: 'Projeto multidisciplinar de grande escala',
    Icon: Bot,
    accent: 'blue',
  },
];

const styles = {
  amber: { icon: 'text-amber-600', border: 'border-amber-300 dark:border-amber-500/40', button: 'bg-amber-500 hover:bg-amber-400 text-slate-950' },
  orange: { icon: 'text-orange-600', border: 'border-orange-300 dark:border-orange-500/40', button: 'bg-orange-600 hover:bg-orange-500 text-white' },
  blue: { icon: 'text-blue-600', border: 'border-blue-300 dark:border-blue-500/40', button: 'bg-blue-600 hover:bg-blue-500 text-white' },
} as const;

export const ProgramComparator: React.FC<ProgramComparatorProps> = ({ onSelectProgram, onOpenParticipation }) => {
  const { isDark } = useTheme();

  return (
    <section id="programas" className={`py-16 sm:py-24 border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-300' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}>
            <Scale className="w-3.5 h-3.5" /> COMPARAÇÃO RÁPIDA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FLL, FTC OU FRC?</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Veja as diferenças principais e abra a página de cada modalidade para entender a experiência com mais detalhes.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
          {programs.map(program => {
            const Icon = program.Icon;
            const style = styles[program.accent];
            return (
              <article key={program.id} className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col ${style.border} ${isDark ? 'bg-slate-950' : 'bg-white shadow-md'}`}>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}><Icon className={`w-6 h-6 ${style.icon}`} /></div>
                  <span className={`text-xs font-black ${style.icon}`}>{program.code}</span>
                </div>

                <h3 className="text-xl font-black mb-5">{program.name}</h3>
                <dl className={`space-y-4 text-sm flex-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div><dt className="text-xs uppercase tracking-wider text-slate-500 mb-1">Faixa etária</dt><dd className="font-bold">{program.age}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-slate-500 mb-1">Foco</dt><dd className="font-semibold leading-relaxed">{program.focus}</dd></div>
                  <div><dt className="text-xs uppercase tracking-wider text-slate-500 mb-1">Experiência</dt><dd className="leading-relaxed">{program.experience}</dd></div>
                </dl>

                <div className={`mt-6 pt-5 border-t space-y-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <button type="button" onClick={() => onSelectProgram(program.id)} className={`w-full min-h-12 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 ${style.button}`}>Ver modalidade <ArrowRight className="w-4 h-4" /></button>
                  <button type="button" onClick={() => onOpenParticipation(program.code)} className={`w-full min-h-11 rounded-xl border text-sm font-semibold ${isDark ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800' : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'}`}>Tenho interesse</button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="text-xs text-slate-500 text-center mt-5">*A faixa etária da FIRST LEGO League varia conforme edição e região.</p>
      </div>
    </section>
  );
};
