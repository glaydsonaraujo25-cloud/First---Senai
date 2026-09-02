import { ArrowRight, Bot, Cpu, Wrench } from 'lucide-react';

const programs = [
  { id: 'fll', code: 'FLL', name: 'FIRST® LEGO® League', description: 'Descoberta, criatividade e pesquisa com robótica LEGO® educacional.', Icon: Cpu, accent: 'text-amber-700 dark:text-amber-300' },
  { id: 'ftc', code: 'FTC', name: 'FIRST® Tech Challenge', description: 'Mecânica, programação e estratégia em um projeto de equipe.', Icon: Wrench, accent: 'text-orange-700 dark:text-orange-300' },
  { id: 'frc', code: 'FRC', name: 'FIRST® Robotics Competition', description: 'Engenharia multidisciplinar e colaboração com robôs de grande porte.', Icon: Bot, accent: 'text-blue-700 dark:text-blue-300' },
] as const;

export function ProgramOverview({ onSelectProgram, onOpenParticipation }: {
  onSelectProgram: (program: 'fll' | 'ftc' | 'frc') => void;
  onOpenParticipation: (program?: string) => void;
}) {
  return <section id="programas" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="programs-title">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl mb-8"><p className="text-blue-700 dark:text-blue-300 text-sm font-bold mb-2">CONHEÇA AS MODALIDADES</p>
        <h2 id="programs-title" className="text-3xl sm:text-4xl font-black mb-3">Três caminhos para aprender com robótica</h2>
        <p className="muted">Explore cada programa e descubra as habilidades desenvolvidas em equipe.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {programs.map(({id, code, name, description, Icon, accent}) => <article id={id} key={id} className="surface border rounded-2xl p-6 flex flex-col">
          <Icon className={`w-8 h-8 mb-5 ${accent}`} aria-hidden="true" />
          <span className={`font-bold text-sm ${accent}`}>{code}</span>
          <h3 className="font-black text-xl mt-2 mb-3">{name}</h3>
          <p className="muted text-sm leading-relaxed mb-6 flex-1">{description}</p>
          <button type="button" onClick={() => onSelectProgram(id)} className="action-primary rounded-xl px-4 py-3 font-bold inline-flex justify-center items-center gap-2">Conhecer {code}<ArrowRight className="w-4 h-4" /></button>
          <button type="button" onClick={() => onOpenParticipation(code)} className="mt-3 min-h-11 text-sm font-semibold underline underline-offset-4">Como participar da {code}</button>
        </article>)}
      </div>
      <nav aria-label="Continue explorando" className="flex flex-wrap gap-5 mt-6 text-sm font-semibold text-blue-700 dark:text-blue-300">
        <a href="/#jornada" className="underline">Conhecer a jornada de aprendizagem</a>
        <a href="/recursos#parceria" className="underline">Robótica no Distrito Federal</a>
        <a href="/#galeria" className="underline">Explorar a galeria</a>
        <a href="/equipes" className="underline">Encontrar equipes</a>
      </nav>
    </div>
  </section>;
}
