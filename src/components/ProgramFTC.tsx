import React from 'react';
import { 
  Wrench, 
  Cpu, 
  Code2, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Zap 
} from 'lucide-react';

interface ProgramFTCProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFTC: React.FC<ProgramFTCProps> = ({ onOpenParticipation }) => {
  const cards = [
    {
      title: 'DESIGN',
      subtitle: 'Planejamento e modelagem do robô',
      icon: Compass,
      description: 'Modelagem 3D em softwares CAD paramétricos (Onshape/SolidWorks), dimensionamento de torque e cálculo de engrenagens e esteiras.',
      color: 'border-orange-500/40 text-orange-400 bg-orange-500/10'
    },
    {
      title: 'BUILD',
      subtitle: 'Construção mecânica',
      icon: Wrench,
      description: 'Usinagem de peças em alumínio aeronáutico, chapas de policarbonato, componentes impressos em 3D e montagem do chassi de 19kg.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      title: 'CODE',
      subtitle: 'Programação e automação',
      icon: Code2,
      description: 'Desenvolvimento em Java com Android Studio, rotinas de odometria com encoders e visão computacional em tempo real usando AprilTags.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      title: 'COMPETE',
      subtitle: 'Estratégia e competição',
      icon: Trophy,
      description: 'Partidas 2 vs 2 na arena de 3,6x3,6m com 30 segundos de período autônomo e 2 minutos de pilotagem teleoperada estratégica.',
      color: 'border-red-500/40 text-red-400 bg-red-500/10'
    }
  ];

  return (
    <section id="ftc" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid-dark opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-orange-600 text-white rounded-md shadow-md">
            FIRST® TECH CHALLENGE
          </span>
          <span className="text-xs font-semibold text-orange-400 bg-orange-950/60 border border-orange-800/80 px-2.5 py-1 rounded">
            12 a 18 anos • Fundamental II, Médio e Técnico
          </span>
        </div>

        {/* Section Title & Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-3 font-mono-tech">
            Transforme ideias em máquinas.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No <strong>FIRST® Tech Challenge (FTC)</strong>, os estudantes trabalham em equipes multidisciplinares para projetar, construir e programar robôs competitivos de médio porte capazes de enfrentar desafios táticos em uma arena de alto nível.
          </p>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 rounded-xl p-5 transition-all group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-orange-400">
                      0{idx + 1} // FTC
                    </span>
                    <div className={`p-2 rounded-lg ${card.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-300 mb-2">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Robot Photography and Tech Specs */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" 
                alt="Robô de competição FTC com motores, garras de alumínio e sensores eletrônicos"
                className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              {/* Floating Tech Specifications Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 border border-slate-700/80 rounded-xl backdrop-blur-md">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Peso Máximo</span>
                    <strong className="text-white">19 kg (42 lbs)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Dimensão Inicial</span>
                    <strong className="text-white">45 × 45 × 45 cm</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Controle</span>
                    <strong className="text-orange-400">Android Control Hub</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Linguagem</span>
                    <strong className="text-cyan-400">Java / Blocks</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Pronto para levar a engenharia da sua escola para o próximo nível?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              O SENAI fornece capacitação técnica para técnicos, cadernos de engenharia e kits homologados.
            </p>
          </div>

          <button
            id="ftc-participate-cta"
            onClick={() => onOpenParticipation('FTC')}
            className="shrink-0 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-orange-600/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>CONHECER TECH CHALLENGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
