import React, { useState } from 'react';
import { 
  Compass, 
  Cpu, 
  Wrench, 
  Bot, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Users,
  Layers
} from 'lucide-react';

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'fll',
      program: 'FIRST® LEGO® League',
      code: 'FLL',
      stageTitle: '01. DESCOBRIR',
      age: '9 a 15 anos',
      educationStage: 'Ensino Fundamental',
      icon: Cpu,
      themeColor: 'border-amber-500 text-amber-500 bg-amber-500/10',
      badgeBg: 'bg-amber-500',
      headline: 'A centelha inicial da curiosidade científica',
      summary: 'Crianças e jovens aprendem os conceitos primordiais de lógica, matemática e programação através de blocos e peças LEGO® Education, integrando pesquisa científica e trabalho em equipe.',
      tools: ['LEGO® SPIKE™ Prime', 'Programação em Blocos / Python', 'Projeto de Inovação'],
      outcomes: 'Pensamento computacional, oratória em apresentações e empatia colaborativa.'
    },
    {
      id: 'ftc',
      program: 'FIRST® Tech Challenge',
      code: 'FTC',
      stageTitle: '02. CONSTRUIR',
      age: '12 a 18 anos',
      educationStage: 'Fundamental II e Ensino Médio / Técnico',
      icon: Wrench,
      themeColor: 'border-orange-500 text-orange-500 bg-orange-500/10',
      badgeBg: 'bg-orange-500',
      headline: 'Engenharia aplicada e autonomia em arena',
      summary: 'Estudantes projetam robôs de alumínio usinado de até 19kg, programando em Java com visão computacional para navegar em arenas estratégicas de alianças 2 vs 2.',
      tools: ['REV Robotics / goBILDA', 'Java / Android Studio', 'Visão AprilTags / CAD 3D'],
      outcomes: 'Desenvolvimento de software avançado, modelagem 3D e gestão de portfólio de engenharia.'
    },
    {
      id: 'frc',
      program: 'FIRST® Robotics Competition',
      code: 'FRC',
      stageTitle: '03. ENGENHEIRAR',
      age: '14 a 19 anos',
      educationStage: 'Ensino Médio e Técnico SENAI',
      icon: Bot,
      themeColor: 'border-blue-500 text-blue-500 bg-blue-500/10',
      badgeBg: 'bg-blue-600',
      headline: 'A experiência definitiva de alta engenharia industrial',
      summary: 'Robôs de escala real com até 56kg construídos em ritmo de maratona industrial com usinagem CNC, pneumática de alta pressão, módulos de tração swerve e sistemas autônomos.',
      tools: ['NI roboRIO / Motores Brushless', 'C++ / Java / WPILib', 'Usinagem CNC & Pneumática'],
      outcomes: 'Engenharia de precisão, liderança executiva, captação de patrocínios e maturidade industrial.'
    },
    {
      id: 'carreiras',
      program: 'Carreiras STEM & Indústria 4.0',
      code: 'FUTURO',
      stageTitle: '04. TRANSFORMAR',
      age: 'Jovens Profissionais & Universitários',
      educationStage: 'Mercado de Trabalho & Inovação Global',
      icon: Briefcase,
      themeColor: 'border-emerald-500 text-emerald-500 bg-emerald-500/10',
      badgeBg: 'bg-emerald-600',
      headline: 'Liderança na transformação tecnológica do Brasil',
      summary: 'Egressos da jornada FIRST® + SENAI são disputados pelas principais indústrias automotivas, aeronáuticas, de energia, automação e centros de pesquisa no Brasil e no exterior.',
      tools: ['Engenharia Mecatrônica & Robótica', 'Inteligência Artificial & Software', 'Liderança Industrial SENAI'],
      outcomes: 'Profissionais completos com sólida formação técnica, inteligência socioemocional e mentalidade inovadora.'
    }
  ];

  return (
    <section id="jornada" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>PROGRESSÃO FORMATIVA CONTÍNUA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            UMA JORNADA. TRÊS DESAFIOS.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Da primeira descoberta à engenharia de alto nível. Veja como cada etapa prepara o estudante para o próximo salto tecnológico.
          </p>
        </div>

        {/* Interactive Progress Bar & Selector (Desktop & Tablet) */}
        <div className="hidden md:grid grid-cols-4 gap-4 mb-10 relative">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 -z-0"></div>
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                id={`journey-step-btn-${idx}`}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 border-blue-500 shadow-xl shadow-blue-900/30 scale-102 ring-2 ring-blue-500/20' 
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm text-white ${step.badgeBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {step.stageTitle}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {step.code}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {step.program}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {step.age}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Quick Selector */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 border transition-all ${
                activeStep === idx
                  ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              {step.code} • {step.stageTitle}
            </button>
          ))}
        </div>

        {/* Featured Stage Detail Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-md ${steps[activeStep].badgeBg}`}>
                  {steps[activeStep].code}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
                  {steps[activeStep].educationStage}
                </span>
                <span className="text-xs font-semibold text-blue-400">
                  {steps[activeStep].age}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {steps[activeStep].program}
                </h3>
                <p className="text-lg font-medium text-slate-300">
                  "{steps[activeStep].headline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].summary}
              </p>

              {/* Tools & Outcomes Pills */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    Plataformas & Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {steps[activeStep].tools.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Impacto e Resultados
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {steps[activeStep].outcomes}
                  </p>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`#${steps[activeStep].id === 'carreiras' ? 'alem-dos-robos' : steps[activeStep].id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <span>Ver Detalhes do Programa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))}
                    className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-medium transition-all"
                  >
                    Próximo Nível →
                  </button>
                )}
              </div>

            </div>

            {/* Right Stage Visual Representation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-950 p-6 flex flex-col justify-between min-h-[300px]">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">TRILHA STEM // FIRST-SENAI</span>
                </div>

                <div className="py-6 text-center space-y-4">
                  <div className="inline-block p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
                    {React.createElement(steps[activeStep].icon, { className: 'w-16 h-16 text-blue-400 mx-auto animate-pulse-subtle' })}
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                      NÍVEL {activeStep + 1} DE 4
                    </span>
                    <h5 className="text-xl font-black text-white">
                      {steps[activeStep].stageTitle}
                    </h5>
                  </div>
                </div>

                <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800 text-center">
                  <p className="text-[11px] text-slate-400">
                    O SENAI oferece capacitação técnica contínua para estudantes e professores em todas as etapas da jornada.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
