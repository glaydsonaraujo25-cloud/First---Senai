import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types';
import { NewsDetailModal } from './NewsDetailModal';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODAS');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const categories = [
    'TODAS',
    'Inovação',
    'FIRST LEGO League',
    'FIRST Tech Challenge',
    'FIRST Robotics Competition'
  ];

  const filteredNews = selectedCategory === 'TODAS'
    ? newsData
    : newsData.filter(n => n.category === selectedCategory);

  return (
    <section id="noticias" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Tech Patterns */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400 mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>ATUALIZAÇÕES & REPORTAGENS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            UNIVERSO FIRST® + SENAI
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Fique por dentro das últimas novidades da temporada, conquistas de equipes brasileiras e inovações dos laboratórios.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat === 'TODAS' ? 'Todas as Notícias' : cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-sky-300">
                <span>LER NOTÍCIA COMPLETA</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <NewsDetailModal 
        news={activeArticle} 
        onClose={() => setActiveArticle(null)} 
      />
    </section>
  );
};
