import React from 'react';
import { ArrowLeft, Building2, ExternalLink, Info, MapPin, Search, School, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TeamsPageProps {
  onNavigateHome: () => void;
  onOpenParticipation: (tab?: string) => void;
}

const FIRST_TEAM_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';

const tips = [
  {
    title: 'Use a busca oficial da FIRST®',
    description: 'Filtre por programa e localização para encontrar equipes e eventos com informações mais atuais.',
    Icon: Search,
  },
  {
    title: 'Procure instituições da sua região',
    description: 'Escolas, bibliotecas e organizações educacionais podem conhecer equipes locais ou iniciativas em formação.',
    Icon: School,
  },
  {
    title: 'Consulte o SENAI-DF',
    description: 'Confirme oportunidades educacionais, projetos e canais de atendimento diretamente no Sistema Fibra/SENAI-DF.',
    Icon: Building2,
  },
] as const;

export const TeamsPage: React.FC<TeamsPageProps> = ({ onNavigateHome, onOpenParticipation }) => {
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
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-700 text-white border-b-2 border-orange-500 px-3 py-1 text-xs font-black tracking-wider mb-4"><Users className="w-3.5 h-3.5" /> SENAI-DF · EQUIPES</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-5">Como procurar equipes FIRST® no Distrito Federal</h1>
            <p className={`text-base sm:text-lg leading-relaxed ${muted}`}>Este portal não mantém um cadastro próprio de equipes para evitar dados locais desatualizados. Use a busca oficial da FIRST® e confirme oportunidades com instituições e canais do SENAI-DF.</p>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-6" aria-label="Caminhos para encontrar equipes">
          {tips.map(({ title, description, Icon }) => (
            <article key={title} className={`rounded-2xl border p-6 ${card}`}>
              <div className="w-11 h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-4"><Icon className="w-5 h-5" /></div>
              <h2 className="text-lg font-black mb-2">{title}</h2>
              <p className={`text-sm leading-relaxed ${muted}`}>{description}</p>
            </article>
          ))}
        </section>

        <section className={`rounded-3xl border p-6 sm:p-8 mb-6 ${card}`}>
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3"><Search className="w-5 h-5 text-blue-600" /><h2 className="text-xl font-black">Busca oficial de equipes e eventos</h2></div>
              <p className={`text-sm leading-relaxed ${muted}`}>A ferramenta oficial permite pesquisar por modalidade e localização. Como a disponibilidade de equipes pode mudar ao longo da temporada, ela deve ser sua principal referência.</p>
            </div>
            <a href={FIRST_TEAM_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Abrir busca FIRST® <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <div className={`rounded-2xl border p-6 ${card}`}>
            <Info className="w-6 h-6 text-orange-500 mb-4" />
            <h2 className="text-lg font-black mb-2">Não encontrou uma equipe?</h2>
            <p className={`text-sm leading-relaxed mb-5 ${muted}`}>Registre seu interesse no portal para organizar seu perfil. O formulário é demonstrativo e não substitui inscrição ou contato oficial.</p>
            <button type="button" onClick={() => onOpenParticipation('ESTUDANTE')} className="inline-flex min-h-11 items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-orange-500 text-white text-sm font-bold">Registrar interesse</button>
          </div>

          <div className={`rounded-2xl border p-6 ${card}`}>
            <MapPin className="w-6 h-6 text-blue-600 mb-4" />
            <h2 className="text-lg font-black mb-2">Quer iniciar uma equipe?</h2>
            <p className={`text-sm leading-relaxed mb-5 ${muted}`}>Escolas e instituições podem consultar requisitos oficiais da FIRST® e verificar oportunidades locais diretamente com o SENAI-DF.</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => onOpenParticipation('ESCOLA')} className="inline-flex min-h-11 items-center justify-center px-4 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-bold">Interesse da escola</button>
              <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-orange-300 text-orange-700 dark:text-orange-300 text-sm font-bold">SENAI-DF <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
