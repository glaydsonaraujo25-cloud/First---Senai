import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, Info, Maximize2, X } from 'lucide-react';
import { galleryPhotos } from '../data/galleryData';
import { GalleryPhoto } from '../types';
import { useTheme } from '../context/ThemeContext';

export const ArenaGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const { isDark } = useTheme();

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'fll', label: 'FLL' },
    { id: 'ftc', label: 'FTC' },
    { id: 'frc', label: 'FRC' }
  ];

  const filteredPhotos = activeFilter === 'all' ? galleryPhotos : galleryPhotos.filter(photo => photo.category === activeFilter);

  const move = (direction: 1 | -1) => {
    if (!selectedPhoto) return;
    const index = galleryPhotos.findIndex(photo => photo.id === selectedPhoto.id);
    setSelectedPhoto(galleryPhotos[(index + direction + galleryPhotos.length) % galleryPhotos.length]);
  };

  return (
    <section id="galeria" className={`py-16 sm:py-24 border-t relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-sky-400' : 'bg-blue-50 border-blue-200 text-blue-700'}`}><Camera className="w-3.5 h-3.5" /> EXPERIÊNCIA VISUAL</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FLL, FTC e FRC em perspectiva</h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Uma galeria ilustrativa para representar construção, programação, engenharia e colaboração nas três modalidades.</p>
        </div>

        <div className={`max-w-3xl mx-auto mb-8 rounded-2xl border p-4 flex items-start gap-3 ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">As imagens desta seção são ilustrativas e não representam necessariamente equipes, eventos ou instalações do SENAI-DF ou da FIRST®.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(filter => (
            <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${activeFilter === filter.id ? 'bg-blue-600 border-blue-600 text-white' : isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}>{filter.label}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map(photo => (
            <button key={photo.id} type="button" onClick={() => setSelectedPhoto(photo)} className={`text-left rounded-2xl overflow-hidden border group transition-all hover:-translate-y-1 ${isDark ? 'bg-slate-900 border-slate-800 hover:border-blue-600' : 'bg-white border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300'}`}>
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-black bg-white/95 text-slate-900">{photo.program}</span>
                <span className="absolute bottom-3 right-3 p-2 rounded-lg bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"><Maximize2 className="w-4 h-4" /></span>
              </div>
              <div className="p-5">
                <p className={`text-xs font-black uppercase tracking-widest mb-1 ${photo.program === 'FLL' ? 'text-amber-600' : photo.program === 'FTC' ? 'text-orange-600' : 'text-blue-600'}`}>{photo.categoryLabel}</p>
                <h3 className="font-black text-lg mb-2">{photo.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{photo.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`Visualização: ${selectedPhoto.title}`}>
          <div className={`relative max-w-5xl w-full rounded-3xl overflow-hidden border shadow-2xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <div className={`flex items-center justify-between gap-4 p-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div><span className="text-xs font-black text-blue-600">{selectedPhoto.program}</span><h4 className="font-black">{selectedPhoto.title}</h4></div>
              <button onClick={() => setSelectedPhoto(null)} className={`p-2 rounded-xl ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`} aria-label="Fechar imagem"><X className="w-5 h-5" /></button>
            </div>
            <div className="relative h-[55vh] sm:h-[65vh] bg-slate-950 flex items-center justify-center">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="max-w-full max-h-full object-contain" />
              <button onClick={() => move(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white hover:bg-blue-600" aria-label="Imagem anterior"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={() => move(1)} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-white hover:bg-blue-600" aria-label="Próxima imagem"><ChevronRight className="w-6 h-6" /></button>
            </div>
            <div className={`p-4 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{selectedPhoto.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
};
