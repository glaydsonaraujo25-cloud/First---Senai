import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight, Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenParticipation: (initialTab?: string) => void;
  onOpenQuiz: () => void;
  onOpenTeamFinder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenParticipation,
  onOpenQuiz,
  onOpenTeamFinder
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Programas', href: '#programas' },
    { label: 'Jornada', href: '#jornada' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Sobre', href: '#parceria' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3'
            : 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : isDark
            ? 'bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent py-4'
            : 'bg-gradient-to-b from-slate-50/95 via-slate-50/75 to-transparent py-4'
      }`}
    >
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            id="header-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="FIRST e SENAI - página inicial"
          >
            <div className="flex items-center">
              <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold px-2.5 py-1 rounded-md shadow-md">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <div className="w-2.5 h-2.5 bg-white rotate-45" />
                <div className="w-2.5 h-2.5 bg-amber-400" />
                <span className="ml-1 tracking-wider text-sm font-black">FIRST<sup className="text-[10px]">®</sup></span>
              </div>
              <span className={`mx-2 font-light text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>+</span>
              <div className="bg-red-600 text-white font-black tracking-widest text-sm px-2.5 py-1 rounded-md shadow-md">
                SENAI
              </div>
            </div>
            <div className={`hidden xl:block border-l pl-3 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
              <p className={`text-[11px] font-semibold tracking-wide leading-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                ROBÓTICA & EDUCAÇÃO STEM
              </p>
              <p className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Experiência educacional demonstrativa
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isDark
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />
            <button
              onClick={onOpenQuiz}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark
                  ? 'text-sky-400 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/80'
                  : 'text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Descobrir programa</span>
            </button>
            <button
              onClick={() => onOpenParticipation()}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-lg shadow-md transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <span>Participe</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-1.5">
            <ThemeToggle className="p-1.5" />
            <button
              onClick={() => onOpenParticipation()}
              className="px-3 py-1.5 text-xs font-bold text-white bg-red-600 rounded-md"
            >
              Participe
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`sm:hidden border-b px-4 pt-3 pb-6 space-y-3 shadow-2xl ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  isDark ? 'bg-slate-800/80 text-slate-200 hover:bg-blue-600' : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className={`pt-2 border-t flex flex-col gap-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className={`w-full py-2.5 px-4 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 ${
                isDark ? 'text-sky-300 bg-sky-950/80 border border-sky-800' : 'text-blue-700 bg-blue-50 border border-blue-200'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Descubra seu programa
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenTeamFinder(); }}
              className={`w-full py-2.5 px-4 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 ${
                isDark ? 'text-slate-200 bg-slate-800 border border-slate-700' : 'text-slate-700 bg-slate-100 border border-slate-200'
              }`}
            >
              <Users className="w-4 h-4 text-blue-500" /> Encontre uma equipe
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenParticipation(); }}
              className="w-full py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-lg flex items-center justify-center gap-2"
            >
              QUERO PARTICIPAR <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
