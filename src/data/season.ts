export const seasonSource = 'https://www.firstinspires.org/first-canopy';
export const seasonMilestones = [
  { program: 'FLL', name: 'BIOGLOW™', isoDate: '2026-08-04', description: 'Lançamento do desafio FIRST LEGO League.', accent: 'amber' },
  { program: 'FTC', name: 'BIOBUZZ™', isoDate: '2026-09-12', description: 'Revelação do desafio FIRST Tech Challenge.', accent: 'orange' },
  { program: 'FRC', name: 'BIOCORE™', isoDate: '2027-01-09', description: 'Kickoff do jogo FIRST Robotics Competition.', accent: 'blue' },
] as const;

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
export function formatSeasonDate(isoDate: string) {
  return dateFormatter.format(new Date(`${isoDate}T12:00:00Z`));
}
// A date is a calendar reference, not confirmation that an event occurred.
export function milestoneStatus(isoDate: string, now = new Date()) {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
  return today < isoDate ? 'Previsto' : today === isoDate ? 'Previsto para hoje' : 'Data prevista já passou';
}
