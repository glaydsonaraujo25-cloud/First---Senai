export const profiles = ['ESTUDANTE', 'ESCOLA', 'MENTOR', 'EMPRESA'] as const;
export const programCodes = ['FLL', 'FTC', 'FRC'] as const;
export function participationUrl(selection?: string) {
  const value = typeof selection === 'string' ? selection.toUpperCase() : undefined;
  if (programCodes.some(code => code === value)) return `/participar?programa=${value}`;
  if (profiles.some(profile => profile === value)) return `/participar?perfil=${value}`;
  return '/participar';
}
export function participationContext(search: string) {
  const params = new URLSearchParams(search);
  const profile = params.get('perfil')?.toUpperCase();
  const program = params.get('programa')?.toUpperCase();
  return {
    profile: profiles.find(value => value === profile) ?? null,
    program: programCodes.find(value => value === program) ?? null,
  };
}
