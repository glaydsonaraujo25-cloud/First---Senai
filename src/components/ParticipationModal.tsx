import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Bot, School, HeartHandshake, Building2, Sparkles, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

type Audience = 'ESTUDANTE' | 'ESCOLA' | 'MENTOR' | 'PATROCINADOR';

export const ParticipationModal: React.FC<ParticipationModalProps> = ({ isOpen, onClose, initialTab }) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<Audience>('ESTUDANTE');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: 'DF',
    city: '',
    program: 'ALL',
    institution: '',
    message: ''
  });

  useEffect(() => {
    if (!initialTab) return;

    if (['FLL', 'FTC', 'FRC'].includes(initialTab)) {
      setActiveTab('ESTUDANTE');
      setFormData(prev => ({ ...prev, program: initialTab }));
      return;
    }

    if (['ESCOLA', 'MENTOR', 'PATROCINADOR'].includes(initialTab)) {
      setActiveTab(initialTab as Audience);
    }
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const audienceOptions: { id: Audience; label: string; icon: React.ElementType }[] = [
    { id: 'ESTUDANTE', label: 'Estudante', icon: Bot },
    { id: 'ESCOLA', label: 'Escola', icon: School },
    { id: 'MENTOR', label: 'Mentor', icon: HeartHandshake },
    { id: 'PATROCINADOR', label: 'Apoiador', icon: Building2 }
  ];

  const introText: Record<Audience, string> = {
    ESTUDANTE: 'Explore qual programa combina com sua faixa etária e registre, de forma demonstrativa, seu interesse em participar.',
    ESCOLA: 'Simule o cadastro de interesse de uma escola em conhecer os programas FLL, FTC e FRC.',
    MENTOR: 'Veja como poderia funcionar um cadastro de interesse para mentoria e voluntariado técnico.',
    PATROCINADOR: 'Simule o contato de uma empresa interessada em apoiar iniciativas de educação STEM e robótica.'
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="participation-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={`w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl ${
        isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className={`sticky top-0 z-10 flex items-center justify-between p-5 border-b backdrop-blur-md ${
          isDark ? 'border-slate-800 bg-slate-900/95' : 'border-slate-200 bg-white/95'
        }`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-500" />
            <h3 id="participation-modal-title" className="text-base sm:text-lg font-bold">Como participar</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className={`mb-6 rounded-xl border p-4 flex items-start gap-3 text-xs sm:text-sm ${
                isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-100' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <Info className="w-4 h-4 mt-0.5 shrink-0" />
                <p>
                  Este formulário é uma demonstração de interface. Nenhuma inscrição oficial é enviada à FIRST ou ao SENAI e os dados preenchidos não são transmitidos para uma instituição.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6" role="tablist" aria-label="Perfil de participação">
                {audienceOptions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === id}
                    onClick={() => setActiveTab(id)}
                    className={`p-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      activeTab === id
                        ? 'bg-blue-600 text-white shadow-md'
                        : isDark
                          ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>

              <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {introText[activeTab]}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-xs font-semibold">
                    Nome
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                      placeholder="Seu nome"
                    />
                  </label>

                  <label className="text-xs font-semibold">
                    E-mail
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                      placeholder="seuemail@exemplo.com"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="text-xs font-semibold">
                    Estado
                    <select
                      value={formData.state}
                      onChange={e => setFormData({ ...formData, state: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                    >
                      {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => <option key={uf}>{uf}</option>)}
                    </select>
                  </label>

                  <label className="text-xs font-semibold sm:col-span-2">
                    Cidade
                    <input
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                      placeholder="Sua cidade"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-xs font-semibold">
                    Programa de interesse
                    <select
                      value={formData.program}
                      onChange={e => setFormData({ ...formData, program: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                    >
                      <option value="ALL">Quero orientação</option>
                      <option value="FLL">FIRST LEGO League</option>
                      <option value="FTC">FIRST Tech Challenge</option>
                      <option value="FRC">FIRST Robotics Competition</option>
                    </select>
                  </label>

                  <label className="text-xs font-semibold">
                    Instituição
                    <input
                      value={formData.institution}
                      onChange={e => setFormData({ ...formData, institution: e.target.value })}
                      className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                      placeholder="Escola, SENAI ou empresa"
                    />
                  </label>
                </div>

                <label className="block text-xs font-semibold">
                  Mensagem
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className={`mt-1 w-full px-3.5 py-2.5 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`}
                    placeholder="Conte brevemente seu interesse"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  Simular envio do interesse
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
              <h4 className="text-2xl font-black mb-3">Simulação concluída</h4>
              <p className={`max-w-md mx-auto mb-6 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                O fluxo demonstrativo foi concluído. Nenhum dado foi enviado para a FIRST, para o SENAI ou para terceiros.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
