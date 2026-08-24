import React from 'react';
import { ArrowRight, Bot, CheckCircle2, ExternalLink, Leaf, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramFRCProps {
  onOpenParticipation: (program?: string) => void;
}

export const ProgramFRC: React.FC<ProgramFRCProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const highlights = ['Engenharia mecânica, elétrica e software', 'Integração e validação de sistemas', 'Estratégia e operação em alianças', 'Gestão, liderança e comunicação'];

  return (
    <section id="frc" className={`py-16 sm:py-20 border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-950 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-black tracking-wider">FRC</span>
              <span className={`px-3 py-1 rounded-lg border text-xs font-bold ${isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'}`}>14–18 anos · Grades 9–12</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">FIRST® Robotics Competition</h2>
            <p className={`text-base sm:text-lg leading-relaxed mb-6 max-w-3xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Uma experiência avançada de engenharia em que equipes do ensino médio projetam, programam e constroem robôs de porte industrial e competem em alianças.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-7">
              {highlights.map(item => (
                <div key={item} className={`flex items-start gap-2.5 rounded-xl border p-3.5 ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/program/frc" className="min-h-12 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-2">Explorar FRC <ArrowRight className="w-4 h-4" /></a>
              <button onClick={() => onOpenParticipation('FRC')} className={`min-h-12 px-5 py-3 rounded-xl border font-bold ${isDark ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'}`}>Tenho interesse</button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-blue-50 border-blue-200'}`}>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center"><Bot className="w-7 h-7 text-blue-600" /></div>
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">FIRST® CANOPY™ 2026–2027</p>
              <h3 className="text-2xl font-black mt-2 mb-2">BIOCORE™ presented by Haas</h3>
              <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>O jogo da temporada 2027 será revelado no kickoff de 9 de janeiro de 2027 e explorará o que sustenta a vida na Terra.</p>
              <div className={`rounded-2xl border p-4 text-xs leading-relaxed ${isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-white border-blue-200 text-slate-600'}`}>
                <Sparkles className="w-4 h-4 text-blue-600 mb-2" />
                A FRC combina engenharia, software, fabricação, estratégia e funções não técnicas como gestão, comunicação e impacto comunitário em um grande projeto de equipe.
              </div>
              <a href="https://www.firstinspires.org/programs/frc/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-sm font-bold text-blue-600 hover:text-blue-500">Fonte oficial <ExternalLink className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
