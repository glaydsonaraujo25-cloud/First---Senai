import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  ArrowRight, 
  Filter, 
  ChevronRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { eventsData } from '../data/eventsData';
import { EventItem } from '../types';
import { EventDetailModal } from './EventDetailModal';

interface EventsSectionProps {
  onOpenParticipation: (program?: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onOpenParticipation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const filters = [
    { id: 'TODOS', label: 'TODOS OS EVENTOS' },
    { id: 'FLL', label: 'LEGO LEAGUE' },
    { id: 'FTC', label: 'TECH CHALLENGE' },
    { id: 'FRC', label: 'ROBOTICS COMPETITION' }
  ];

  const filteredEvents = selectedCategory === 'TODOS'
    ? eventsData
    : eventsData.filter(e => e.program === selectedCategory || e.program === 'ALL');

  const getBadgeStyle = (program: string) => {
    switch (program) {
      case 'FLL': return 'bg-amber-500 text-slate-950';
      case 'FTC': return 'bg-orange-600 text-white';
      case 'FRC': return 'bg-blue-600 text-white';
      default: return 'bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600 text-white';
    }
  };

  return (
    <section id="eventos" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>CALENDÁRIO OFICIAL DA TEMPORADA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            PRÓXIMOS EVENTOS
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Acompanhe os torneios regionais, festivais e etapas nacionais que movimentam arenas em todo o país.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedCategory(f.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === f.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-slate-600 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div>
                {/* Top Info Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider ${getBadgeStyle(evt.program)}`}>
                    {evt.programName}
                  </span>

                  <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {evt.category}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                  {evt.name}
                </h3>

                {/* Date & Location list */}
                <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2.5 text-sky-300 font-semibold">
                    <Calendar className="w-4 h-4 shrink-0 text-sky-400" />
                    <span>{evt.date}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{evt.city} — {evt.state}</span>
                      <span className="text-slate-400 text-[11px] block truncate">{evt.venue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"></span>
                  {evt.status}
                </span>

                <button
                  onClick={() => setActiveModalEvent(evt)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>VER DETALHES</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Host an Event / Volunteer Banner */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              Quer sediar um torneio regional ou atuar como juiz voluntário?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              O SENAI e a FIRST® oferecem certificações e apoio operacional completo para realizadores.
            </p>
          </div>

          <button
            onClick={() => onOpenParticipation('VOLUNTARIO')}
            className="shrink-0 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-700 transition-colors"
          >
            Seja Voluntário / Juiz
          </button>
        </div>

      </div>

      {/* Event Details Modal */}
      <EventDetailModal 
        event={activeModalEvent} 
        onClose={() => setActiveModalEvent(null)}
        onOpenParticipation={onOpenParticipation}
      />
    </section>
  );
};
