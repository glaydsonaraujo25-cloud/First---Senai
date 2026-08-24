/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export function AppContent() {
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isParticipationOpen, setIsParticipationOpen] = useState<boolean>(false);
  const [isTeamFinderOpen, setIsTeamFinderOpen] = useState<boolean>(false);
  const [participationInitialTab, setParticipationInitialTab] = useState<string | undefined>(undefined);

  const handleOpenParticipation = (tabOrProgram?: string) => {
    setParticipationInitialTab(tabOrProgram);
    setIsParticipationOpen(true);
  };

  const handleSelectProgramFromQuiz = (programId: string) => {
    const element = document.getElementById(programId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      <Header
        onOpenParticipation={() => handleOpenParticipation()}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
      />

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
