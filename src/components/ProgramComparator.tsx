import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Calendar, 
  Cpu, 
  Wrench, 
  Bot, 
  Check, 
  HelpCircle 
} from 'lucide-react';
import { programsData } from '../data/programsData';

interface ProgramComparatorProps {
  onOpenQuiz: () => void;
  onSelectProgram: (programId: string) => void;
  onOpenParticipation: (program?: string) => void;
}

export const ProgramComparator: React.FC<ProgramComparatorProps> = ({
  onOpenQuiz,
  onSelectProgram,
  onOpenParticipation
}) => {
  return (
    <section id="programas" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMPARADOR OFICIAL DOS PROGRAMAS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            QUAL DESAFIO COMBINA COM VOCÊ?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8">
            Compare os três programas da FIRST® no Brasil e descubra a modalidade ideal para a sua idade, nível escolar e objetivos de aprendizado.
          </p>

          {/* Interactive Quiz Trigger Button */}
          <button
            id="comparator-open-quiz-btn"
            onClick={onOpenQuiz}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>DESCUBRA SEU PROGRAMA EM 1 MINUTO (QUIZ)</span>
          </button>
        </div>

        {/* 3 Large Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: FLL */}
          <div className="bg-slate-950/90 border-2 border-amber-500/40 hover:border-amber-400 rounded-2xl p-7 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-1 relative group">
            <div className="absolute top-0 right-7 -translate-y-1/2 bg-amber-500 text-slate-950 font-black text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              INICIAÇÃO STEM
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                FIRST® LEGO® League
              </h3>

              <p className="text-sm text-slate-300 mb-6 font-medium">
                Descubra o universo STEM através da robótica e resolução de problemas.
              </p>

              {/* Spec list */}
              <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Idade Recomendada:</span>
                  <strong className="text-white">9 a 15 anos</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escolaridade:</span>
                  <strong className="text-white">Ensino Fundamental</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tamanho da Equipe:</span>
                  <strong className="text-white">2 a 10 integrantes</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Plataforma:</span>
                  <strong className="text-amber-400">LEGO® SPIKE™ Prime</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Linguagem:</span>
                  <strong className="text-white">Blocos / Python</strong>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href="#fll"
                onClick={() => onSelectProgram('fll')}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explorar FLL</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenParticipation('FLL')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
              >
                Quero Participar
              </button>
            </div>
          </div>

          {/* Card 2: FTC */}
          <div className="bg-slate-950/90 border-2 border-orange-500/50 hover:border-orange-400 rounded-2xl p-7 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-1 relative group">
            <div className="absolute top-0 right-7 -translate-y-1/2 bg-orange-600 text-white font-black text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              ENGENHARIA INTERMEDIÁRIA
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/30 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                FIRST® Tech Challenge
              </h3>

              <p className="text-sm text-slate-300 mb-6 font-medium">
                Projete, construa e programe robôs competitivos com estruturas de metal.
              </p>

              {/* Spec list */}
              <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Idade Recomendada:</span>
                  <strong className="text-white">12 a 18 anos</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escolaridade:</span>
                  <strong className="text-white">Fund. II / Médio / Técnico</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tamanho da Equipe:</span>
                  <strong className="text-white">Até 15 integrantes</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Plataforma:</span>
                  <strong className="text-orange-400">REV / goBILDA (19kg)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Linguagem:</span>
                  <strong className="text-white">Java / Android Studio</strong>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href="#ftc"
                onClick={() => onSelectProgram('ftc')}
                className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explorar FTC</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenParticipation('FTC')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
              >
                Quero Participar
              </button>
            </div>
          </div>

          {/* Card 3: FRC */}
          <div className="bg-slate-950/90 border-2 border-blue-500/60 hover:border-blue-400 rounded-2xl p-7 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-1 relative group">
            <div className="absolute top-0 right-7 -translate-y-1/2 bg-blue-600 text-white font-black text-[11px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              ALTA ENGENHARIA INDUSTRIAL
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                FIRST® Robotics Competition
              </h3>

              <p className="text-sm text-slate-300 mb-6 font-medium">
                Enfrente grandes desafios de engenharia com robôs de escala real de 56kg.
              </p>

              {/* Spec list */}
              <div className="space-y-3 border-t border-slate-800 pt-5 text-xs text-slate-300 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Idade Recomendada:</span>
                  <strong className="text-white">14 a 19 anos</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Escolaridade:</span>
                  <strong className="text-white">Ensino Médio e Técnico SENAI</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tamanho da Equipe:</span>
                  <strong className="text-white">15 a 50+ integrantes</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Plataforma:</span>
                  <strong className="text-blue-400">NI roboRIO / CNC / Pneumática</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Linguagem:</span>
                  <strong className="text-white">C++ / Java / WPILib</strong>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <a
                href="#frc"
                onClick={() => onSelectProgram('frc')}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explorar FRC</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenParticipation('FRC')}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
              >
                Quero Participar
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
