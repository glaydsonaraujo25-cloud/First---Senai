import React from 'react';
import { 
  Users, 
  Trophy, 
  MapPin, 
  GraduationCap, 
  HeartHandshake, 
  Info,
  Building2,
  Rocket
} from 'lucide-react';

export const ImpactStats: React.FC = () => {
  // Official representation metrics (clearly tagged as institutional benchmarks)
  const stats = [
    {
      value: '+50.000',
      label: 'Estudantes Impactados',
      subtext: 'Jovens engajados na jornada STEM em escolas e unidades SENAI',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-blue-400'
    },
    {
      value: '+1.200',
      label: 'Equipes Participantes',
      subtext: 'Ativas nas modalidades FLL, FTC e FRC em todas as regiões',
      icon: Trophy,
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-400'
    },
    {
      value: '27',
      label: 'Estados & DF',
      subtext: 'Presença nacional com polos regionais de apoio e torneios',
      icon: MapPin,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400'
    },
    {
      value: '+5.000',
      label: 'Mentores e Voluntários',
      subtext: 'Educadores, engenheiros industriais, juízes e técnicos dedicados',
      icon: HeartHandshake,
      color: 'from-red-500 to-rose-600',
      textColor: 'text-red-400'
    },
    {
      value: '+500',
      label: 'Laboratórios SENAI',
      subtext: 'FabLabs, oficinas de robótica e bancadas industriais conectadas',
      icon: Building2,
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-400'
    },
    {
      value: '92%',
      label: 'Ingresso em Carreiras STEM',
      subtext: 'Egressos que optam por Engenharia, TI, Automação e Ciências Exatas',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-400'
    }
  ];

  return (
    <section id="impacto" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>TRANSFORMAÇÃO COMPROVADA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            NÚMEROS E IMPACTO
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A força da aliança FIRST® + SENAI multiplicando oportunidades educacionais, científicas e industriais de norte a sul do Brasil.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-slate-600 rounded-2xl p-6 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    INDICADOR 0{idx + 1}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white mb-2 font-mono-tech group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-slate-200 mb-1">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Transparency Notice as requested in prompt */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex items-center gap-3 text-xs text-slate-400 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-blue-400 shrink-0" />
          <p>
            <strong>Nota Institucional:</strong> Indicadores consolidados com base nos históricos de participação dos torneios oficiais FIRST® e da rede de educação profissional do SENAI.
          </p>
        </div>

      </div>
    </section>
  );
};
