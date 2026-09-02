import React from 'react';
import { ArrowRight, Bot, Cpu, Scale, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramComparatorProps {
  onSelectProgram: (programId: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (program?: string) => void;
}

const programs = [
  { id: 'fll' as const, code: 'FLL', name: 'FIRST® LEGO® League', age: '5–16 anos*', robot: 'LEGO® educacional', complexity: 'Inicial → intermediária', programming: 'Visual / plataforma LEGO®', mechanics: 'Construção modular', team: 'Pequena equipe', skills: 'Criatividade, pesquisa, programação e apresentação', Icon: Cpu, accent: 'amber' },
  { id: 'ftc' as const, code: 'FTC', name: 'FIRST® Tech Challenge', age: '12–18 anos', robot: 'Robô metálico de competição', complexity: 'Intermediária → avançada', programming: 'Java e ferramentas compatíveis', mechanics: 'Mecânica, sensores e integração', team: 'Equipe técnica multidisciplinar', skills: 'CAD, mecânica, código, estratégia e documentação', Icon: Wrench, accent: 'orange' },
  { id: 'frc' as const, code: 'FRC', name: 'FIRST® Robotics Competition', age: '14–18 anos', robot: 'Robô de grande porte', complexity: 'Avançada', programming: 'Software e automação', mechanics: 'Fabricação e sistemas integrados', team: 'Equipe multidisciplinar maior', skills: 'Engenharia, software, fabricação, liderança e gestão', Icon: Bot, accent: 'blue' },
];

const styles = {
  amber: { icon: 'text-amber-600', border: 'border-amber-300 dark:border-amber-500/40', button: 'bg-amber-500 hover:bg-amber-400 text-slate-950' },
  orange: { icon: 'text-orange-600', border: 'border-orange-300 dark:border-orange-500/40', button: 'bg-orange-600 hover:bg-orange-500 text-white' },
  blue: { icon: 'text-blue-600', border: 'border-blue-300 dark:border-blue-500/40', button: 'bg-blue-600 hover:bg-blue-500 text-white' },
} as const;

const rows = [
  ['Faixa etária', 'age'], ['Tipo de robô', 'robot'], ['Complexidade', 'complexity'], ['Programação', 'programming'], ['Mecânica', 'mechanics'], ['Formato da equipe', 'team'], ['Habilidades', 'skills']
] as const;

export const ProgramComparator: React.FC<ProgramComparatorProps> = ({ onSelectProgram }) => {
  const { isDark } = useTheme();

  return (
    <section id="comparar" className={`py-16 sm:py-24 border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`} aria-labelledby="program-comparison-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-300' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}><Scale className="w-3.5 h-3.5" /> COMPARAÇÃO COMPLETA</div>
          <h2 id="program-comparison-title" className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FLL × FTC × FRC</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Compare rapidamente a escala técnica, o tipo de robô e as habilidades mais presentes em cada experiência.</p>
        </div>

        <div className="lg:hidden grid gap-4">
          {programs.map(program => { const Icon = program.Icon; const style = styles[program.accent]; return <article key={program.id} className={`rounded-3xl border-2 p-6 ${style.border} ${isDark ? 'bg-slate-950' : 'bg-white shadow-sm'}`}>
            <div className="flex items-center justify-between mb-5"><Icon className={`w-7 h-7 ${style.icon}`} /><span className={`font-black ${style.icon}`}>{program.code}</span></div>
            <h3 className="text-xl font-black mb-5">{program.name}</h3>
            <dl className="space-y-3">{rows.map(([label,key]) => <div key={key}><dt className="text-[11px] uppercase tracking-wider text-slate-500">{label}</dt><dd className={`text-sm font-semibold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{program[key]}</dd></div>)}</dl>
            <button onClick={() => onSelectProgram(program.id)} className={`mt-6 w-full min-h-12 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 ${style.button}`}>Ver {program.code} <ArrowRight className="w-4 h-4" /></button>
          </article>; })}
        </div>

        <div className={`hidden lg:block overflow-hidden rounded-3xl border ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white shadow-md'}`}>
          <div className="grid grid-cols-[220px_repeat(3,1fr)]">
            <div className={`p-5 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`} />
            {programs.map(program => { const Icon = program.Icon; const style = styles[program.accent]; return <div key={program.id} className={`p-5 border-b border-l ${isDark ? 'border-slate-800' : 'border-slate-200'}`}><div className="flex items-center gap-3"><Icon className={`w-6 h-6 ${style.icon}`} /><div><span className={`text-xs font-black ${style.icon}`}>{program.code}</span><h3 className="font-black text-sm mt-0.5">{program.name}</h3></div></div></div>; })}
            {rows.map(([label,key]) => <React.Fragment key={key}><div className={`p-4 font-bold text-sm border-b ${isDark ? 'border-slate-800 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}>{label}</div>{programs.map(program => <div key={`${program.id}-${key}`} className={`p-4 text-sm leading-relaxed border-b border-l ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'}`}>{program[key]}</div>)}</React.Fragment>)}
            <div className={`p-4 ${isDark ? 'bg-slate-900/60' : 'bg-slate-50'}`}>Detalhes</div>
            {programs.map(program => { const style = styles[program.accent]; return <div key={`${program.id}-cta`} className={`p-4 border-l ${isDark ? 'border-slate-800' : 'border-slate-200'}`}><button onClick={() => onSelectProgram(program.id)} className={`w-full min-h-11 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 ${style.button}`}>Abrir {program.code} <ArrowRight className="w-4 h-4" /></button></div>; })}
          </div>
        </div>
        <p className="text-xs text-slate-500 text-center mt-5">*A faixa etária e alguns requisitos variam conforme edição, programa e região. Confirme sempre nas fontes oficiais.</p>
      </div>
    </section>
  );
};
