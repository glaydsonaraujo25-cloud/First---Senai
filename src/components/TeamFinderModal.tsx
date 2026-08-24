import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Users, 
  MapPin, 
  Bot, 
  School, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

interface TeamFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenParticipation: (program?: string) => void;
}

export const TeamFinderModal: React.FC<TeamFinderModalProps> = ({
  isOpen,
  onClose,
  onOpenParticipation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<string>('TODOS');
  const [selectedUf, setSelectedUf] = useState<string>('TODOS');

  if (!isOpen) return null;

  const sampleTeams = [
    { number: 'FRC 7565', name: 'Robonáticos', program: 'FRC', state: 'SP', city: 'São Paulo', institution: 'Escola SENAI Suíço-Brasileira', awards: 'Regional Winners & Engineering Inspiration' },
    { number: 'FRC 1156', name: 'Under Control', program: 'FRC', state: 'RS', city: 'Novo Hamburgo', institution: 'Fundação Liberato / Parceiro SENAI', awards: 'Hall of Fame & World Finalists' },
    { number: 'FRC 5800', name: 'Magic Island Robotics', program: 'FRC', state: 'SC', city: 'Florianópolis', institution: 'IFSC / Hub de Inovação', awards: 'Impact Award Regional' },
    { number: 'FTC 16055', name: 'Ampharos Tech', program: 'FTC', state: 'MG', city: 'Belo Horizonte', institution: 'SENAI CETEC', awards: 'Inspire Award 1st Place' },
    { number: 'FTC 18456', name: 'Megazord Robotics', program: 'FTC', state: 'PR', city: 'Curitiba', institution: 'Campus da Indústria FIEP/SENAI', awards: 'Think Award & Control Award' },
    { number: 'FTC 21004', name: 'Cimatec Titans', program: 'FTC', state: 'BA', city: 'Salvador', institution: 'SENAI CIMATEC', awards: 'Connect Award Regional' },
    { number: 'FLL 1420', name: 'Lego Titans', program: 'FLL', state: 'SP', city: 'Campinas', institution: 'SESI / SENAI Campinas', awards: 'Champion\'s Award 1st Place' },
    { number: 'FLL 2088', name: 'BioRobots Amazônia', program: 'FLL', state: 'AM', city: 'Manaus', institution: 'SENAI Amazonas', awards: 'Innovation Project 1st Place' },
    { number: 'FLL 3150', name: 'Pampa Tech', program: 'FLL', state: 'RS', city: 'Porto Alegre', institution: 'Escola Técnica SENAI Visconde de Mauá', awards: 'Robot Performance Award' },
  ];

  const filteredTeams = sampleTeams.filter(team => {
    const matchesProgram = selectedProgram === 'TODOS' || team.program === selectedProgram;
    const matchesUf = selectedUf === 'TODOS' || team.state === selectedUf;
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          team.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          team.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          team.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesProgram && matchesUf && matchesSearch;
  });

  const getBadgeStyle = (program: string) => {
    switch (program) {
      case 'FLL': return 'bg-amber-500 text-slate-950';
      case 'FTC': return 'bg-orange-600 text-white';
      case 'FRC': return 'bg-blue-600 text-white';
      default: return 'bg-slate-700 text-white';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-finder-title"
    >
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-3xl max-h-[90vh] shadow-2xl overflow-y-auto text-white relative flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <h3 id="team-finder-title" className="text-base sm:text-lg font-bold text-white">
              Diretório de Equipes • FIRST® + SENAI Brasil
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Fechar busca de equipes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1">
          
          {/* Search & Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar equipe, cidade ou instituição..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="TODOS">Todos os Programas</option>
                <option value="FLL">FIRST LEGO League</option>
                <option value="FTC">FIRST Tech Challenge</option>
                <option value="FRC">FIRST Robotics Competition</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedUf}
                onChange={(e) => setSelectedUf(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="TODOS">Todos os Estados</option>
                <option value="SP">SP (São Paulo)</option>
                <option value="RJ">RJ (Rio de Janeiro)</option>
                <option value="MG">MG (Minas Gerais)</option>
                <option value="PR">PR (Paraná)</option>
                <option value="SC">SC (Santa Catarina)</option>
                <option value="RS">RS (Rio Grande do Sul)</option>
                <option value="BA">BA (Bahia)</option>
                <option value="AM">AM (Amazonas)</option>
              </select>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {filteredTeams.map((team, idx) => (
              <div 
                key={idx}
                className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 hover:border-slate-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${getBadgeStyle(team.program)}`}>
                      {team.program}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {team.number}
                    </span>
                    <span className="text-xs font-bold text-sky-400">
                      • {team.name}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium">
                    {team.institution}
                  </p>

                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {team.city}, {team.state}
                    </span>
                    <span>•</span>
                    <span className="text-amber-400">
                      ★ {team.awards}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenParticipation(team.program);
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors shrink-0 flex items-center justify-center gap-1"
                >
                  <span>Conectar à Equipe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>Não encontrou sua cidade ou escola na lista?</span>
            <button
              onClick={() => {
                onClose();
                onOpenParticipation('ESCOLA');
              }}
              className="font-bold text-red-400 hover:text-red-300 underline"
            >
              Inscreva-se para fundar uma nova equipe
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
