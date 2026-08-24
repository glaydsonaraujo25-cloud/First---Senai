import React from 'react';
import { Building2, GraduationCap, HeartHandshake, School, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const profiles = [
  { title: 'Estudantes', subtitle: 'Aprender fazendo', text: 'A jornada pode desenvolver autonomia, comunicação, lógica, criatividade e responsabilidade dentro de uma equipe.', icon: GraduationCap, accent: 'text-blue-600', soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30' },
  { title: 'Escolas', subtitle: 'Projeto interdisciplinar', text: 'FLL, FTC e FRC podem conectar matemática, física, computação, design, gestão de projeto e cultura maker.', icon: School, accent: 'text-orange-600', soft: 'bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/30' },
  { title: 'Mentores', subtitle: 'Orientação e experiência', text: 'Profissionais e educadores podem contribuir com organização, segurança, método de engenharia e desenvolvimento técnico.', icon: HeartHandshake, accent: 'text-emerald-600', soft: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/30' },
  { title: 'Apoiadores', subtitle: 'Fortalecer educação STEM', text: 'Empresas e instituições podem apoiar infraestrutura, conhecimento, materiais e oportunidades, conforme iniciativas oficiais disponíveis.', icon: Building2, accent: 'text-violet-600', soft: 'bg-violet-50 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/30' },
];

export const TestimonialsSection: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <section id="depoimentos" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'tech-grid-dark opacity-25' : 'tech-grid-pattern opacity-40'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-sky-300' : 'bg-white border-slate-200 text-blue-700 shadow-sm'}`}>
            <Users className="w-3.5 h-3.5" /> PERFIS DA JORNADA
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>QUEM FAZ A ROBÓTICA ACONTECER</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Em vez de depoimentos fictícios, esta seção mostra como diferentes perfis podem contribuir e aprender dentro de uma experiência FIRST® no contexto do DF.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map(({ title, subtitle, text, icon: Icon, accent, soft }) => (
            <article key={title} className={`rounded-2xl border p-6 ${soft}`}>
              <Icon className={`w-7 h-7 mb-4 ${accent}`} />
              <p className={`text-xs font-black uppercase tracking-wider mb-1 ${accent}`}>{subtitle}</p>
              <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-white' : 'text-slate-950'}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
            </article>
          ))}
        </div>

        <div className={`mt-8 max-w-3xl mx-auto rounded-2xl border p-5 text-sm text-center ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
          Participação, mentoria, voluntariado e apoio institucional dependem de oportunidades reais e devem ser confirmados nos canais oficiais do Sistema Fibra/SENAI-DF e da FIRST®.
        </div>
      </div>
    </section>
  );
};
