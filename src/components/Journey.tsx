import React, { useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Compass, Cpu, Layers3, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    id: 'fll',
    code: 'FLL',
    title: 'Descobrir',
    program: 'FIRST® LEGO® League',
    age: '5–16 anos*',
    Icon: Cpu,
    accent: 'amber',
    summary: 'Introdução prática a robótica, ciência e resolução de problemas com desafios adequados à edição e à faixa etária.',
    highlights: ['Construção e programação', 'Projeto de inovação', 'Trabalho em equipe e apresentação'],
  },
  {
    id: 'ftc',
    code: 'FTC',
    title: 'Construir',
    program: 'FIRST® Tech Challenge',
    age: '12–18 anos',
    Icon: Wrench,
    accent: 'orange',
    summary: 'A equipe avança para uma experiência de engenharia aplicada, integrando mecânica, programação, testes e estratégia de competição.',
    highlights: ['Projeto mecânico', 'Programação e sensores', 'Estratégia e documentação'],
  },
  {
    id: 'frc',
    code: 'FRC',
    title: 'Engenheirar',
    program: 'FIRST® Robotics Competition',
    age: '14–18 anos',
    Icon: Bot,
    accent: 'blue',
    summary: 'Uma experiência multidisciplinar de grande escala, reunindo engenharia, software, fabricação, estratégia, comunicação e gestão de equipe.',
    highlights: ['Integração de sistemas', 'Software e automação', 'Liderança e gestão de projeto'],
  },
] as const;

const accent = {
  amber: { text: 'text-amber-600', badge: 'bg-amber-500 text-slate-950', border: 'border-amber-300 dark:border-amber-500/40' },
  orange: { text: 'text-orange-600', badge: 'bg-orange-600 text-white', border: 'border-orange-300 dark:border-orange-500/40' },
  blue: { text: 'text-blue-600', badge: 'bg-blue-600 text-white', border: 'border-blue-300 dark:border-blue-500/40' },
} as const;

export const Journey: React.FC = () => {
  const [active, setActive] = useState(0);
  const { isDark } = useTheme();
  const current = steps[active];
  const CurrentIcon = current.Icon;
  const currentStyle = accent[current.accent];

  return (
    <section id="jornada" className={`py-16 sm:py-24 border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
            <Compass className="w-3.5 h-3.5" /> JORNADA FIRST® NO CONTEXTO SENAI-DF
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">TRÊS NÍVEIS DE DESAFIO</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>FLL, FTC e FRC representam experiências diferentes. A progressão abaixo é uma forma simples de visualizar como a complexidade pode crescer ao longo da formação em robótica.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            const style = accent[step.accent];
            const selected = index === active;
            return (
              <button key={step.id} type="button" onClick={() => setActive(index)} className={`rounded-2xl border-2 p-5 text-left transition-all ${style.border} ${selected ? isDark ? 'bg-slate-900 shadow-xl' : 'bg-slate-50 shadow-md' : isDark ? 'bg-slate-900/50 hover:bg-slate-900' : 'bg-white hover:bg-slate-50'}`} aria-pressed={selected}>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${style.badge}`}><Icon className="w-5 h-5" /></div>
                  <span className={`text-xs font-black ${style.text}`}>{step.code}</span>
                </div>
                <h3 className="font-black text-lg">{step.title}</h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step.program}</p>
                <p className="text-xs text-slate-500 mt-2">{step.age}</p>
              </button>
            );
          })}
        </div>

        <div className={`rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${currentStyle.badge}`}><CurrentIcon className="w-6 h-6" /></div>
                <div>
                  <p className={`text-xs font-black uppercase tracking-wider ${currentStyle.text}`}>{current.code} · {current.title}</p>
                  <h3 className="text-2xl sm:text-3xl font-black mt-1">{current.program}</h3>
                </div>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{current.summary}</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {current.highlights.map(item => (
                  <div key={item} className={`rounded-xl border p-4 flex items-start gap-2.5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${currentStyle.text}`} />
                    <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-4 rounded-2xl border p-6 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
              <Layers3 className={`w-7 h-7 mb-4 ${currentStyle.text}`} />
              <h4 className="font-black mb-2">Como usar esta jornada</h4>
              <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Ela serve como orientação visual. A disponibilidade de modalidades, equipes e atividades no Distrito Federal deve ser confirmada com os canais oficiais.</p>
              <a href={`#${current.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-500">Ver seção da modalidade <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 text-center mt-5">*A faixa etária da FIRST LEGO League varia conforme edição e região.</p>
      </div>
    </section>
  );
};
