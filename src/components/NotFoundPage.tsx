import React from 'react';
import { ArrowLeft, Home, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NotFoundPageProps {
  onNavigateHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  const { isDark } = useTheme();

  return (
    <main id="conteudo-principal" className={`min-h-[80vh] pt-32 pb-20 flex items-center transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className={`mx-auto mb-6 w-20 h-20 rounded-3xl border flex items-center justify-center text-3xl font-black ${isDark ? 'bg-slate-900 border-slate-800 text-blue-400' : 'bg-white border-slate-200 text-blue-700 shadow-lg'}`}>404</div>
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-5 ${isDark ? 'bg-slate-900 border-slate-800 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>
          <MapPin className="w-3.5 h-3.5" /> SENAI-DF · Distrito Federal
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">Página não encontrada</h1>
        <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          O endereço acessado não existe neste portal. Volte para a página inicial e continue explorando FLL, FTC, FRC e as informações de robótica do SENAI-DF.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button type="button" onClick={onNavigateHome} className="min-h-12 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
            <Home className="w-4 h-4" /> Ir para o início
          </button>
          <button type="button" onClick={() => window.history.back()} className={`min-h-12 px-6 py-3 rounded-xl border font-bold inline-flex items-center justify-center gap-2 ${isDark ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100'}`}>
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
        </div>
      </div>
    </main>
  );
};
