import React from 'react';
import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Cpu, ExternalLink, GraduationCap, Leaf, Route, Sparkles, Users, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ProgramKey = 'fll' | 'ftc' | 'frc';

interface ProgramDetailPageProps {
  program: ProgramKey;
  onNavigateHome: () => void;
  onOpenParticipation: (program: string) => void;}

const programContent = {
  fll: {
    code: 'FLL',
    name: 'FIRST® LEGO® League',
    eyebrow: 'Descoberta e fundamentos STEM',
    age: '5 a 16 anos (varia por edição e região)',
    grade: 'Grades K–8',
    platform: 'LEGO® Education SPIKE™ e Computer Science & AI',
    level: 'Iniciante a intermediário',
    season: 'BIOGLOW™ · FIRST® CANOPY™ 2026–2027',
    seasonStatus: 'Desafio lançado em 4 de agosto de 2026',
    officialUrl: 'https://www.firstinspires.org/programs/fll/',
    seasonUrl: 'https://www.firstinspires.org/programs/fll/get-started',
    Icon: Cpu,
    accent: 'amber',
    intro: 'A FIRST LEGO League apresenta STEM por meio de construção, programação, pesquisa, criatividade e trabalho em equipe com tecnologia LEGO® Education.',
    audience: 'Boa porta de entrada para estudantes que estão começando em robótica ou que gostam de aprender construindo, testando e apresentando soluções.',
    practice: ['Construção e programação com LEGO® Education', 'Missões e desafios práticos', 'Pesquisa e projeto de inovação', 'Apresentação, cooperação e Core Values'],
    skills: ['Pensamento computacional', 'Resolução de problemas', 'Criatividade e prototipagem', 'Comunicação e colaboração'],
    journey: ['Entender o tema da temporada', 'Investigar um problema ou desafio', 'Construir e programar soluções', 'Testar, iterar e documentar', 'Compartilhar resultados em eventos'],
    note: 'A temporada BIOGLOW™ 2026–2027 é a temporada final da FIRST LEGO League no formato atual e possui edições Founders e Future; formato e disponibilidade variam por região.'
  },
  ftc: {
    code: 'FTC',
    name: 'FIRST® Tech Challenge',
    eyebrow: 'Engenharia aplicada e competição',
    age: '12 a 18 anos',
    grade: 'Grades 7–12',
    platform: 'Robôs de escala educacional, sensores e sistema de controle FTC',
    level: 'Intermediário',
    season: 'BIOBUZZ™ presented by RTX · FIRST® CANOPY™',
    seasonStatus: 'Game reveal em 12 de setembro de 2026',
    officialUrl: 'https://www.firstinspires.org/programs/ftc/',
    seasonUrl: 'https://www.firstinspires.org/programs/ftc/game-and-season',
    Icon: Wrench,
    accent: 'orange',
    intro: 'Na FIRST Tech Challenge, estudantes trabalham com mentores para projetar, construir e programar robôs para um novo jogo competitivo lançado a cada temporada.',
    audience: 'Indicada para quem quer aprofundar programação, projeto mecânico, estratégia e documentação de engenharia em uma equipe multidisciplinar.',
    practice: ['Projeto e construção de mecanismos', 'Programação autônoma e controlada', 'Testes, sensores e estratégia de jogo', 'Engenharia, outreach e documentação'],
    skills: ['Modelagem e prototipagem', 'Programação de robôs', 'Estratégia e trabalho em equipe', 'Documentação e comunicação de engenharia'],
    journey: ['Interpretar regras e objetivos', 'Planejar mecanismos e estratégia', 'Construir e integrar subsistemas', 'Programar, testar e ajustar', 'Competir e apresentar o trabalho da equipe'],
    note: 'O desafio BIOBUZZ™ será revelado em 12 de setembro de 2026. Recursos e regras oficiais devem ser consultados diretamente na página da temporada.'
  },
  frc: {
    code: 'FRC',
    name: 'FIRST® Robotics Competition',
    eyebrow: 'Engenharia em grande escala',
    age: '14 a 18 anos',
    grade: 'Grades 9–12',
    platform: 'Robôs de porte industrial construídos a partir de um Kit of Parts',
    level: 'Avançado',
    season: 'BIOCORE™ presented by Haas · FIRST® CANOPY™',
    seasonStatus: 'Kickoff em 9 de janeiro de 2027',
    officialUrl: 'https://www.firstinspires.org/programs/frc/',
    seasonUrl: 'https://www.firstinspires.org/programs/frc/game-and-season',
    Icon: Bot,
    accent: 'blue',
    intro: 'A FIRST Robotics Competition reúne estudantes do ensino médio em equipes que projetam, programam e constroem robôs de porte industrial para competir em alianças.',
    audience: 'Indicada para estudantes que querem uma experiência multidisciplinar intensa envolvendo engenharia, software, fabricação, estratégia, liderança e gestão de equipe.',
    practice: ['Arquitetura mecânica, elétrica e de software', 'Fabricação, integração e validação', 'Estratégia de jogo e operação do robô', 'Gestão, comunicação, captação e impacto comunitário'],
    skills: ['Engenharia mecânica e elétrica', 'Software e automação', 'Gestão de projetos', 'Liderança, comunicação e colaboração'],
    journey: ['Analisar regras e estratégia', 'Projetar a arquitetura do robô', 'Fabricar e integrar sistemas', 'Programar, validar e otimizar', 'Competir em alianças e evoluir a equipe'],
    note: 'BIOCORE™ será revelado no kickoff de 9 de janeiro de 2027. Regras, manuais e recursos da temporada devem ser conferidos no portal oficial da FIRST.'
  }
} as const;

