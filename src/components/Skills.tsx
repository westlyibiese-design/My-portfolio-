import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Layout, Server, Smartphone, Gamepad2, Database, BookOpen, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-pink-400" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-amber-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      default: return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase">Expertise</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills & Stack</h3>
        <p className="text-gray-300 text-sm sm:text-base">
          A robust toolkit spanning frontend web, backend systems, mobile apps, and game engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                {getIcon(cat.icon)}
              </div>
              <h4 className="text-lg font-semibold text-white">{cat.title}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};