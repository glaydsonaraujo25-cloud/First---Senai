import React from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Clock, 
  Share2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { EventItem } from '../types';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
  onOpenParticipation: (program?: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  onClose,
  onOpenParticipation
}) => {
  if (!event) return null;

  const getBadgeColor = (program: string) => {
    switch (program) {
      case 'FLL': return 'bg-amber-500 text-slate-950';
      case 'FTC': return 'bg-orange-600 text-white';
      case 'FRC': return 'bg-blue-600 text-white';
      default: return 'bg-gradient-to-r from-blue-600 to-red-600 text-white';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden text-white relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider ${getBadgeColor(event.program)}`}>
              {event.program}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {event.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar detalhes do evento"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 id="event-modal-title" className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              {event.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Data Oficial</span>
                <strong className="text-sm text-white">{event.date}</strong>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Localidade</span>
                <strong className="text-sm text-white">{event.city} — {event.state}</strong>
                <span className="text-[11px] text-slate-400 block truncate">{event.venue}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Equipes Esperadas</span>
                <strong className="text-sm text-white">{event.teamsCount || 'Em definição'}</strong>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3">
              <Trophy className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Status / Acesso</span>
                <strong className="text-sm text-emerald-400">{event.status}</strong>
                <span className="text-[11px] text-slate-400 block">{event.publicAccess}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenParticipation(event.program === 'ALL' ? undefined : event.program);
              }}
              className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Inscrever Equipe / Participar</span>
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: event.name,
                    text: `Confira o evento ${event.name} da FIRST® + SENAI em ${event.city}-${event.state}!`,
                    url: window.location.href
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link do evento copiado para a área de transferência!');
                }
              }}
              className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Compartilhar</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
