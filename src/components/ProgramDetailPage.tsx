import React from 'react';
import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Cpu, GraduationCap, Users, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ProgramKey = 'fll' | 'ftc' | 'frc';

interface ProgramDetailPageProps {
  program: ProgramKey;
  onOpenParticipation: (program: string) => void;
  onOpenQuiz: () => void;
}

const programContent = {
  fll: {
    code: 'FLL',
    name: 'FIRST® LEGO® League',
    eyebrow: 'Iniciação STEM',
    age: '9 a 15 anos',
    platform: 'LEGO® Education SPIKE™ Prime',
    language: 'Programação visual e introdução a Python',
    level: 'Iniciante',
    Icon: Cpu,
    accent: 'amber',
    intro: 'Uma porta de entrada para ciência, tecnologia, engenharia e matemática por meio de robótica, pesquisa e trabalho em equipe.',
    skills: ['Pensamento computacional', 'Resolução de problemas', 'Projeto de inovação', 'Comunicação e colaboração'],
    journey: ['Entender o desafio da temporada', 'Pesquisar um problema real', 'Projetar e programar o robô', 'Testar missões e melhorar soluções', 'Apresentar o projeto e competir']
  },
  ftc: {
    code: 'FTC',
    name: 'FIRST® Tech Challenge',
    eyebrow: 'Engenharia aplicada',
    age: '12 a 18 anos',
    platform: 'Estruturas modulares, sensores e controle Android',
    language: 'Java e ferramentas de desenvolvimento',
    level: 'Intermediário',
    Icon: Wrench,
    accent: 'orange',
    intro: 'Um desafio intermediário de engenharia em que equipes projetam, constroem e programam robôs para uma arena competitiva.',
    skills: ['Modelagem e prototipagem', 'Programação orientada a robôs', 'Estratégia de competição', 'Documentação de engenharia'],
    journey: ['Interpretar o jogo da temporada', 'Planejar mecanismos e estratégia', 'Construir e integrar subsistemas', 'Programar modos autônomo e controlado', 'Documentar, testar e competir']
  },
  frc: {
    code: 'FRC',
    name: 'FIRST® Robotics Competition',
    eyebrow: 'Engenharia em grande escala',
    age: '14 a 19 anos',
    platform: 'Robôs de grande porte e ecossistema WPILib',
    language: 'Java, C++ e Python conforme a equipe',
    level: 'Avançado',
    Icon: Bot,
    accent: 'blue',
    intro: 'A experiência mais avançada da jornada, reunindo engenharia, software, gestão de equipe, comunicação e competição em grande escala.',
    skills: ['Engenharia mecânica e elétrica', 'Software e automação', 'Gestão de projetos', 'Liderança e comunicação'],
    journey: ['Analisar regras e estratégia', 'Projetar arquitetura do robô', 'Fabricar e integrar sistemas', 'Programar, validar e otimizar', 'Operar a equipe como um projeto multidisciplinar']
  }
} as const;

const accentClasses = {
  amber: { badge: 'bg-amber-500 text-slate-950', text: 'text-amber-500', soft: 'bg-amber-500/10 border-amber-500/30' },
  orange: { badge: 'bg-orange-600 text-white', text: 'text-orange-500', soft: 'bg-orange-500/10 border-orange-500/30' },
  blue: { badge: 'bg-blue-600 text-white', text: 'text-blue-500', soft: 'bg-blue-500/10 border-blue-500/30' }
};

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ program, onOpenParticipation, onOpenQuiz }) => {
  const { isDark } = useTheme();
  const item = programContent[program];
  const colors = accentClasses[item.accent];
  const Icon = item.Icon;

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-28 pb-20 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className={`inline-flex items-center gap-2 text-sm font-semibold mb-8 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
        </a>

        <section className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-wider ${colors.badge}`}>{item.code}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.eyebrow}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">{item.name}</h1>
                <p className={`text-lg sm:text-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.intro}</p>
              </div>
              <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center shrink-0 ${colors.soft}`}>
                <Icon className={`w-10 h-10 ${colors.text}`} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {[
                ['Faixa etária', item.age],
                ['Nível', item.level],
                ['Plataforma', item.platform],
                ['Programação', item.language]
              ].map(([label, value]) => (
                <div key={label} className={`rounded-2xl border p-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{label}</span>
                  <strong className={`text-sm leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <section className={`rounded-3xl border p-7 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-6"><GraduationCap className={`w-5 h-5 ${colors.text}`} /><h2 className="text-2xl font-black">O que você desenvolve</h2></div>
            <div className="space-y-4">
              {item.skills.map(skill => <div key={skill} className="flex items-center gap-3"><CheckCircle2 className={`w-5 h-5 shrink-0 ${colors.text}`} /><span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{skill}</span></div>)}
            </div>
          </section>

          <section className={`rounded-3xl border p-7 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-6"><Users className={`w-5 h-5 ${colors.text}`} /><h2 className="text-2xl font-black">Como funciona a jornada</h2></div>
            <ol className="space-y-4">
              {item.journey.map((step, index) => <li key={step} className="flex items-start gap-3"><span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${colors.badge}`}>{index + 1}</span><span className={`pt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step}</span></li>)}
            </ol>
          </section>
        </div>

        <section className={`mt-6 rounded-3xl border p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div><h2 className="text-2xl font-black mb-2">Próximo passo</h2><p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Use o quiz para comparar modalidades ou registre seu interesse no programa.</p></div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button onClick={onOpenQuiz} className={`px-5 py-3 rounded-xl border font-bold text-sm ${isDark ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'}`}>Comparar programas</button>
            <button onClick={() => onOpenParticipation(item.code)} className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2">Tenho interesse <ArrowRight className="w-4 h-4" /></button>
          </div>
        </section>
      </div>
    </main>
  );
};
