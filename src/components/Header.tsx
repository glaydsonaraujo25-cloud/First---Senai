import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Menu, Users, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  isProgramPage?: boolean;
  onNavigateHome?: () => void;
  onOpenProgram?: (program: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (initialTab?: string) => void;
  onOpenTeamFinder: () => void;
}

const beforeProgramLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Robótica DF', href: '#parceria' },
  { label: 'Jornada', href: '#jornada' },
  { label: 'Temporada', href: '#temporada' },
];

const afterProgramLinks = [
  { label: 'Unidades DF', href: '#unidades-df' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'FAQ', href: '#faq' },
];

const observedSections = ['#inicio', '#parceria', '#jornada', '#temporada', '#fll', '#ftc', '#frc', '#unidades-df', '#eventos', '#faq'];
const programSections = new Set(['#fll', '#ftc', '#frc']);

export const Header: React.FC<HeaderProps> = ({ isProgramPage = false, onNavigateHome, onOpenProgram, onOpenParticipation, onOpenTeamFinder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programMenuOpen, setProgramMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0);

      if (isProgramPage) return;
      const marker = window.scrollY + 150;
      let current = '#inicio';
      for (const href of observedSections) {
        const element = document.querySelector(href) as HTMLElement | null;
        if (element && element.offsetTop <= marker) current = href;
      }
      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [isProgramPage]);

  useEffect(() => {
    if (!programMenuOpen) return;
    const closeMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-program-menu]')) setProgramMenuOpen(false);
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProgramMenuOpen(false);
    };
    document.addEventListener('mousedown', closeMenu);
    document.addEventListener('keydown', closeWithEscape);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
      document.removeEventListener('keydown', closeWithEscape);
    };
  }, [programMenuOpen]);

  const handleHomeAnchor = (href: string) => {
    if (isProgramPage) {
      window.location.assign(`/${href}`);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const desktopLink = (link: { label: string; href: string }) => {
    const active = activeSection === link.href && !isProgramPage;
    return (
      <a
        key={link.href}
        href={isProgramPage ? `/${link.href}` : link.href}
        aria-current={active ? 'location' : undefined}
        onClick={(event) => { event.preventDefault(); handleHomeAnchor(link.href); }}
        className={`relative px-2.5 py-2 rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${active ? (isDark ? 'bg-blue-500/15 text-blue-300 shadow-[inset_0_-2px_0_#60a5fa]' : 'bg-blue-50 text-blue-700 shadow-[inset_0_-2px_0_#2563eb]') : (isDark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100')}`}
      >{link.label}</a>
    );
  };

  const mobileLink = (link: { label: string; href: string }) => {
    const active = activeSection === link.href && !isProgramPage;
    return (
      <a
        key={link.href}
        href={link.href}
        aria-current={active ? 'location' : undefined}
        onClick={(event) => { event.preventDefault(); setMobileMenuOpen(false); handleHomeAnchor(link.href); }}
        className={`px-3 py-2 rounded-lg font-medium transition-all ${active ? 'bg-blue-600 text-white shadow-md' : (isDark ? 'bg-slate-800/80 text-slate-200 hover:bg-blue-600' : 'bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white')}`}
      >{link.label}</a>
    );
  };

  const programsActive = !isProgramPage && programSections.has(activeSection);
  const activeProgram = programSections.has(activeSection) ? activeSection.slice(1) : null;

  return (
    <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' : 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3') : (isDark ? 'bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent py-4' : 'bg-gradient-to-b from-white/95 via-white/85 to-transparent py-4')}`}>
      <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-slate-200/40 dark:bg-slate-800/60 pointer-events-none" aria-hidden="true">
        <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg">Pular para o conteúdo</a>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <button type="button" onClick={() => onNavigateHome ? onNavigateHome() : (window.location.hash = '#inicio')} className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 text-left shrink-0" aria-label="FIRST e SENAI-DF - página inicial">
            <div className="flex items-center">
              <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold px-2 sm:px-2.5 py-1 rounded-md shadow-md">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full" /><div className="w-2.5 h-2.5 bg-white rotate-45" /><div className="w-2.5 h-2.5 bg-amber-400" />
                <span className="ml-1 tracking-wider text-xs sm:text-sm font-black">FIRST<sup className="text-[9px]">®</sup></span>
              </div>
              <span className={`mx-1.5 sm:mx-2 font-light text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>+</span>
              <div className="bg-blue-700 text-white font-black tracking-widest text-xs sm:text-sm px-2 sm:px-2.5 py-1 rounded-md shadow-md border-b-2 border-orange-500">SENAI-DF</div>
            </div>
            <div className={`hidden 2xl:block border-l pl-3 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
              <p className={`text-[11px] font-semibold tracking-wide leading-tight ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>ROBÓTICA & EDUCAÇÃO STEM</p>
              <p className={`text-[10px] leading-tight flex items-center gap-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}><MapPin className="w-2.5 h-2.5" /> Distrito Federal • Brasília</p>
            </div>
          </button>

          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium" aria-label="Navegação principal">
            {beforeProgramLinks.map(desktopLink)}
            <div className="relative" data-program-menu>
              <button
                type="button"
                onClick={() => setProgramMenuOpen(value => !value)}
                aria-expanded={programMenuOpen}
                aria-current={programsActive ? 'location' : undefined}
                aria-haspopup="menu"
                className={`px-3 py-2 rounded-md transition-all flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${programsActive ? (isDark ? 'bg-blue-500/15 text-blue-300 shadow-[inset_0_-2px_0_#60a5fa]' : 'bg-blue-50 text-blue-700 shadow-[inset_0_-2px_0_#2563eb]') : (isDark ? 'text-slate-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100')}`}
              >Programas <ChevronDown className={`w-3.5 h-3.5 transition-transform ${programMenuOpen ? 'rotate-180' : ''}`} /></button>
              {programMenuOpen && (
                <div role="menu" className={`absolute top-full left-0 mt-2 w-64 rounded-xl border p-2 shadow-xl ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                  {([['fll', 'FIRST LEGO League'], ['ftc', 'FIRST Tech Challenge'], ['frc', 'FIRST Robotics Competition']] as const).map(([id, label]) => (
                    <button key={id} role="menuitem" type="button" onClick={() => { setProgramMenuOpen(false); if (isProgramPage) onOpenProgram?.(id); else handleHomeAnchor(`#${id}`); }} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeProgram === id ? (isDark ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-50 text-blue-700') : (isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100')}`}>{label}</button>
                  ))}
                </div>
              )}
            </div>
            {afterProgramLinks.map(desktopLink)}
          </nav>

          <div className="hidden xl:flex items-center gap-2.5">
            <ThemeToggle />
            <button onClick={() => onOpenParticipation()} className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-700 to-orange-500 hover:from-blue-600 hover:to-orange-400 rounded-lg shadow-md transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Participe no DF <ChevronRight className="w-4 h-4" /></button>
          </div>

          <div className="flex xl:hidden items-center gap-1 sm:gap-2">
            <ThemeToggle className="p-1.5" />
            <button type="button" onClick={() => setMobileMenuOpen(value => !value)} className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`} aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'} aria-expanded={mobileMenuOpen} aria-controls="compact-navigation">{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="compact-navigation" className={`xl:hidden border-b px-4 sm:px-6 pt-3 pb-5 space-y-3 shadow-2xl max-h-[calc(100vh-72px)] overflow-y-auto ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
          <div className="max-w-3xl mx-auto space-y-3">
            <div className={`rounded-xl border p-3 flex items-center gap-2 text-xs font-bold ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-700'}`}><MapPin className="w-4 h-4" /> SENAI-DF • Distrito Federal</div>
            {!isProgramPage && <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">{beforeProgramLinks.map(mobileLink)}</div>}

            <div className={`rounded-xl p-3 ${programsActive ? (isDark ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-blue-50 border border-blue-200') : ''}`}>
              <p className={`text-[11px] font-bold uppercase tracking-wider mb-2 ${programsActive ? 'text-blue-600' : 'text-slate-500'}`}>Programas</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">{([['fll', 'FLL · LEGO League'], ['ftc', 'FTC · Tech Challenge'], ['frc', 'FRC · Robotics Competition']] as const).map(([id, label]) => <button key={id} type="button" onClick={() => { setMobileMenuOpen(false); if (isProgramPage) onOpenProgram?.(id); else handleHomeAnchor(`#${id}`); }} className={`px-3 py-2.5 rounded-lg text-left font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeProgram === id ? 'bg-blue-600 text-white shadow-md' : (isDark ? 'bg-slate-800 text-slate-200' : 'bg-white border border-slate-200 text-slate-800')}`}>{label}</button>)}</div>
            </div>

            {!isProgramPage && <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">{afterProgramLinks.map(mobileLink)}</div>}

            <div className={`pt-2 border-t flex flex-col sm:flex-row gap-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <button onClick={() => { setMobileMenuOpen(false); onOpenTeamFinder(); }} className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-200 bg-slate-800 border border-slate-700' : 'text-slate-700 bg-slate-100 border border-slate-200'}`}><Users className="w-4 h-4 text-blue-500" /> Equipes e eventos no DF</button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenParticipation(); }} className="flex-1 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-orange-500 rounded-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">QUERO PARTICIPAR NO DF <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
