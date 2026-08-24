import React from 'react';
import { ArrowRight, Bot, CalendarDays, Cpu, Leaf, MapPin, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenParticipation: () => void;
}

const programs = [
  { code: 'FLL', name: 'BIOGLOW™', detail: '5–16 anos*', icon: Cpu, accent: 'text-amber-600', soft: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30' },
  { code: 'FTC', name: 'BIOBUZZ™', detail: '12–18 anos', icon: Wrench, accent: 'text-orange-600', soft: 'bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/30' },
  { code: 'FRC', name: 'BIOCORE™', detail: '14–18 anos', icon: Bot, accent: 'text-blue-600', soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();

  return (
    <section id="inicio" className={`relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:min-h-[92vh] lg:flex lg:items-center transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'tech-grid-dark opacity-35' : 'tech-grid-pattern opacity-70'}`} />
        <div className={`absolute -top-32 -left-24 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-blue-600/15' : 'bg-blue-200/45'}`} />
        <div className={`absolute top-16 -right-28 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-red-600/10' : 'bg-red-100/60'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold ${isDark ? 'bg-red-950/40 border-red-800 text-red-200' : 'bg-red-50 border-red-200 text-red-800'}`}>
                <MapPin className="w-4 h-4" /> SENAI-DF • Distrito Federal
              </div>
              <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold ${isDark ? 'bg-emerald-950/50 border-emerald-800 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
                <Leaf className="w-4 h-4" /> FIRST® CANOPY™ • 2026–2027
              </div>
            </div>

            <h1 className="font-black tracking-tight leading-[0.98] mb-6">
              <span className={`block text-4xl sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-950'}`}>ROBÓTICA NO</span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">DISTRITO FEDERAL</span>
              <span className={`block text-4xl sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-950'}`}>DO LEGO® À ENGENHARIA.</span>
            </h1>

            <p className={`text-base sm:text-xl max-w-2xl leading-relaxed mb-7 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Conheça FLL, FTC e FRC com foco no ecossistema do SESI/SENAI-DF — uma jornada de robótica, programação, engenharia, inovação e trabalho em equipe para estudantes do Distrito Federal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a href="#programas" className="inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Explorar FLL, FTC e FRC <ArrowRight className="w-4 h-4" /></a>
            </div>

            <button type="button" onClick={onOpenParticipation} className={`text-sm font-semibold underline underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isDark ? 'text-red-300 hover:text-red-200' : 'text-red-700 hover:text-red-800'}`}>Tenho interesse em participar no DF →</button>

            <p className={`mt-7 text-xs max-w-2xl leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Projeto educacional voltado ao contexto do SENAI-DF. Inscrições, regulamentos, equipes e disponibilidade devem ser confirmados nos canais oficiais do Sistema Fibra e da FIRST®.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl border p-5 sm:p-6 shadow-xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50/95 border-slate-200'}`}>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div><p className="text-xs font-black uppercase tracking-widest text-red-600">SENAI-DF • Jornada FIRST®</p><h2 className="text-xl sm:text-2xl font-black mt-1">Três níveis de desafio</h2></div>
                <CalendarDays className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-3">
                {programs.map(({ code, name, detail, icon: Icon, accent, soft }) => (
                  <a
                    key={code}
                    href="#programas"
                    data-program-card={code}
                    className={`hero-program-card hero-program-${code.toLowerCase()} group flex items-center gap-4 rounded-2xl border p-4 transition-all hover:-translate-y-0.5 ${soft}`}
                  >
                    <div className="hero-program-icon w-11 h-11 rounded-xl bg-white/80 dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${accent}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className={`hero-program-code text-xs font-black tracking-wider ${accent}`}>{code}</span>
                        <span className="hero-program-age text-[11px] font-semibold">{detail}</span>
                      </div>
                      <p className="hero-program-name font-bold mt-0.5">{name}</p>
                    </div>
                    <ArrowRight className="hero-program-arrow w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              <div className={`mt-5 rounded-2xl border p-4 text-sm ${isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
                <strong className={isDark ? 'text-white' : 'text-slate-950'}>Temporada atual:</strong> BIOGLOW™ foi lançado em 4 de agosto de 2026; BIOBUZZ™ chega em 12 de setembro de 2026; BIOCORE™ em 9 de janeiro de 2027.
              </div>
              <p className="mt-3 text-[11px] text-slate-500">*A faixa etária da FLL varia conforme edição e região.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
