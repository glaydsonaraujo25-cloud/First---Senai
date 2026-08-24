import React, { useState } from 'react';
import { Newspaper, Calendar, ChevronRight, Info } from 'lucide-react';
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
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400 mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>CONTEÚDOS & DESTAQUES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            UNIVERSO FIRST® + SENAI
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Conteúdos educativos sobre inovação, engenharia e os programas FLL, FTC e FRC.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4 text-xs sm:text-sm text-sky-100 flex items-start gap-3">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-sky-300" />
          <p>
            Os materiais desta seção são conteúdos demonstrativos do projeto. Eles não representam comunicados oficiais nem substituem notícias publicadas pelos canais institucionais da FIRST ou do SENAI.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" aria-label="Filtrar conteúdos por categoria">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat === 'TODAS' ? 'Todos os Conteúdos' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(item)}
                  className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
                  aria-label={`Abrir conteúdo: ${item.title}`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt=""
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
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(item)}
                className="p-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
              >
                <span>LER CONTEÚDO</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>

      <NewsDetailModal news={activeArticle} onClose={() => setActiveArticle(null)} />
    </section>
  );
};
