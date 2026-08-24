import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  Lightbulb, 
  Rocket, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  Award 
} from 'lucide-react';

export const Partnership: React.FC = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Educação',
      subtitle: 'Aprendizado através da prática',
      description: 'Metodologia hands-on (mão na massa) onde conceitos teóricos de física, matemática e computação ganham vida na resolução de desafios reais.',
      color: 'from-blue-500 to-indigo-600',
      badge: 'STEM Education'
    },
    {
      icon: Cpu,
      title: 'Tecnologia',
      subtitle: 'Contato direto com engenharia, programação e robótica',
      description: 'Acesso a ferramentas de ponta, microcontroladores, sensores industriais, linguagens como Java e Python, e softwares CAD/CAM.',
      color: 'from-cyan-500 to-blue-600',
      badge: 'Engenharia Aplicada'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      subtitle: 'Estudantes transformando ideias em soluções',
      description: 'Pesquisa científica orientada para impacto comunitário, sustentabilidade, logística e automação com protótipos funcionais.',
      color: 'from-amber-500 to-orange-600',
      badge: 'Soluções Reais'
    },
    {
      icon: Rocket,
      title: 'Futuro',
      subtitle: 'Desenvolvimento de competências para profissões tecnológicas',
      description: 'Preparação para a Indústria 4.0 com liderança, pensamento crítico, comunicação assertiva e capacidade de trabalhar sob pressão.',
      color: 'from-red-500 to-rose-600',
      badge: 'Carreiras do Amanhã'
    }
  ];

  return (
    <section id="parceria" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Tech Patterns */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400 mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>ALIANÇA ESTRATÉGICA PELA EDUCAÇÃO BRASILEIRA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Duas forças. Uma missão.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Como a experiência global da <strong className="text-blue-400">FIRST®</strong> em educação STEM se conecta à tradição em educação profissional, tecnologia e inovação do <strong className="text-red-400">SENAI</strong>.
          </p>
        </div>

        {/* Divided Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Institutional Story & Synergy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-7 bg-red-600 rounded-full inline-block"></span>
                Impulsionando a Próxima Geração de Inovadores
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                A <strong>FIRST®</strong> é a maior organização global de robótica educacional, presente em mais de 100 países com a missão de transformar jovens em cientistas, engenheiros e líderes éticos.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                No Brasil, o <strong>SENAI</strong> é a espinha dorsal da formação profissional e da inovação da indústria. Juntos, oferecemos aos estudantes laboratórios equipados com máquinas CNC, corte a laser, impressoras 3D, pistas de teste oficiais e mentoria de especialistas industriais.
              </p>

              {/* Synergistic Points */}
              <div className="space-y-3 border-t border-slate-700 pt-5 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">
                    <strong>Infraestrutura Nacional:</strong> Rede de FabLabs e oficinas SENAI distribuídas por todo o território brasileiro.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">
                    <strong>Padrão Internacional:</strong> Desafios globais idênticos aos aplicados nos EUA, Europa e Ásia.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">
                    <strong>Formação Completa:</strong> Integração direta com cursos técnicos e preparação para carreiras na indústria de alta tecnologia.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Imagery & Laboratory Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" 
                alt="Estudantes trabalhando em conjunto na montagem e teste de robô em laboratório tecnológico"
                className="w-full h-96 sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Floating Floating Metric Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700/90 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-sky-400 font-bold uppercase tracking-wider">Metodologia Hands-on</p>
                  <p className="text-sm font-semibold text-white">Laboratórios & Oficinas de Robótica no Brasil</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-red-500">100%</span>
                  <p className="text-[10px] text-slate-400 uppercase">Prático & Imersivo</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                id={`pillar-card-${idx}`}
                className="bg-slate-800/60 border border-slate-700/70 hover:border-slate-500 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} p-2.5 flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                      {p.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h4>

                  <p className="text-xs font-semibold text-slate-300 mb-3">
                    {p.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
