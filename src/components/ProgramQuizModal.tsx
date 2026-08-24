import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle, 
  Cpu, 
  Wrench, 
  Bot, 
  ArrowRight,
  School,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProgramQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (programId: string) => void;
  onOpenParticipation: (program?: string) => void;
}

export const ProgramQuizModal: React.FC<ProgramQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
  onOpenParticipation
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    age?: string;
    school?: string;
    interest?: string;
    experience?: string;
  }>({});

  if (!isOpen) return null;

  const handleSelectAnswer = (key: 'age' | 'school' | 'interest' | 'experience', value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(4); // Result step
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(1);
  };

  // Determine recommendation algorithm
  const getRecommendation = () => {
    const { age, interest, experience } = answers;

    if (age === '9-14' || interest === 'lego_iniciacao') {
      return {
        id: 'fll',
        code: 'FLL',
        name: 'FIRST® LEGO® League',
        tagline: 'O ponto de partida perfeito para a sua jornada STEM',
        badgeColor: 'bg-amber-500',
        textColor: 'text-amber-400',
        borderColor: 'border-amber-500/50',
        icon: Cpu,
        reasons: [
          'Ideal para a sua faixa etária e estágio escolar (Ensino Fundamental).',
          'Aprenda lógica de programação e mecânica de forma lúdica com LEGO® SPIKE Prime.',
          'Desenvolva projetos de pesquisa científica sobre problemas reais do nosso planeta.'
        ],
        nextStep: 'Encontre uma equipe FLL em sua escola ou unidade SESI/SENAI.'
      };
    }

    if (age === '12-18' && (interest === 'robot_medio' || experience === 'iniciante_intermed')) {
      return {
        id: 'ftc',
        code: 'FTC',
        name: 'FIRST® Tech Challenge',
        tagline: 'Engenharia aplicada com robôs compactos e velozes',
        badgeColor: 'bg-orange-600',
        textColor: 'text-orange-400',
        borderColor: 'border-orange-500/50',
        icon: Wrench,
        reasons: [
          'Perfeito para estudantes do Fundamental II e Ensino Médio/Técnico.',
          'Aprenda modelagem CAD 3D, usinagem e programação em Java no Android Studio.',
          'Pilote e dispute estratégias de alianças táticas em arena competitiva de 3,6 metros.'
        ],
        nextStep: 'Conecte-se aos laboratórios do SENAI para formação de equipes FTC.'
      };
    }

    // Default to FRC for advanced / older youth / high engineering
    return {
      id: 'frc',
      code: 'FRC',
      name: 'FIRST® Robotics Competition',
      tagline: 'O desafio máximo de engenharia e tecnologia em escala industrial',
      badgeColor: 'bg-blue-600',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/50',
      icon: Bot,
      reasons: [
        'Indicado para estudantes de 14 a 19 anos (Ensino Médio e Técnico SENAI).',
        'Construa robôs industriais de 56kg com usinagem CNC, pneumática e Swerve Drive.',
        'Atue em equipes que operam como empresas de tecnologia com mentoria da indústria.'
      ],
      nextStep: 'Inscreva-se nos polos de treinamento FRC da rede SENAI Brasil.'
    };
  };

  const result = currentStep === 4 ? getRecommendation() : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden text-white relative">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-sky-400" />
            <h3 id="quiz-modal-title" className="text-base font-bold text-white">
              Descubra seu Programa Ideal (FIRST® + SENAI)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar modal de quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6">
          
          {/* Step 1: Age & School */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                Pergunta 1 de 3 • Faixa Etária e Escolaridade
              </div>
              <h4 className="text-xl font-bold text-white">
                Qual é a sua idade ou o nível dos seus estudantes?
              </h4>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <button
                  onClick={() => handleSelectAnswer('age', '9-14')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-amber-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-amber-400">9 a 14 anos</strong>
                    <span className="text-xs text-slate-400">Ensino Fundamental I e II</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('age', '12-18')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-orange-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-orange-400">12 a 18 anos</strong>
                    <span className="text-xs text-slate-400">Fundamental II ou Ensino Médio</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('age', '14-19')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-blue-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-blue-400">14 a 19 anos</strong>
                    <span className="text-xs text-slate-400">Ensino Médio, Técnico SENAI ou Integrado</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Main Area of Interest */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                Pergunta 2 de 3 • Área de Interesse
              </div>
              <h4 className="text-xl font-bold text-white">
                O que você mais gostaria de aprender e construir?
              </h4>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <button
                  onClick={() => handleSelectAnswer('interest', 'lego_iniciacao')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-amber-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-amber-400">Lógica, Desafios Criativos & LEGO®</strong>
                    <span className="text-xs text-slate-400">Construção com kits educativos, sensores e projetos de pesquisa.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('interest', 'robot_medio')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-orange-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-orange-400">Modelagem 3D, Metal & Java no Android</strong>
                    <span className="text-xs text-slate-400">Robôs de alumínio usinado de 19kg e arenas estratégicas de alianças.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('interest', 'industrial_eng')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-blue-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-blue-400">Alta Engenharia, Máquinas CNC & Escala Real (56kg)</strong>
                    <span className="text-xs text-slate-400">Pneumática pesada, módulos Swerve 360°, arenas de basquete e gestão empresarial.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Prior Experience */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                Pergunta 3 de 3 • Experiência Prévia
              </div>
              <h4 className="text-xl font-bold text-white">
                Qual é a sua familiaridade atual com robótica ou programação?
              </h4>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <button
                  onClick={() => handleSelectAnswer('experience', 'iniciante')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-emerald-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-emerald-400">Iniciante Total</strong>
                    <span className="text-xs text-slate-400">Nunca montei ou programei um robô antes.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('experience', 'iniciante_intermed')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-sky-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-sky-400">Intermediário</strong>
                    <span className="text-xs text-slate-400">Conheço um pouco de lógica, Arduino ou blocos de código.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleSelectAnswer('experience', 'avancado')}
                  className="p-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-indigo-500 hover:bg-slate-800 text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-white group-hover:text-indigo-400">Avançado / Curso Técnico</strong>
                    <span className="text-xs text-slate-400">Já curso Mecânica, Eletroeletrônica, Informática ou participei de torneios.</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Result & Match */}
          {currentStep === 4 && result && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              
              <div className={`p-5 rounded-2xl border ${result.borderColor} bg-slate-950 text-center relative overflow-hidden`}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-500/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>MATCH 100% COMPATÍVEL</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded text-xs font-black text-white ${result.badgeColor}`}>
                    {result.code}
                  </span>
                  <h4 className="text-2xl font-black text-white">
                    {result.name}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 italic mb-4">
                  "{result.tagline}"
                </p>

                {/* Match Reasons */}
                <div className="text-left space-y-2 border-t border-slate-800 pt-3">
                  {result.reasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className={`w-3.5 h-3.5 ${result.textColor} shrink-0 mt-0.5`} />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenParticipation(result.code);
                  }}
                  className={`w-full py-3.5 font-bold text-sm text-white rounded-xl ${result.badgeColor} shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <span>QUERO ME INSCREVER EM {result.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProgram(result.id);
                      const el = document.getElementById(result.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
                  >
                    Ver Página do {result.code}
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer Quiz</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
