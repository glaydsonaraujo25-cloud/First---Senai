import React, { useState } from 'react';
import { 
  Flame, 
  Users, 
  Lightbulb, 
  Wrench, 
  Code, 
  Gauge, 
  Trophy, 
  Calendar,
  ChevronRight
} from 'lucide-react';

export const SeasonTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const seasonSteps = [
    {
      num: '01',
      title: 'DESAFIO',
      subtitle: 'Um novo desafio é apresentado',
      icon: Flame,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
      bgGlow: 'bg-amber-500/10',
      description: 'O lançamento mundial do tema da temporada (Kickoff) revela as regras, missões da arena e o problema socioambiental a ser investigado.',
      details: 'Milhares de estudantes acompanham a transmissão global ao vivo e iniciam o estudo aprofundado do manual de regras.'
    },
    {
      num: '02',
      title: 'EQUIPE',
      subtitle: 'Os estudantes organizam suas funções',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-400',
      bgGlow: 'bg-blue-500/10',
      description: 'Divisão em subequipes multidisciplinares: mecânica, elétrica, software, documentação de engenharia, marketing e captação.',
      details: 'Cada membro assume papéis claros sob mentoria de professores do SENAI e engenheiros voluntários da indústria.'
    },
    {
      num: '03',
      title: 'PROJETO',
      subtitle: 'A equipe desenvolve sua estratégia',
      icon: Lightbulb,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10',
      description: 'Brainstorming tático, análise de pontuação, pesquisa do projeto de inovação e modelagem 3D em software CAD.',
      details: 'Cálculo de relações de transmissão, seleção de atuadores e desenho esquemático dos componentes mecânicos.'
    },
    {
      num: '04',
      title: 'CONSTRUÇÃO',
      subtitle: 'O robô começa a ganhar forma',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      textColor: 'text-orange-400',
      bgGlow: 'bg-orange-500/10',
      description: 'Corte a laser, usinagem CNC, impressão 3D e montagem do chassi estrutural nos laboratórios e FabLabs do SENAI.',
      details: 'Integração de caixas de redução, garras de captura, sistemas de elevação e cabeamento elétrico seguro.'
    },
    {
      num: '05',
      title: 'PROGRAMAÇÃO',
      subtitle: 'Sensores, motores e algoritmos entram em ação',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      textColor: 'text-indigo-400',
      bgGlow: 'bg-indigo-500/10',
      description: 'Codificação das rotinas autônomas com visão computacional, controle de malha fechada PID e telemetria em tempo real.',
      details: 'Calibração de giroscópios, odometria e mapeamento de botões nos gamepads para os pilotos.'
    },
    {
      num: '06',
      title: 'TESTES',
      subtitle: 'O robô é testado e melhorado',
      icon: Gauge,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      description: 'Simulações de partidas reais na pista oficial, cronometragem de ciclos e refinamento contínuo de confiabilidade.',
      details: 'Treinamento exaustivo dos pilotos (Drive Team) e preparação dos discursos para as bancas de juízes.'
    },
    {
      num: '07',
      title: 'COMPETIÇÃO',
      subtitle: 'As equipes entram na arena',
      icon: Trophy,
      color: 'from-rose-500 to-red-600',
      textColor: 'text-rose-400',
      bgGlow: 'bg-rose-500/10',
      description: 'O grande momento: celebração da tecnologia, partidas de qualificação, alianças estratégicas e premiações em torneios nacionais e mundiais.',
      details: 'Torcida nas arquibancadas, cooperação nos boxes (pits) e conquista de vagas para o FIRST® Championship.'
    }
  ];

  return (
    <section id="temporada" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>CICLO COMPLETO DE ENGENHARIA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            COMO FUNCIONA UMA TEMPORADA?
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Do anúncio mundial do desafio até a consagração na arena: conheça as 7 fases que transformam estudantes em engenheiros e cientistas.
          </p>
        </div>

        {/* 7-Step Interactive Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {seasonSteps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = selectedStep === idx;
            return (
              <button
                key={step.num}
                id={`season-step-${idx}`}
                onClick={() => setSelectedStep(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-950/60 ring-2 ring-blue-500/30 scale-102'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-black ${isCurrent ? step.textColor : 'text-slate-500'}`}>
                    {step.num}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isCurrent ? step.bgGlow : 'bg-slate-800'}`}>
                    <Icon className={`w-4 h-4 ${isCurrent ? step.textColor : 'text-slate-400'}`} />
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide uppercase truncate">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                    {step.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${seasonSteps[selectedStep].color} flex items-center justify-center text-white font-black text-xl shadow-lg shrink-0`}>
                {seasonSteps[selectedStep].num}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                  ETAPA {seasonSteps[selectedStep].num} DE 07
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {seasonSteps[selectedStep].title} — {seasonSteps[selectedStep].subtitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : seasonSteps.length - 1))}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setSelectedStep((prev) => (prev < seasonSteps.length - 1 ? prev + 1 : 0))}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Próxima Etapa →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 items-center">
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-200">
                O que acontece nessa fase?
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {seasonSteps[selectedStep].description}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <strong>Papel do SENAI:</strong> {seasonSteps[selectedStep].details}
              </p>
            </div>

            <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Linha do Tempo Típica da Temporada
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Kickoff Global:</span>
                  <strong className="text-amber-400">Agosto a Janeiro</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Engenharia & Construção:</span>
                  <strong className="text-sky-400">8 a 16 Semanas</strong>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Torneios Regionais SENAI:</span>
                  <strong className="text-blue-400">Fevereiro a Março</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Festival Nacional & Mundial:</span>
                  <strong className="text-red-400">Março a Abril</strong>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
