import { ProgramInfo } from '../types';

export const programsData: ProgramInfo[] = [
  {
    id: 'fll',
    name: 'FIRST® LEGO® League',
    shortName: 'FLL',
    tagline: 'Descobrir. Construir. Aprender.',
    ageRange: '9 a 15 anos (Ensino Fundamental)',
    teamSize: '2 a 10 estudantes + 2 técnicos',
    robotSpec: 'Robôs autônomos construídos com LEGO® Education (SPIKE™ Prime / MINDSTORMS®)',
    description: 'O FIRST® LEGO® League introduz crianças e jovens ao fascinante universo da ciência, tecnologia, engenharia e matemática (STEM) através de desafios práticos do mundo real, estimulando a curiosidade, o raciocínio lógico e o trabalho em equipe.',
    badgeColor: 'bg-amber-500 text-white',
    accentColor: 'text-amber-600',
    bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
    highlights: [
      'Robótica Educacional & LEGO® Education',
      'Programação em Blocos e Python',
      'Projeto de Inovação Científica',
      'Valores Fundamentais & Gracious Professionalism®',
      'Missões dinâmicas no tapete oficial',
      'Apresentação para banca de avaliadores'
    ],
    stages: [
      {
        title: 'IDEIA',
        description: 'Pesquisa e ideação de um projeto de inovação para resolver um problema real da sociedade.'
      },
      {
        title: 'CONSTRUÇÃO',
        description: 'Engenharia mecânica e montagem de robôs autônomos com peças e sensores LEGO®.'
      },
      {
        title: 'PROGRAMAÇÃO',
        description: 'Desenvolvimento do algoritmo autônomo com sensores de cor, distância e giroscópio.'
      },
      {
        title: 'MISSÃO',
        description: 'Execução de missões cronometradas de 2min30s na mesa temática de competição.'
      }
    ],
    skillsLearned: [
      'Pensamento Computacional',
      'Comunicação e Oratória',
      'Método Científico',
      'Prototipagem Rápida',
      'Colaboração e Empatia',
      'Pensamento Crítico'
    ],
    kitInfo: 'LEGO® Education SPIKE™ Prime Kit com sensores ópticos, ultrassônicos e motores angulares.',
    competitionFormat: 'Mesa de Desafio (2m30s), Avaliação de Design do Robô, Apresentação do Projeto de Inovação e Valores Fundamentais.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ftc',
    name: 'FIRST® Tech Challenge',
    shortName: 'FTC',
    tagline: 'Transforme ideias em máquinas.',
    ageRange: '12 a 18 anos (Fundamental II e Ensino Médio / Técnico)',
    teamSize: 'Até 15 estudantes + mentores',
    robotSpec: 'Robôs de médio porte até 19kg (45x45x45cm), com estruturas de alumínio, peças usinadas e impressão 3D',
    description: 'No FIRST® Tech Challenge, estudantes projetam, constroem e programam robôs robustos operados por alianças para competir em uma arena de 3,6x3,6 metros, aplicando princípios avançados de engenharia mecânica, eletrônica e programação.',
    badgeColor: 'bg-orange-600 text-white',
    accentColor: 'text-orange-600',
    bgGradient: 'from-orange-500/10 via-red-500/5 to-transparent',
    highlights: [
      'Modelagem CAD 3D & Manufatura Digital',
      'Programação em Java / Android Studio',
      'Engenharia Mecânica e Eletrônica Embarcada',
      'Autonomia com Visão Computacional (AprilTags / OpenCV)',
      'Período Autônomo + Teleoperado (Driver-Controlled)',
      'Engenharia de Caderno de Engenharia (Engineering Portfolio)'
    ],
    stages: [
      {
        title: 'DESIGN',
        description: 'Planejamento conceitual, modelagem paramétrica 3D em CAD e cálculo de relações de transmissão.'
      },
      {
        title: 'BUILD',
        description: 'Construção mecânica com perfis de alumínio, chapas usinadas, esteiras, garras e componentes 3D.'
      },
      {
        title: 'CODE',
        description: 'Programação de lógica autônoma com visão computacional e controle teleoperado via Gamepads.'
      },
      {
        title: 'COMPETE',
        description: 'Estratégia de aliança em partidas intensas de 2min30s na arena quadrada de 3,6 metros.'
      }
    ],
    skillsLearned: [
      'Engenharia de Sistemas',
      'Programação Orientada a Objetos (Java)',
      'Visão Computacional e Odometria',
      'Gestão de Recursos e Orçamento',
      'Estratégia de Alianças e Negociação',
      'Documentação Técnica'
    ],
    kitInfo: 'REV Robotics / TETRIX / goBILDA com Control Hub Android, servomotores digitais, sensores I2C e encoders.',
    competitionFormat: 'Partidas 2 vs 2 na arena (30s autônomo + 2min teleoperado com End Game) e bancas de julgamento técnico.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'frc',
    name: 'FIRST® Robotics Competition',
    shortName: 'FRC',
    tagline: 'Engenharia em escala real.',
    ageRange: '14 a 19 anos (Ensino Médio, Técnico SENAI e Integrado)',
    teamSize: '15 a 50+ estudantes + mentores da indústria',
    robotSpec: 'Robôs industriais de até 56kg e 1,5m de altura, construídos em ciclo intenso com ferramentas industriais',
    description: 'Conhecido como o "Maior Desafio Universitário e Estudantil de Engenharia do Mundo", o FRC combina a intensidade do esporte profissional com o rigor da engenharia industrial. Equipes operam como verdadeiras startups de alta tecnologia.',
    badgeColor: 'bg-blue-600 text-white',
    accentColor: 'text-blue-600',
    bgGradient: 'from-blue-600/15 via-indigo-600/10 to-transparent',
    highlights: [
      'Engenharia Mecânica & Pneumática Industrial',
      'Usinagem CNC, Corte a Laser e Manufatura Aditiva',
      'Programação em C++ / Java / Python com WPILib',
      'Módulos de Tração Swerve Drive e Odometria de Precisão',
      'Arenas em escala de basquete com milhares de espectadores',
      'Gestão Empresarial, Captação de Patrocínios e Marketing'
    ],
    stages: [
      {
        title: 'KICKOFF',
        description: 'Lançamento mundial simultâneo do desafio anual e início da intensa temporada de engenharia.'
      },
      {
        title: 'ENGENHARIA',
        description: 'Projetos complexos em SolidWorks/OnShape, usinagem CNC e integração de atuadores pneumáticos.'
      },
      {
        title: 'AUTONOMIA & IA',
        description: 'Algoritmos de controle avançados (PID, Trajetórias spline, Visão por IA PhotonVision).'
      },
      {
        title: 'ARENA GIGANTE',
        description: 'Batalhas de alianças 3 vs 3 em quadra de 16x8 metros com transmissão ao vivo e torcida vibrante.'
      }
    ],
    skillsLearned: [
      'Engenharia Mecânica e Eletromecânica Avançada',
      'Controle Automático e Visão Artificial',
      'Liderança Executiva e Captação de Recursos',
      'Operação de Máquinas-Ferramenta e Segurança Industrial',
      'Resolução de Crises sob Pressão de Tempo',
      'Conexão Direta com a Indústria 4.0'
    ],
    kitInfo: 'Controlador industrial NI roboRIO, motores brushless Falcon 500 / NEO / Kraken X60 e sistemas pneumáticos de alta pressão.',
    competitionFormat: 'Alianças 3 vs 3 em arena olímpica. Período autônomo (15s), teleop (2m15s), playoffs e prêmio máximo Impact Award.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
  }
];
