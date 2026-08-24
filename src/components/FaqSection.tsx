import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircleQuestion
} from 'lucide-react';
import { faqData } from '../data/faqData';
import { useTheme } from '../context/ThemeContext';

export const FaqSection: React.FC = () => {
  const { isDark } = useTheme();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('TODAS');

  const categories = ['TODAS', 'Geral', 'Estudantes', 'Escolas & SENAI', 'Competições', 'Mentoria'];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaq = faqData.filter(item => {
    const matchesCategory = activeCategory === 'TODAS' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className={`py-16 sm:py-24 relative overflow-hidden border-t transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-mono-tech ${isDark ? 'text-white' : 'text-slate-950'}`}>
            PERGUNTAS FREQUENTES
          </h2>

          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Informações essenciais sobre FLL, FTC e FRC no contexto do SENAI-DF, com orientação para confirmar oportunidades nos canais oficiais.
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite sua dúvida (ex: programação, escola, idade, voluntário)..."
              className={`w-full pl-12 pr-4 py-3.5 rounded-xl border focus:border-blue-500 focus:outline-none text-sm shadow-inner ${isDark ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'}`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Limpar
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : isDark ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800' : 'bg-slate-50 text-slate-700 hover:text-blue-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaq.length > 0 ? (
            filteredFaq.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl overflow-hidden transition-all shadow-md border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer ${isDark ? 'hover:bg-slate-800/60' : 'hover:bg-slate-50'}`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${isDark ? 'text-blue-400 bg-slate-950 border-slate-800' : 'text-blue-700 bg-blue-50 border-blue-200'}`}>
                        {item.category}
                      </span>
                      <h3 className={`text-sm sm:text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.question}
                      </h3>
                    </div>

                    <div className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className={`p-5 pt-0 text-xs sm:text-sm leading-relaxed border-t mt-1 ${isDark ? 'text-slate-300 border-slate-800/60' : 'text-slate-600 border-slate-200'}`}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className={`text-center py-12 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <MessageCircleQuestion className="w-10 h-10 text-slate-500 mx-auto mb-2" />
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Nenhuma resposta encontrada para "{searchQuery}". Tente outros termos de busca.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
