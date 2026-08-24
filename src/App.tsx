/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partnership } from './components/Partnership';
import { Journey } from './components/Journey';
import { SeasonTimeline } from './components/SeasonTimeline';
import { ProgramFLL } from './components/ProgramFLL';
import { ProgramFTC } from './components/ProgramFTC';
import { ProgramFRC } from './components/ProgramFRC';
import { ProgramComparator } from './components/ProgramComparator';
import { ProgramDetailPage } from './components/ProgramDetailPage';
import { BeyondRobots } from './components/BeyondRobots';
import { ArenaGallery } from './components/ArenaGallery';
import { ImpactStats } from './components/ImpactStats';
import { BrazilMapSection } from './components/BrazilMapSection';
import { EventsSection } from './components/EventsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ProgramQuizModal } from './components/ProgramQuizModal';
import { ParticipationModal } from './components/ParticipationModal';
import { TeamFinderModal } from './components/TeamFinderModal';

type ProgramRoute = 'fll' | 'ftc' | 'frc' | null;

const getProgramFromLocation = (): ProgramRoute => {
  if (typeof window === 'undefined') return null;

  const pathMatch = window.location.pathname.match(/^\/program\/(fll|ftc|frc)\/?$/i);
  if (pathMatch) return pathMatch[1].toLowerCase() as ProgramRoute;

  // Backward compatibility with old hash links.
  const hashMatch = window.location.hash.match(/^#\/program\/(fll|ftc|frc)$/i);
  return hashMatch ? (hashMatch[1].toLowerCase() as ProgramRoute) : null;
};

const pageMeta: Record<Exclude<ProgramRoute, null>, { title: string; description: string }> = {
  fll: {
    title: 'FIRST® LEGO® League | FIRST + SENAI',
    description: 'Conheça a FIRST LEGO League, o programa de robótica e STEM para jovens, com desafios práticos, inovação e trabalho em equipe.'
  },
  ftc: {
    title: 'FIRST® Tech Challenge | FIRST + SENAI',
    description: 'Conheça a FIRST Tech Challenge: engenharia aplicada, programação e robôs competitivos para estudantes de 12 a 18 anos.'
  },
  frc: {
    title: 'FIRST® Robotics Competition | FIRST + SENAI',
    description: 'Conheça a FIRST Robotics Competition: engenharia em grande escala, software, estratégia e colaboração para estudantes do ensino médio.'
  }
};

export function AppContent() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isParticipationOpen, setIsParticipationOpen] = useState(false);
  const [isTeamFinderOpen, setIsTeamFinderOpen] = useState(false);
  const [participationInitialTab, setParticipationInitialTab] = useState<string | undefined>(undefined);
  const [activeProgramPage, setActiveProgramPage] = useState<ProgramRoute>(() => getProgramFromLocation());

  useEffect(() => {
    const syncRoute = () => {
      const route = getProgramFromLocation();
      setActiveProgramPage(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);

    // Migrate old hash program URLs to real paths.
    const initialRoute = getProgramFromLocation();
    if (initialRoute && window.location.hash.startsWith('#/program/')) {
      window.history.replaceState({}, '', `/program/${initialRoute}`);
      setActiveProgramPage(initialRoute);
    }

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (activeProgramPage) {
      const meta = pageMeta[activeProgramPage];
      document.title = meta.title;
      metaDescription?.setAttribute('content', meta.description);
    } else {
      document.title = 'FIRST® + SENAI | Robótica, Educação STEM e Inovação';
      metaDescription?.setAttribute('content', 'Conheça FLL, FTC e FRC e explore uma experiência educacional sobre robótica, STEM, engenharia e inovação.');
    }
  }, [activeProgramPage]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setActiveProgramPage(getProgramFromLocation());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenParticipation = (tabOrProgram?: string) => {
    setParticipationInitialTab(tabOrProgram);
    setIsParticipationOpen(true);
  };

  const handleSelectProgramFromQuiz = (programId: string) => {
    const normalized = programId.toLowerCase();
    if (normalized === 'fll' || normalized === 'ftc' || normalized === 'frc') {
      setIsQuizOpen(false);
      navigateTo(`/program/${normalized}`);
      return;
    }

    const element = document.getElementById(programId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      <Header
        isProgramPage={Boolean(activeProgramPage)}
        onNavigateHome={() => navigateTo('/')}
        onOpenProgram={(program) => navigateTo(`/program/${program}`)}
        onOpenParticipation={() => handleOpenParticipation()}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
      />

      {activeProgramPage ? (
        <ProgramDetailPage
          program={activeProgramPage}
          onNavigateHome={() => navigateTo('/')}
          onOpenParticipation={(program) => handleOpenParticipation(program)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />
      ) : (
        <main id="conteudo-principal">
          <Hero
            onOpenQuiz={() => setIsQuizOpen(true)}
            onOpenParticipation={() => handleOpenParticipation()}
          />
          <Partnership onOpenParticipation={() => handleOpenParticipation('ESCOLA')} />
          <Journey onOpenQuiz={() => setIsQuizOpen(true)} />
          <SeasonTimeline />
          <ProgramFLL onOpenParticipation={() => handleOpenParticipation('FLL')} />
          <ProgramFTC onOpenParticipation={() => handleOpenParticipation('FTC')} />
          <ProgramFRC onOpenParticipation={() => handleOpenParticipation('FRC')} />
          <ProgramComparator
            onOpenQuiz={() => setIsQuizOpen(true)}
            onSelectProgram={(program) => navigateTo(`/program/${program}`)}
            onOpenParticipation={(program) => handleOpenParticipation(program)}
          />
          <BeyondRobots />
          <ArenaGallery />
          <ImpactStats />
          <BrazilMapSection onOpenParticipation={(program) => handleOpenParticipation(program)} />
          <EventsSection onOpenParticipation={(program) => handleOpenParticipation(program)} />
          <TestimonialsSection />
          <NewsSection />
          <FaqSection />
          <FinalCta
            onOpenParticipation={(tab) => handleOpenParticipation(tab)}
            onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
          />
        </main>
      )}

      <Footer
        onOpenParticipation={(tab) => handleOpenParticipation(tab)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      <ProgramQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectProgram={handleSelectProgramFromQuiz}
        onOpenParticipation={(program) => handleOpenParticipation(program)}
      />

      <ParticipationModal
        isOpen={isParticipationOpen}
        onClose={() => setIsParticipationOpen(false)}
        initialTab={participationInitialTab}
      />

      <TeamFinderModal
        isOpen={isTeamFinderOpen}
        onClose={() => setIsTeamFinderOpen(false)}
        onOpenParticipation={(program) => handleOpenParticipation(program)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
