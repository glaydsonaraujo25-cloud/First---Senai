import React from 'react';
import { Users, Trophy, MapPin, GraduationCap, HeartHandshake, Info, Building2, Rocket } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    { value: 'STEM', label: 'Aprendizado Prático', subtext: 'Ciência, tecnologia, engenharia e matemática aplicadas a desafios reais.', icon: GraduationCap, color: 'from-blue-500 to-indigo-600' },
    { value: 'FLL', label: 'Primeiros Passos', subtext: 'Robótica com LEGO®, pesquisa, inovação e trabalho em equipe.', icon: Trophy, color: 'from-amber-500 to-orange-600' },
    { value: 'FTC', label: 'Engenharia em Equipe', subtext: 'Projeto mecânico, programação, estratégia e documentação técnica.', icon: Users, color: 'from-emerald-500 to-teal-600' },
    { value: 'FRC', label: 'Desafio de Alta Complexidade', subtext: 'Grandes robôs, integração de sistemas e colaboração multidisciplinar.', icon: Rocket, color: 'from-red-500 to-rose-600' },
    { value: 'BR', label: 'Conexão Nacional', subtext: 'O projeto destaca oportunidades, equipes e eventos em diferentes regiões do Brasil.', icon: MapPin, color: 'from-cyan-500 to-blue-600' },
    { value: '+', label: 'Mentoria e Comunidade', subtext: 'Educadores, mentores, voluntários e parceiros fortalecem a jornada de aprendizagem.', icon: HeartHandshake, color: 'from-purple-500 to-pink-600' },
  ];

  return (
    <section id="impacto" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-emerald-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>APRENDIZAGEM & IMPACTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            O QUE ESSA JORNADA DESENVOLVE
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Mais importante do que exibir números sem fonte é mostrar as competências e experiências que tornam a robótica educacional relevante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 hover:border-slate-600 rounded-2xl p-6 transition-all hover:-translate-y-1 group relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">DESTAQUE 0{idx + 1}</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2 font-mono-tech group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <h3 className="text-base font-bold text-slate-200 mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{stat.subtext}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-400 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p>
            <strong>Transparência:</strong> este projeto é uma experiência educacional demonstrativa. Dados oficiais de participação, calendários, regras e resultados devem ser confirmados nos canais oficiais da FIRST® e do SENAI.
          </p>
        </div>
      </div>
    </section>
  );
};
