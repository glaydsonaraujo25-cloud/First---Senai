import React from 'react';
import { ArrowLeft, Building2, ExternalLink, GraduationCap, Handshake, Search, UserRound } from 'lucide-react';
import { participationContext } from '../data/participation';
import { useTheme } from '../context/ThemeContext';

interface ParticipationPageProps {
  search?: string;
  onNavigateHome: () => void;
  onOpenTeamFinder: () => void;
}

const FIRST_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';

const paths = [
  {
    id: 'ESTUDANTE', title: 'Estudante',
    description: 'Conheça FLL, FTC e FRC, identifique a modalidade adequada e procure equipes ou oportunidades educacionais disponíveis no Distrito Federal.',
    Icon: GraduationCap,
  },
  {
    id: 'ESCOLA', title: 'Escola',
    description: 'Entenda os programas FIRST®, reúna estudantes e educadores interessados e consulte o SENAI-DF e os canais oficiais sobre oportunidades e requisitos.',
    Icon: Building2,
  },
  {
    id: 'MENTOR', title: 'Mentor',
    description: 'Profissionais e educadores podem contribuir com engenharia, software, comunicação, gestão, estratégia e outras competências conforme as necessidades das equipes.',
    Icon: UserRound,
  },
  {
    id: 'EMPRESA', title: 'Empresa e apoiador',
    description: 'Organizações podem conhecer formas de apoiar educação STEM, desenvolvimento de equipes e iniciativas de robótica por meio dos canais institucionais adequados.',
    Icon: Handshake,
  },
];

export const ParticipationPage: React.FC<ParticipationPageProps> = ({ onNavigateHome, onOpenTeamFinder, search = '' }) => {
  const { isDark } = useTheme();
  const context = participationContext(search);
  const selectedProfile = paths.find(path => path.id === context.profile);
  const visiblePaths = selectedProfile ? [selectedProfile] : paths;
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
        </button>

        <section className={`rounded-3xl border p-6 sm:p-10 lg:p-12 mb-6 ${card}`}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-blue-700 text-white border-b-2 border-orange-500 px-3 py-1 text-xs font-black tracking-wider mb-4">SENAI-DF · COMO PARTICIPAR</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-5">Encontre o melhor caminho para entrar na robótica FIRST®</h1>
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Este portal é informativo. Consulte os caminhos abaixo e confirme inscrições, equipes, eventos, vagas e requisitos diretamente nos canais oficiais da FIRST® e do Sistema Fibra/SENAI-DF.
            </p>
          </div>
        </section>

        {(context.program || selectedProfile) && <section className="surface rounded-2xl border p-6 mb-6" aria-label="Orientação selecionada">
          <h2 className="text-xl font-bold mb-3">{context.program ? `Como participar da ${context.program}` : `Orientações: ${selectedProfile?.title}`}</h2>
          <ol className="list-decimal pl-5 space-y-2 muted">
            <li>Conheça os requisitos e materiais da modalidade nos canais oficiais.</li>
            <li>Converse com sua escola ou com o SENAI-DF sobre oportunidades na região.</li>
            <li>Confirme disponibilidade, calendário e próximos passos com a instituição responsável.</li>
          </ol>
          <div className="flex flex-wrap gap-4 mt-5">
            {context.program && <a className="font-bold text-blue-700 dark:text-blue-300 underline" href={`/program/${context.program.toLowerCase()}`}>Conhecer {context.program}</a>}
            <a className="font-bold text-blue-700 dark:text-blue-300 underline" href="/participar">Ver todas as orientações</a>
          </div>
        </section>}

        <section aria-labelledby="participation-paths-title" className="mb-6">
          <h2 id="participation-paths-title" className="sr-only">Formas de participação</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {visiblePaths.map(({ id, title, description, Icon }) => (
              <article key={title} className={`rounded-2xl border p-6 ${card}`}>
                <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
                {!selectedProfile && <a href={`/participar?perfil=${id}`} className="inline-block mt-4 font-bold text-sm text-blue-700 dark:text-blue-300 underline">Ver orientações para {title.toLowerCase()}</a>}
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <button type="button" onClick={onOpenTeamFinder} className={`rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${card}`}>
            <Search className="w-6 h-6 text-blue-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Procurar equipes e eventos</h2>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Veja os caminhos de busca e orientação disponíveis para o Distrito Federal.</p>
          </button>

          <div className={`rounded-2xl border p-6 ${card}`}>
            <Handshake className="w-6 h-6 text-orange-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Confirmar em fontes oficiais</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-600">SENAI-DF <ExternalLink className="w-4 h-4" /></a>
              <a href={FIRST_SEARCH_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-500">Busca FIRST® <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
