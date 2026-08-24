import React from 'react';
import { ArrowRight, Sparkles, Cpu, Wrench, Bot, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenParticipation: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenParticipation, onOpenQuiz }) => {
  const { isDark } = useTheme();

  return (
    <section
      id="inicio"
      className={`relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80"
          alt="Estudantes colaborando em um ambiente de tecnologia e inovação"
          className={`w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter transition-opacity duration-300 ${
            isDark ? 'opacity-30 brightness-90 contrast-125' : 'opacity-16 brightness-110 contrast-105'
          }`}
        />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-t from-slate-950 via-slate-950/82 to-slate-950/72'
            : 'bg-gradient-to-t from-slate-50 via-slate-50/88 to-slate-50/78'
        }`} />
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-r from-blue-950/50 via-transparent to-red-950/40'
            : 'bg-gradient-to-r from-blue-100/35 via-transparent to-red-100/35'
        }`} />
        <div className="absolute inset-0 tech-grid-dark opacity-35" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-lg mb-6 backdrop-blur-md ${
          isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white/95 border-slate-200 shadow-slate-200/50'
        }`}>
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className={`text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            Robótica educacional • FLL • FTC • FRC
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase mb-6 font-mono-tech select-none">
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 via-white to-blue-200' : 'from-blue-700 via-blue-600 to-indigo-800'}`}>
            CONSTRUA.
          </span>
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-sky-300 via-indigo-200 to-white' : 'from-cyan-600 via-blue-600 to-slate-900'}`}>
            PROGRAME.
          </span>
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-amber-300 via-orange-400 to-rose-400' : 'from-amber-500 via-orange-500 to-rose-600'}`}>
            COMPITA.
          </span>
          <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-red-500 via-rose-400 to-red-400' : 'from-red-600 via-rose-600 to-red-700'}`}>
            TRANSFORME.
          </span>
        </h1>

        <p className={`text-lg sm:text-xl md:text-2xl font-normal max-w-3xl leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Explore como os programas FIRST® LEGO® League, FIRST® Tech Challenge e FIRST® Robotics Competition desenvolvem ciência, tecnologia, engenharia e trabalho em equipe.
        </p>

        <p className={`text-xs sm:text-sm max-w-2xl mb-9 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
          Projeto educacional demonstrativo inspirado no ecossistema FIRST® e SENAI. Consulte sempre os canais oficiais para inscrições, regulamentos e dados institucionais.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-5">
          <button
            onClick={onOpenParticipation}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 rounded-xl shadow-xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <span>QUERO PARTICIPAR</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </button>

          <a
            href="#programas"
            className={`w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              isDark
                ? 'text-slate-900 bg-white hover:bg-slate-100'
                : 'text-white bg-slate-900 hover:bg-slate-800'
            }`}
          >
            <span>CONHEÇA FLL, FTC E FRC</span>
            <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button
          onClick={onOpenQuiz}
          className={`mb-12 text-sm font-semibold underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
            isDark ? 'text-sky-300 hover:text-sky-200' : 'text-blue-700 hover:text-blue-800'
          }`}
        >
          Não sabe qual programa combina com você? Faça o quiz.
        </button>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left pt-6 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
          {[
            { icon: Cpu, name: 'FLL', text: 'LEGO® e solução de problemas', color: 'text-amber-500' },
            { icon: Wrench, name: 'FTC', text: 'Engenharia e programação', color: 'text-orange-500' },
            { icon: Bot, name: 'FRC', text: 'Robótica de grande escala', color: 'text-blue-500' },
            { icon: Award, name: 'SENAI', text: 'Educação profissional e indústria', color: 'text-red-500' },
          ].map(({ icon: Icon, name, text, color }) => (
            <div key={name} className={`p-3 rounded-lg border backdrop-blur-sm transition-all ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
              <div className={`${color} text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5`}>
                <Icon className="w-3.5 h-3.5" /> {name}
              </div>
              <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
