/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';

const ProgramDetailPage = lazy(() => import('./components/ProgramDetailPage').then(m => ({ default: m.ProgramDetailPage })));
const ParticipationModal = lazy(() => import('./components/ParticipationModal').then(m => ({ default: m.ParticipationModal })));
const TeamFinderModal = lazy(() => import('./components/TeamFinderModal').then(m => ({ default: m.TeamFinderModal })));

type ProgramRoute = 'fll' | 'ftc' | 'frc' | null;
const SITE_URL = 'https://first-senai.vercel.app';

const getProgramFromLocation = (): ProgramRoute => {
  if (typeof window === 'undefined') return null;
  const pathMatch = window.location.pathname.match(/^\/program\/(fll|ftc|frc)\/?$/i);
  if (pathMatch) return pathMatch[1].toLowerCase() as ProgramRoute;
  const hashMatch = window.location.hash.match(/^#\/program\/(fll|ftc|frc)$/i);
  return hashMatch ? (hashMatch[1].toLowerCase() as ProgramRoute) : null;
};

const isUnknownPath = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return path !== '/' && !/^\/program\/(fll|ftc|frc)$/i.test(path);
};

const pageMeta: Record<Exclude<ProgramRoute, null>, { title: string; description: string }> = {
  fll: { title: 'FIRST® LEGO® League | SENAI-DF', description: 'Conheça a FIRST LEGO League com foco no contexto educacional do SENAI-DF e nas oportunidades de robótica no Distrito Federal.' },
  ftc: { title: 'FIRST® Tech Challenge | SENAI-DF', description: 'Conheça a FIRST Tech Challenge com foco em engenharia, programação e formação tecnológica no contexto do SENAI-DF.' },
  frc: { title: 'FIRST® Robotics Competition | SENAI-DF', description: 'Conheça a FIRST Robotics Competition e sua conexão com engenharia, software, estratégia e formação tecnológica no Distrito Federal.' }
};

const LoadingBlock = () => (
  <div className="min-h-40 flex items-center justify-center bg-slate-50 text-slate-500 dark:bg-slate-950 dark:text-slate-400" role="status" aria-live="polite">
    <span className="text-sm font-semibold">Carregando conteúdo…</span>
  </div>
);

export function AppContent() {
  const [isParticipationOpen, setIsParticipationOpen] = useState(false);
  const [isTeamFinderOpen, setIsTeamFinderOpen] = useState(false);
  const [participationInitialTab, setParticipationInitialTab] = useState<string | undefined>(undefined);
  const [activeProgramPage, setActiveProgramPage] = useState<ProgramRoute>(() => getProgramFromLocation());
  const [notFound, setNotFound] = useState(() => isUnknownPath());
  const isAnyModalOpen = isParticipationOpen || isTeamFinderOpen;

  useEffect(() => {
    const syncRoute = () => {
      setActiveProgramPage(getProgramFromLocation());
      setNotFound(isUnknownPath());
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    const initialRoute = getProgramFromLocation();
    if (initialRoute && window.location.hash.startsWith('#/program/')) {
      window.history.replaceState({}, '', `/program/${initialRoute}`);
      setActiveProgramPage(initialRoute);
      setNotFound(false);
    }
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const defaultTitle = 'Robótica FIRST® | SENAI-DF | Distrito Federal';
    const defaultDescription = 'Conheça FLL, FTC e FRC em um projeto educacional voltado ao contexto do SENAI-DF, à robótica e à formação tecnológica no Distrito Federal.';
    const meta = notFound
      ? { title: 'Página não encontrada | SENAI-DF', description: 'A página solicitada não foi encontrada no portal de robótica FIRST® voltado ao SENAI-DF.' }
      : activeProgramPage
        ? pageMeta[activeProgramPage]
        : { title: defaultTitle, description: defaultDescription };
    const path = notFound ? window.location.pathname : activeProgramPage ? `/program/${activeProgramPage}` : '/';
    const currentUrl = `${SITE_URL}${path}`;
    document.title = meta.title;
    metaDescription?.setAttribute('content', meta.description);
    ogTitle?.setAttribute('content', meta.title);
    ogDescription?.setAttribute('content', meta.description);
    ogUrl?.setAttribute('content', currentUrl);
    twitterTitle?.setAttribute('content', meta.title);
    twitterDescription?.setAttribute('content', meta.description);
    canonical?.setAttribute('href', currentUrl);
  }, [activeProgramPage, notFound]);

  useEffect(() => {
    if (!isAnyModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (isParticipationOpen) setIsParticipationOpen(false);
      else if (isTeamFinderOpen) setIsTeamFinderOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnyModalOpen, isParticipationOpen, isTeamFinderOpen]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setActiveProgramPage(getProgramFromLocation());
    setNotFound(isUnknownPath());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenParticipation = (tabOrProgram?: string) => {
    setParticipationInitialTab(tabOrProgram);
    setIsParticipationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      <Header
        isProgramPage={Boolean(activeProgramPage) || notFound}
        onNavigateHome={() => navigateTo('/')}
        onOpenProgram={(program) => navigateTo(`/program/${program}`)}
        onOpenParticipation={() => handleOpenParticipation()}
        onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
      />

      {notFound ? (
        <NotFoundPage onNavigateHome={() => navigateTo('/')} />
      ) : activeProgramPage ? (
        <Suspense fallback={<LoadingBlock />}>
          <ProgramDetailPage program={activeProgramPage} onNavigateHome={() => navigateTo('/')} onOpenParticipation={(program) => handleOpenParticipation(program)} />
        </Suspense>
      ) : (
        <HomePage
          onNavigateProgram={(program) => navigateTo(`/program/${program}`)}
          onOpenParticipation={handleOpenParticipation}
          onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
        />
      )}

      <Footer onOpenParticipation={(tab) => handleOpenParticipation(tab)} />

      <Suspense fallback={null}>
        {isParticipationOpen && <ParticipationModal isOpen={isParticipationOpen} onClose={() => setIsParticipationOpen(false)} initialTab={participationInitialTab} />}
        {isTeamFinderOpen && <TeamFinderModal isOpen={isTeamFinderOpen} onClose={() => setIsTeamFinderOpen(false)} onOpenParticipation={(program) => handleOpenParticipation(program)} />}
      </Suspense>
    </div>
  );
}

export default function App() {
  return <ThemeProvider><AppContent /></ThemeProvider>;
}
