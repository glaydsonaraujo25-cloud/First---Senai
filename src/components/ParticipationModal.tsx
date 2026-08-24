import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Bot, School, HeartHandshake, Building2, Sparkles, Info, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ParticipationModalProps { isOpen: boolean; onClose: () => void; initialTab?: string; }
type Audience = 'ESTUDANTE' | 'ESCOLA' | 'MENTOR' | 'PATROCINADOR';

export const ParticipationModal: React.FC<ParticipationModalProps> = ({ isOpen, onClose, initialTab }) => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<Audience>('ESTUDANTE');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', city: '', program: 'ALL', institution: '', message: '' });

  useEffect(() => {
    if (!initialTab) return;
    if (['FLL', 'FTC', 'FRC'].includes(initialTab)) { setActiveTab('ESTUDANTE'); setFormData(prev => ({ ...prev, program: initialTab })); return; }
    if (['ESCOLA', 'MENTOR', 'PATROCINADOR'].includes(initialTab)) setActiveTab(initialTab as Audience);
  }, [initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const handleSubmit = (event: React.FormEvent) => { event.preventDefault(); setSubmitted(true); };
  const audienceOptions: { id: Audience; label: string; icon: React.ElementType }[] = [
    { id: 'ESTUDANTE', label: 'Estudante', icon: Bot }, { id: 'ESCOLA', label: 'Escola', icon: School }, { id: 'MENTOR', label: 'Mentor', icon: HeartHandshake }, { id: 'PATROCINADOR', label: 'Apoiador', icon: Building2 }
  ];
  const introText: Record<Audience, string> = {
    ESTUDANTE: 'Explore qual programa combina com você e simule seu interesse em participar de iniciativas de robótica no Distrito Federal.',
    ESCOLA: 'Simule o interesse de uma escola do DF em conhecer FLL, FTC e FRC e os caminhos de contato com o SENAI-DF.',
    MENTOR: 'Veja como poderia funcionar um cadastro de interesse para mentoria e voluntariado técnico no contexto do DF.',
    PATROCINADOR: 'Simule o contato de uma empresa ou instituição do DF interessada em apoiar educação STEM e robótica.'
  };

  const inputClass = `mt-1 w-full px-3.5 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-300'}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="participation-modal-title" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl ${isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
        <div className={`sticky top-0 z-10 flex items-center justify-between p-5 border-b backdrop-blur-md ${isDark ? 'border-slate-800 bg-slate-900/95' : 'border-slate-200 bg-white/95'}`}>
          <div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-red-500" /><div><h3 id="participation-modal-title" className="text-base sm:text-lg font-bold">Participação no Distrito Federal</h3><p className="text-[11px] text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> SENAI-DF • Brasília e regiões administrativas</p></div></div>
          <button type="button" onClick={onClose} className="p-2 rounded-lg hover:bg-slate-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Fechar"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 sm:p-8">
          {!submitted ? <>
            <div className={`mb-6 rounded-xl border p-4 flex items-start gap-3 text-xs sm:text-sm ${isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-100' : 'bg-amber-50 border-amber-200 text-amber-900'}`}><Info className="w-4 h-4 mt-0.5 shrink-0" /><p>Este formulário continua sendo uma demonstração. Nenhum dado é enviado ao SENAI-DF, ao SESI-DF ou à FIRST®. Use os canais oficiais do Sistema Fibra para contatos reais.</p></div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6" role="tablist" aria-label="Perfil de participação">
              {audienceOptions.map(({ id, label, icon: Icon }) => <button key={id} type="button" role="tab" aria-selected={activeTab === id} onClick={() => setActiveTab(id)} className={`p-3 rounded-xl text-xs font-bold flex flex-col items-center gap-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeTab === id ? 'bg-blue-600 text-white shadow-md' : isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}><Icon className="w-4 h-4" />{label}</button>)}
            </div>

            <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{introText[activeTab]}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="text-xs font-semibold">Nome<input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Seu nome" /></label>
                <label className="text-xs font-semibold">E-mail<input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="seuemail@exemplo.com" /></label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="text-xs font-semibold">UF<input value="DF — Distrito Federal" readOnly className={`${inputClass} cursor-not-allowed`} /></label>
                <label className="text-xs font-semibold sm:col-span-2">Região administrativa / cidade<input value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} className={inputClass} placeholder="Ex.: Brasília, Gama, Taguatinga..." /></label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="text-xs font-semibold">Programa de interesse<select value={formData.program} onChange={e => setFormData({ ...formData, program: e.target.value })} className={inputClass}><option value="ALL">Quero orientação</option><option value="FLL">FIRST LEGO League</option><option value="FTC">FIRST Tech Challenge</option><option value="FRC">FIRST Robotics Competition</option></select></label>
                <label className="text-xs font-semibold">Instituição<input value={formData.institution} onChange={e => setFormData({ ...formData, institution: e.target.value })} className={inputClass} placeholder="Escola, SENAI, empresa..." /></label>
              </div>

              <label className="block text-xs font-semibold">Mensagem<textarea rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Conte brevemente seu interesse no projeto no DF" /></label>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400">Simular envio do interesse</button>
            </form>
          </> : <div className="py-10 text-center"><CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" /><h4 className="text-2xl font-black mb-3">Simulação concluída</h4><p className={`max-w-md mx-auto mb-6 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Nenhum dado foi enviado. Para contato real sobre atividades no DF, consulte os canais oficiais do Sistema Fibra/SENAI-DF.</p><button type="button" onClick={() => { setSubmitted(false); onClose(); }} className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm">Fechar</button></div>}
        </div>
      </div>
    </div>
  );
};
