import React, { useMemo, useRef, useState } from 'react';
import { Compass, MousePointer2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Journey: React.FC = () => {
  const { isDark } = useTheme();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  const gaze = useMemo(() => {
    const limitX = 9;
    const limitY = 7;
    return {
      eyeX: Math.max(-limitX, Math.min(limitX, pointer.x * limitX)),
      eyeY: Math.max(-limitY, Math.min(limitY, pointer.y * limitY)),
      headX: Math.max(-6, Math.min(6, pointer.x * 6)),
      headY: Math.max(-4, Math.min(4, pointer.y * 4)),
    };
  }, [pointer]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    setPointer({ x, y, active: true });
  };

  const resetPointer = () => setPointer({ x: 0, y: 0, active: false });

  return (
    <section
      id="jornada"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className={`relative overflow-hidden border-t py-16 sm:py-24 transition-colors ${isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className={`absolute -right-24 top-10 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-blue-600/15' : 'bg-blue-200/50'}`} />
        <div className={`absolute -left-24 bottom-0 h-72 w-72 rounded-full blur-3xl ${isDark ? 'bg-orange-500/10' : 'bg-orange-100/70'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold mb-4 ${isDark ? 'bg-slate-900 border-slate-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
            <Compass className="w-3.5 h-3.5" /> JORNADA FIRST® NO CONTEXTO SENAI-DF
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">CONHEÇA O NOSSO MASCOTE</h2>
          <p className={isDark ? 'text-slate-300' : 'text-slate-600'}>
            Passe o mouse por esta seção. O robô acompanha o movimento e deixa a experiência de robótica mais viva e divertida.
          </p>
        </div>

        <div className={`relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border px-5 py-8 sm:px-10 sm:py-10 ${isDark ? 'bg-slate-900/80 border-slate-800 shadow-2xl shadow-blue-950/20' : 'bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/60'}`}>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 ${isDark ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                <Sparkles className="w-3.5 h-3.5" /> Mascote interativo
              </div>
              <h3 className="text-2xl sm:text-4xl font-black mb-4">Ei! Eu estou te olhando 👀</h3>
              <p className={`text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Mova o cursor para qualquer lado. Meus olhos e minha cabeça acompanham você em tempo real.
              </p>
              <div className={`mt-6 inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold ${isDark ? 'bg-slate-950 border-slate-800 text-blue-300' : 'bg-white border-slate-200 text-blue-700'}`}>
                <MousePointer2 className="w-4 h-4" /> Siga o mouse
              </div>
            </div>

            <div className="relative flex min-h-[330px] items-center justify-center sm:min-h-[390px]" aria-label="Robô mascote interativo">
              <div className={`absolute bottom-6 h-10 w-64 rounded-[50%] blur-xl ${isDark ? 'bg-black/40' : 'bg-slate-300/60'}`} aria-hidden="true" />

              <div
                className="relative w-[250px] sm:w-[300px] transition-transform duration-200 ease-out"
                style={{ transform: `translate3d(${gaze.headX * 0.5}px, ${gaze.headY * 0.35}px, 0)` }}
              >
                <div className="absolute left-1/2 top-[-38px] -translate-x-1/2" aria-hidden="true">
                  <div className="mx-auto h-8 w-2 rounded-full bg-blue-700" />
                  <div className="mx-auto -mt-1 h-7 w-7 rounded-full border-4 border-white bg-blue-500 shadow-lg shadow-blue-500/40" />
                </div>

                <div
                  className={`relative mx-auto h-[185px] w-[250px] sm:h-[205px] sm:w-[285px] rounded-[42%] border-[7px] p-4 shadow-2xl transition-transform duration-200 ease-out ${isDark ? 'border-slate-300 bg-slate-100' : 'border-white bg-slate-100'}`}
                  style={{ transform: `rotate(${gaze.headX * 0.45}deg) translateY(${gaze.headY * 0.3}px)` }}
                >
                  <div className="absolute -left-5 top-14 h-16 w-7 rounded-l-2xl border-4 border-blue-900 bg-blue-600" />
                  <div className="absolute -right-5 top-14 h-16 w-7 rounded-r-2xl border-4 border-blue-900 bg-blue-600" />

                  <div className="relative h-full overflow-hidden rounded-[38%] bg-gradient-to-b from-slate-900 to-black shadow-inner">
                    <div className="absolute inset-x-5 top-4 h-10 rounded-full bg-blue-500/10 blur-xl" />

                    <div className="absolute left-[17%] top-[28%] h-[58px] w-[58px] sm:h-[66px] sm:w-[66px] rounded-full border-4 border-blue-400 bg-white shadow-[0_0_28px_rgba(59,130,246,0.55)]">
                      <div
                        className="absolute left-1/2 top-1/2 h-7 w-7 sm:h-8 sm:w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 transition-transform duration-75"
                        style={{ transform: `translate(calc(-50% + ${gaze.eyeX}px), calc(-50% + ${gaze.eyeY}px))` }}
                      >
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
                        <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="absolute right-[17%] top-[28%] h-[58px] w-[58px] sm:h-[66px] sm:w-[66px] rounded-full border-4 border-blue-400 bg-white shadow-[0_0_28px_rgba(59,130,246,0.55)]">
                      <div
                        className="absolute left-1/2 top-1/2 h-7 w-7 sm:h-8 sm:w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 transition-transform duration-75"
                        style={{ transform: `translate(calc(-50% + ${gaze.eyeX}px), calc(-50% + ${gaze.eyeY}px))` }}
                      >
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
                        <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-white" />
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-[67%] h-7 w-16 -translate-x-1/2 rounded-b-full border-b-4 border-blue-200" />
                  </div>
                </div>

                <div className="relative mx-auto -mt-2 h-7 w-14 rounded-b-2xl bg-slate-400" />
                <div className={`relative mx-auto h-[155px] w-[180px] sm:w-[205px] rounded-[38%_38%_28%_28%] border-[6px] p-5 shadow-xl ${isDark ? 'border-slate-300 bg-slate-100' : 'border-white bg-slate-100'}`}>
                  <div className="absolute -left-12 top-8 h-20 w-12 rotate-[18deg] rounded-full border-4 border-slate-300 bg-white" />
                  <div className="absolute -right-12 top-8 h-20 w-12 -rotate-[18deg] rounded-full border-4 border-slate-300 bg-white" />
                  <div className="absolute inset-x-6 top-5 flex h-16 items-center justify-center rounded-2xl bg-blue-700 shadow-inner">
                    <img src="/firstlogo.jpg" alt="FIRST" className="h-10 w-20 rounded bg-white object-contain p-1" />
                  </div>
                  <div className="absolute bottom-5 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-300" />
                </div>
              </div>

              <div className={`pointer-events-none absolute right-2 top-2 hidden sm:block rounded-2xl border px-3 py-2 text-xs font-black transition-opacity ${pointer.active ? 'opacity-100' : 'opacity-70'} ${isDark ? 'bg-slate-950/80 border-blue-500/30 text-blue-300' : 'bg-white/90 border-blue-200 text-blue-700'}`}>
                Estou seguindo você!
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs mt-5 text-slate-500">
          Em telas sem mouse, o mascote permanece centralizado.
        </p>
      </div>
    </section>
  );
};
