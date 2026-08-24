import React, { useMemo, useState } from 'react';
import { ArrowRight, Bot, CheckCircle2, Cpu, RotateCcw, Sparkles, Wrench, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProgramQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram: (programId: string) => void;
  onOpenParticipation: (program?: string) => void;
}

type ProgramId = 'fll' | 'ftc' | 'frc';
type AnswerKey = 'age' | 'interest' | 'style' | 'experience';
type Scores = Record<ProgramId, number>;

const programInfo = {
  fll: { code: 'FLL', name: 'FIRST® LEGO® League', Icon: Cpu, accent: 'text-amber-600', badge: 'bg-amber-500 text-slate-950', bar: 'bg-amber-500' },
  ftc: { code: 'FTC', name: 'FIRST® Tech Challenge', Icon: Wrench, accent: 'text-orange-600', badge: 'bg-orange-600 text-white', bar: 'bg-orange-600' },
  frc: { code: 'FRC', name: 'FIRST® Robotics Competition', Icon: Bot, accent: 'text-blue-600', badge: 'bg-blue-600 text-white', bar: 'bg-blue-600' },
} as const;

const questions: Array<{
  key: AnswerKey;
  title: string;
  help: string;
  options: Array<{ label: string; description: string; score: Scores }>;
}> = [
  {
    key: 'age',
    title: 'Qual faixa etária mais se aproxima de você ou da sua turma?',
    help: 'A idade é apenas um dos fatores; a elegibilidade oficial pode variar por região.',
    options: [
      { label: '5 a 11 anos', description: 'Primeiros contatos com STEM e robótica.', score: { fll: 6, ftc: 0, frc: 0 } },
      { label: '12 a 13 anos', description: 'Faixa de transição entre fundamentos e engenharia aplicada.', score: { fll: 4, ftc: 5, frc: 0 } },
      { label: '14 a 16 anos', description: 'Compatível com experiências de engenharia mais avançadas.', score: { fll: 2, ftc: 5, frc: 5 } },
      { label: '17 a 18 anos', description: 'Foco maior em FTC/FRC, conforme regras locais.', score: { fll: 0, ftc: 4, frc: 6 } },
    ],
  },
  {
    key: 'interest',
    title: 'O que mais chama sua atenção?',
    help: 'Escolha o tipo de desafio que você mais gostaria de explorar.',
    options: [
      { label: 'LEGO®, criatividade e resolução de problemas', description: 'Construir, programar e investigar desafios de forma guiada.', score: { fll: 6, ftc: 1, frc: 0 } },
      { label: 'Programação, sensores e mecanismos', description: 'Integrar software e hardware em um robô competitivo.', score: { fll: 2, ftc: 6, frc: 3 } },
      { label: 'Engenharia, fabricação e sistemas complexos', description: 'Trabalhar com uma equipe multidisciplinar em escala maior.', score: { fll: 0, ftc: 3, frc: 6 } },
    ],
  },
  {
    key: 'style',
    title: 'Que tipo de experiência parece mais interessante?',
    help: 'Não existe resposta melhor: os programas têm objetivos e escalas diferentes.',
    options: [
      { label: 'Aprender experimentando e apresentando ideias', description: 'Quero uma entrada acessível e criativa em STEM.', score: { fll: 6, ftc: 2, frc: 1 } },
      { label: 'Construir e competir com um robô de escala educacional', description: 'Quero mais autonomia técnica e estratégia de jogo.', score: { fll: 2, ftc: 6, frc: 3 } },
      { label: 'Participar de um grande projeto de engenharia', description: 'Quero atuar em software, mecânica, elétrica, gestão ou comunicação.', score: { fll: 0, ftc: 3, frc: 6 } },
    ],
  },
  {
    key: 'experience',
    title: 'Qual é sua experiência atual com tecnologia?',
    help: 'Todos os programas envolvem aprendizado; experiência anterior não é uma exigência universal.',
    options: [
      { label: 'Estou começando agora', description: 'Ainda estou conhecendo lógica, robótica e ferramentas STEM.', score: { fll: 5, ftc: 3, frc: 1 } },
      { label: 'Já tenho alguma experiência', description: 'Já programei, montei projetos ou participei de atividades técnicas.', score: { fll: 3, ftc: 5, frc: 4 } },
      { label: 'Gosto de desafios técnicos avançados', description: 'Quero aprofundar engenharia e trabalhar em um projeto multidisciplinar.', score: { fll: 1, ftc: 4, frc: 6 } },
    ],
  },
];

