import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Send, 
  Bot, 
  School, 
  HeartHandshake, 
  Building2, 
  Sparkles,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const ParticipationModal: React.FC<ParticipationModalProps> = ({
  isOpen,
  onClose,
  initialTab
}) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<'ESTUDANTE' | 'ESCOLA' | 'MENTOR' | 'PATROCINADOR'>('ESTUDANTE');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: 'SP',
    city: '',
    program: 'FLL',
    schoolName: '',
    message: ''
  });

  useEffect(() => {
    if (initialTab) {
      if (initialTab === 'FLL' || initialTab === 'FTC' || initialTab === 'FRC') {
        setActiveTab('ESTUDANTE');
        setFormData(prev => ({ ...prev, program: initialTab }));
      } else if (initialTab === 'ESCOLA' || initialTab === 'MENTOR' || initialTab === 'PATROCINADOR') {
        setActiveTab(initialTab as any);
      }
    }
  }, [initialTab]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="participation-modal-title"
    >
      <div className={`border rounded-3xl w-full max-w-2xl max-h-[92vh] shadow-2xl overflow-y-auto relative transition-colors ${
        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        
        {/* Top Header */}
        <div className={`sticky top-0 z-10 flex items-center justify-between p-5 border-b backdrop-blur-md ${
          isDark ? 'border-slate-800 bg-slate-900/95' : 'border-slate-200 bg-white/95'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-500" />
            <h3 id="participation-modal-title" className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Inscrição e Participação Oficial • FIRST® + SENAI
            </h3>
          </div>

          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Fechar modal de inscrição"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          
          {!submitted ? (
            <div>
              
              {/* Audience Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('ESTUDANTE')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    activeTab === 'ESTUDANTE'
                      ? 'bg-blue-600 text-white shadow-md'
                      : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                  <span>Estudante</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('ESCOLA')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    activeTab === 'ESCOLA'
                      ? 'bg-red-600 text-white shadow-md'
                      : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <School className="w-4 h-4" />
                  <span>Escola / SENAI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('MENTOR')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    activeTab === 'MENTOR'
                      ? 'bg-amber-600 text-white shadow-md'
                      : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Mentor / Juiz</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('PATROCINADOR')}
                  className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                    activeTab === 'PATROCINADOR'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Apoiador</span>
                </button>
              </div>

              {/* Form Intro Text */}
              <div className={`mb-6 p-3.5 rounded-xl border text-xs leading-relaxed ${
                isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                {activeTab === 'ESTUDANTE' && 'Cadastre seu interesse para entrar em uma equipe de robótica ou receber convite para seletivas em unidades SENAI e escolas parceiras.'}
                {activeTab === 'ESCOLA' && 'Solicite suporte técnico e pedagógico para fundar uma equipe oficial de FLL, FTC ou FRC na sua escola ou unidade técnica.'}
                {activeTab === 'MENTOR' && 'Cadastre-se como mentor voluntário técnico (mecânica, elétrica, software) ou juiz/árbitro de torneios oficiais.'}
                {activeTab === 'PATROCINADOR' && 'Conecte sua empresa à transformação STEM e apoie equipes com componentes, bolsas e mentoria.'}
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Nome Completo *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      E-mail de Contato *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Telefone / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Estado (UF) *
                    </label>
                    <select 
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      {['SP', 'RJ', 'MG', 'PR', 'SC', 'RS', 'BA', 'PE', 'CE', 'DF', 'GO', 'AM', 'PA', 'ES', 'MT', 'MS', 'RN', 'PB', 'AL', 'SE', 'PI', 'MA', 'TO', 'RO', 'AC', 'RR', 'AP'].map(uf => (
                        <option key={uf} value={uf}>{uf}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Cidade
                    </label>
                    <input 
                      type="text" 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Sua cidade"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Programa de Interesse
                    </label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white' 
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="FLL">FIRST® LEGO® League (9 a 15 anos)</option>
                      <option value="FTC">FIRST® Tech Challenge (12 a 18 anos)</option>
                      <option value="FRC">FIRST® Robotics Competition (14 a 19 anos)</option>
                      <option value="ALL">Todos os programas / Quero orientação</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {activeTab === 'ESCOLA' ? 'Nome da Escola ou Unidade SENAI' : 'Instituição de Ensino / Empresa'}
                    </label>
                    <input 
                      type="text" 
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      placeholder="Ex: SENAI Ipiranga ou Escola Estadual"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark 
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Mensagem ou Dúvidas Adicionais
                  </label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos um pouco sobre seu interesse em robótica e inovação..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDark 
                        ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span className="text-white">Enviar Inscrição de Interesse</span>
                  </button>
                </div>

              </form>

            </div>
          ) : (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Inscrição Enviada com Sucesso!
              </h4>

              <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Obrigado pelo seu interesse, <strong>{formData.name}</strong>! Nossa equipe regional do SENAI entrará em contato pelo e-mail <strong>{formData.email}</strong> com as instruções e oportunidades de equipes no seu estado ({formData.state}).
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className={`px-6 py-2.5 font-semibold text-xs rounded-xl border transition-colors cursor-pointer ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
