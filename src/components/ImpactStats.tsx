import React from 'react';
import { Users, Trophy, MapPin, GraduationCap, HeartHandshake, Info, Building2, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ImpactStats: React.FC = () => {
  const { isDark } = useTheme();
  const stats = [
    { value: 'STEM', label: 'Aprendizado prático', subtext: 'Ciência, tecnologia, engenharia e matemática aplicadas a desafios de projeto.', icon: GraduationCap, color: 'from-blue-500 to-indigo-600' },
    { value: 'FLL', label: 'Descoberta e inovação', subtext: 'LEGO®, pesquisa, programação e trabalho em equipe em uma experiência de entrada.', icon: Trophy, color: 'from-amber-500 to-orange-600' },
    { value: 'FTC', label: 'Engenharia em equipe', subtext: 'Projeto mecânico, programação, estratégia e documentação técnica.', icon: Users, color: 'from-orange-500 to-red-600' },
    { value: 'FRC', label: 'Integração de sistemas', subtext: 'Engenharia, software, fabricação, estratégia e colaboração multidisciplinar.', icon: Rocket, color: 'from-blue-500 to-cyan-600' },
    { value: 'DF', label: 'Contexto local', subtext: 'O portal conecta a jornada FIRST® às unidades, referências e canais do SENAI-DF.', icon: MapPin, color: 'from-sky-500 to-blue-600' },
    { value: '+', label: 'Mentoria e comunidade', subtext: 'Educadores, mentores, voluntários e apoiadores podem fortalecer a aprendizagem.', icon: HeartHandshake, color: 'from-violet-500 to-fuchsia-600' },
  ];

  return (
    <section id="impacto" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'tech-grid-dark opacity-30' : 'tech-grid-pattern opacity-50'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-sky-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
            <Building2 className="w-3.5 h-3.5" />
            <span>APRENDIZAGEM • SENAI-DF</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>
            O QUE ESSA JORNADA DESENVOLVE
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Em vez de números sem fonte, esta seção destaca competências e experiências associadas às modalidades e ao aprendizado em robótica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className={`rounded-2xl border p-6 transition-all hover:-translate-y-1 group ${isDark ? 'bg-slate-950/80 border-slate-800 hover:border-slate-600' : 'bg-slate-50 border-slate-200 hover:border-blue-300 shadow-sm'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 flex items-center justify-center text-white shadow-lg`}><Icon className="w-6 h-6" /></div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">DESTAQUE 0{idx + 1}</span>
                </div>
                <div className={`text-4xl sm:text-5xl font-black mb-2 font-mono-tech ${isDark ? 'text-white group-hover:text-blue-300' : 'text-slate-950 group-hover:text-blue-700'}`}>{stat.value}</div>
                <h3 className={`text-base font-bold mb-1 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{stat.label}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{stat.subtext}</p>
              </article>
            );
          })}
        </div>

        <div className={`rounded-xl border p-4 flex items-start gap-3 text-xs max-w-3xl mx-auto ${isDark ? 'bg-slate-950/60 border-slate-800 text-slate-400' : 'bg-blue-50 border-blue-200 text-slate-700'}`}>
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <p><strong>Transparência:</strong> este projeto é uma experiência educacional informativa. Dados oficiais de participação, calendário, regras e resultados devem ser confirmados nos canais da FIRST® e do Sistema Fibra/SENAI-DF.</p>
        </div>
      </div>
    </section>
  );
};
