import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Tag 
} from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose }) => {
  if (!news) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-modal-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl overflow-y-auto text-white relative">
        
        {/* Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            {news.category}
          </span>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar notícia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image */}
        <div className="h-56 sm:h-72 relative">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {news.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {news.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              {news.author}
            </span>
          </div>

          <h2 id="news-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {news.title}
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800 pt-6">
            {news.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="border-t border-slate-800 pt-6 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              FIRST® + SENAI • Notícias e Inovação
            </span>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: news.title,
                    text: news.summary,
                    url: window.location.href
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link da notícia copiado!');
                }
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
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
