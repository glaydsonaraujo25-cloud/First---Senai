import React from 'react';
import { Building2, Cpu, ExternalLink, GraduationCap, Lightbulb, MapPin, School, Trophy, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';
const ROBOTICS_DF_URL = 'https://www.sistemafibra.org.br/sesi/imprensa/noticias/2026/04/estudantes-do-sesi-df-e-senai-df-representam-brasil-no-mundial-de-robotica';

export const Partnership: React.FC = () => {
  const { isDark } = useTheme();
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg';
  const muted = isDark ? 'text-slate-300' : 'text-slate-600';

  const pillars = [
    { icon: GraduationCap, title: 'Aprender fazendo', description: 'Robótica conecta conceitos de ciência, matemática, tecnologia e engenharia a desafios práticos.', accent: 'text-blue-600', soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30' },
    { icon: Cpu, title: 'Tecnologia', description: 'A jornada passa por construção, programação, sensores, integração de sistemas e resolução de problemas.', accent: 'text-cyan-600', soft: 'bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/30' },
    { icon: Users, title: 'Trabalho em equipe', description: 'Planejamento, comunicação, documentação, estratégia e colaboração fazem parte da experiência FIRST®.', accent: 'text-amber-600', soft: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30' },
    { icon: Lightbulb, title: 'Inovação', description: 'Investigar, prototipar, testar e melhorar soluções aproxima o estudante da cultura de engenharia.', accent: 'text-red-600', soft: 'bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/30' }
  ];

  return (
    <section id="parceria" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-8">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-red-300' : 'bg-white border-red-200 text-red-700 shadow-sm'}`}>
              <MapPin className="w-3.5 h-3.5" /> ROBÓTICA • DISTRITO FEDERAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Robótica no SENAI-DF</h2>
            <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${muted}`}>Uma visão local de FLL, FTC e FRC para estudantes, escolas e comunidade do Distrito Federal, conectando educação STEM, formação tecnológica e os canais oficiais do Sistema Fibra.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold">Acessar SENAI-DF <ExternalLink className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 mb-8">
          <article className={`lg:col-span-7 rounded-3xl border p-6 sm:p-9 ${card}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center"><Building2 className="w-6 h-6" /></div>
              <div><p className="text-xs font-black uppercase tracking-widest text-red-600">Contexto local</p><h3 className="text-xl sm:text-2xl font-black">SESI/SENAI-DF e a robótica</h3></div>
            </div>
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${muted}`}>
              <p>Publicações do Sistema Fibra registram participação de estudantes do SESI-DF e SENAI-DF em competições de robótica e presença das modalidades FIRST® no ecossistema educacional local.</p>
              <p>Este site organiza essas modalidades em uma experiência de navegação própria para o DF. Inscrições, equipes, calendários, regulamentos e oferta de atividades devem sempre ser confirmados nos canais oficiais.</p>
            </div>
            <a href={ROBOTICS_DF_URL} target="_blank" rel="noreferrer" className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'}`}><Trophy className="w-4 h-4" /> Ver destaque de robótica do DF <ExternalLink className="w-4 h-4" /></a>
          </article>

          <aside className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 ${card}`}>
            <div className="flex items-center gap-3 mb-5"><School className="w-6 h-6 text-blue-600" /><h3 className="text-xl sm:text-2xl font-black">Como usar este portal</h3></div>
            <ol className="space-y-4">
              {[
                ['1', 'Conheça as modalidades', 'Entenda diferenças entre FLL, FTC e FRC.'],
                ['2', 'Veja a jornada', 'Compare faixa etária, foco e tipo de experiência.'],
                ['3', 'Consulte o DF', 'Confira unidades e canais do SENAI-DF.'],
                ['4', 'Confirme oficialmente', 'Valide eventos, equipes e oportunidades antes de participar.']
              ].map(([number, title, text]) => (
                <li key={number} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0">{number}</span>
                  <div><strong className="text-sm block">{title}</strong><p className={`text-xs mt-1 ${muted}`}>{text}</p></div>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map(({ icon: Icon, title, description, accent, soft }) => (
            <article key={title} className={`rounded-2xl border p-5 sm:p-6 ${soft}`}>
              <Icon className={`w-6 h-6 mb-4 ${accent}`} />
              <h3 className="font-black text-lg mb-2">{title}</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
