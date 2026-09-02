import React, { useMemo, useState } from 'react';
import { ArrowRight, Bot, Compass, Cpu, Sparkles, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramFitGuideProps {
  onSelectProgram: (program: 'fll' | 'ftc' | 'frc') => void;
}

type Profile = 'start' | 'build' | 'engineering';

const profiles = {
  start: {
    label: 'Estou começando',
    description: 'Quero aprender robótica, programação e resolução de problemas de forma acessível e prática.',
    program: 'fll' as const,
    code: 'FLL',
    name: 'FIRST® LEGO® League',
    reason: 'É a porta de entrada mais amigável para explorar robótica, ciência, criatividade e trabalho em equipe.',
    Icon: Cpu,
    accent: 'text-amber-600',
    card: 'border-amber-300 bg-amber-50/70 dark:border-amber-500/40 dark:bg-amber-500/10',
  },
  build: {
    label: 'Quero construir e programar',
    description: 'Quero trabalhar com mecânica, sensores, código e estratégia em um robô competitivo.',
    program: 'ftc' as const,
    code: 'FTC',
    name: 'FIRST® Tech Challenge',
    reason: 'Combina engenharia aplicada, programação e estratégia em uma escala intermediária muito prática.',
    Icon: Wrench,
    accent: 'text-orange-600',
    card: 'border-orange-300 bg-orange-50/70 dark:border-orange-500/40 dark:bg-orange-500/10',
  },
  engineering: {
    label: 'Quero engenharia avançada',
    description: 'Quero participar de um projeto multidisciplinar maior, com software, fabricação, gestão e estratégia.',
    program: 'frc' as const,
    code: 'FRC',
    name: 'FIRST® Robotics Competition',
    reason: 'É a experiência de maior escala, aproximando a equipe de desafios reais de engenharia e gestão de projeto.',
    Icon: Bot,
    accent: 'text-blue-600',
    card: 'border-blue-300 bg-blue-50/70 dark:border-blue-500/40 dark:bg-blue-500/10',
  },
};

export const ProgramFitGuide: React.FC<ProgramFitGuideProps> = ({ onSelectProgram }) => {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState<Profile>('start');
  const result = useMemo(() => profiles[selected], [selected]);
  const ResultIcon = result.Icon;

  return (
    <section id="guia-modalidades" className={`py-16 sm:py-24 border-t ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`} aria-labelledby="fit-guide-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}><Compass className="w-3.5 h-3.5" /> ORIENTAÇÃO RÁPIDA</div>
          <h2 id="fit-guide-title" className="text-3xl sm:text-5xl font-black tracking-tight mb-4">QUAL PROGRAMA COMBINA COMIGO?</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>Escolha o perfil que mais se aproxima do que você procura. É apenas uma orientação visual — idade, disponibilidade e participação devem ser confirmadas nos canais oficiais.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
            {(Object.keys(profiles) as Profile[]).map(key => {
              const item = profiles[key];
              const Icon = item.Icon;
              const active = selected === key;
              return <button key={key} type="button" onClick={() => setSelected(key)} aria-pressed={active} className={`rounded-2xl border-2 p-5 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${active ? item.card : isDark ? 'border-slate-800 bg-slate-900/60 hover:border-slate-700' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                <Icon className={`w-6 h-6 mb-4 ${active ? item.accent : 'text-slate-400'}`} />
                <strong className="block text-base mb-2">{item.label}</strong>
                <span className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</span>
              </button>;
            })}
          </div>

          <div className={`lg:col-span-5 rounded-3xl border-2 p-6 sm:p-8 ${result.card}`} aria-live="polite">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center"><ResultIcon className={`w-6 h-6 ${result.accent}`} /></div>
              <span className={`text-sm font-black ${result.accent}`}>{result.code}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 mb-2"><Sparkles className="w-4 h-4" /> Boa opção para seu perfil</div>
            <h3 className="text-2xl font-black mb-3">{result.name}</h3>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{result.reason}</p>
            <button type="button" onClick={() => onSelectProgram(result.program)} className="inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Conhecer {result.code} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
