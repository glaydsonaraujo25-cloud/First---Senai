import React from 'react';
import { 
  Bot, 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ArrowUp, 
  Heart,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onOpenParticipation: (tab?: string) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenParticipation, onOpenQuiz }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative z-20">
      
      {/* Top Banner with Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission Column (Col Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* Logos Combo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono-tech font-black text-xl tracking-wider text-red-500">
                  FIRST<span className="text-xs align-top">®</span>
                </span>
                <span className="text-slate-600 font-light text-xl">✕</span>
                <div className="bg-blue-600 text-white font-black px-2 py-0.5 rounded text-sm tracking-wider font-mono-tech">
                  SENAI
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Uma parceria estratégica de alcance nacional dedicada a democratizar a educação STEM, robótica aplicada e inovação tecnológica para a formação dos futuros líderes da indústria brasileira.
            </p>

            {/* Institutional Pillars Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Educação STEM • Robótica • Indústria 4.0</span>
            </div>

          </div>

          {/* Programs Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              Programas Oficiais
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#fll" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-400" />
                  <span>FIRST® LEGO® League</span>
                </a>
              </li>
              <li>
                <a href="#ftc" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-orange-400" />
                  <span>FIRST® Tech Challenge</span>
                </a>
              </li>
              <li>
                <a href="#frc" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>FIRST® Robotics Competition</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenQuiz}
                  className="hover:text-sky-300 text-slate-400 transition-colors flex items-center gap-1.5 pt-1 text-left cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400" />
                  <span>Quiz: Descubra seu Programa</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#parceria" className="hover:text-white transition-colors">A Parceria FIRST® + SENAI</a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-white transition-colors">Jornada do Estudante</a>
              </li>
              <li>
                <a href="#temporada" className="hover:text-white transition-colors">Como Funciona a Temporada</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria da Arena</a>
              </li>
              <li>
                <a href="#eventos" className="hover:text-white transition-colors">Calendário de Eventos</a>
              </li>
              <li>
                <a href="#mapa-brasil" className="hover:text-white transition-colors">Mapa Brasil de Robótica</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Institutional Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Canais & Apoio
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>SENAI — Serviço Nacional de Aprendizagem Industrial</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Brasília / DF — Presença em todos os 27 estados</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>robotica@senai.br</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenParticipation()}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white rounded-xl border border-slate-700 transition-colors"
              >
                Fale com a Coordenação
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Parceria Institucional FIRST® & SENAI Brasil. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-slate-400">
              FIRST®, FIRST® LEGO® League, FIRST® Tech Challenge, FIRST® Robotics Competition, Gracious Professionalism® e Coopertition® são marcas registradas da For Inspiration and Recognition of Science and Technology.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle showLabel={true} />

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">Topo</span>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
