import React, { useState } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles, 
  GraduationCap, 
  Users, 
  Building2 
} from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  const getProgramBadge = (program: string) => {
    switch (program) {
      case 'FLL': return 'bg-amber-500 text-slate-950';
      case 'FTC': return 'bg-orange-600 text-white';
      case 'FRC': return 'bg-blue-600 text-white';
      default: return 'bg-red-600 text-white';
    }
  };

  return (
    <section id="depoimentos" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-sky-400 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>VOZES DA COMUNIDADE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            QUEM VIVE A EXPERIÊNCIA
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Histórias de estudantes, professores, mentores e ex-alunos que tiveram suas vidas e trajetórias transformadas pela robótica.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-800 pointer-events-none opacity-40" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            {/* Avatar & Badges */}
            <div className="shrink-0 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-slate-700 mx-auto shadow-xl relative group">
                <img 
                  src={current.avatar} 
                  alt={current.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className={`mt-3 inline-block px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${getProgramBadge(current.program)}`}>
                {current.program}
              </span>
            </div>

            {/* Quote & Author Info */}
            <div className="space-y-4 text-center sm:text-left">
              <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-lg font-bold text-white">
                  {current.name}
                </h4>
                <p className="text-xs text-sky-400 font-semibold">
                  {current.role}
                </p>
                <p className="text-[11px] text-slate-400">
                  {current.organization} • <span className="text-slate-500">{current.yearActive}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/80">
            <div className="flex gap-1.5">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-blue-500' : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Ver depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
