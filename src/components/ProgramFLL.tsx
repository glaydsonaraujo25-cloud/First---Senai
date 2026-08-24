import React from 'react';
import { 
  Cpu, 
  Lightbulb, 
  Code, 
  Award, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Puzzle
} from 'lucide-react';

interface ProgramFLLProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFLL: React.FC<ProgramFLLProps> = ({ onOpenParticipation }) => {
  const pipeline = [
    {
      step: '01',
      title: 'IDEIA',
      icon: Lightbulb,
      description: 'Pesquisa e ideação de uma solução inovadora para um problema real proposto no desafio anual global.'
    },
    {
      step: '02',
      title: 'CONSTRUÇÃO',
      icon: Puzzle,
      description: 'Design mecânico de robôs autônomos utilizando motores e peças LEGO® Education SPIKE™ Prime.'
    },
    {
      step: '03',
      title: 'PROGRAMAÇÃO',
      icon: Code,
      description: 'Programação de algoritmos de precisão com sensores ópticos, ultrassônicos e giroscópios.'
    },
    {
      step: '04',
      title: 'MISSÃO',
      icon: Award,
      description: 'Execução de missões cronometradas no tapete oficial em rounds eletrizantes de 2 minutos e meio.'
    }
  ];

  const highlights = [
    'Robótica Educacional Prática',
    'LEGO® Education SPIKE™ Prime',
    'Programação em Blocos e Python',
    'Trabalho em Equipe & Valores Fundamentais',
    'Projeto de Inovação Científica',
    'Resolução de Problemas Reais'
  ];

  return (
    <section id="fll" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Warm Accent Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 rounded-md shadow-md">
            FIRST® LEGO® LEAGUE
          </span>
          <span className="text-xs font-semibold text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded">
            9 a 15 anos • Ensino Fundamental
          </span>
        </div>

        {/* Section Title & Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-3 font-mono-tech">
            Descobrir. Construir. Aprender.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            O <strong>FIRST® LEGO® League (FLL)</strong> introduz crianças e jovens ao universo STEM através de desafios práticos, criatividade, trabalho em equipe e resolução de problemas do mundo real.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="Estudantes testando robô LEGO Spike Prime no tapete oficial de missões"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 border border-amber-500/30 rounded-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase">Mesa Oficial de Desafio</span>
                    <p className="text-sm font-semibold text-white">2min30s de Missões Autônomas</p>
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-300 font-mono px-2.5 py-1 rounded border border-amber-500/40">
                    LEGO® SPIKE™
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Program Highlights & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-amber-500 rounded-full inline-block"></span>
                Destaques do Programa
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/80 pt-4">
                Com o apoio pedagógico e tecnológico do <strong>SENAI</strong>, escolas e equipes contam com capacitação para técnicos, material de apoio e acesso a torneios regionais estruturados.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="fll-participate-cta"
                onClick={() => onOpenParticipation('FLL')}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>CONHECER LEGO LEAGUE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400">
                Inscrições para equipes de 2 a 10 estudantes
              </span>
            </div>
          </div>

        </div>

        {/* Visual Pipeline: IDEIA → CONSTRUÇÃO → PROGRAMAÇÃO → MISSÃO */}
        <div className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
              CICLO FORMATIVO FLL
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              A Jornada de Aprendizado em 4 Etapas
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 relative group hover:border-amber-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h5 className="text-lg font-black text-white mb-2 tracking-wide">
                    {item.title}
                  </h5>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
