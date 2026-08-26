import React from 'react';
import { ArrowLeft, BookOpen, Bot, ExternalLink, School, Search, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ResourcesPageProps {
  onNavigateHome: () => void;
}

const resources = [
  {
    title: 'FIRST® oficial',
    description: 'Portal principal da FIRST® com informações sobre programas, temporada, comunidade e participação.',
    href: 'https://www.firstinspires.org/',
    Icon: Bot,
  },
  {
    title: 'FIRST® LEGO® League',
    description: 'Página oficial da FLL com visão geral do programa, temporada e materiais de referência.',
    href: 'https://www.firstinspires.org/programs/fll/',
    Icon: BookOpen,
  },
  {
    title: 'FIRST® Tech Challenge',
    description: 'Página oficial da FTC para conhecer a modalidade, recursos e orientações para equipes.',
    href: 'https://www.firstinspires.org/programs/ftc/',
    Icon: BookOpen,
  },
  {
    title: 'FIRST® Robotics Competition',
    description: 'Página oficial da FRC com informações da competição e recursos para estudantes e equipes.',
    href: 'https://www.firstinspires.org/programs/frc/',
    Icon: BookOpen,
  },
  {
    title: 'Buscar equipes e eventos',
    description: 'Ferramenta oficial para pesquisar equipes e eventos FIRST® por programa e localização.',
    href: 'https://www.firstinspires.org/team-event-search',
    Icon: Search,
  },
  {
    title: 'SENAI-DF',
    description: 'Canal oficial do SENAI no Distrito Federal para cursos, unidades, atendimento e oportunidades locais.',
    href: 'https://www.sistemafibra.org.br/senai/',
    Icon: School,
  },
] as const;

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigateHome }) => {
  const { isDark } = useTheme();
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const muted = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </button>

        <section className={`rounded-3xl border p-6 sm:p-10 lg:p-12 mb-6 ${card}`}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-700 text-white border-b-2 border-orange-500 px-3 py-1 text-xs font-black tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> RECURSOS OFICIAIS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-5">Continue explorando com fontes confiáveis</h1>
            <p className={`text-base sm:text-lg leading-relaxed ${muted}`}>
              Esta página reúne os principais caminhos oficiais usados pelo portal. Regulamentos, calendários, inscrições, equipes e oportunidades devem sempre ser confirmados diretamente nessas fontes.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Recursos oficiais FIRST e SENAI-DF">
          {resources.map(({ title, description, href, Icon }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={`group rounded-2xl border p-6 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${card} ${isDark ? 'hover:border-blue-500' : 'hover:border-blue-400 hover:shadow-lg'}`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <ExternalLink className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
              </div>
              <h2 className="font-black text-lg mb-2">{title}</h2>
              <p className={`text-sm leading-relaxed ${muted}`}>{description}</p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
};
