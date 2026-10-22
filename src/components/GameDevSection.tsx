import React from 'react';
import { Gamepad2, Github, Sparkles, Compass } from 'lucide-react';

export const GameDevSection: React.FC = () => {
  return (
    <section id="gamedev" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-[#0b0f19] to-violet-950/30 p-8 sm:p-12 lg:p-16">
        {/* Cinematic glow background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Gamepad2 className="w-4 h-4" />
              <span>Game Development Journey</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Lagos Drift: 3D Open-World Driving Experience
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Inspired by the vibrant energy of nighttime Lagos, Nigeria, <span className="text-cyan-400 font-semibold">Lagos Drift</span> is an ambitious 3D game project bringing authentic Nigerian roads, vehicles, interactive car doors, and urban environments to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-cyan-400 font-semibold text-sm">Technology Stack</div>
                <div className="text-gray-300 text-xs">Kotlin, libGDX 1.12.1, Android</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-violet-400 font-semibold text-sm">Design Focus</div>
                <div className="text-gray-300 text-xs">Open-World Physics & Vehicle Interiors</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/westlyibiese-design/Lagos-Drift"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
                alt="Lagos Drift Game Preview"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <div className="text-xs text-cyan-400 font-mono">STATUS: ACTIVE DEVELOPMENT</div>
                  <div className="text-white font-bold text-lg">Exploring Nighttime Lagos Streets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};