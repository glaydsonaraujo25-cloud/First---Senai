import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Info, MapPin, School, Search, Users, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TeamFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenParticipation: (program?: string) => void;
}

const FIRST_TEAM_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';

export const TeamFinderModal: React.FC<TeamFinderModalProps> = ({ isOpen, onClose, onOpenParticipation }) => {
  const { isDark } = useTheme();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-finder-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={`w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
        <div className={`flex items-center justify-between gap-4 p-5 border-b ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <div className="flex items-center gap-2 min-w-0">
            <Users className="w-5 h-5 text-blue-500 shrink-0" />
            <h3 id="team-finder-title" className="text-base sm:text-lg font-bold truncate">Encontrar equipes e eventos FIRST®</h3>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
            aria-label="Fechar busca de equipes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className={`rounded-2xl border p-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50/60 border-blue-100'}`}>
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Use a busca oficial da FIRST</h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  A ferramenta oficial permite pesquisar equipes e eventos por programa, país, estado/província e outros filtros. Assim, o site evita exibir cadastros locais desatualizados ou não verificados.
                </p>
              </div>
            </div>

            <a
              href={FIRST_TEAM_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Abrir busca oficial <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className={`rounded-2xl border p-5 ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Como procurar uma equipe</h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  A FIRST informa que equipes locais recrutam conforme a necessidade e que a organização não faz a conexão direta de jovens com equipes por questões de privacidade. A recomendação é procurar escolas, bibliotecas e organizações juvenis da sua região ou iniciar uma nova equipe.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenParticipation('ESTUDANTE');
              }}
              className={`p-4 rounded-2xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}
            >
              <MapPin className="w-5 h-5 text-red-500 mb-3" />
              <strong className="block text-sm mb-1">Registrar meu interesse</strong>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Use o formulário demonstrativo para indicar programa e região.</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenParticipation('ESCOLA');
              }}
              className={`p-4 rounded-2xl border text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}
            >
              <School className="w-5 h-5 text-emerald-500 mb-3" />
              <strong className="block text-sm mb-1">Quero iniciar uma equipe</strong>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Veja o fluxo de interesse para escolas e instituições.</span>
            </button>
          </div>

          <button onClick={onClose} className={`w-full py-3 rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
            Continuar explorando o site <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
