import React, { useState } from 'react';
import { ArrowRight, Leaf, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenParticipation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenParticipation }) => {
  const { isDark } = useTheme();
  const [gaze, setGaze] = useState({ x: 0, y: 0 });

  const handleRobotPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    setGaze({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const resetRobotGaze = () => setGaze({ x: 0, y: 0 });

  // A íris fica parada. Somente a pupila e seus reflexos acompanham o ponteiro.
  const pupilX = gaze.x * 12;
  const pupilY = gaze.y * 11;
  const highlightX = gaze.x * 2;
  const highlightY = gaze.y * 2;

  // Pequenos movimentos da cabeça reforçam a direção do olhar sem mover os olhos inteiros.
  const headX = gaze.x * 5;
  const headY = gaze.y * 5;
  const headRotate = gaze.x * 3;
  const antennaTilt = gaze.x * 2;

  return (
    <section id="inicio" className={`relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:min-h-[92vh] lg:flex lg:items-center transition-colors ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'tech-grid-dark opacity-35' : 'tech-grid-pattern opacity-70'}`} />
        <div className={`absolute -top-32 -left-24 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-blue-600/15' : 'bg-blue-200/45'}`} />
        <div className={`absolute top-16 -right-28 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-red-600/10' : 'bg-red-100/60'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold ${isDark ? 'bg-red-950/40 border-red-800 text-red-200' : 'bg-red-50 border-red-200 text-red-800'}`}>
                <MapPin className="w-4 h-4" /> SENAI-DF • Distrito Federal
              </div>
              <div className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-bold ${isDark ? 'bg-emerald-950/50 border-emerald-800 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'}`}>
                <Leaf className="w-4 h-4" /> FIRST® CANOPY™ • 2026–2027
              </div>
            </div>

            <h1 className="font-black tracking-tight leading-[0.98] mb-6">
              <span className={`block text-4xl sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-950'}`}>ROBÓTICA NO</span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600">DISTRITO FEDERAL</span>
              <span className={`block text-4xl sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-950'}`}>DO LEGO® À ENGENHARIA.</span>
            </h1>

            <p className={`text-base sm:text-xl max-w-2xl leading-relaxed mb-7 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Conheça FLL, FTC e FRC com foco no ecossistema do SESI/SENAI-DF — uma jornada de robótica, programação, engenharia, inovação e trabalho em equipe para estudantes do Distrito Federal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <a href="#programas" className="inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">Explorar FLL, FTC e FRC <ArrowRight className="w-4 h-4" /></a>
            </div>

            <button type="button" onClick={onOpenParticipation} className={`text-sm font-semibold underline underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${isDark ? 'text-red-300 hover:text-red-200' : 'text-red-700 hover:text-red-800'}`}>Tenho interesse em participar no DF →</button>

            <p className="mt-7 text-xs max-w-2xl leading-relaxed text-slate-500">
              Projeto educacional voltado ao contexto do SENAI-DF. Inscrições, regulamentos, equipes e disponibilidade devem ser confirmados nos canais oficiais do Sistema Fibra e da FIRST®.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div
              onPointerMove={handleRobotPointerMove}
              onPointerLeave={resetRobotGaze}
              className={`relative min-h-[430px] sm:min-h-[500px] overflow-hidden rounded-[2rem] border shadow-xl select-none ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-gradient-to-br from-white via-blue-50/70 to-slate-50 border-slate-200'}`}
              aria-label="Mascote robô interativo cujas pupilas acompanham o ponteiro"
            >
              <div className="absolute inset-0 tech-grid-pattern opacity-35 pointer-events-none" />
              <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 -left-14 h-44 w-44 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

              <div className="absolute left-5 top-5 z-10">
                <p className={`text-[11px] font-black uppercase tracking-[0.18em] ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>SENAI-DF • ROBÓTICA</p>
                <p className={`mt-1 text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Mova o mouse pela área 👀</p>
              </div>

              <div className={`absolute right-5 top-20 z-10 rounded-2xl border px-4 py-3 text-sm font-black shadow-sm ${isDark ? 'bg-slate-950/80 border-blue-500/30 text-blue-200' : 'bg-white/90 border-blue-200 text-blue-700'}`}>
                Siga o mouse!
                <span className="absolute -left-2 bottom-3 h-4 w-4 rotate-45 border-l border-b border-blue-200 bg-inherit" />
              </div>

              <svg viewBox="0 0 500 520" className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-full max-w-[470px]" role="img" aria-label="Robô mascote azul e branco">
                <defs>
                  <linearGradient id="robotBody" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#dbeafe" />
                  </linearGradient>
                  <linearGradient id="robotBlue" x1="0" x2="1">
                    <stop offset="0%" stopColor="#1d4ed8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <radialGradient id="eyeBlue">
                    <stop offset="0%" stopColor="#67e8f9" />
                    <stop offset="55%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </radialGradient>
                  <filter id="robotShadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.22" />
                  </filter>
                  <clipPath id="leftEyeClip"><circle cx="215" cy="219" r="22" /></clipPath>
                  <clipPath id="rightEyeClip"><circle cx="285" cy="219" r="22" /></clipPath>
                </defs>

                <ellipse cx="250" cy="493" rx="130" ry="17" fill={isDark ? '#020617' : '#cbd5e1'} opacity="0.35" />

                <g transform={`translate(${-gaze.x * 2} ${gaze.y * 1.5})`} style={{ transition: 'transform 100ms ease-out' }}>
                  <rect x="171" y="340" width="158" height="132" rx="52" fill="url(#robotBody)" stroke="#94a3b8" strokeWidth="4" filter="url(#robotShadow)" />
                  <path d="M190 370 Q250 338 310 370 L300 438 Q250 463 200 438 Z" fill="url(#robotBlue)" opacity="0.95" />
                  <rect x="213" y="375" width="74" height="48" rx="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
                  <image href="/firstlogo.jpg" x="221" y="383" width="58" height="32" preserveAspectRatio="xMidYMid meet" />
                  <rect x="222" y="432" width="56" height="18" rx="7" fill="#0f172a" opacity="0.85" />
                  <text x="250" y="445" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff">SENAI-DF</text>

                  <g transform="rotate(18 166 384)">
                    <rect x="122" y="344" width="72" height="42" rx="20" fill="url(#robotBody)" stroke="#94a3b8" strokeWidth="4" />
                    <circle cx="124" cy="365" r="17" fill="#1d4ed8" />
                    <rect x="91" y="353" width="38" height="23" rx="11" fill="#0f172a" />
                  </g>
                  <g transform="rotate(-26 334 385)">
                    <rect x="306" y="344" width="74" height="42" rx="20" fill="url(#robotBody)" stroke="#94a3b8" strokeWidth="4" />
                    <circle cx="378" cy="365" r="17" fill="#1d4ed8" />
                    <rect x="372" y="350" width="28" height="28" rx="13" fill="#0f172a" />
                  </g>
                </g>

                <g transform={`translate(${headX} ${headY}) rotate(${headRotate} 250 235)`} style={{ transition: 'transform 100ms ease-out' }}>
                  <rect x="151" y="135" width="198" height="177" rx="76" fill="url(#robotBody)" stroke="#94a3b8" strokeWidth="5" filter="url(#robotShadow)" />
                  <rect x="168" y="160" width="164" height="124" rx="52" fill="#07111f" stroke="#1e3a8a" strokeWidth="4" />

                  <rect x="129" y="190" width="29" height="70" rx="14" fill="#2563eb" stroke="#1e3a8a" strokeWidth="4" />
                  <rect x="342" y="190" width="29" height="70" rx="14" fill="#2563eb" stroke="#1e3a8a" strokeWidth="4" />

                  <g transform={`rotate(${antennaTilt} 250 135)`}>
                    <line x1="250" y1="135" x2="250" y2="100" stroke="#1e3a8a" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="250" cy="88" r="15" fill="#2563eb" stroke="#1e3a8a" strokeWidth="4" />
                    <circle cx="245" cy="83" r="4" fill="#bfdbfe" />
                  </g>

                  {/* Olhos fixos */}
                  <circle cx="215" cy="219" r="27" fill="url(#eyeBlue)" stroke="#dbeafe" strokeWidth="5" />
                  <circle cx="285" cy="219" r="27" fill="url(#eyeBlue)" stroke="#dbeafe" strokeWidth="5" />

                  {/* Pupila esquerda: acompanha o cursor sem deslocar o olho */}
                  <g clipPath="url(#leftEyeClip)">
                    <g transform={`translate(${pupilX} ${pupilY})`} style={{ transition: 'transform 55ms linear' }}>
                      <circle cx="215" cy="219" r="12" fill="#06101f" />
                      <circle cx={210 + highlightX} cy={213 + highlightY} r="4.8" fill="#fff" />
                      <circle cx={219 + highlightX * 0.5} cy={222 + highlightY * 0.5} r="2.3" fill="#bae6fd" opacity="0.9" />
                    </g>
                  </g>

                  {/* Pupila direita */}
                  <g clipPath="url(#rightEyeClip)">
                    <g transform={`translate(${pupilX} ${pupilY})`} style={{ transition: 'transform 55ms linear' }}>
                      <circle cx="285" cy="219" r="12" fill="#06101f" />
                      <circle cx={280 + highlightX} cy={213 + highlightY} r="4.8" fill="#fff" />
                      <circle cx={289 + highlightX * 0.5} cy={222 + highlightY * 0.5} r="2.3" fill="#bae6fd" opacity="0.9" />
                    </g>
                  </g>

                  {/* Sobrancelhas ajudam a leitura do olhar vertical */}
                  <path d="M191 187 Q215 177 237 188" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" opacity={0.55 + Math.max(0, -gaze.y) * 0.35} />
                  <path d="M263 188 Q285 177 309 187" fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" opacity={0.55 + Math.max(0, -gaze.y) * 0.35} />

                  <path d="M224 255 Q250 274 276 255" fill="none" stroke="#bfdbfe" strokeWidth="7" strokeLinecap="round" />
                </g>

                <g opacity="0.85">
                  <circle cx="87" cy="145" r="5" fill="#2563eb" />
                  <circle cx="413" cy="315" r="5" fill="#ef4444" />
                  <path d="M70 170 H108 M89 151 V189" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
                  <path d="M398 105 l8 8 -8 8 -8-8z" fill="none" stroke="#60a5fa" strokeWidth="3" />
                </g>
              </svg>

              <div className={`absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold backdrop-blur-sm ${isDark ? 'bg-slate-950/70 border-slate-700 text-slate-300' : 'bg-white/80 border-slate-200 text-slate-600'}`}>
                👋 Olá! Eu sou o mascote da robótica.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};