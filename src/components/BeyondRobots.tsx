import React from 'react';
import { 
  Users, 
  Lightbulb, 
  MessageSquare, 
  Compass, 
  Target, 
  Wrench, 
  Code2, 
  HeartHandshake, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const BeyondRobots: React.FC = () => {
  const skills = [
    { title: 'Trabalho em equipe', icon: Users, desc: 'Aprender a confiar nos colegas, distribuir responsabilidades e vencer juntos.' },
    { title: 'Criatividade', icon: Lightbulb, desc: 'Encontrar soluções não convencionais para desafios complexos de mecânica e sociedade.' },
    { title: 'Comunicação', icon: MessageSquare, desc: 'Defender projetos com clareza para bancas de juízes e patrocinadores industriais.' },
    { title: 'Liderança', icon: Compass, desc: 'Guiar pessoas com empatia, gerenciar prazos e tomar decisões sob pressão.' },
    { title: 'Resolução de problemas', icon: Target, desc: 'Diagnosticar falhas em milissegundos e reconstruir sistemas com calma e método.' },
    { title: 'Engenharia', icon: Wrench, desc: 'Dominar ferramentas reais de manufatura, cálculo e design mecânico.' },
    { title: 'Programação', icon: Code2, desc: 'Pensamento algorítmico, lógica matemática e visão computacional avançada.' },
    { title: 'Confiança', icon: HeartHandshake, desc: 'Acreditar no próprio potencial para transformar o mundo através da tecnologia.' }
  ];

  return (
    <section id="alem-dos-robos" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-rose-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FORMAÇÃO INTEGRAL HUMANA E TÉCNICA</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4 font-mono-tech">
            MAIS QUE ROBÔS.
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed">
            "Não usamos jovens para construir robôs. Usamos robôs para construir jovens."
            <span className="block text-sm text-slate-400 font-normal mt-1">— Dean Kamen, Fundador da FIRST®</span>
          </p>
        </div>

        {/* Core Values Feature: Gracious Professionalism & Coopertition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-500/30 rounded-2xl p-7 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider">
                VALOR FUNDAMENTAL
              </span>
              <h3 className="text-xl font-black text-white">Gracious Professionalism®</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Competir com paixão e excelência técnica inegociável, mantendo sempre o respeito mútuo, a integridade ética e a generosidade com todos os participantes e adversários.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950/80 to-slate-900 border border-red-500/30 rounded-2xl p-7 relative">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[11px] font-black uppercase tracking-wider">
                FILOSOFIA FIRST
              </span>
              <h3 className="text-xl font-black text-white">Coopertition®</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Cooperação fervorosa mesmo no calor da competição. Equipes emprestam peças sobressalentes, programam juntas nos boxes e celebram as vitórias conjuntas dentro e fora da arena.
            </p>
          </div>
        </div>

        {/* 8 Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {skills.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950/70 border border-slate-800 hover:border-slate-600 rounded-xl p-5 transition-all group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* High Emotion Photo Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 relative group h-64">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" 
              alt="Estudantes comemorando juntos vitória de aliança na arena"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs font-bold text-white">Espírito de Equipe & Celebração</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 relative group h-64">
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
              alt="Mentores e alunos trabalhando na bancada de robótica do SENAI"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs font-bold text-white">Mentoria Industrial Dedicada</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 relative group h-64">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" 
              alt="Apresentação de projeto de inovação perante a banca de juízes"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs font-bold text-white">Defesa Técnica & Oratória</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
