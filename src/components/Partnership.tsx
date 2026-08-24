import React from 'react';
import { Building2, Cpu, ExternalLink, GraduationCap, Lightbulb, MapPin, Trophy, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';
const ROBOTICS_DF_URL = 'https://www.sistemafibra.org.br/sesi/imprensa/noticias/2026/04/estudantes-do-sesi-df-e-senai-df-representam-brasil-no-mundial-de-robotica';

export const Partnership: React.FC = () => {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: GraduationCap,
      title: 'Formação',
      subtitle: 'Educação conectada à prática',
      description: 'A robótica aproxima ciência, matemática, tecnologia e engenharia de desafios práticos e do desenvolvimento profissional.',
      accent: 'text-blue-600',
      soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30'
    },
    {
      icon: Cpu,
      title: 'Tecnologia',
      subtitle: 'Programação e sistemas reais',
      description: 'FLL, FTC e FRC permitem avançar de fundamentos de lógica e construção até integração mecânica, elétrica e software.',
      accent: 'text-cyan-600',
      soft: 'bg-cyan-50 border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/30'
    },
    {
      icon: Users,
      title: 'Equipe',
      subtitle: 'Colaboração e comunicação',
      description: 'Os desafios valorizam planejamento, divisão de responsabilidades, documentação, estratégia e trabalho em equipe.',
      accent: 'text-amber-600',
      soft: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      subtitle: 'Ideias virando soluções',
      description: 'A experiência estimula investigação, prototipagem, testes e melhoria contínua — competências úteis dentro e fora da arena.',
      accent: 'text-red-600',
      soft: 'bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/30'
    }
  ];

  return (
    <section id="parceria" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-800 border-slate-700 text-red-300' : 'bg-white border-red-200 text-red-700 shadow-sm'}`}>
            <MapPin className="w-3.5 h-3.5" />
            <span>ROBÓTICA NO DISTRITO FEDERAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FIRST® no contexto do SENAI-DF</h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Este projeto foi direcionado ao Distrito Federal para apresentar FLL, FTC e FRC com foco na realidade educacional do SESI/SENAI-DF, na formação tecnológica e nas oportunidades de participação em robótica.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          <article className={`lg:col-span-7 rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center"><Building2 className="w-6 h-6" /></div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-red-600">SESI/SENAI-DF</p>
                <h3 className="text-xl sm:text-2xl font-black">Robótica e formação técnica no DF</h3>
              </div>
            </div>
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>Documentos e notícias do Sistema Fibra registram a presença das modalidades FIRST® LEGO® League, FIRST® Tech Challenge e FIRST® Robotics Competition em iniciativas de robótica do SESI/SENAI-DF.</p>
              <p>Em 2026, estudantes do SESI-DF e SENAI-DF também representaram o Distrito Federal em competições internacionais de robótica, reforçando a conexão entre educação básica, formação profissional e desafios de engenharia.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold">Conhecer o SENAI-DF <ExternalLink className="w-4 h-4" /></a>
              <a href={ROBOTICS_DF_URL} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold ${isDark ? 'bg-slate-900 border-slate-700 hover:bg-slate-800' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}>Robótica do DF em destaque <Trophy className="w-4 h-4 text-amber-500" /></a>
            </div>
          </article>

          <aside className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-3">POR QUE O FOCO LOCAL?</p>
            <h3 className="text-xl sm:text-2xl font-black mb-4">Do Distrito Federal para a arena</h3>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Em vez de apresentar uma rede nacional genérica, o site passa a orientar estudantes, escolas, mentores e apoiadores para o ecossistema do DF e para os canais do Sistema Fibra.</p>
            <div className={`rounded-2xl border p-5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <strong className="block text-sm mb-2">Programas em destaque</strong>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black">FLL</span>
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black">FTC</span>
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black">FRC</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map(({ icon: Icon, title, subtitle, description, accent, soft }) => (
            <article key={title} className={`rounded-2xl border p-5 sm:p-6 ${soft}`}>
              <Icon className={`w-6 h-6 mb-4 ${accent}`} />
              <h3 className="font-black text-lg mb-1">{title}</h3>
              <p className={`text-xs font-bold mb-3 ${accent}`}>{subtitle}</p>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
