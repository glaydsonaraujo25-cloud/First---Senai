import React from 'react';
import { ArrowUp, ChevronRight, ExternalLink, Info, Phone, Search, School } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface FooterProps { onOpenParticipation: (tab?: string) => void; }

const FIRST_URL = 'https://www.firstinspires.org/';
const FIRST_SEARCH_URL = 'https://www.firstinspires.org/team-event-search';
const SENAI_DF_URL = 'https://www.sistemafibra.org.br/senai/';

export const Footer: React.FC<FooterProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const surface = isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';
  const card = isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200';
  const dfLink = isDark ? 'text-blue-300 hover:text-blue-200' : 'text-blue-700 hover:text-blue-600';

  return (
    <footer className={`border-t relative z-20 transition-colors ${surface}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-9 lg:gap-10">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className={`flex h-12 w-24 items-center justify-center overflow-hidden rounded-lg border bg-white p-1.5 ${isDark ? 'border-slate-700' : 'border-slate-200'} shadow-sm`}>
                <img src="/firstlogo.jpg" alt="FIRST" className="block h-full w-full object-contain object-center" />
              </span>
              <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>+</span>
              <span className={`flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg border bg-white px-2 py-1.5 ${isDark ? 'border-slate-700' : 'border-slate-200'} shadow-sm`}>
                <img src="/senai-_1280x330-e1753189068659-1024x293.png" alt="SENAI-DF" className="block h-full w-full object-contain object-center" />
              </span>
            </div>
            <p className={`text-sm leading-relaxed max-w-md ${muted}`}>Projeto educacional voltado ao Distrito Federal, organizando informações sobre FLL, FTC e FRC e conectando a experiência às referências e aos canais do SENAI-DF.</p>
            <div className={`rounded-xl border p-4 text-xs leading-relaxed flex items-start gap-3 max-w-md ${card}`}><Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /><p className={muted}>Este site não substitui canais oficiais de inscrição ou atendimento. Confirme regulamentos, equipes, eventos e oportunidades diretamente com o Sistema Fibra/SENAI-DF e com a FIRST®.</p></div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest">Programas</h4>
            <ul className={`space-y-2.5 text-sm ${muted}`}>
              {([['FIRST® LEGO® League', '/program/fll', 'text-amber-500'], ['FIRST® Tech Challenge', '/program/ftc', 'text-orange-500'], ['FIRST® Robotics Competition', '/program/frc', 'text-blue-500']] as const).map(([label, href, color]) => <li key={href}><a href={href} className="hover:text-blue-600 transition-colors flex items-start gap-1.5"><ChevronRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${color}`} />{label}</a></li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest">Distrito Federal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/unidades" className={`font-semibold transition-colors ${dfLink}`}>Unidades SENAI-DF</a></li>
              <li><a href="/eventos" className={`font-semibold transition-colors ${dfLink}`}>Eventos e marcos</a></li>
              <li><a href="/equipes" className={`font-semibold transition-colors ${dfLink}`}>Encontrar equipes</a></li>
              <li><a href="/recursos" className={`font-semibold transition-colors ${dfLink}`}>Recursos oficiais</a></li>
              <li><a href="/#programas" className={`font-semibold transition-colors ${dfLink}`}>Comparar programas</a></li>
              <li><a href="/#temporada" className={`font-semibold transition-colors ${dfLink}`}>Temporada 2026–2027</a></li>
              <li><a href="/#faq" className={`font-semibold transition-colors ${dfLink}`}>Perguntas frequentes</a></li>
              <li><a href="/participar" className={`font-semibold transition-colors ${dfLink}`}>Como participar</a></li>
              <li><button onClick={() => onOpenParticipation()} className={`font-semibold transition-colors text-left ${dfLink}`}>Orientações para participar</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black text-emerald-600 uppercase tracking-widest">Canais oficiais</h4>
            <div className="space-y-2.5">
              <a href={SENAI_DF_URL} target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-colors ${card} hover:border-orange-400`}><School className="w-4 h-4 text-orange-500" /> SENAI-DF <ExternalLink className="w-3.5 h-3.5 ml-auto" /></a>
              <div className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold ${card}`}><Phone className="w-4 h-4 text-orange-500" /> (61) 4042-6565</div>
              <a href={FIRST_URL} target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-colors ${card} hover:border-blue-400`}><ExternalLink className="w-4 h-4 text-blue-500" /> FIRST® oficial</a>
              <a href={FIRST_SEARCH_URL} target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-colors ${card} hover:border-blue-400`}><Search className="w-4 h-4 text-blue-500" /> Equipes e eventos</a>
            </div>
          </div>
        </div>
      </div>

      <div className={`border-t py-6 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className={`text-xs leading-relaxed ${muted}`}><p>© {new Date().getFullYear()} First — SENAI-DF · Projeto educacional.</p><p className="mt-1">FIRST® e os nomes de seus programas pertencem à For Inspiration and Recognition of Science and Technology.</p></div>
          <div className="flex items-center gap-2"><ThemeToggle showLabel={true} /><button onClick={scrollToTop} className={`min-h-11 px-3 rounded-xl border flex items-center gap-2 text-xs font-bold transition-colors ${card} hover:border-blue-400`} aria-label="Voltar ao topo"><ArrowUp className="w-4 h-4" /> Topo</button></div>
        </div>
      </div>
    </footer>
  );
};