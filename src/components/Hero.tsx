import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Github, Mail, Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>{PERSONAL_INFO.location} • Full-Stack & Game Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Building Digital Experiences. Creating Interactive Worlds.{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Telling Stories.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
            >
              <Github className="w-4 h-4 text-violet-400" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Portrait / Terminal Visual Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-1 border border-white/15 shadow-2xl backdrop-blur-xl">
            <div className="bg-[#0b0f19] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-gray-400 font-mono">westly@dev-env</div>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>skills.config</span>
                </div>
                <p className="text-gray-400">
                  const dev = &#123;<br />
                  &nbsp;&nbsp;name: "{PERSONAL_INFO.name}",<br />
                  &nbsp;&nbsp;focus: ["Full-Stack", "Games", "Writing"],<br />
                  &nbsp;&nbsp;location: "{PERSONAL_INFO.location}"<br />
                  &#125;;
                </p>
                <div className="pt-2 border-t border-white/10 text-violet-400 flex items-center justify-between">
                  <span>Status: Ready to build</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};