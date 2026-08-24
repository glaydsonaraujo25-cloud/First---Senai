import { StateData } from '../types';

export const brazilStatesData: Record<string, StateData> = {
  SP: {
    uf: 'SP',
    name: 'São Paulo',
    region: 'Sudeste',
    activeTeams: 142,
    senaiHubs: 38,
    featuredEvents: ['FRC Brazil Regional (São Paulo)', 'Torneio Regional FLL SP'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Maior polo industrial com dezenas de equipes premiadas mundialmente em FRC e FTC e centros tecnológicos SENAI Ipiranga, São Caetano e Campinas.'
  },
  RJ: {
    uf: 'RJ',
    name: 'Rio de Janeiro',
    region: 'Sudeste',
    activeTeams: 64,
    senaiHubs: 16,
    featuredEvents: ['Regional FLL Rio', 'Etapa Classificatória FTC'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Forte presença em robótica autônoma, energia sustentável e automação offshore no SENAI Maracanã e polos regionais.'
  },
  MG: {
    uf: 'MG',
    name: 'Minas Gerais',
    region: 'Sudeste',
    activeTeams: 88,
    senaiHubs: 24,
    featuredEvents: ['Torneio Regional FLL CETEC BH', 'Competição Mineira FTC'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Destaque nacional em projetos de inovação social e robótica aplicada à indústria automotiva e de mineração.'
  },
  PR: {
    uf: 'PR',
    name: 'Paraná',
    region: 'Sul',
    activeTeams: 72,
    senaiHubs: 18,
    featuredEvents: ['Torneio Regional FTC Sul (Curitiba)', 'Festival Regional FLL'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Pioneirismo no Campus da Indústria FIEP/SENAI com laboratórios de manufatura aditiva e equipes de ponta.'
  },
  SC: {
    uf: 'SC',
    name: 'Santa Catarina',
    region: 'Sul',
    activeTeams: 60,
    senaiHubs: 15,
    featuredEvents: ['Off-Season Innovation Cup Joinville', 'Regional FLL Vale do Itajaí'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Polo de tecnologia e automação com tradição em usinagem de precisão para FRC no SENAI Joinville e Blumenau.'
  },
  RS: {
    uf: 'RS',
    name: 'Rio Grande do Sul',
    region: 'Sul',
    activeTeams: 54,
    senaiHubs: 14,
    featuredEvents: ['Torneio Gaúcho FLL & FTC', 'Encontro de Robótica SENAI RS'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Inovação em software embarcado, visão computacional e engenharia eletromecânica nos polos de Porto Alegre e Caxias do Sul.'
  },
  BA: {
    uf: 'BA',
    name: 'Bahia',
    region: 'Nordeste',
    activeTeams: 48,
    senaiHubs: 12,
    featuredEvents: ['Torneio Regional FLL Nordeste CIMATEC', 'Desafio Baiano de Robótica'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'O SENAI CIMATEC em Salvador é um dos maiores centros de inovação da América Latina, formando equipes com foco em inteligência artificial e robótica móvel.'
  },
  PE: {
    uf: 'PE',
    name: 'Pernambuco',
    region: 'Nordeste',
    activeTeams: 42,
    senaiHubs: 10,
    featuredEvents: ['Regional Nordeste FLL Recife', 'Torneio Pernambucano FTC'],
    programsActive: ['FLL', 'FTC'],
    description: 'Integração com o ecossistema do Porto Digital e forte ênfase no desenvolvimento de algoritmos de programação em blocos e Python.'
  },
  CE: {
    uf: 'CE',
    name: 'Ceará',
    region: 'Nordeste',
    activeTeams: 38,
    senaiHubs: 9,
    featuredEvents: ['Etapa Cearense de Robótica SENAI', 'Mostra STEM Fortaleza'],
    programsActive: ['FLL', 'FTC'],
    description: 'Crescimento expressivo no ensino técnico integrado com robótica educacional e energias renováveis.'
  },
  DF: {
    uf: 'DF',
    name: 'Distrito Federal',
    region: 'Centro-Oeste',
    activeTeams: 36,
    senaiHubs: 6,
    featuredEvents: ['Festival SESI SENAI de Robótica (Nacional)', 'Encontro de Líderes STEM'],
    programsActive: ['FLL', 'FTC', 'FRC'],
    description: 'Sede do grande Festival Nacional de Robótica reunindo milhares de competidores de todos os estados do país.'
  },
  GO: {
    uf: 'GO',
    name: 'Goiás',
    region: 'Centro-Oeste',
    activeTeams: 32,
    senaiHubs: 8,
    featuredEvents: ['Torneio Centro-Oeste FLL', 'Mostra de Automação Goiânia'],
    programsActive: ['FLL', 'FTC'],
    description: 'Foco na aplicação da robótica à agroindústria inteligente e logística automatizada.'
  },
  AM: {
    uf: 'AM',
    name: 'Amazonas',
    region: 'Norte',
    activeTeams: 26,
    senaiHubs: 6,
    featuredEvents: ['Torneio Norte FLL Manaus', 'Feira de Robótica da Zona Franca'],
    programsActive: ['FLL', 'FTC'],
    description: 'Conexão direta com a indústria de eletrônicos do Polo Industrial de Manaus e soluções de sustentabilidade para a Amazônia.'
  },
  PA: {
    uf: 'PA',
    name: 'Pará',
    region: 'Norte',
    activeTeams: 22,
    senaiHubs: 5,
    featuredEvents: ['Mostra Amazônica de Robótica Belém', 'Desafio FLL Norte'],
    programsActive: ['FLL', 'FTC'],
    description: 'Estudantes desenvolvem projetos de inovação focados em bioeconomia, preservação florestal e transporte fluvial.'
  }
};
