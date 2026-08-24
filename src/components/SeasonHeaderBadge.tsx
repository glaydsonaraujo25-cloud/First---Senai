import React, { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SeasonHeaderBadge: React.FC = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => {
      const section = document.getElementById('temporada');
      if (!section) return setActive(false);
      const rect = section.getBoundingClientRect();
      setActive(rect.top <= 180 && rect.bottom >= 120);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className={`hidden 2xl:flex fixed top-[15px] right-[190px] z-[55] items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-black tracking-wide transition-all duration-300 pointer-events-none ${
        active
          ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/20 scale-105'
          : isDark
            ? 'bg-slate-900/90 border-slate-700 text-emerald-300 backdrop-blur-md'
            : 'bg-white/95 border-slate-200 text-emerald-700 shadow-sm backdrop-blur-md'
      }`}
      aria-hidden="true"
    >
      <Leaf className="w-3.5 h-3.5" />
      <span>CANOPY™</span>
      <span className={active ? 'text-emerald-100' : isDark ? 'text-slate-400' : 'text-slate-500'}>2026–2027</span>
    </div>
  );
};
