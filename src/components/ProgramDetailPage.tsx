import React from 'react';
import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Cpu, ExternalLink, GraduationCap, Leaf, Users, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ProgramKey = 'fll' | 'ftc' | 'frc';

interface ProgramDetailPageProps {
  program: ProgramKey;
  onNavigateHome: () => void;
  onOpenParticipation: (program: string) => void;
  onOpenQuiz: () => void;
}

const programContent = {
  fll: {
    code: 'FLL',
    name: 'FIRST® LEGO® League',
    eyebrow: 'Iniciação STEM',
    age: '5 a 16 anos (varia por edição e região)',
    platform: 'LEGO® Education SPIKE™ e kits Computer Science & AI',
    language: 'Programação adequada à edição e à faixa etária',
    level: 'Iniciante a intermediário',
    season: 'BIOGLOW™ · FIRST® CANOPY™ 2026–2027',
    officialUrl: 'https://www.firstinspires.org/programs/fll/',
    sourceLabel: 'Página oficial da FIRST LEGO League',
    Icon: Cpu,
    accent: 'amber',
    intro: 'A FIRST LEGO League apresenta ciência, tecnologia, engenharia e matemática por meio de desafios práticos de robótica, criatividade, pesquisa e colaboração.',
    skills: ['Pensamento computacional', 'Resolução de problemas', 'Projeto de inovação', 'Comunicação e colaboração'],
    journey: ['Conhecer o desafio da temporada', 'Investigar o tema e problemas reais', 'Construir e programar soluções', 'Testar, melhorar e documentar', 'Compartilhar aprendizados em eventos e desafios']
  },
  ftc: {
    code: 'FTC',
    name: 'FIRST® Tech Challenge',
    eyebrow: 'Engenharia aplicada',
    age: '12 a 18 anos · Grades 7–12',
    platform: 'Robôs de escala educacional, sensores e sistema de controle',
    language: 'Programação e ferramentas oficiais do ecossistema FTC',
    level: 'Intermediário',
    season: 'BIOBUZZ™ presented by RTX · lançamento em 12/09/2026',
    officialUrl: 'https://www.firstinspires.org/programs/ftc/',
    sourceLabel: 'Página oficial da FIRST Tech Challenge',
    Icon: Wrench,
    accent: 'orange',
    intro: 'Na FIRST Tech Challenge, estudantes trabalham com mentores para projetar, construir e programar robôs para um novo jogo lançado a cada temporada.',
    skills: ['Modelagem e prototipagem', 'Programação de robôs', 'Estratégia e trabalho em equipe', 'Documentação e comunicação de engenharia'],
    journey: ['Interpretar o jogo da temporada', 'Planejar mecanismos e estratégia', 'Construir e integrar subsistemas', 'Programar e testar o robô', 'Documentar, iterar e participar de eventos']
  },
  frc: {
    code: 'FRC',
    name: 'FIRST® Robotics Competition',
    eyebrow: 'Engenharia em grande escala',
    age: '14 a 18 anos · Grades 9–12',
    platform: 'Robôs de porte industrial construídos a partir de um Kit of Parts',
    language: 'Software e ferramentas compatíveis com o ecossistema FRC',
    level: 'Avançado',
    season: 'BIOCORE™ presented by Haas · lançamento em 09/01/2027',
    officialUrl: 'https://www.firstinspires.org/programs/frc/',
    sourceLabel: 'Página oficial da FIRST Robotics Competition',
    Icon: Bot,
    accent: 'blue',
    intro: 'A FIRST Robotics Competition reúne estudantes do ensino médio para projetar, programar e construir robôs de porte industrial e competir em alianças de três equipes.',
    skills: ['Engenharia mecânica e elétrica', 'Software e automação', 'Gestão de projetos', 'Liderança, comunicação e impacto comunitário'],
    journey: ['Analisar regras e estratégia', 'Projetar a arquitetura do robô', 'Fabricar e integrar sistemas', 'Programar, validar e otimizar', 'Competir, colaborar e desenvolver a equipe']
  }
} as const;

const accentClasses = {
  amber: { badge: 'bg-amber-500 text-slate-950', text: 'text-amber-600', soft: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30' },
  orange: { badge: 'bg-orange-600 text-white', text: 'text-orange-600', soft: 'bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/30' },
  blue: { badge: 'bg-blue-600 text-white', text: 'text-blue-600', soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30' }
};

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ program, onNavigateHome, onOpenParticipation, onOpenQuiz }) => {
  const { isDark } = useTheme();
  const item = programContent[program];
  const colors = accentClasses[item.accent];
  const Icon = item.Icon;

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 sm:mb-8 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
        </button>

        <section className={`rounded-2xl sm:rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7 lg:gap-8">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${colors.badge}`}>{item.code}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.eyebrow}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 break-words">{item.name}</h1>
                <p className={`text-base sm:text-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.intro}</p>
              </div>
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border flex items-center justify-center shrink-0 ${colors.soft}`}>
                <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.text}`} />
              </div>
            </div>

            <div className={`mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>Temporada atual</p>
                  <p className={`text-sm font-semibold mt-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.season}</p>
                </div>
              </div>
              <a href={item.officialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-500 shrink-0">
                Fonte oficial <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10">
              {[
                ['Faixa etária', item.age],
                ['Nível', item.level],
                ['Plataforma', item.platform],
                ['Programação', item.language]
              ].map(([label, value]) => (
                <div key={label} className={`rounded-2xl border p-4 sm:p-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">{label}</span>
                  <strong className={`text-sm leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6">
          <section className={`rounded-2xl sm:rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-6"><GraduationCap className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl sm:text-2xl font-black">O que você desenvolve</h2></div>
            <div className="space-y-4">
              {item.skills.map(skill => <div key={skill} className="flex items-start gap-3"><CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${colors.text}`} /><span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{skill}</span></div>)}
            </div>
          </section>

          <section className={`rounded-2xl sm:rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-6"><Users className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl sm:text-2xl font-black">Como funciona a jornada</h2></div>
            <ol className="space-y-4">
              {item.journey.map((step, index) => <li key={step} className="flex items-start gap-3"><span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${colors.badge}`}>{index + 1}</span><span className={`pt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step}</span></li>)}
            </ol>
          </section>
        </div>

        <section className={`mt-5 sm:mt-6 rounded-2xl sm:rounded-3xl border p-6 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div>
            <h2 className="text-xl sm:text-2xl font-black mb-2">Próximo passo</h2>
            <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Compare as modalidades ou registre seu interesse. Para regras, inscrições e requisitos oficiais, consulte sempre a FIRST e os organizadores responsáveis pela sua região.</p>
            <a href={item.officialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-500">{item.sourceLabel} <ExternalLink className="w-3.5 h-3.5" /></a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button onClick={onOpenQuiz} className={`px-5 py-3 rounded-xl border font-bold text-sm ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'}`}>Comparar programas</button>
            <button onClick={() => onOpenParticipation(item.code)} className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2">Tenho interesse <ArrowRight className="w-4 h-4" /></button>
          </div>
        </section>
      </div>
    </main>
  );
};
