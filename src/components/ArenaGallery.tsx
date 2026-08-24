import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';
import { GalleryPhoto } from '../types';

export const ArenaGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'all', label: 'Todas as Fotos' },
    { id: 'arenas', label: 'Arenas em Ação' },
    { id: 'robots', label: 'Construção & Robôs' },
    { id: 'pits', label: 'Bastidores & Pits' },
    { id: 'teams', label: 'Torcida & Equipes' },
    { id: 'awards', label: 'Premiações' }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === activeFilter);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % galleryPhotos.length;
    setSelectedPhoto(galleryPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = galleryPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    setSelectedPhoto(galleryPhotos[prevIndex]);
  };

  return (
    <section id="galeria" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Subtle Lighting */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400 mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>EXPERIÊNCIA IMERSIVA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            SINTA A ENERGIA DA ARENA.
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A vibração contagiante, a adrenalina dos segundos finais no cronômetro e a união nos bastidores que tornam a robótica inesquecível.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="relative group rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 cursor-pointer shadow-xl hover:border-blue-500/60 transition-all hover:-translate-y-1"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                
                {/* Floating Program Tag */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-sm">
                    {photo.program}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/90 p-1.5 rounded-lg text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
                  {photo.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-600 text-white">
                  {selectedPhoto.program}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {selectedPhoto.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Fechar visualizador de foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview */}
            <div className="relative h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.title}
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors cursor-pointer"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors cursor-pointer"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
