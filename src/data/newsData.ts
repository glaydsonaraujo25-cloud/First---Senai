import { NewsItem } from '../types';

export const newsData: NewsItem[] = [
  {
    id: 'noticia-01',
    title: 'SENAI amplia laboratórios de robótica para equipes FIRST® em todo o Brasil',
    category: 'Inovação',
    programTag: 'GERAL',
    summary: 'Nova rede de FabLabs e centros de treinamento do SENAI garante acesso a máquinas de corte a laser, impressoras 3D e usinagem CNC para estudantes competidores.',
    content: [
      'O Serviço Nacional de Aprendizagem Industrial (SENAI) anunciou a modernização de seus polos de inovação tecnológica para apoiar diretamente equipes que disputam os torneios FIRST® LEGO® League, FIRST® Tech Challenge e FIRST® Robotics Competition.',
      'Com o investimento, os estudantes ganham acesso a bancadas industriais completas, softwares de simulação digital CAD/CAM e mentoria especializada de professores e engenheiros da indústria nacional.',
      'A meta é democratizar o acesso à tecnologia avançada e preparar a nova geração para os desafios da Indústria 4.0 e da transição energética.'
    ],
    date: '18 de Agosto',
    readTime: '4 min de leitura',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    author: 'Comunicação FIRST® + SENAI'
  },
  {
    id: 'noticia-02',
    title: 'Equipes brasileiras de FRC conquistam prêmios de engenharia e sustentabilidade',
    category: 'FIRST Robotics Competition',
    programTag: 'FRC',
    summary: 'Projetos de mecanismos inovadores e soluções de tração swerve desenvolvidos por alunos do SENAI recebem destaque internacional.',
    content: [
      'Durante a temporada oficial de competições de robótica, equipes formadas por estudantes dos cursos técnicos do SENAI e escolas públicas/privadas brasileiras demonstraram excelência em projeto mecânico, programação autônoma e impacto comunitário.',
      'Os robôs de grande porte impressionaram juízes pela precisão nos disparos de elementos de jogo e pela robustez estrutural calculada em softwares de engenharia.',
      'Os resultados reforçam o compromisso de unir teoria e prática para formar líderes técnicos com visão cidadã e colaborativa.'
    ],
    date: '12 de Agosto',
    readTime: '3 min de leitura',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    author: 'Equipe de Cobertura STEM'
  },
  {
    id: 'noticia-03',
    title: 'Como o FIRST® LEGO® League desenvolve pensamento computacional desde a infância',
    category: 'FIRST LEGO League',
    programTag: 'FLL',
    summary: 'Entenda como o desafio anual estimula crianças de 9 a 15 anos a formularem soluções para energia limpa, logística e oceanos.',
    content: [
      'A metodologia do FIRST® LEGO® League vai muito além do encaixe de blocos plásticos. Ao enfrentar o tapete de missões com o SPIKE™ Prime, os jovens aprendem lógica de programação, trigonometria aplicada e calibragem de sensores em tempo real.',
      'Paralelamente, o Projeto de Inovação exige que a equipe entreviste especialistas reais, colete dados científicos e apresente um protótipo viável para uma banca de juízes.',
      'O resultado são estudantes mais comunicativos, seguros e apaixonados pela investigação científica.'
    ],
    date: '05 de Agosto',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    author: 'Pedagogia e Tecnologia SENAI'
  },
  {
    id: 'noticia-04',
    title: 'FIRST® Tech Challenge: a ponte perfeita entre o básico e a robótica industrial',
    category: 'FIRST Tech Challenge',
    programTag: 'FTC',
    summary: 'Estudantes do Ensino Médio ganham autonomia completa para programar em Java e modelar componentes estruturais de precisão.',
    content: [
      'O programa FTC se consolida como uma incubadora de jovens desenvolvedores de software e projetistas mecânicos. Com robôs compactos e velozes, a estratégia de alianças na arena desenvolve liderança sob pressão.',
      'Alunos aprendem a gerenciar orçamentos, redigir o Caderno de Engenharia (Engineering Portfolio) e utilizar sensores de visão computacional AprilTags para navegação autônoma.',
      'O programa é especialmente indicado para escolas técnicas e polos integrados de ensino médio.'
    ],
    date: '29 de Julho',
    readTime: '3 min de leitura',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    author: 'Mentoria Técnica'
  }
];