export const ProgramQuizModal: React.FC<ProgramQuizModalProps> = ({ isOpen, onClose, onSelectProgram, onOpenParticipation }) => {
  const { isDark } = useTheme();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Scores>({ fll: 0, ftc: 0, frc: 0 });
  const [answered, setAnswered] = useState<Partial<Record<AnswerKey, string>>>({});

  const result = useMemo(() => {
    const entries = (Object.entries(scores) as Array<[ProgramId, number]>).sort((a, b) => b[1] - a[1]);
    const total = entries.reduce((sum, [, value]) => sum + value, 0) || 1;
    return entries.map(([id, value]) => ({ id, value, percent: Math.round((value / total) * 100) }));
  }, [scores]);

  if (!isOpen) return null;

  const isResult = step >= questions.length;
  const current = questions[step];

  const choose = (label: string, score: Scores) => {
    setScores(prev => ({ fll: prev.fll + score.fll, ftc: prev.ftc + score.ftc, frc: prev.frc + score.frc }));
    setAnswered(prev => ({ ...prev, [current.key]: label }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setStep(0);
    setScores({ fll: 0, ftc: 0, frc: 0 });
    setAnswered({});
  };

  const top = result[0];
  const topProgram = programInfo[top.id];
  const TopIcon = topProgram.Icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className={`w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
        <div className={`sticky top-0 z-10 flex items-center justify-between gap-3 p-5 border-b backdrop-blur-md ${isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
              <h3 id="quiz-modal-title" className="text-base sm:text-lg font-black truncate">Qual programa combina mais com você?</h3>
            </div>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Comparador orientativo — não define elegibilidade oficial.</p>
          </div>
          <button onClick={onClose} className={`p-2 rounded-xl shrink-0 ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`} aria-label="Fechar quiz">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {!isResult ? (
            <>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">Pergunta {step + 1} de {questions.length}</span>
                <span className={`text-xs font-semibold ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden mb-7 ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>

              <h4 className="text-xl sm:text-2xl font-black mb-2">{current.title}</h4>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{current.help}</p>

              <div className="space-y-3">
                {current.options.map(option => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(option.label, option.score)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-4 group transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 hover:border-blue-500' : 'bg-slate-50 border-slate-200 hover:bg-blue-50 hover:border-blue-300'}`}
                  >
                    <div>
                      <strong className={`block text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{option.label}</strong>
                      <span className={`block text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{option.description}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <div className={`rounded-3xl border p-5 sm:p-7 mb-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center">
                    <TopIcon className={`w-7 h-7 ${topProgram.accent}`} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-600">Maior afinidade neste quiz</p>
                    <h4 className="text-2xl font-black mt-1">{topProgram.name}</h4>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  O resultado combina suas respostas sobre faixa etária, interesses, estilo de aprendizagem e experiência. Ele serve para orientar a comparação entre os programas, não como avaliação oficial.
                </p>

                <div className="space-y-4">
                  {result.map(entry => {
                    const info = programInfo[entry.id];
                    return (
                      <div key={entry.id}>
                        <div className="flex items-center justify-between gap-3 text-sm mb-1.5">
                          <span className="font-bold">{info.code}</span>
                          <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{entry.percent}% da pontuação distribuída</span>
                        </div>
                        <div className={`h-2.5 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                          <div className={`h-full rounded-full ${info.bar}`} style={{ width: `${entry.percent}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`rounded-2xl border p-4 mb-5 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-3"><CheckCircle2 className="w-4 h-4 text-emerald-600" /><strong className="text-sm">Suas respostas</strong></div>
                <div className="grid sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(answered).map(([key, value]) => (
                    <div key={key} className={`rounded-xl p-3 ${isDark ? 'bg-slate-900 text-slate-300' : 'bg-slate-50 text-slate-700'}`}>{value}</div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <button type="button" onClick={() => onSelectProgram(top.id)} className="min-h-12 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-2">
                  Ver {topProgram.code} <ArrowRight className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => onOpenParticipation(topProgram.code)} className="min-h-12 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold">Tenho interesse</button>
              </div>

              <button type="button" onClick={reset} className={`mt-4 w-full min-h-11 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
                <RotateCcw className="w-4 h-4" /> Refazer quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
