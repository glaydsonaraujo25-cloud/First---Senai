import React from 'react';
import { 
  Bot, 
  Flame, 
  Cpu, 
  Radio, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldAlert, 
  Award,
  Factory,
  Compass
} from 'lucide-react';

interface ProgramFRCProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFRC: React.FC<ProgramFRCProps> = ({ onOpenParticipation }) => {
  const highlights = [
    { title: 'Engenharia Mecânica', desc: 'Usinagem CNC, corte a laser e cálculo de tensões em perfis estruturais' },
    { title: 'Eletrônica & Pneumática', desc: 'Sistemas pneumáticos de 120 PSI, barramentos CAN e sensores de alta taxa' },
    { title: 'Programação Avançada', desc: 'C++ e Java com WPILib, controle PID multivariável e visão PhotonVision' },
    { title: 'Tração Swerve Drive', desc: 'Módulos de 360° com motores brushless independentes em cada roda' },
    { title: 'Gestão de Projetos & Pits', desc: 'Operação como uma empresa de alta tecnologia com orçamento, mídia e captação' },
    { title: 'Liderança & Coopertition®', desc: 'Negociação em tempo real de estratégias com alianças de diferentes países' }
  ];

  const scaleStats = [
    { value: '56 kg', label: 'PESO MÁXIMO DO ROBÔ', note: 'Escala industrial real' },
    { value: '1,5 m', label: 'ALTURA ESTRUTURAL', note: 'Com elevadores e braços' },
    { value: '16 × 8 m', label: 'DIMENSÃO DA ARENA', note: 'Piso de carpete com grids' },
    { value: '3 vs 3', label: 'ALIANÇAS EM QUADRA', note: 'Partidas de alta velocidade' }
  ];

  return (
    <section id="frc" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background High Energy Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 tech-grid-dark opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md shadow-lg">
            FIRST® ROBOTICS COMPETITION
          </span>
          <span className="text-xs font-semibold text-blue-300 bg-blue-950/80 border border-blue-800 px-2.5 py-1 rounded">
            14 a 19 anos • Ensino Médio, Técnico SENAI e Integrado
          </span>
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded hidden sm:inline">
            ★ MAIOR DESAFIO ESTUDANTIL DO MUNDO
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-4 font-mono-tech">
            Engenharia em escala real.
          </h2>
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
            Uma experiência avançada de engenharia e tecnologia industrial, na qual estudantes trabalham lado a lado com mentores da indústria para desenvolver robôs de grande porte para desafios competitivos globais.
          </p>
        </div>

        {/* Panoramic Arena Showcase */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl mb-14 group">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80" 
            alt="Arena panorâmica gigante do FIRST Robotics Competition com milhares de espectadores e robôs em ação"
            className="w-full h-80 sm:h-[450px] object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          {/* Panoramic Overlay Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-slate-950/90 border border-slate-700 rounded-xl backdrop-blur-md">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
                ARENA OFICIAL FRC BRASIL
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Partidas 3 vs 3 com Transmissão ao Vivo e Torcidas Vibrantes
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-blue-900/60 border border-blue-700 text-xs font-bold text-blue-200">
                RoboRIO Industrial
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-red-900/60 border border-red-700 text-xs font-bold text-red-200">
                Motors Brushless 500W
              </span>
            </div>
          </div>
        </div>

        {/* Large Scale Graphic Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {scaleStats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 text-center transition-all group"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 mb-1 font-mono-tech">
                {stat.value}
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                {stat.label}
              </h4>
              <p className="text-[11px] text-slate-400 font-mono">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Competencies Grid */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
              COMPETÊNCIAS PROFISSIONAIS
            </span>
            <h3 className="text-2xl font-bold text-white">
              Formando os Engenheiros e Líderes da Indústria 4.0
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-950/90 via-slate-900 to-red-950/90 border border-blue-500/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Sua unidade SENAI ou escola no maior palco da robótica
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Equipes de FRC no SENAI têm acesso a centros de usinagem, oficinas completas e mentores voluntários de indústrias automotivas, aeroespaciais e de tecnologia.
            </p>
          </div>

          <button
            id="frc-participate-cta"
            onClick={() => onOpenParticipation('FRC')}
            className="shrink-0 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>CONHECER ROBOTICS COMPETITION</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
