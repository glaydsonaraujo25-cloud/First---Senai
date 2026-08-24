import React from 'react';
import { 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Wrench, 
  Bot, 
  Award, 
  Users, 
  ShieldCheck, 
  Flame 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenParticipation: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenParticipation,
  onOpenQuiz
}) => {
  const { isDark } = useTheme();

  return (
    <section 
      id="inicio" 
      className={`relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Photography with Multi-Layered Technical Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80" 
          alt="Arena de competição de robótica com estudantes e robôs em alta velocidade"
          className={`w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter transition-opacity duration-300 ${
            isDark ? 'opacity-35 brightness-90 contrast-125' : 'opacity-20 brightness-110 contrast-105'
          }`}
        />
        
        {/* Dynamic Tech Gradient Overlays based on theme */}
        <div 
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark 
              ? 'bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/70' 
              : 'bg-gradient-to-t from-slate-50 via-slate-50/85 to-slate-50/75'
          }`}
        ></div>
        
        <div 
          className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-950/60 via-transparent to-red-950/50' 
              : 'bg-gradient-to-r from-blue-100/40 via-transparent to-red-100/40'
          }`}
        ></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 tech-grid-dark opacity-60"></div>

        {/* Ambient Glows */}
        <div className={`absolute top-1/4 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-blue-600/15' : 'bg-blue-400/20'
        }`}></div>
        <div className={`absolute bottom-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-red-600/15' : 'bg-red-400/15'
        }`}></div>
      </div>

      {/* Decorative Technical Border Lines */}
      <div className={`absolute top-20 left-6 right-6 hidden md:flex items-center justify-between text-[11px] font-mono z-10 select-none ${
        isDark ? 'text-slate-500' : 'text-slate-400'
      }`}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="text-emerald-500 font-bold uppercase tracking-widest">TEMPORADA OFICIAL ATIVA</span>
          <span className="text-slate-400">•</span>
          <span>ROBOTICS STEM BRAZIL</span>
        </div>
        <div className={`font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          SYS.ID: FIRST-SENAI-2026 // FLL • FTC • FRC
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badges Bar */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-lg mb-6 backdrop-blur-md transition-colors ${
          isDark 
            ? 'bg-slate-900/90 border-slate-700/80' 
            : 'bg-white/95 border-slate-200 shadow-slate-200/50'
        }`}>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-500">
            <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>A maior jornada de robótica e inovação do Brasil</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-xs text-amber-500 font-bold hidden sm:inline">9 a 19 anos</span>
        </div>

        {/* Impact Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase mb-6 font-mono-tech select-none">
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
            isDark 
              ? 'from-blue-400 via-white to-blue-200' 
              : 'from-blue-700 via-blue-600 to-indigo-800'
          }`}>CONSTRUA.</span>
          
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
            isDark 
              ? 'from-sky-300 via-indigo-200 to-white' 
              : 'from-cyan-600 via-blue-600 to-slate-900'
          }`}>PROGRAME.</span>
          
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
            isDark 
              ? 'from-amber-300 via-orange-400 to-rose-400' 
              : 'from-amber-500 via-orange-500 to-rose-600'
          }`}>COMPITA.</span>
          
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${
            isDark 
              ? 'from-red-500 via-rose-400 to-red-400' 
              : 'from-red-600 via-rose-600 to-red-700'
          }`}>TRANSFORME.</span>
        </h1>

        {/* Subheadline */}
        <p className={`text-lg sm:text-xl md:text-2xl font-normal max-w-3xl leading-relaxed mb-10 text-balance ${
          isDark ? 'text-slate-300' : 'text-slate-700'
        }`}>
          <strong className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>FIRST® + SENAI</strong> conectando jovens à ciência, tecnologia, engenharia e inovação através da robótica.
        </p>

        {/* Primary Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12">
          
          <a
            href="#programas"
            id="hero-cta-programs"
            className={`w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer ${
              isDark 
                ? 'text-slate-900 bg-white hover:bg-slate-100 hover:shadow-white/20' 
                : 'text-white bg-slate-900 hover:bg-slate-800 shadow-slate-900/20'
            }`}
          >
            <span>CONHEÇA OS PROGRAMAS</span>
            <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            id="hero-cta-participate"
            onClick={onOpenParticipation}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>QUERO PARTICIPAR</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>

          <button
            id="hero-cta-quiz"
            onClick={onOpenQuiz}
            className={`w-full sm:w-auto px-6 py-4 text-sm sm:text-base font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer ${
              isDark 
                ? 'text-sky-300 bg-slate-900/80 hover:bg-slate-800/90 border border-sky-600/50 hover:border-sky-400' 
                : 'text-blue-700 bg-white hover:bg-blue-50/80 border border-blue-200 hover:border-blue-300 shadow-sm'
            }`}
          >
            <span>Descubra seu Programa (Quiz)</span>
          </button>
        </div>

        {/* Quick Highlights Strip */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left pt-6 border-t ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          <div className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
          }`}>
            <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> FLL
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>9 a 15 anos • LEGO® SPIKE</p>
          </div>

          <div className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
          }`}>
            <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" /> FTC
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>12 a 18 anos • Robôs 19kg</p>
          </div>

          <div className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
          }`}>
            <div className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" /> FRC
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>14 a 19 anos • Escala Real 56kg</p>
          </div>

          <div className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${
            isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'
          }`}>
            <div className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> SENAI
            </div>
            <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Educação e Indústria 4.0</p>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <a 
          href="#parceria" 
          id="hero-scroll-indicator"
          className={`mt-12 inline-flex flex-col items-center gap-1.5 text-xs transition-colors cursor-pointer group ${
            isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Rolar para a seção A Parceria"
        >
          <span className="font-medium tracking-wide">↓ Explore a jornada</span>
          <div className={`w-5 h-8 border-2 rounded-full flex items-start justify-center p-1 group-hover:border-blue-500 transition-colors ${
            isDark ? 'border-slate-600' : 'border-slate-300'
          }`}>
            <div className="w-1.5 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </a>

      </div>
    </section>
  );
};