const accentClasses = {
  amber: { badge: 'bg-amber-500 text-slate-950', text: 'text-amber-600', soft: 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/30' },
  orange: { badge: 'bg-orange-600 text-white', text: 'text-orange-600', soft: 'bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/30' },
  blue: { badge: 'bg-blue-600 text-white', text: 'text-blue-600', soft: 'bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/30' }
};

const order: ProgramKey[] = ['fll', 'ftc', 'frc'];

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ program, onNavigateHome, onOpenParticipation }) => {
  const { isDark } = useTheme();
  const item = programContent[program];
  const colors = accentClasses[item.accent];
  const Icon = item.Icon;
  const currentIndex = order.indexOf(program);
  const previous = currentIndex > 0 ? order[currentIndex - 1] : null;
  const next = currentIndex < order.length - 1 ? order[currentIndex + 1] : null;

  const navigateProgram = (target: ProgramKey) => {
    window.history.pushState({}, '', `/program/${target}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <main id="conteudo-principal" className={`min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20 transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={onNavigateHome} className={`inline-flex items-center gap-2 text-sm font-semibold mb-7 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'}`}>
          <ArrowLeft className="w-4 h-4" /> Voltar para a página inicial
        </button>

        <section className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'}`}>
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7">
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

            <div className={`mt-8 rounded-2xl border p-4 sm:p-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className={`text-xs font-black uppercase tracking-wider ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>Temporada atual</p>
                    <p className={`text-sm sm:text-base font-bold mt-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{item.season}</p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.seasonStatus}</p>
                  </div>
                </div>
                <a href={item.seasonUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-500 shrink-0">
                  Temporada oficial <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
              {[
                ['Faixa etária', item.age],
                ['Escolaridade', item.grade],
                ['Nível', item.level],
                ['Tecnologia', item.platform]
              ].map(([label, value]) => (
                <div key={label} className={`rounded-2xl border p-4 sm:p-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">{label}</span>
                  <strong className={`text-sm leading-relaxed ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-5 mt-5">
          <section className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-4"><Users className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl font-black">Para quem é</h2></div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.audience}</p>
          </section>

          <section className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-4"><Sparkles className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl font-black">Na prática</h2></div>
            <div className="space-y-3">
              {item.practice.map(entry => <div key={entry} className="flex items-start gap-2.5"><CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} /><span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{entry}</span></div>)}
            </div>
          </section>

          <section className={`rounded-3xl border p-6 sm:p-8 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
            <div className="flex items-center gap-2 mb-4"><GraduationCap className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl font-black">Competências</h2></div>
            <div className="space-y-3">
              {item.skills.map(skill => <div key={skill} className="flex items-start gap-2.5"><CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} /><span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{skill}</span></div>)}
            </div>
          </section>
        </div>

        <section className={`mt-5 rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className="flex items-center gap-2 mb-6"><Route className={`w-5 h-5 ${colors.text}`} /><h2 className="text-xl sm:text-2xl font-black">Como funciona a jornada</h2></div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {item.journey.map((step, index) => (
              <li key={step} className={`rounded-2xl border p-4 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-3 ${colors.badge}`}>{index + 1}</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{step}</span>
              </li>
            ))}
          </ol>
          <p className={`mt-5 text-xs leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{item.note}</p>
        </section>

        <section className={`mt-5 rounded-3xl border p-6 sm:p-9 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black mb-2">Próximo passo</h2>
              <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Compare as modalidades e veja os próximos passos para participar pelos canais oficiais.</p>
              <a href={item.officialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-blue-600 hover:text-blue-500">Página oficial do programa <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button onClick={() => onOpenParticipation(item.code)} className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2">Tenho interesse <ArrowRight className="w-4 h-4" /></button>
            </div>
          </div>
        </section>

        <nav aria-label="Navegação entre programas" className="mt-5 grid sm:grid-cols-2 gap-3">
          {previous ? (
            <button type="button" onClick={() => navigateProgram(previous)} className={`rounded-2xl border p-4 text-left transition-colors ${isDark ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
              <span className="text-xs text-slate-500">Programa anterior</span>
              <span className="block font-bold mt-1">← {programContent[previous].name}</span>
            </button>
          ) : <div />}
          {next && (
            <button type="button" onClick={() => navigateProgram(next)} className={`rounded-2xl border p-4 text-left sm:text-right transition-colors ${isDark ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
              <span className="text-xs text-slate-500">Próximo programa</span>
              <span className="block font-bold mt-1">{programContent[next].name} →</span>
            </button>
          )}
        </nav>
      </div>
    </main>
  );
};
