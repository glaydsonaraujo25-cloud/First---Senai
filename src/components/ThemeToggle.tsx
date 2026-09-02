import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isDark
          ? 'bg-slate-900/90 hover:bg-slate-800 text-amber-300 border-slate-800 hover:border-amber-500/40 shadow-sm'
          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-blue-400 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'}
      title={isDark ? 'Alternar para Tema Claro' : 'Alternar para Tema Escuro'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 animate-spin-slow transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-semibold select-none pr-1">
          {isDark ? 'Tema Claro' : 'Tema Escuro'}
        </span>
      )}
    </button>
  );
};
