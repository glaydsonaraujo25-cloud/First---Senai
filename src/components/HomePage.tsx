import React, { Suspense, lazy, useEffect } from 'react';
import { ProgramOverview } from './ProgramOverview';
import { Hero } from './Hero';
import { ProgramComparator } from './ProgramComparator';
import { faqData } from '../data/faqData';

const DfUnitsSection = lazy(() => import('./DfUnitsSection').then(m => ({ default: m.DfUnitsSection })));
const EventsSection = lazy(() => import('./EventsSection').then(m => ({ default: m.EventsSection })));
const FaqSection = lazy(() => import('./FaqSection').then(m => ({ default: m.FaqSection })));
const FinalCta = lazy(() => import('./FinalCta').then(m => ({ default: m.FinalCta })));

interface HomePageProps {
  onNavigateProgram: (program: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (tabOrProgram?: string) => void;
  onOpenTeamFinder: () => void;
}

const LoadingBlock = () => <div className="min-h-40 flex items-center justify-center bg-slate-50 text-slate-500 dark:bg-slate-950 dark:text-slate-400" role="status" aria-live="polite"><span className="text-sm font-semibold">Carregando conteúdo…</span></div>;

export const HomePage: React.FC<HomePageProps> = ({ onNavigateProgram, onOpenParticipation, onOpenTeamFinder }) => {

  useEffect(() => {
    const id = 'faq-structured-data';
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return <main id="conteudo-principal">
    <Hero onOpenParticipation={() => onOpenParticipation()} />
    <ProgramOverview onSelectProgram={onNavigateProgram} onOpenParticipation={onOpenParticipation} />
    <ProgramComparator onSelectProgram={onNavigateProgram} onOpenParticipation={onOpenParticipation} />
    <Suspense fallback={<LoadingBlock />}><DfUnitsSection onOpenParticipation={onOpenParticipation} /></Suspense>
    <Suspense fallback={<LoadingBlock />}><EventsSection onOpenParticipation={onOpenParticipation} /></Suspense>
    <Suspense fallback={<LoadingBlock />}><FaqSection /></Suspense>
    <Suspense fallback={<LoadingBlock />}><FinalCta onOpenParticipation={onOpenParticipation} onOpenTeamFinder={onOpenTeamFinder} /></Suspense>
  </main>;
};
