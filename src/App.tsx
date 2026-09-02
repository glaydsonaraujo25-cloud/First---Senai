/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { participationUrl } from './data/participation';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';

const ProgramDetailPage = lazy(() => import('./components/ProgramDetailPage').then(m => ({ default: m.ProgramDetailPage })));
const ParticipationPage = lazy(() => import('./components/ParticipationPage').then(m => ({ default: m.ParticipationPage })));
const UnitsPage = lazy(() => import('./components/UnitsPage').then(m => ({ default: m.UnitsPage })));
const EventsPage = lazy(() => import('./components/EventsPage').then(m => ({ default: m.EventsPage })));
const TeamsPage = lazy(() => import('./components/TeamsPage').then(m => ({ default: m.TeamsPage })));
const ResourcesPage = lazy(() => import('./components/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const TeamFinderModal = lazy(() => import('./components/TeamFinderModal').then(m => ({ default: m.TeamFinderModal })));

type ProgramRoute = 'fll' | 'ftc' | 'frc' | null;
type StaticRoute = 'participar' | 'unidades' | 'eventos' | 'equipes' | 'recursos' | null;
const SITE_URL = 'https://first-senai.vercel.app';

const getProgramFromLocation = (): ProgramRoute => {
  if (typeof window === 'undefined') return null;
  const pathMatch = window.location.pathname.match(/^\/program\/(fll|ftc|frc)\/?$/i);
  if (pathMatch) return pathMatch[1].toLowerCase() as ProgramRoute;
  const hashMatch = window.location.hash.match(/^#\/program\/(fll|ftc|frc)$/i);
  return hashMatch ? (hashMatch[1].toLowerCase() as ProgramRoute) : null;
};

const getStaticPageFromLocation = (): StaticRoute => {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/participar') return 'participar';
  if (path === '/unidades') return 'unidades';
  if (path === '/eventos') return 'eventos';
  if (path === '/equipes') return 'equipes';
  if (path === '/recursos') return 'recursos';
  return null;
};

const isUnknownPath = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return path !== '/' && path !== '/participar' && path !== '/unidades' && path !== '/eventos' && path !== '/equipes' && path !== '/recursos' && !/^\/program\/(fll|ftc|frc)$/i.test(path);
};

const pageMeta: Record<Exclude<ProgramRoute, null>, { title: string; description: string; name: string; audience: string }> = {
  fll: { title: 'FIRST® LEGO® League | SENAI-DF', description: 'Conheça a FIRST LEGO League com foco no contexto educacional do SENAI-DF e nas oportunidades de robótica no Distrito Federal.', name: 'FIRST LEGO League', audience: 'Estudantes em fase de descoberta e fundamentos STEM' },
  ftc: { title: 'FIRST® Tech Challenge | SENAI-DF', description: 'Conheça a FIRST Tech Challenge com foco em engenharia, programação e formação tecnológica no contexto do SENAI-DF.', name: 'FIRST Tech Challenge', audience: 'Estudantes interessados em engenharia aplicada, software e competição' },
  frc: { title: 'FIRST® Robotics Competition | SENAI-DF', description: 'Conheça a FIRST Robotics Competition e sua conexão com engenharia, software, estratégia e formação tecnológica no Distrito Federal.', name: 'FIRST Robotics Competition', audience: 'Estudantes do ensino médio interessados em engenharia multidisciplinar' }
};

const staticPageMeta: Record<Exclude<StaticRoute, null>, { title: string; description: string }> = {
  participar: { title: 'Como participar da robótica FIRST® | SENAI-DF', description: 'Veja caminhos para estudantes, escolas, mentores e apoiadores interessados em robótica FIRST® no contexto do Distrito Federal.' },
  unidades: { title: 'Unidades SENAI-DF | Distrito Federal', description: 'Consulte as unidades SENAI-DF listadas no projeto e acesse os canais oficiais para confirmar endereço, cursos, horários e atendimento.' },
  eventos: { title: 'Eventos de robótica FIRST® | SENAI-DF', description: 'Acompanhe marcos da temporada FIRST® e os canais oficiais para consultar equipes, torneios e atividades de robótica no Distrito Federal.' },
  equipes: { title: 'Encontrar equipes FIRST® | SENAI-DF', description: 'Veja como procurar equipes FIRST® no Distrito Federal usando a busca oficial, instituições locais e os canais do SENAI-DF.' },
  recursos: { title: 'Recursos oficiais de robótica | FIRST® + SENAI-DF', description: 'Acesse em um só lugar os principais recursos oficiais da FIRST®, FLL, FTC, FRC e SENAI-DF.' }
};

const LoadingBlock = () => (
  <div className="min-h-40 flex items-center justify-center bg-slate-50 text-slate-500 dark:bg-slate-950 dark:text-slate-400" role="status" aria-live="polite">
    <span className="text-sm font-semibold">Carregando conteúdo…</span>
  </div>
);

export function AppContent() {
  const [isTeamFinderOpen, setIsTeamFinderOpen] = useState(false);
  const [activeProgramPage, setActiveProgramPage] = useState<ProgramRoute>(() => getProgramFromLocation());
  const [activeStaticPage, setActiveStaticPage] = useState<StaticRoute>(() => getStaticPageFromLocation());
  const [locationKey, setLocationKey] = useState(() => window.location.href);
  const [notFound, setNotFound] = useState(() => isUnknownPath());

  useEffect(() => {
    const syncRoute = () => {
      setLocationKey(window.location.href);
      setActiveProgramPage(getProgramFromLocation());
      setActiveStaticPage(getStaticPageFromLocation());
      setNotFound(isUnknownPath());
      if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    const initialRoute = getProgramFromLocation();
    if (initialRoute && window.location.hash.startsWith('#/program/')) {
      window.history.replaceState({}, '', `/program/${initialRoute}`);
      setActiveProgramPage(initialRoute);
      setActiveStaticPage(null);
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
    const defaultMeta = { title: 'Robótica FIRST® | SENAI-DF | Distrito Federal', description: 'Conheça FLL, FTC e FRC em um projeto educacional voltado ao contexto do SENAI-DF, à robótica e à formação tecnológica no Distrito Federal.' };
    const meta = notFound
      ? { title: 'Página não encontrada | SENAI-DF', description: 'A página solicitada não foi encontrada no portal de robótica FIRST® voltado ao SENAI-DF.' }
      : activeProgramPage
        ? pageMeta[activeProgramPage]
        : activeStaticPage
          ? staticPageMeta[activeStaticPage]
          : defaultMeta;
    const path = notFound ? window.location.pathname : activeProgramPage ? `/program/${activeProgramPage}` : activeStaticPage ? `/${activeStaticPage}` : '/';
    const currentUrl = `${SITE_URL}${path}`;
    document.title = meta.title;
    metaDescription?.setAttribute('content', meta.description);
    ogTitle?.setAttribute('content', meta.title);
    ogDescription?.setAttribute('content', meta.description);
    ogUrl?.setAttribute('content', currentUrl);
    twitterTitle?.setAttribute('content', meta.title);
    twitterDescription?.setAttribute('content', meta.description);
    canonical?.setAttribute('href', currentUrl);
  }, [activeProgramPage, activeStaticPage, notFound]);

  useEffect(() => {
    const scriptId = 'program-page-structured-data';
    document.getElementById(scriptId)?.remove();
    if (!activeProgramPage || notFound) return;
    const meta = pageMeta[activeProgramPage];
    const url = `${SITE_URL}/program/${activeProgramPage}`;
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: meta.title, description: meta.description, inLanguage: 'pt-BR', isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@type': 'Thing', name: meta.name }, audience: { '@type': 'EducationalAudience', educationalRole: meta.audience } },
        { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: 'Programas', item: `${SITE_URL}/#fll` }, { '@type': 'ListItem', position: 3, name: meta.name, item: url } ] }
      ]
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [activeProgramPage, notFound]);

  useEffect(() => {
    const scriptId = 'static-page-structured-data';
    document.getElementById(scriptId)?.remove();
    if (!activeStaticPage || notFound) return;
    const meta = staticPageMeta[activeStaticPage];
    const url = `${SITE_URL}/${activeStaticPage}`;
    const staticLabel = activeStaticPage === 'participar'
      ? 'Como participar'
      : activeStaticPage === 'unidades'
        ? 'Unidades SENAI-DF'
        : activeStaticPage === 'eventos'
          ? 'Eventos'
          : activeStaticPage === 'equipes'
            ? 'Equipes'
            : 'Recursos';
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', url, name: meta.title, description: meta.description, inLanguage: 'pt-BR', isPartOf: { '@id': `${SITE_URL}/#website` } },
        { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL }, { '@type': 'ListItem', position: 2, name: staticLabel, item: url } ] }
      ]
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [activeStaticPage, notFound]);

  useEffect(() => {
    if (!isTeamFinderOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsTeamFinderOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTeamFinderOpen]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setLocationKey(window.location.href);
    setActiveProgramPage(getProgramFromLocation());
    setActiveStaticPage(getStaticPageFromLocation());
    setNotFound(isUnknownPath());
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const redirects: Record<string, string> = { '#temporada': '/eventos#temporada', '#jornada': '/recursos#jornada', '#parceria': '/recursos#parceria' };
    if (window.location.pathname === '/' && redirects[window.location.hash]) {
      window.history.replaceState({}, '', redirects[window.location.hash]);
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    let id: string;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    if (!id) return;
    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
      return true;
    };
    if (scrollToTarget()) return;
    const observer = new MutationObserver(() => { if (scrollToTarget()) observer.disconnect(); });
    observer.observe(document.getElementById('root')!, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 10000);
    return () => { observer.disconnect(); window.clearTimeout(timeout); };
  }, [locationKey]);

  const handleOpenParticipation = (selection?: string) => navigateTo(participationUrl(selection));

  const onSecondaryPage = Boolean(activeProgramPage) || Boolean(activeStaticPage) || notFound;

  return (
    <div className="site-shell min-h-screen selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      <Header
        isProgramPage={onSecondaryPage}
        onNavigateHome={() => navigateTo('/')}
        onOpenProgram={(program) => navigateTo(`/program/${program}`)}
        onOpenParticipation={handleOpenParticipation}
        onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
      />

      {notFound ? (
        <NotFoundPage onNavigateHome={() => navigateTo('/')} />
      ) : activeProgramPage ? (
        <Suspense fallback={<LoadingBlock />}>
          <ProgramDetailPage program={activeProgramPage} onNavigateHome={() => navigateTo('/')} onOpenParticipation={handleOpenParticipation} />
        </Suspense>
      ) : activeStaticPage === 'participar' ? (
        <Suspense fallback={<LoadingBlock />}>
          <ParticipationPage search={new URL(locationKey).search} onNavigateHome={() => navigateTo('/')} onOpenTeamFinder={() => setIsTeamFinderOpen(true)} />
        </Suspense>
      ) : activeStaticPage === 'unidades' ? (
        <Suspense fallback={<LoadingBlock />}>
          <UnitsPage onNavigateHome={() => navigateTo('/')} onOpenParticipation={handleOpenParticipation} onOpenTeamFinder={() => setIsTeamFinderOpen(true)} />
        </Suspense>
      ) : activeStaticPage === 'eventos' ? (
        <Suspense fallback={<LoadingBlock />}>
          <EventsPage onNavigateHome={() => navigateTo('/')} onOpenParticipation={handleOpenParticipation} onOpenTeamFinder={() => setIsTeamFinderOpen(true)} />
        </Suspense>
      ) : activeStaticPage === 'equipes' ? (
        <Suspense fallback={<LoadingBlock />}>
          <TeamsPage onNavigateHome={() => navigateTo('/')} onOpenParticipation={handleOpenParticipation} />
        </Suspense>
      ) : activeStaticPage === 'recursos' ? (
        <Suspense fallback={<LoadingBlock />}>
          <ResourcesPage onNavigateHome={() => navigateTo('/')} />
        </Suspense>
      ) : (
        <HomePage
          onNavigateProgram={(program) => navigateTo(`/program/${program}`)}
          onOpenParticipation={handleOpenParticipation}
          onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
        />
      )}

      <Footer onOpenParticipation={handleOpenParticipation} />

      <Suspense fallback={null}>
        {isTeamFinderOpen && <TeamFinderModal isOpen={isTeamFinderOpen} onClose={() => setIsTeamFinderOpen(false)} onOpenParticipation={handleOpenParticipation} />}
      </Suspense>
    </div>
  );
}

export default function App() {
  return <ThemeProvider><AppContent /></ThemeProvider>;
}
