import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  Bot, 
  School, 
  HeartHandshake 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FinalCtaProps {
  onOpenParticipation: (tab?: string) => void;
  onOpenTeamFinder: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onOpenParticipation,
  onOpenTeamFinder
}) => {
  const { isDark } = useTheme();

  return (
    <section 
      id="contato" 
      className={`py-24 relative overflow-hidden border-t transition-colors ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white border-slate-800' 
          : 'bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      {/* Dynamic Background Glows */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDark 
          ? 'bg-gradient-to-r from-blue-600/15 via-red-600/15 to-amber-600/10' 
          : 'bg-gradient-to-r from-blue-500/10 via-red-500/10 to-amber-500/10'
      }`}></div>
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-xl backdrop-blur-md border ${
          isDark 
            ? 'bg-slate-800/90 border-slate-700 text-sky-400' 
            : 'bg-white/95 border-blue-200 text-blue-700 shadow-sm'
        }`}>
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>JUNTE-SE À MAIOR REVOLUÇÃO STEM DO BRASIL</span>
        </div>

        {/* Headline */}
        <h2 className={`text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-tight font-mono-tech ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          O PRÓXIMO GRANDE PROJETO PODE SER O SEU.
        </h2>

        {/* Subtext */}
        <p className={`text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 text-balance ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Descubra a robótica, desenvolva novas habilidades e faça parte de uma comunidade movida por inovação, ciência e espírito de equipe.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-14">
          <button
            id="final-cta-participate-btn"
            onClick={() => onOpenParticipation()}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-2xl hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>QUERO PARTICIPAR</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          <button
            id="final-cta-team-finder-btn"
            onClick={onOpenTeamFinder}
            className={`w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isDark 
                ? 'text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500' 
                : 'text-slate-800 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 shadow-sm'
            }`}
          >
            <Users className="w-5 h-5 text-blue-500" />
            <span>ENCONTRE UMA EQUIPE</span>
          </button>
        </div>

        {/* 3 Audience Pillars */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-8 border-t ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          <button type="button"
            onClick={() => onOpenParticipation('ESTUDANTE')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer group ${
              isDark ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500' : 'bg-white border-slate-200 hover:border-blue-500 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase mb-1">
              <Bot className="w-4 h-4" /> Para Estudantes
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Aprenda a programar robôs e dispute arenas nacionais.
            </p>
          </button>

          <button type="button"
            onClick={() => onOpenParticipation('ESCOLA')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer group ${
              isDark ? 'bg-slate-900/60 border-slate-800 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-500 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase mb-1">
              <School className="w-4 h-4" /> Para Escolas & SENAI
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Monte equipes oficiais com apoio pedagógico e técnico.
            </p>
          </button>

          <button type="button"
            onClick={() => onOpenParticipation('MENTOR')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer group ${
              isDark ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500' : 'bg-white border-slate-200 hover:border-amber-500 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase mb-1">
              <HeartHandshake className="w-4 h-4" /> Para Mentores & Juízes
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Compartilhe conhecimento e inspire a próxima geração.
            </p>
          </button>
        </div>

      </div>
    </section>
  );
};
