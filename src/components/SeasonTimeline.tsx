import { seasonMilestones, seasonSource, formatSeasonDate, milestoneStatus } from '../data/season';
import React, { useState } from 'react';
import { Calendar, Check, Code, ExternalLink, Flame, Gauge, Lightbulb, Trophy, Users, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CANOPY_URL = 'https://www.firstinspires.org/first-canopy';

const seasonSteps = [
  { num: '01', title: 'REVELAÇÃO', subtitle: 'O desafio da modalidade é lançado', icon: Flame, accent: 'text-amber-500', soft: 'bg-amber-500/10', description: 'Cada programa tem seu próprio calendário de lançamento. A equipe consulta o material oficial da temporada para entender regras, objetivos e recursos disponíveis.', practice: 'Ler materiais oficiais, assistir ao kickoff quando aplicável e identificar o que precisa ser aprendido.' },
  { num: '02', title: 'EQUIPE', subtitle: 'Papéis e objetivos são organizados', icon: Users, accent: 'text-blue-500', soft: 'bg-blue-500/10', description: 'Estudantes e mentores organizam responsabilidades de acordo com o programa, experiência da equipe e necessidades do desafio.', practice: 'Distribuir responsabilidades, combinar rotinas de trabalho e definir como decisões serão registradas.' },
  { num: '03', title: 'PROJETO', subtitle: 'Ideias viram estratégia', icon: Lightbulb, accent: 'text-cyan-500', soft: 'bg-cyan-500/10', description: 'A equipe pesquisa, faz brainstorming, cria protótipos e compara alternativas antes de escolher as soluções mais promissoras.', practice: 'Prototipar cedo, testar hipóteses e documentar por que cada solução foi escolhida.' },
  { num: '04', title: 'CONSTRUÇÃO', subtitle: 'A solução ganha forma', icon: Wrench, accent: 'text-orange-500', soft: 'bg-orange-500/10', description: 'A construção varia bastante entre FLL, FTC e FRC. O foco é transformar o projeto em um sistema confiável dentro das regras da modalidade.', practice: 'Montar, integrar componentes e revisar segurança, manutenção e facilidade de reparo.' },
  { num: '05', title: 'PROGRAMAÇÃO', subtitle: 'Comportamentos são implementados', icon: Code, accent: 'text-indigo-500', soft: 'bg-indigo-500/10', description: 'A equipe programa os comportamentos necessários ao desafio, usando as ferramentas compatíveis com sua modalidade e sua plataforma.', practice: 'Construir versões pequenas, testar frequentemente e manter código compreensível para a equipe.' },
  { num: '06', title: 'TESTES', subtitle: 'Iteração melhora o resultado', icon: Gauge, accent: 'text-emerald-500', soft: 'bg-emerald-500/10', description: 'Testes repetidos ajudam a encontrar falhas, medir consistência e orientar melhorias técnicas e estratégicas.', practice: 'Registrar resultados, priorizar problemas e repetir ciclos de teste e melhoria.' },
  { num: '07', title: 'EVENTO', subtitle: 'A equipe compartilha e compete', icon: Trophy, accent: 'text-rose-500', soft: 'bg-rose-500/10', description: 'Eventos FIRST combinam desafio técnico, colaboração, comunicação e celebração do aprendizado. Formato e calendário variam por programa e região.', practice: 'Confirmar datas e requisitos no localizador oficial de eventos antes de planejar participação.' }
];


export const SeasonTimeline: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedStep, setSelectedStep] = useState(0);
  const current = seasonSteps[selectedStep];
  const progress = ((selectedStep + 1) / seasonSteps.length) * 100;

  return (
    <section id="temporada" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-blue-400' : 'bg-white border-slate-200 text-blue-700'}`}><Calendar className="w-3.5 h-3.5" /> FIRST® CANOPY™ 2026–2027</div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech">DA REVELAÇÃO AO EVENTO</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Uma visão educacional do ciclo de trabalho de uma equipe. O calendário real depende do programa e da região.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
          {seasonMilestones.map(item => <div key={item.program} className={`rounded-2xl border p-4 text-center ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}><strong className="block text-sm">{item.program}</strong><span className="block text-xl font-black text-blue-600 mt-1">{formatSeasonDate(item.isoDate)}</span><span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{milestoneStatus(item.isoDate)}</span></div>)}
        </div>

        <div className="max-w-5xl mx-auto mb-5" aria-label={`Progresso visual da jornada: etapa ${selectedStep + 1} de ${seasonSteps.length}`}>
          <div className="flex items-center justify-between text-xs font-bold mb-2"><span className="text-blue-600">Etapa {selectedStep + 1} de {seasonSteps.length}</span><span className={isDark ? 'text-slate-400' : 'text-slate-500'}>{Math.round(progress)}%</span></div>
          <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}><div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 transition-[width] duration-300" style={{ width: `${progress}%` }} /></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {seasonSteps.map((step, idx) => { const Icon = step.icon; const active = idx === selectedStep; const completed = idx < selectedStep; return <button key={step.num} onClick={() => setSelectedStep(idx)} aria-pressed={active} className={`p-3 rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${active ? (isDark ? 'bg-slate-900 border-blue-500' : 'bg-white border-blue-500 shadow-md') : (isDark ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white/70 border-slate-200 hover:border-slate-300')}`}><div className="flex items-center justify-between mb-2"><span className={`text-xs font-black font-mono ${active ? step.accent : completed ? 'text-emerald-500' : 'text-slate-500'}`}>{completed ? <Check className="w-4 h-4" /> : step.num}</span><div className={`p-1.5 rounded-lg ${active ? step.soft : (isDark ? 'bg-slate-800' : 'bg-slate-100')}`}><Icon className={`w-4 h-4 ${active ? step.accent : 'text-slate-400'}`} /></div></div><strong className="block text-[11px] uppercase tracking-wide">{step.title}</strong></button>; })}
        </div>

        <div className={`rounded-3xl border p-6 sm:p-9 shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div className="max-w-3xl"><div className="flex items-center gap-3 mb-4"><div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${current.soft}`}><current.icon className={`w-6 h-6 ${current.accent}`} /></div><div><span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Etapa {current.num} de 07</span><h3 className="text-2xl sm:text-3xl font-black">{current.title}</h3><p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{current.subtitle}</p></div></div><p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{current.description}</p><div className={`mt-5 rounded-xl border p-4 text-sm ${isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}><strong>Na prática:</strong> {current.practice}</div></div>
            <div className="lg:w-72 shrink-0 space-y-3"><a href={CANOPY_URL} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold">Temporada oficial <ExternalLink className="w-4 h-4" /></a><a href="/eventos" className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold ${isDark ? 'border-slate-700 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>Eventos e marcos</a><div className="text-xs leading-relaxed text-center text-slate-500">Datas, regras e materiais podem mudar. Use sempre a documentação oficial antes de competir.</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
