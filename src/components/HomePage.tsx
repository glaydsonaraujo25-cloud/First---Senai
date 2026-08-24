import React, { Suspense, lazy } from 'react';
import { Hero } from './Hero';
import { Partnership } from './Partnership';
import { Journey } from './Journey';
import { SeasonTimeline } from './SeasonTimeline';
import { ProgramFLL } from './ProgramFLL';
import { ProgramFTC } from './ProgramFTC';
import { ProgramFRC } from './ProgramFRC';
import { ProgramComparator } from './ProgramComparator';

const BeyondRobots = lazy(() => import('./BeyondRobots').then(m => ({ default: m.BeyondRobots })));
const ArenaGallery = lazy(() => import('./ArenaGallery').then(m => ({ default: m.ArenaGallery })));
const ImpactStats = lazy(() => import('./ImpactStats').then(m => ({ default: m.ImpactStats })));
const DfUnitsSection = lazy(() => import('./DfUnitsSection').then(m => ({ default: m.DfUnitsSection })));
const EventsSection = lazy(() => import('./EventsSection').then(m => ({ default: m.EventsSection })));
const TestimonialsSection = lazy(() => import('./TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const NewsSection = lazy(() => import('./NewsSection').then(m => ({ default: m.NewsSection })));
const FaqSection = lazy(() => import('./FaqSection').then(m => ({ default: m.FaqSection })));
const FinalCta = lazy(() => import('./FinalCta').then(m => ({ default: m.FinalCta })));

interface HomePageProps {
  onNavigateProgram: (program: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (tabOrProgram?: string) => void;
  onOpenTeamFinder: () => void;
}

const LoadingBlock = () => (
  <div className="min-h-40 flex items-center justify-center bg-slate-50 text-slate-500 dark:bg-slate-950 dark:text-slate-400" role="status" aria-live="polite">
    <span className="text-sm font-semibold">Carregando conteúdo…</span>
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigateProgram, onOpenParticipation, onOpenTeamFinder }) => (
  <main id="conteudo-principal">
    <Hero onOpenParticipation={() => onOpenParticipation()} />
    <Partnership />
    <Journey />
    <SeasonTimeline />

    <div id="programas" className="scroll-mt-24">
      <ProgramFLL onOpenParticipation={() => onOpenParticipation('FLL')} />
      <ProgramFTC onOpenParticipation={() => onOpenParticipation('FTC')} />
      <ProgramFRC onOpenParticipation={() => onOpenParticipation('FRC')} />
      <ProgramComparator onSelectProgram={onNavigateProgram} onOpenParticipation={onOpenParticipation} />
    </div>

    <Suspense fallback={<LoadingBlock />}>
      <BeyondRobots />
      <ArenaGallery />
      <ImpactStats />
      <DfUnitsSection onOpenParticipation={onOpenParticipation} />
      <EventsSection onOpenParticipation={onOpenParticipation} />
      <TestimonialsSection />
      <NewsSection />
      <FaqSection />
      <FinalCta onOpenParticipation={onOpenParticipation} onOpenTeamFinder={onOpenTeamFinder} />
    </Suspense>
  </main>
);
