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

// Interactive Modals
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      
      {/* Fixed Navigation Header */}
      <Header 
        onOpenParticipation={() => handleOpenParticipation()}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenParticipation={() => handleOpenParticipation()}
        />

        {/* 2. Institutional Partnership (FIRST + SENAI) */}
        <Partnership onOpenParticipation={() => handleOpenParticipation('ESCOLA')} />

        {/* 3. Student STEM Journey */}
        <Journey onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* 4. Season Timeline (7 Steps of Engineering) */}
        <SeasonTimeline />

        {/* 5. FIRST LEGO League (FLL) */}
        <ProgramFLL onOpenParticipation={() => handleOpenParticipation('FLL')} />

        {/* 6. FIRST Tech Challenge (FTC) */}
        <ProgramFTC onOpenParticipation={() => handleOpenParticipation('FTC')} />

        {/* 7. FIRST Robotics Competition (FRC) */}
        <ProgramFRC onOpenParticipation={() => handleOpenParticipation('FRC')} />

        {/* 8. Program Comparator & Quiz Invitation */}
        <ProgramComparator 
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenParticipation={(program) => handleOpenParticipation(program)}
        />

        {/* 9. Beyond Robots (Gracious Professionalism & Coopertition) */}
        <BeyondRobots />

        {/* 10. Arena Photo & Media Experience */}
        <ArenaGallery />

        {/* 11. Impact & Numbers */}
        <ImpactStats />

        {/* 12. Interactive Brazil Map */}
        <BrazilMapSection onOpenParticipation={(program) => handleOpenParticipation(program)} />

        {/* 13. Upcoming Events & Tournaments */}
        <EventsSection onOpenParticipation={(program) => handleOpenParticipation(program)} />

        {/* 14. Testimonials from Students, Teachers & Mentors */}
        <TestimonialsSection />

        {/* 15. News & Innovation Articles */}
        <NewsSection />

        {/* 16. FAQ (Frequently Asked Questions) */}
        <FaqSection />

        {/* 17. Final Impactful Call To Action */}
        <FinalCta 
          onOpenParticipation={(tab) => handleOpenParticipation(tab)}
          onOpenTeamFinder={() => setIsTeamFinderOpen(true)}
        />
      </main>

      {/* Institutional Footer */}
      <Footer 
        onOpenParticipation={(tab) => handleOpenParticipation(tab)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Global Interactive Modals */}
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
